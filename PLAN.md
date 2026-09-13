# Plan: visuelt ArchiMate-tillegg til Eraser Diagrams

Sist kontrollert: 2026-09-12.

## Mål
Et lite, separat tillegg med ArchiMate 4-symboler, elementpresentasjon og connector-stiler. Vanlige Eraser-komponenter skal fortsatt kunne brukes. Ingen regler for lovlige ArchiMate-kombinasjoner. En lett Svelte-editor er steg 2, og bygges ikke i denne leveransen.

## Gjennomføring
1. Kontroller offentlige Eraser-eksporter og kombinasjon med standardbiblioteket. Bruk publisert versjon og lås avhengighetene.
2. Lag et visuelt katalogbibliotek med egne SVG-primitiver og gjenbrukbare templates. Eksponer også et rent ikonsett der dette gir enkel bruk på standardkomponenter.
3. Lever installasjon, kjørbart eksempel og et galleri med tilgjengelige symboler og relasjoner.
4. Test at standardkomponenter og ArchiMate-komponenter kan rendres sammen, at farger/etiketter fungerer, og at ingen semantisk relasjonsvalidator introduseres.
5. Rydd bort den gamle 3.2-leveransens løse filer etter at relevant SVG/template-kode er overført.

## Kilder og usikkerhet
- Eraser: https://github.com/eraserlabs/eraser-diagrams/blob/main/CUSTOMIZATION.md
- ArchiMate 4: https://publications.opengroup.org/standards/archimate/c260 (Details og Additional Information). Bekrefter publisering og sammenslåing av typer.
- Den fullstendige HTML-spesifikasjonen krevde innlogging. Ikke påstå full notasjonssamsvar uten visuell kontroll mot tilgjengelig referanse.

## Rydding
README.md og ARCHITECTURE.md erstattes av dokumentasjon for det avgrensede prosjektet. Samtalefilene og gamle 3.2-eksempler/tester fjernes. SVG-geometri og template-funksjoner vurderes for gjenbruk før gamle kildefiler fjernes.

## Leveransegrense

Første versjon leveres som lokal npm-pakke med 42 elementnavn, to junctions og 11 relasjonsstiler. Fullt standardtro symbolgeometri er et separat kontrollpunkt, siden den fullstendige ArchiMate 4-spesifikasjonen ikke var tilgjengelig uten innlogging. Dette skal være synlig i README, ikke skjult i en teknisk testlogg.

## Steg 2: enkel Svelte-editor

1. Lag en liten skisse med diagramflate og last inn / lagre JSON.
2. Dra et element og lagre oppdaterte x/y uten å endre stabile ID-er.
3. Juster forbindelsespunkter og rendrer med samme bibliotek.
4. Legg til undo/redo og SVG/PNG-eksport først når lagring og gjenåpning fungerer.

Akseptanse: et diagram med manuelle posisjoner og connector-punkter kan lagres, åpnes igjen og rendres uten at justeringene forsvinner. Automatisk layout og nye routing-algoritmer er ikke forutsetninger for denne første editoren.

## Neste prioriteringer (2026-09-13)

1. Bruksskill er laget og eksempelrendret: skills/eraser-archimate.
2. Prøv bibliotek og skill på et lite reelt diagram før editorutvikling.
3. Avklar kilder og bruksvilkår for autoritativ symbolkontroll og modellregler. C260-siden viser en AI-bruksbegrensning i Personal Member License; innlogging alene er ikke en avklaring av KI-bruk.
4. Modelleringsarbeidsflyt er opprettet i skills/archimate-modeling, men fullstendige versjonerte definisjoner og regler gjenstår. Ingen normative relasjonsregler er lagt inn som gjetninger.
5. Start Svelte-skisse når diagramflyten og ønsket notasjonsnivå er avklart.
