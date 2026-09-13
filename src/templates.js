const esc = (v) => String(v).replaceAll("&", "&amp;").replaceAll('"', "&quot;");
export const BASE_CSS = `.am-element{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;min-width:130px;min-height:68px;padding:15px 30px 12px 14px;box-sizing:border-box;border:var(--er-line-w,1.5px) solid var(--er-stroke,#545454);border-radius:2px;background:var(--er-bg,#fff);color:var(--er-text,#202020);font-family:var(--font-clean,sans-serif);font-size:var(--er-font-px,14px)}.am-element[data-shape=rounded]{border-radius:14px}.am-element[data-shape=service]{border-radius:999px}.am-element[data-shape=junction]{min-width:22px;min-height:22px;padding:0;border-radius:50%}.am-element[data-shape=junction] .am-element__name,.am-element[data-shape=junction] .am-element__symbol{display:none}.am-element__name{width:100%;text-align:center;overflow-wrap:break-word}.am-element__symbol{position:absolute;top:5px;right:6px;width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.35;stroke-linecap:round;stroke-linejoin:round}.am-rel__line{fill:none;stroke:var(--er-stroke,#454545);stroke-width:var(--er-line-w,1.5px)}.am-rel[data-line="dashed"] .am-rel__line{stroke-dasharray:8 6}.am-rel[data-line="dotted"] .am-rel__line{stroke-dasharray:2 5}.am-rel__label{position:relative;z-index:1;background:#fff;padding:1px 4px;color:#242424;font:12px var(--font-clean,sans-serif)}`;
export function makeElementTemplate(d) {
  const n = esc(d.name);
  return {
    name: d.name,
    html: `<template name="${n}"><div data-tpl="${n}" data-role="body" class="am-element" data-shape="${esc(d.shape || "rectangle")}" data-kind="${n}" style="--er-bg: {{bgColor}}; --er-stroke: {{color}}; --er-text: {{textColor}}; --er-font-px: {{fontSize}}px; --er-line-w: {{lineWidth}}px"><svg class="am-element__symbol" viewBox="0 0 24 24" aria-hidden="true">${d.symbol}</svg><div class="am-element__name" data-role="internal-text" data-part="name" data-text-max-lines="3">{{name}}</div></div></template>`,
    css: "",
  };
}
function marker(kind, id) {
  const s = {
    "filled-diamond": '<path d="M0 5L6 0L12 5L6 10Z" fill="context-stroke"/>',
    "open-diamond":
      '<path d="M0 5L6 0L12 5L6 10Z" fill="white" stroke="context-stroke"/>',
    "filled-triangle": '<path d="M0 0L10 5L0 10Z" fill="context-stroke"/>',
    "open-triangle":
      '<path d="M0 0L10 5L0 10Z" fill="white" stroke="context-stroke"/>',
    "filled-circle": '<circle cx="5" cy="5" r="4" fill="context-stroke"/>',
    "open-arrow":
      '<path d="M0 0L10 5L0 10" fill="none" stroke="context-stroke"/>',
  };
  return `<marker id="${id}" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" viewBox="0 0 12 10" refX="10" refY="5" orient="auto-start-reverse">${s[kind] || s["open-arrow"]}</marker>`;
}
export function makeRelationshipTemplate(d) {
  const access = d.access === true,
    sk = d.startMarker,
    ek = d.endMarker,
    sid = `am-${d.name}-start`,
    eid = `am-${d.name}-end`;
  const accessDefs = access
    ? [
        ["read", "start"],
        ["write", "end"],
        ["readWrite", "start"],
        ["readWrite", "end"],
      ]
        .map(([type, side]) =>
          marker("open-arrow", `am-${d.name}-${type}-${side}`),
        )
        .join("")
    : "";
  const start = access
    ? ` marker-start="url(#am-${d.name}-{{accessType}}-start)"`
    : sk
      ? ` marker-start="url(#${sid})"`
      : "";
  const end = access
    ? ` marker-end="url(#am-${d.name}-{{accessType}}-end)"`
    : ek
      ? ` marker-end="url(#${eid})"`
      : "";
  return {
    name: d.name,
    html: `<template name="${esc(d.name)}"><div data-tpl="${esc(d.name)}" data-role="body" class="am-rel" data-line="${esc(d.line || "solid")}" data-access="{{accessType}}" style="--er-stroke: {{color}}; --er-line-w: {{lineWidthPx}}px"><svg class="am-rel__svg" aria-hidden="true"><defs>${accessDefs}${sk ? marker(sk, sid) : ""}${ek ? marker(ek, eid) : ""}</defs><path data-role="anchor" class="am-rel__line" d="{{ }}"${start}${end}></path></svg><span data-role="external-text" data-text-grow-policy="balanced" class="am-rel__label" data-part="label" data-if="label">{{label}}</span></div></template>`,
    css: "",
  };
}
