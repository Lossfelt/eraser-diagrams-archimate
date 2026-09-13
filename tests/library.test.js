import test from "node:test";
import assert from "node:assert/strict";
import { prepareLibrary } from "@eraserlabs/diagrams";
import { archimateLibrary, getIcon, normalizers } from "../src/index.js";

test("prepareLibrary accepts all stock and ArchiMate templates with schemas", () => {
  const prepared = prepareLibrary(archimateLibrary);
  assert.equal(prepared.manifest.length, archimateLibrary.manifest.length);
  for (const tag of ["Shape", "AmBusinessActor", "AmAndJunction", "AmAccess"]) {
    assert.ok(prepared.manifest.includes(tag));
    assert.ok(prepared.schemas[tag]);
  }
});

test("custom normalizers provide typed render bindings", () => {
  const entity = { tag: "AmBusinessActor" };
  normalizers.AmBusinessActor(entity);
  assert.deepEqual(
    { name: entity.name, bgColor: entity.bgColor, lineWidth: entity.lineWidth },
    { name: "", bgColor: "#ffffff", lineWidth: 1.5 },
  );
  const access = { tag: "AmAccess", lineWidth: 2 };
  normalizers.AmAccess(access);
  assert.equal(access.lineWidthPx, 2);
  assert.equal(access.accessType, "unspecified");
});

test("markers and icon SVG preserve ArchiMate-specific rendering", () => {
  const assignment = archimateLibrary.templates.find(
    ({ name }) => name === "AmAssignment",
  );
  const access = archimateLibrary.templates.find(
    ({ name }) => name === "AmAccess",
  );
  assert.match(assignment.html, /<circle[^>]+fill="context-stroke"/);
  assert.match(access.html, /\{\{accessType\}\}/);
  assert.match(access.html, /id="am-AmAccess-read-start"/);
  assert.match(access.html, /id="am-AmAccess-write-end"/);
  assert.match(getIcon("BusinessActor"), /fill="none" stroke="currentColor"/);
  assert.equal(getIcon("DoesNotExist"), undefined);
});

// Public resolver integration: visual presets deliberately permit cross-domain links.
test("resolves mixed stock and ArchiMate input without semantic restrictions", async () => {
  const { createResolver } = await import("@eraserlabs/resolve");
  const resolver = await createResolver({
    library: archimateLibrary,
    normalizers,
  });
  const result = await resolver.resolve({
    entities: [
      { tag: "Shape", id: "stock", name: "Stock", x: 0, y: 0 },
      {
        tag: "AmGoal",
        id: "goal",
        name: "Goal",
        x: 250,
        y: 0,
        bgColor: "#ffeedd",
      },
    ],
    connections: [
      { tag: "AmAccess", from: "stock", to: "goal", accessType: "write" },
    ],
  });
  assert.equal(result.ok, true, JSON.stringify(result.errors));
  assert.equal(
    result.entities.find((e) => e.id === "goal").props.bgColor,
    "#ffeedd",
  );
  assert.equal(result.connections[0].props.accessType, "write");
});

