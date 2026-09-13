import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { ELEMENTS, getIcon } from "../src/index.js";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const defaultOutputDirectory = resolve(scriptDirectory, "../icons");

function expectedIcons() {
  return new Map(ELEMENTS.map(({ name }) => [`${name}.svg`, `${getIcon(name)}\n`]));
}

async function svgFileNames(directory) {
  try {
    return (await readdir(directory, { withFileTypes: true }))
      .filter((entry) => entry.isFile() && entry.name.endsWith(".svg"))
      .map((entry) => entry.name)
      .sort();
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

export async function exportIcons({
  outputDirectory = defaultOutputDirectory,
  check = false,
} = {}) {
  const expected = expectedIcons();
  const existingNames = await svgFileNames(outputDirectory);
  const existing = new Set(existingNames);
  const missing = [];
  const outdated = [];

  for (const [fileName, svg] of expected) {
    if (!existing.has(fileName)) {
      missing.push(fileName);
      continue;
    }
    if ((await readFile(join(outputDirectory, fileName), "utf8")) !== svg) {
      outdated.push(fileName);
    }
  }

  const extra = existingNames.filter((fileName) => !expected.has(fileName));
  const result = { missing, outdated, extra };
  if (check) return result;

  await mkdir(outputDirectory, { recursive: true });
  for (const [fileName, svg] of expected) {
    await writeFile(join(outputDirectory, fileName), svg, "utf8");
  }
  return result;
}

function formatProblems({ missing, outdated, extra }) {
  return [
    ...missing.map((name) => `missing: ${name}`),
    ...outdated.map((name) => `outdated: ${name}`),
    ...extra.map((name) => `extra: ${name}`),
  ];
}

async function main() {
  const args = process.argv.slice(2);
  if (args.some((arg) => arg !== "--check") || args.length > 1) {
    console.error("Usage: node scripts/export-icons.mjs [--check]");
    process.exitCode = 2;
    return;
  }

  const check = args[0] === "--check";
  const result = await exportIcons({ check });
  const problems = formatProblems(result);
  if (check && problems.length > 0) {
    console.error(["Icon export is out of date:", ...problems].join("\n"));
    process.exitCode = 1;
  }
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  await main();
}
