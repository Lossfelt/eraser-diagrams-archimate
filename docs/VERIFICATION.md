# Kontrollert leveranse

Kontrollert 2026-09-12 på Windows med Node.js 24.19.0 og lokal Google Chrome.

- Ren `npm ci --ignore-scripts --cache .npm-cache` bestod etter at den midlertidige lokale pakkeavhengigheten var fjernet.
- `npm test`: 4 av 4 bestod. Dekker bibliotek/skjema/template-kontrakt, visuelle standardverdier, marker/SVG-kontrakt og resolver-integrasjon med stock og en fritt valgt ArchiMate-relasjon.
- `npm run gallery`: 44 elementpresentasjoner og 11 relasjoner rendret til PNG, HTML og JSON.
- `npm run render`: blandet diagram med ArchiMate- og stock-komponent rendret.
- PNG-er visuelt kontrollert. Rettet overlapp i galleri, serviceikonets plassering og forskjellen mellom junction-symbolene.
- Ingen bekreftelse av fullstendig offisiell symbolgeometri; se NOTATION.md.

## Avhengigheter

`npm audit` rapporterte 3 moderate funn: sanitize-html og de to avhengige Eraser-pakkene. Rapporten viste ingen tilgjengelig automatisk retting for den valgte Eraser-versjonen. Dette er ikke tre uavhengige feil i tillegget. Rapporten refererer til:

- https://github.com/advisories/GHSA-g8qq-57p8-ggw5
- https://github.com/advisories/GHSA-jxwj-j7wr-gfrw

Funnene er ikke lukket av dette prosjektet. Ingen påstand om at sikkerheten til Erasers behandling av ubetrodd innhold er verifisert.

## Rydding

De ti opprinnelige rotfilene er slettet eller erstattet. Samtaleutskrifter, gammel 3.2-plan, 3.2-eksempel og ubrukelige løse tester er fjernet. Gjenbrukbar idé og SVG/template-geometri er videreført i src/. Midlertidig utpakket npm-pakke og undersøkelsens tgz er fjernet. node_modules og lokal npm-cache er ignorerte installasjonsfiler.

## GitHub-klargjøring 2026-09-13

Lokalt Git-repo opprettet med main. Ingen remote er satt, og ingen commit eller push er utført. README har en versjonert forhåndsvisning og lenker til avklaringer og kjente begrensninger.

Fire tester og lokalt Chrome-eksempel bestod etter klargjøringen. npm-pakken ble bygget. GitHub Actions-workflowens YAML og struktur er kontrollert lokalt; selve workflowen er ikke kjørt på GitHub. Workflowen installerer Chromium, kjører tester og rendering og lagrer resultatene som artifacts.

Git ignorerer node_modules, output, lokale cacher, pakkearkiver og miljøfiler. En avgrenset søkekontroll av kildefilene fant ingen vanlige GitHub/OpenAI-tokenmønstre eller private nøkkelblokker; dette er ikke en garanti for at alle typer hemmeligheter oppdages.
