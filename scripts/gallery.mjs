import { mkdir, writeFile } from "node:fs/promises";
import { createRenderer } from "@eraserlabs/diagrams";
import { ELEMENTS, RELATIONSHIPS } from "../src/catalog.js";
import { archimateLibrary, normalizers } from "../src/index.js";

const colors = {
  common: "#e9edf2",
  business: "#fff1ba",
  application: "#b9e7ff",
  technology: "#c9f0d2",
  physical: "#d6f0d3",
  strategy: "#f3d0ef",
  motivation: "#ead7f7",
  implementation: "#ffd4d4",
};
const entities = ELEMENTS.map((element, index) => ({
  tag: `Am${element.name}`,
  id: `e${index}`,
  x: 30 + (index % 5) * 225,
  y: 30 + Math.floor(index / 5) * 125,
  width: element.shape === "junction" ? 28 : 190,
  height: element.shape === "junction" ? 28 : 76,
  name: element.name.replace(/([a-z])([A-Z])/g, "$1 $2"),
  bgColor: colors[element.domain] || "#fff",
}));
const connections = [];
RELATIONSHIPS.forEach((relationship, index) => {
  const y = 1210 + index * 90;
  entities.push(
    {
      tag: "AmBusinessActor",
      id: `from${index}`,
      x: 120,
      y,
      width: 120,
      height: 58,
      name: "From",
    },
    {
      tag: "AmBusinessActor",
      id: `to${index}`,
      x: 620,
      y,
      width: 120,
      height: 58,
      name: "To",
    },
  );
  connections.push({
    tag: `Am${relationship.name}`,
    id: `c${index}`,
    from: `from${index}`,
    to: `to${index}`,
    label: relationship.name,
    ...(relationship.access ? { accessType: "readWrite" } : {}),
  });
});
const renderer = await createRenderer({
  chromiumPath:
    process.env.CHROME_PATH ||
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
  library: archimateLibrary,
  normalizers,
  deviceScaleFactor: 1,
});
try {
  const result = await renderer.render({
    entities,
    connections,
    outputs: { html: true, png: true, json: true },
  });
  if (!result.ok) throw new Error(JSON.stringify(result.errors, null, 2));
  await mkdir("output", { recursive: true });
  await Promise.all([
    writeFile("output/gallery.html", result.html),
    writeFile("output/gallery.png", result.png),
    writeFile("output/gallery.json", JSON.stringify(result.json, null, 2)),
  ]);
  console.log(
    `Rendered ${ELEMENTS.length} elements and ${RELATIONSHIPS.length} relationships`,
  );
} finally {
  await renderer.close();
}
