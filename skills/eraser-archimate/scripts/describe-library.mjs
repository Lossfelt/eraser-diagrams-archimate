import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { readFile } from 'node:fs/promises';

const [rootArg, ...tags] = process.argv.slice(2);
if (!rootArg) throw new Error('Usage: describe-library.mjs <package-root> [tag ...]');
const root = resolve(rootArg);
const pkg = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
if (pkg.name !== 'eraser-archimate-visuals') throw new Error('Expected eraser-archimate-visuals package root');
const { library, ELEMENTS, RELATIONSHIPS } = await import(pathToFileURL(resolve(root, 'src/index.js')).href);
if (!tags.length) {
  console.log(JSON.stringify({version: pkg.version, elements: ELEMENTS.map(e => `Am${e.name}`), relationships: RELATIONSHIPS.map(e => `Am${e.name}`)}, null, 2));
} else {
  for (const tag of tags) if (!Object.hasOwn(library.schemas, tag)) throw new Error(`Unknown tag: ${tag}`);
  console.log(JSON.stringify(Object.fromEntries(tags.map(tag => [tag, library.schemas[tag]])), null, 2));
}
