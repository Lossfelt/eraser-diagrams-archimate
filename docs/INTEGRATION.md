# Teknisk valg

Kontrollert 2026-09-12 mot publisert `@eraserlabs/diagrams@0.1.0`.

## Separat tillegg, ingen fork

Eraser eksporterer `stockLibrary` fra `@eraserlabs/diagrams/library` og `stockNormalizers` fra `@eraserlabs/diagrams/normalizers`. Tillegget setter sammen standardbiblioteket og egne templates/skjemaer. Dette krever ingen endringer i Erasers renderer eller router.

Et `library`-argument erstatter hele biblioteket. Derfor må standardbibliotekets manifest, schemas, templates, subTemplates, baseCss, palette og defaultConnectionTag bevares når tillegget legges til. Standardnormalizers videreføres for standardkomponentene. Egne små normalizers fyller inn visuelle standardverdier og Access-retning. Egne tagger får prefikset `Am`, slik at blant annet ArchiMate Node ikke kolliderer med Erasers Node.

Skjemaene beskriver hvilke visuelle egenskaper komponentene tar imot. De håndhever ikke ArchiMate-regler for hvilke typer som kan kobles sammen. Vanlig Eraser-validering av JSON, referanser og trygt innhold gjelder fortsatt.

## Kilder

- [Eraser CUSTOMIZATION.md, komponenter og custom libraries](https://github.com/eraserlabs/eraser-diagrams/blob/main/CUSTOMIZATION.md).
- Publisert pakke `@eraserlabs/diagrams@0.1.0`: `package.json` exports, `dist/library/index.js` og `dist/library/normalizers.js`.
- [ArchiMate 4 C260, Details og Additional Information](https://publications.opengroup.org/standards/archimate/c260): versjon og endringer fra 3.2. Full HTML-spesifikasjon krevde innlogging under undersøkelsen.

## Senere: lett editor

Steg 2 kan være en liten Svelte-app som flytter elementer og justerer connector-punkter i samme diagram-JSON. Før den bygges bør vi demonstrere at endringer kan rendres og lagres uten tap av brukerens layout. Dette tillegget bygger ingen editor og innfører ingen ny modellstandard.

