# JSON og API for eraser-archimate-visuals

Kontrollert mot lokal pakke 0.1.0 og @eraserlabs/diagrams 0.1.0, 2026-09-13. Les faktiske skjemaer ved nyere versjoner.

## Felter

- Rot: entities og connections.
- Egne elementer: tag, id, x, y. Bruk name for synlig tekst; gi meningsfulle navn selv om skjemaet tillater tomt navn. width/height er valgfrie.
- Egne relasjoner: tag, from, to. Bruk label, ikke name, for synlig relasjonstekst. id er nyttig ved redigering.
- Egen styling: bgColor er fyll, color er strek, textColor er elementtekst. Bruk CSS-farger, for eksempel #b9e7ff. fontSize gjelder elementer; lineWidth gjelder elementer og relasjoner. lineWidthPx er internt avledet og skal ikke forfattes manuelt.
- AmAccess.accessType: read, write, readWrite eller unspecified. Med from som aktivt element og to som data peker read-pilen mot from, write-pilen mot to. Standardverdien er unspecified, uten pilspisser.
- Dette er visuelle valg. At taggen og verdiene er gyldige sier ikke at kilde-/måltypen er lovlig i ArchiMate.

Ikke overfør egenskaper ukritisk fra andre Eraser-biblioteker. Denne utgaven eksponerer eksempelvis ikke egne fromPort/toPort/points-felt på Am-relasjonene. Undersøk skjemaet før du lover manuelle connector-punkter. showSymbol, fillColor og styleMode fra det tidligere 3.2-utkastet finnes ikke her.

ArchiMate 4-navn i denne pakken inkluderer AmRole, AmProcess og AmService. Ikke bruk AmBusinessRole, AmBusinessProcess eller AmApplicationService. Relasjonsnavn er eksempelvis AmServing, ikke AmServingRelationship. Erasers Node og tilleggets AmNode er ulike tagger.

## Minimalt eksempel

```json
{
  "entities": [
    {"tag":"AmApplicationComponent","id":"api","name":"Kunde-API","x":40,"y":40,"bgColor":"#b9e7ff"},
    {"tag":"AmService","id":"service","name":"Kundetjeneste","x":320,"y":40,"bgColor":"#b9e7ff"}
  ],
  "connections": [
    {"tag":"AmRealization","id":"realizes","from":"api","to":"service","label":"realiserer"}
  ]
}
```

## Sammen med stock-komponenter

Importer library og normalizers fra src/index.js i bibliotekets rot, eller fra pakken når den er installert. library er allerede sammenslått med stockLibrary. Ikke slå den sammen en gang til.

Stock-tagger har egne felter. Et stock-Shape bruker for eksempel texts: [{text: "Vanlig boks"}], mens AmApplicationComponent bruker name. Se examples/mixed.json og det aktuelle stock-skjemaet.

## Rendering

Fra bibliotekets rot:

```powershell
npm.cmd run render -- examples/mitt-diagram.json mitt-diagram
```

Dette skriver output/mitt-diagram.html, .png og .json. Bruk et enkelt output-navn uten mappeseparatorer. Det andre argumentet er et filnavnprefiks, ikke en full utsti.

Med Node API:

```js
import { createRenderer } from '@eraserlabs/diagrams';
import { library, normalizers } from './src/index.js';
const renderer = await createRenderer({ library, normalizers, chromiumPath });
try {
  const result = await renderer.render({ ...document, outputs: { html: true, png: true } });
  if (!result.ok) throw new Error(JSON.stringify(result.errors));
  // Lagre result.html og result.png.
} finally {
  await renderer.close();
}
```

chromiumPath skal være den faktiske nettleserbanen. For bare ikoner: getIcon('ApplicationComponent') returnerer et komplett SVG, eller undefined ved ukjent navn. icons/ApplicationComponent.svg kan også brukes direkte. Dette registrerer ingen egen ikonleverandør i stock-Eraser.
