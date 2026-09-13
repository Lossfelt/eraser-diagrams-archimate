# Utvikling og bidrag

Bruk Node.js 24 for samme hovedversjon som CI. Eraser-avhengigheten krever minst 22.12.

```powershell
npm.cmd ci --ignore-scripts --cache .npm-cache
npm.cmd test
npm.cmd run render
npm.cmd run gallery
npm.cmd pack --dry-run
```

På Linux/macOS brukes npm i stedet for npm.cmd. Sett CHROME_PATH til installert Chrome/Chromium, eller installer Chromium med `npx playwright install chromium` og finn stien med:

```sh
node --input-type=module -e "import {chromium} from 'playwright'; console.log(chromium.executablePath())"
```

## Omfang

Hold biblioteket visuelt og lite. Modelleringsveiledning ligger i skills/, ikke i en skjult lovlighetsvalidator. Gjenbruk katalogen og template-fabrikkene fremfor separate implementasjoner av hver type.

Ved symbolendring: oppdater src/catalog.js og kjør `npm run icons:generate`. Kontroller samsvar med `npm run icons:check`; denne kontrollen kjøres også i CI. Generatoren beholder ukjente filer, mens kontrollen varsler om ekstra SVG-er. Render galleriet og kontroller den endrede notasjonen visuelt. Oppgi kilde og usikkerhet når en endring begrunnes med standarden. Ikke kopier inn lisensierte manualer eller eksterne ikonsett uten avklart grunnlag.

Ved skill-endring: oppdater filene under skills/ i repoet. Installerte personlige kopier oppdateres separat. Kontroller at JSON-eksempler følger de faktiske skjemaene og kan rendres.

## GitHub Actions

.github/workflows/ci.yml installerer fra lockfilen, kjører tester, rendrer eksemplene med Chromium og kontrollerer npm-pakken. PNG/HTML/JSON lagres som artifacts. Workflowen publiserer ingen pakke eller nettside.

## Før ekstern publisering

Les docs/CLARIFICATIONS.md om gjenværende kilde- og lisensspørsmål, og docs/VERIFICATION.md om kjente avhengighetsfunn. GitHub-repoet er [Lossfelt/eraser-diagrams-archimate](https://github.com/Lossfelt/eraser-diagrams-archimate). Package.json peker nå til dette repoet. npm-publisering og full notasjonskontroll gjenstår.
