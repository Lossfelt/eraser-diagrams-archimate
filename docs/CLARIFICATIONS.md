# Kilde- og statusavklaringer for første offentlige utgave

Sist kontrollert: 2026-09-13.

Dette notatet gjelder to uavhengige leveranser:

1. `eraser-archimate-visuals`, et visuelt tillegg med ArchiMate 4-navn og egne, forenklede symboler.
2. `archimate-modeling`, en uavhengig skill for modelleringsstøtte.

Ingen av leveransene er godkjent, sertifisert eller utgitt av The Open Group.

## Bekreftet fra åpne kilder

- [C260, ArchiMate 4 Specification](https://publications.opengroup.org/standards/archimate/c260), avsnittene **Details** og **Additional Information**, omtaler dokumentet som den offisielle ArchiMate 4-spesifikasjonen fra The Open Group. Siden oppgir publiseringsdato **27. april 2026**, status **Adopted** og lister sentrale endringer fra 3.2. Dette kan brukes som offentlig kilde for versjon, status og endringsoversikt.
- Samme C260-side, avsnittet **Personal Member License**, inneholder en egen **AI USE RESTRICTION**. Ordlyden sier blant annet at bruk eller innarbeiding av publikasjonen, helt eller delvis, ikke er tillatt for utvikling av generativ KI eller i forbindelse med bruk av slike teknologier for å generere, syntetisere eller kombinere innhold. Dette er en observasjon om den viste personlige medlemslisensen. Det er ikke en juridisk konklusjon om andre lisenser, offentlige fakta, selvstendig utviklede symboler eller alle mulige bruksformer.
- C260-siden skiller mellom tilgang for ikke-medlemmer, medlemmer og medlemmer av ArchiMate Forum. Nedlasting og HTML-utgave er knyttet til registrering eller innlogging. Denne gjennomgangen har ikke logget inn, godtatt vilkår eller brukt den lisensierte spesifikasjonsteksten.
- [AI-AND-ARCHIMATE](https://community.opengroup.org/abitom/ai-and-archimate) ligger under det personlige navnerommet `abitom` på The Open Groups Community-GitLab. Et offentlig indeksert filtreff beskriver prosjektet som en fork av et utilgjengelig prosjekt. Vertsdomene og prosjektnavn dokumenterer ikke at innholdet er utgitt, vedlikeholdt eller godkjent av The Open Group.
- Et avgrenset offentlig søk 2026-09-13 på The Open Groups hoveddomene og Community-GitLab fant ingen side som identifiserer en offisiell ArchiMate Agent Skill. Søkeresultatet beviser ikke at ingen slik skill finnes.

## Åpent og må avklares med The Open Group

- Hvilken lisens som eventuelt tillater at en person eller organisasjon bruker den fullstendige ArchiMate 4-spesifikasjonen som kilde ved utvikling, kontroll eller drift av en generativ KI-skill.
- Om AI-begrensningen i **Personal Member License** også er ment å omfatte manuelt kuraterte regler eller korte fakta hentet fra publikasjonen, og hvilke skiller The Open Group trekker mellom modelltrening, utvikling, oppslag og bruk ved kjøring.
- Om The Open Group tilbyr et eget tillatelsesgrunnlag for å publisere en uavhengig, maskinlesbar regelmatrise eller en skill som gjengir normative definisjoner og regler.
- Om `abitom/ai-and-archimate` har noen formell status. Inntil skriftlig dokumentasjon foreligger, skal prosjektet omtales som en community-kandidat i et personlig navnerom, ikke som en offisiell The Open Group-skill.
- Hvilke krav som gjelder for bruk av varemerket ArchiMate® i navn, metadata, skjermbilder og markedsføring av de to uavhengige leveransene.

## Utkast til spørsmål til The Open Group

Dette er et utkast brukeren kan sende. Det er ikke sendt.

> We are preparing two independent open-source deliverables: (1) a visual extension with independently drawn, simplified symbols named for ArchiMate 4 concepts, and (2) a separate LLM agent skill for modeling guidance. Neither will claim endorsement, certification, or official status.
>
> The public C260 page shows an "AI USE RESTRICTION" under "Personal Member License". Could you clarify which license or permission, if any, would cover the following uses of the ArchiMate 4 Specification: manually curating definitions and relationship rules for retrieval by an LLM; using the publication to verify independently written guidance; and publishing a machine-readable conformance rule set?
>
> Please also clarify whether the Community-GitLab project at `community.opengroup.org/abitom/ai-and-archimate` has any official status, and what trademark wording you recommend for an independent open-source visual extension and skill.

## Praktisk anbefaling for README

Anbefalingen for den tekniske klargjøringen er å beskrive prosjektet som en uavhengig forhåndsutgave. Dette notatet gir ingen juridisk klarering for publisering. README bør avgrense statusen konkret:

> This independent project provides preliminary visual support for ArchiMate 4 terminology. It is not approved, certified, or maintained by The Open Group. The symbols are independently drawn, simplified variants. The project does not implement or claim complete normative conformance validation. A separate modeling skill provides non-authoritative guidance and does not include the licensed ArchiMate 4 specification or a complete normative rule set. ArchiMate® is a registered trademark of The Open Group.

Lisensavklaringen trenger derfor ikke blokkere klargjøring av kildekode, tester, pakking eller tydelig merket visuell funksjonalitet som er selvstendig utviklet. Den bør blokkere innarbeiding av tekst, tabeller eller normative regler fra den lisensierte publikasjonen i skillen inntil riktig tillatelsesgrunnlag er avklart.

