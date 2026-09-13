---
name: archimate-modeling
description: Strukturere, forklare eller faglig gjennomgå et ArchiMate-diagram ut fra målgruppe, begrepsvalg, relasjonsbetydning og eksplisitt versjon. Uavhengig modelleringsveiledning, ikke en offisiell The Open Group-skill eller en komplett ArchiMate 4-lovlighetsvalidator.
---

# ArchiMate-modellering

Dette er et første arbeidsopplegg, ikke et komplett kunnskapsgrunnlag for standarden. Skillen inneholder ingen normativ relasjonsmatrise. Les [references/source-status.md](references/source-status.md) ved behov for standardgyldighet eller nye faglige referanser.

## Fra spørsmål til modell

Avklar hvilket spørsmål diagrammet skal besvare, hvem som skal lese det og hvilken versjon som gjelder. Bruk det som allerede er kjent fra samtalen. I eraser-archimate-visuals-prosjektet er målet ArchiMate 4; ikke bland inn 3.2-taggnavn fra minnet.

Før layout: skriv kort hva de viktigste tingene er i brukerens domene, hva de gjør og hvordan de henger sammen. Skill observerte fakta fra foreslått arkitektur. Be om avklaring når to vesentlig ulike tolkninger gir forskjellige modeller; ikke fyll manglende virksomhetsfakta med gjetninger.

For hvert valgt element, begrunn typen ut fra hva elementet representerer. En teknisk løsning, det den gjør, tjenesten den eksponerer og informasjonen den behandler kan være ulike modellelementer. Ikke velg type bare etter ikonets utseende eller boksens farge. Bruk en versjonstilpasset kilde for begrepenes presise definisjoner når dette er avgjørende for oppgaven.

For hver relasjon: skriv en setning med kilde, verb og mål. Velg deretter relasjonstype og retning som uttrykker denne betydningen. Pilretningen er ikke alltid tidsrekkefølge eller dataflyt. Ikke velg Association bare for å skjule at den tilsiktede betydningen er uavklart.

Hold visningen liten nok til å besvare spørsmålet. Del heller opp i flere visninger med stabile id-er hvis det gir lesbarhet. Nesting, farge og plassering må ikke være eneste bærer av viktig modellbetydning uten at konvensjonen forklares.

## Faglig gjennomgang

Skill mellom tre vurderinger:

- **Forståelig:** navn, relasjonsetiketter og avgrensning gjør modellen lesbar for målgruppen.
- **Faglig plausibel:** elementer og relasjoner uttrykker en sammenhengende tolkning av brukerens faktiske opplysninger.
- **Normativt kontrollert:** de konkrete kilde-type / relasjon / mål-type-kombinasjonene er kontrollert mot et identifisert regelgrunnlag for den aktuelle versjonen.

De to første innebærer ikke den tredje. En vellykket renderer eller en LLMs egen sikkerhet på svaret er ikke dokumentasjon på normative regler.

Ved etterspurt lovlighetskontroll, noter kilde, versjon og konkret avsnitt/tabell/rad for kombinasjonene som kontrolleres. Bruk bare verifiserte regler; merk manglende dekning som ukontrollert, ikke automatisk ulovlig. Vurder retning, relasjonsegenskaper og eventuelle junction-/nesting-regler når de faktisk brukes. Ikke anta at en 3.2-matrise gjelder uendret i 4.

Uten et egnet regelgrunnlag kan du fremdeles levere et begrunnet modellforslag. Oppgi kort at den normative gyldigheten ikke er kontrollert. Hvis brukeren krever en garantert lovlig modell, avklar manglende kildegrunnlag før du gir en slik garanti.

## Leveranse

Lever diagrammet eller den strukturerte modellen i brukerens ønskede verktøy, med korte begrunnelser for ikke-opplagte valg og vesentlige antakelser. Ved Eraser-bruk finnes en separat eraser-archimate-skill for faktiske JSON-felter og rendering. Hold implementasjonens egenskaper adskilt fra ArchiMate-reglene.
