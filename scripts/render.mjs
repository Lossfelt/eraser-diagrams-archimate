import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createRenderer } from "@eraserlabs/diagrams";
import { archimateLibrary, normalizers } from "../src/index.js";
const input = JSON.parse(
    await readFile(process.argv[2] || "examples/mixed.json", "utf8"),
  ),
  base = process.argv[3] || "mixed";
const renderer = await createRenderer({
  chromiumPath:
    process.env.CHROME_PATH ||
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
  library: archimateLibrary,
  normalizers,
});
try {
  const result = await renderer.render({
    ...input,
    outputs: { html: true, png: true, json: true },
  });
  if (!result.ok) throw new Error(JSON.stringify(result.errors, null, 2));
  await mkdir("output", { recursive: true });
  await Promise.all([
    writeFile(`output/${base}.html`, result.html),
    writeFile(`output/${base}.png`, result.png),
    writeFile(`output/${base}.json`, JSON.stringify(result.json, null, 2)),
  ]);
  console.log(`Wrote output/${base}.{html,png,json}`);
} finally {
  await renderer.close();
}
