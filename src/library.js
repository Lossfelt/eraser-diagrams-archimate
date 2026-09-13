import { CssColor, connectionSchema, entitySchema } from "@eraserlabs/diagrams";
import { stockLibrary } from "@eraserlabs/diagrams/library";
import { stockNormalizers } from "@eraserlabs/diagrams/normalizers";
import { ELEMENTS, RELATIONSHIPS } from "./catalog.js";
import {
  BASE_CSS,
  makeElementTemplate,
  makeRelationshipTemplate,
} from "./templates.js";
const tag = (name) => `Am${name.replace(/[^A-Za-z0-9]/g, "")}`;
const elements = ELEMENTS.map((item) => ({ ...item, name: tag(item.name) }));
const relationships = RELATIONSHIPS.map((item) => ({
  ...item,
  name: tag(item.name),
}));
const content = { type: "string", "x-content": "inline-markdown" };
const elementProps = {
  name: content,
  color: CssColor,
  bgColor: CssColor,
  textColor: CssColor,
  fontSize: { type: "number", minimum: 1 },
  lineWidth: { type: "number", minimum: 0 },
};
const relationshipProps = {
  label: content,
  color: CssColor,
  lineWidth: { type: "number", minimum: 0 },
  lineWidthPx: { type: "number", minimum: 0 },
  accessType: {
    type: "string",
    enum: ["read", "write", "readWrite", "unspecified"],
  },
};
const schemas = Object.fromEntries([
  ...elements.map((x) => [
    x.name,
    entitySchema(x.name, elementProps, { required: ["x", "y"] }),
  ]),
  ...relationships.map((x) => [
    x.name,
    connectionSchema(x.name, relationshipProps),
  ]),
]);
export const archimateLibrary = {
  ...stockLibrary,
  manifest: [
    ...stockLibrary.manifest,
    ...elements.map((x) => x.name),
    ...relationships.map((x) => x.name),
  ],
  schemas: { ...stockLibrary.schemas, ...schemas },
  templates: [
    ...stockLibrary.templates,
    ...elements.map(makeElementTemplate),
    ...relationships.map(makeRelationshipTemplate),
  ],
  baseCss: `${stockLibrary.baseCss}\n${BASE_CSS}\n.am-element[data-shape=service] .am-element__symbol{top:10px;right:14px}.am-element[data-kind=AmAndJunction]{background:#242424}.am-element[data-kind=AmOrJunction]{background:#fff}`,
};
const normalizeElement = (e) => {
  e.name ??= "";
  e.color ??= "#545454";
  e.bgColor ??= "#ffffff";
  e.textColor ??= "#202020";
  e.fontSize ??= 14;
  e.lineWidth ??= 1.5;
};
const normalizeRelationship = (e) => {
  e.color ??= "#454545";
  e.lineWidthPx = typeof e.lineWidth === "number" ? e.lineWidth : 1.5;
  e.accessType ??= "unspecified";
};
export const normalizers = {
  ...stockNormalizers,
  ...Object.fromEntries(elements.map((x) => [x.name, normalizeElement])),
  ...Object.fromEntries(
    relationships.map((x) => [x.name, normalizeRelationship]),
  ),
};
export const library = archimateLibrary;
export function getIcon(name) {
  const item = ELEMENTS.find((x) => x.name === name || tag(x.name) === name);
  return item
    ? `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round">${item.symbol}</svg>`
    : undefined;
}
