# ArchiMate-symboler for Eraser Diagrams

Et separat visuelt tillegg til Eraser Diagrams. Bruk ArchiMate 4-navn, kompakte symboler og ferdige connector-stiler sammen med Erasers vanlige komponenter. Ingen fork eller ArchiMate-regelvalidator er nødvendig.

**Første visuelle utgave:** 42 elementtyper, to junction-symboler og 11 relasjonspresentasjoner. SVG-tegningene er egne forenklede varianter. Fullt grafisk samsvar med den offisielle standarden er ikke verifisert. Se [dekning og begrensninger](docs/NOTATION.md).

![Eksempel med ArchiMate- og standardkomponenter](docs/assets/mixed.png)

## Prøv lokalt

Krever Node.js 22.12 eller nyere og Chrome eller Chromium. CI bruker Node.js 24. Skriptene bruker vanlig Windows-sti til Chrome som standard. Pakken er foreløpig lokal og er ikke publisert på npm.

```powershell
npm.cmd ci --ignore-scripts --cache .npm-cache
npm.cmd test
npm.cmd run gallery
npm.cmd run render
```

Sett eventuelt `CHROME_PATH` til nettleserens kjørbare fil. De medfølgende skriptene lager HTML- og PNG-eksempler i `output/`.

På Linux/macOS brukes `npm` i stedet for `npm.cmd`. Se [DEVELOPMENT.md](DEVELOPMENT.md) for Chromium-oppsett og lokale kontroller.

Pakken kan installeres i et annet lokalt Node-prosjekt etter `npm pack --pack-destination output`. Bruk der `npm install /sti/til/eraser-archimate-visuals-0.1.0.tgz @eraserlabs/diagrams@0.1.0`, og importer fra `eraser-archimate-visuals` i stedet for `./src/index.js`.

## Bruk med Eraser

```js
import { createRenderer } from '@eraserlabs/diagrams';
import { library, normalizers } from './src/index.js';

const renderer = await createRenderer({
  library,
  normalizers,
  chromiumPath: process.env.CHROME_PATH,
});

try {
  const result = await renderer.render({
    entities: [
      { tag: 'AmApplicationComponent', id: 'api', name: 'API', x: 30, y: 30 },
      { tag: 'AmService', id: 'service', name: 'Kundetjeneste', x: 300, y: 30 },
    ],
    connections: [
      { tag: 'AmRealization', from: 'api', to: 'service' },
    ],
    outputs: { html: true, png: true },
  });
  if (!result.ok) throw new Error(JSON.stringify(result.errors));
  // Lagre result.html eller result.png.
} finally {
  await renderer.close();
}
```

`library` inneholder både Erasers standardbibliotek og tillegget. `normalizers` viderefører Erasers egne normalizers og setter enkle visuelle standardverdier for tillegget. Alle nye tagger begynner med `Am`, slik at `AmNode` og Erasers eksisterende `Node` kan eksistere samtidig.

## Bare ikonene

SVG-filene i [icons/](icons/) kan brukes separat. Du kan også hente SVG som tekst:

```js
import { getIcon } from './src/index.js';
const svg = getIcon('ApplicationComponent');
```

Dette returnerer et komplett SVG-symbol. `getIcon` registrerer ikke automatisk en ny ikonleverandør i Eraser. Ferdige Eraser-komponenter får symbolene via biblioteket over.

## Videre arbeid

- [Avklaringer](docs/CLARIFICATIONS.md): bekreftede kilder, åpne spørsmål og utkast til henvendelse.
- [Kontrollert leveranse](docs/VERIFICATION.md): tester, rendering og kjente avhengighetsfunn.
- [Plan](PLAN.md): avgrensning og steg 2 med lett Svelte-editor.
- [Integrasjonsvalg](docs/INTEGRATION.md): hvorfor tillegg fungerer uten fork.
- [Notasjon](docs/NOTATION.md): navn, kildegrunnlag og visuelle begrensninger.

ArchiMate® er et registrert varemerke for The Open Group. Dette er et uavhengig prosjekt, uten godkjenning eller sertifisering fra The Open Group. Koden og de egne SVG-tegningene er tilgjengelige under [MIT-lisensen](LICENSE).


## Skills for LLM-bruk

- [eraser-archimate](skills/eraser-archimate/SKILL.md): bruk av utvidelsen, faktisk JSON-kontrakt, skjemaoppslag og rendering. Eksemplet er kjørt med lokal Chrome.
- [archimate-modeling](skills/archimate-modeling/SKILL.md): første utgave av en uavhengig modelleringsarbeidsflyt. Ingen full normativ ArchiMate 4-relasjonsmatrise er inkludert. [Kilde- og tilgangsstatus](skills/archimate-modeling/references/source-status.md).

Begge bruker SKILL.md-formatet og ligger i repoet slik at de kan distribueres med pakken. De er ikke offisielle The Open Group-skills.

