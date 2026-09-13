// Compact SVG geometry drawn for this package. See docs/NOTATION.md for review limits.
const glyph = {
  actor:
    '<circle cx="12" cy="4" r="2.5"/><path d="M12 7v7M6 10h12M12 14l-5 7M12 14l5 7"/>',
  collaboration:
    '<circle cx="8" cy="12" r="6"/><circle cx="16" cy="12" r="6"/>',
  event: '<path d="M3 6h12a6 6 0 0 1 0 12H3q6-6 0-12Z"/>',
  function: '<path d="M3 21V8l9-6 9 6v13l-9-6Z"/>',
  process: '<path d="M2 7h12V3l8 9-8 9v-4H2Z"/>',
  role: '<path d="M18 5H5C0 5 0 19 5 19h13"/><ellipse cx="18" cy="12" rx="4" ry="7"/>',
  service: '<rect x="2" y="6" width="20" height="12" rx="6"/>',
  path: '<path d="M3 6h18M3 12h18M3 18h18M5 3v18M19 3v18"/>',
  grouping:
    '<path d="M3 8V3h6M15 3h6v5M21 16v5h-6M9 21H3v-5" stroke-dasharray="2 2"/>',
  location:
    '<path d="M12 22s8-8 8-14a8 8 0 0 0-16 0c0 6 8 14 8 14Z"/><circle cx="12" cy="8" r="3"/>',
  interface: '<circle cx="14" cy="12" r="7"/><path d="M1 12h6"/>',
  object: '<rect x="3" y="3" width="18" height="18"/><path d="M3 8h18"/>',
  product: '<rect x="3" y="4" width="18" height="16"/><path d="M3 9h9V4"/>',
  component:
    '<path d="M7 3h14v18H7v-4M7 13v-3M7 6V3"/><rect x="2" y="6" width="9" height="4"/><rect x="2" y="13" width="9" height="4"/>',
  node: '<path d="M3 7h14v14H3ZM3 7l4-4h14v14l-4 4M17 7l4-4"/>',
  device:
    '<rect x="3" y="3" width="18" height="14" rx="1"/><path d="M8 21h8M12 17v4"/>',
  software: '<circle cx="9" cy="12" r="7"/><circle cx="15" cy="12" r="7"/>',
  network:
    '<circle cx="12" cy="12" r="5"/><path d="M12 1v6M12 17v6M1 12h6M17 12h6"/>',
  artifact: '<path d="M4 2h11l5 5v15H4ZM15 2v6h5"/>',
  equipment:
    '<path d="M3 7h15v14H3ZM3 7l3-4h15v14l-3 4"/><path d="M7 11v6M11 11v6M15 11v6"/>',
  facility:
    '<path d="M2 21V8l7 4V8l7 4V3h5v18Z"/><path d="M6 16h2M11 16h2M16 16h2"/>',
  distribution:
    '<path d="M3 6h18M3 18h18M7 6v12M17 6v12"/><circle cx="7" cy="6" r="2"/><circle cx="17" cy="18" r="2"/>',
  material: '<path d="M3 7l9-4 9 4v10l-9 4-9-4ZM3 7l9 4 9-4M12 11v10"/>',
  resource: '<path d="M2 6h17v12H2ZM19 10h3v4h-3M6 9v6M10 9v6M14 9v6"/>',
  capability:
    '<path d="M2 15h6v6H2ZM8 9h6v6H8ZM8 15h6v6H8ZM14 3h6v6h-6ZM14 9h6v6h-6ZM14 15h6v6h-6Z"/>',
  valueStream: '<path d="M2 6h16l4 6-4 6H2l4-6ZM9 6l4 6-4 6"/>',
  course: '<path d="M3 20V9h12V3l7 9-7 8v-6H8v6Z"/>',
  driver:
    '<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M6 6l12 12M6 18 18 6"/>',
  assessment: '<circle cx="10" cy="10" r="7"/><path d="m15 15 7 7"/>',
  goal: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  outcome: '<circle cx="12" cy="12" r="9"/><path d="m6 12 4 4 8-9"/>',
  principle:
    '<rect x="3" y="2" width="18" height="20" rx="2"/><path d="M12 5v10M12 18v1"/>',
  requirement: '<path d="M6 5h16l-4 14H2Z"/>',
  meaning: '<path d="M3 3h18v13H9l-5 5v-5H3Z"/>',
  value: '<path d="m12 2 3 6 7 1-5 5 1 8-6-4-6 4 1-8-5-5 7-1Z"/>',
  workPackage:
    '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18M7 2v5M17 2v5"/>',
  deliverable: '<path d="M4 2h11l5 5v15H4ZM15 2v6h5M7 15l3 3 6-6"/>',
  plateau: '<path d="M2 17h5V9h10v8h5M7 5h10M9 2h6"/>',
};

const groups = {
  common: [
    ["Collaboration", "collaboration"],
    ["Event", "event", "rounded"],
    ["Function", "function", "rounded"],
    ["Process", "process", "rounded"],
    ["Role", "role"],
    ["Service", "service", "service"],
    ["Path", "path"],
    ["Grouping", "grouping"],
    ["Location", "location"],
  ],
  business: [
    ["BusinessActor", "actor"],
    ["BusinessInterface", "interface"],
    ["BusinessObject", "object"],
    ["Product", "product"],
  ],
  application: [
    ["ApplicationComponent", "component"],
    ["ApplicationInterface", "interface"],
    ["DataObject", "object"],
  ],
  technology: [
    ["Node", "node"],
    ["Device", "device"],
    ["SystemSoftware", "software"],
    ["TechnologyInterface", "interface"],
    ["CommunicationNetwork", "network"],
    ["Artifact", "artifact"],
  ],
  physical: [
    ["Equipment", "equipment"],
    ["Facility", "facility"],
    ["DistributionNetwork", "distribution"],
    ["Material", "material"],
  ],
  strategy: [
    ["Resource", "resource"],
    ["Capability", "capability", "rounded"],
    ["ValueStream", "valueStream", "rounded"],
    ["CourseOfAction", "course", "rounded"],
  ],
  motivation: [
    ["Stakeholder", "actor"],
    ["Driver", "driver"],
    ["Assessment", "assessment"],
    ["Goal", "goal"],
    ["Outcome", "outcome"],
    ["Principle", "principle"],
    ["Requirement", "requirement"],
    ["Meaning", "meaning"],
    ["Value", "value"],
  ],
  implementation: [
    ["WorkPackage", "workPackage", "rounded"],
    ["Deliverable", "deliverable"],
    ["Plateau", "plateau"],
  ],
};

export const ELEMENTS = Object.entries(groups).flatMap(([domain, items]) =>
  items.map(([name, key, shape = "rectangle"]) => ({
    name,
    domain,
    shape,
    symbol: glyph[key],
  })),
);
ELEMENTS.push(
  {
    name: "AndJunction",
    domain: "common",
    shape: "junction",
    symbol: '<circle cx="12" cy="12" r="7" fill="currentColor"/>',
  },
  {
    name: "OrJunction",
    domain: "common",
    shape: "junction",
    symbol: '<circle cx="12" cy="12" r="7"/>',
  },
);

export const RELATIONSHIPS = [
  { name: "Composition", line: "solid", startMarker: "filled-diamond" },
  { name: "Aggregation", line: "solid", startMarker: "open-diamond" },
  {
    name: "Assignment",
    line: "solid",
    startMarker: "filled-circle",
    endMarker: "filled-triangle",
  },
  { name: "Serving", line: "solid", endMarker: "open-arrow" },
  { name: "Realization", line: "dashed", endMarker: "open-triangle" },
  { name: "Access", line: "dotted", access: true },
  { name: "Flow", line: "dashed", endMarker: "filled-triangle" },
  { name: "Triggering", line: "solid", endMarker: "filled-triangle" },
  { name: "Specialization", line: "solid", endMarker: "open-triangle" },
  { name: "Influence", line: "dashed", endMarker: "open-arrow" },
  { name: "Association", line: "solid" },
];
