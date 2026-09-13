---
name: eraser-archimate
description: Lag eller rediger diagrammer med eraser-archimate-visuals og Eraser Diagrams, eller bruk SVG-symbolene separat. Bruk for JSON, komponentvalg, styling, rendering og feilsøking av dette tillegget. Gir ikke normativ ArchiMate-regelvalidering.
---

# Eraser med ArchiMate-symboler

Finn rotmappen til `eraser-archimate-visuals` via prosjektkonteksten eller brukerens oppgitte sti. Kontroller package.json. Ikke anta at pakken er publisert på npm eller at arbeidsmappen er bibliotekets rot. Kommandoene nedenfor kjøres fra bibliotekets rot, med mindre annet er oppgitt.

Les [references/authoring.md](references/authoring.md) før du lager JSON. Den beskriver denne pakkens faktiske felt og forskjellene fra standardkomponentene.

## Velg fra installert katalog

Bruk den installerte koden som fasit for støttede tagger. Ikke gjett fra ArchiMate 3.2-navn eller tidligere eksempler.

```text
node <skill-mappe>/scripts/describe-library.mjs <bibliotekets-rot>
node <skill-mappe>/scripts/describe-library.mjs <bibliotekets-rot> AmService AmServing
```

Første kommando lister navn. Andre viser de faktiske skjemaene for utvalgte tagger, også stock-tagger som Shape. Ikke legg til normalizers eller endre biblioteket bare for å tegne et diagram.

## Lag og rendrer

1. Behold stabile id-er, brukerens navn og eksisterende x/y-posisjoner ved redigering. Gi nye elementer eksplisitte koordinater og tilstrekkelig plass til etiketter.
2. Skriv authored JSON med entities/connections. Lagre den som redigerbar kilde; resolved JSON i output er et renderer-resultat, ikke en erstatning for kildefilen.
3. Bruk bibliotekets render-script, eller importer både library og normalizers i Node API. Ikke erstatt tillegget med et nytt bibliotek som mister stock-komponentene.
4. Kontroller result.ok ved API-bruk. Åpne PNG/HTML og kontroller lesbarhet, overlapp og pilretning. Skill mellom vellykket rendering og visuelt kontrollert resultat.
5. Lever kilde-JSON og relevante output-filer. Ingen publisering er nødvendig for lokal bruk.

```powershell
npm.cmd ci --cache .npm-cache
npm.cmd run render -- examples/mitt-diagram.json mitt-diagram
```

Kjør installasjon bare hvis avhengighetene mangler. CHROME_PATH kan settes til lokal Chrome/Chromium. Render-scriptet bruker Windows-standardstien til Chrome hvis variabelen mangler. Andre plattformer trenger en faktisk nettlesersti.

## Hva skillen ikke avgjør

Biblioteket kan rendere relasjoner som ikke er lovlige i ArchiMate. Ikke kall en modell standardgyldig fordi Eraser godtar den. Dersom brukeren ber om faglig modellering eller lovlighetskontroll, bruk en separat, versjonert modelleringsreferanse og oppgi det som fortsatt er ubekreftet. Ikke innfør en metamodel-validator i dette visuelle tillegget uten at brukeren ber om den.

SVG-ene er forenklede egne tegninger. Se prosjektets docs/NOTATION.md før du beskriver dem som standardtro.
