import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { ELEMENTS, getIcon } from "../src/index.js";
import { exportIcons } from "../scripts/export-icons.mjs";

async function withTempDirectory(run) {
  const directory = await mkdtemp(join(tmpdir(), "archimate-icons-"));
  try {
    await run(directory);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

test("generation exports every catalog icon from the public getIcon API", async () => {
  await withTempDirectory(async (directory) => {
    await exportIcons({ outputDirectory: directory });

    const files = (await readdir(directory)).sort();
    const expectedFiles = ELEMENTS.map(({ name }) => `${name}.svg`).sort();
    assert.deepEqual(files, expectedFiles);
    for (const { name } of ELEMENTS) {
      assert.equal(
        await readFile(join(directory, `${name}.svg`), "utf8"),
        `${getIcon(name)}\n`,
      );
    }
  });
});

test("check reports missing, outdated, and extra SVG files without writing", async () => {
  await withTempDirectory(async (directory) => {
    await exportIcons({ outputDirectory: directory });
    await rm(join(directory, "Goal.svg"));
    await writeFile(join(directory, "BusinessActor.svg"), "outdated\n", "utf8");
    await writeFile(join(directory, "Unknown.svg"), "unknown\n", "utf8");

    assert.deepEqual(await exportIcons({ outputDirectory: directory, check: true }), {
      missing: ["Goal.svg"],
      outdated: ["BusinessActor.svg"],
      extra: ["Unknown.svg"],
    });
    assert.equal(await readFile(join(directory, "BusinessActor.svg"), "utf8"), "outdated\n");
  });
});

test("generation preserves unknown files", async () => {
  await withTempDirectory(async (directory) => {
    await writeFile(join(directory, "Unknown.svg"), "keep me\n", "utf8");
    await writeFile(join(directory, "notes.txt"), "keep me too\n", "utf8");

    await exportIcons({ outputDirectory: directory });

    assert.equal(await readFile(join(directory, "Unknown.svg"), "utf8"), "keep me\n");
    assert.equal(await readFile(join(directory, "notes.txt"), "utf8"), "keep me too\n");
  });
});
