# Notasjon og dekning

Sist kontrollert: 2026-09-12.

## Leveranse

42 elementtyper med ArchiMate 4-navn, pluss `AndJunction` og `OrJunction`. Hver type har en kompakt SVG-tegning i `icons/`, og samme geometri brukes av Eraser-komponenten. Enkelte beslektede begreper deler symbol, for eksempel grensesnitt og objekter. Domenefarger er visuelle standardvalg og innebærer ingen semantisk validering.

| Gruppe | Elementnavn |
| --- | --- |
| Common | Collaboration, Event, Function, Process, Role, Service, Path, Grouping, Location |
| Business | BusinessActor, BusinessInterface, BusinessObject, Product |
| Application | ApplicationComponent, ApplicationInterface, DataObject |
| Technology | Node, Device, SystemSoftware, TechnologyInterface, CommunicationNetwork, Artifact |
| Physical | Equipment, Facility, DistributionNetwork, Material |
| Strategy | Resource, Capability, ValueStream, CourseOfAction |
| Motivation | Stakeholder, Driver, Assessment, Goal, Outcome, Principle, Requirement, Meaning, Value |
| Implementation | WorkPackage, Deliverable, Plateau |

11 relasjonspresentasjoner: Composition, Aggregation, Assignment, Serving, Realization, Access, Flow, Triggering, Specialization, Influence og Association. Eraser-taggen er `Am` etterfulgt av navnet, for eksempel `AmProcess` eller `AmServing`.

## Hva er kontrollert?

- [The Open Group, C260, Details](https://publications.opengroup.org/standards/archimate/c260) bekrefter ArchiMate 4 og sammenslåingene/fjerningene fra 3.2.
- [Linked.Archi sin visuelle katalog, Element Notations og Relationship Notations](https://meta.linked.archi/archimate4/notation/) gir en åpen implementasjonsreferanse for 42 navn og kompakte symboler. Den er merket draft og er ikke selve standarden. Physical-gruppen vises der som del av Technology.
- SVG-geometrien i dette prosjektet er tegnet som egne, forenklede varianter med 24 × 24 koordinater. Eksterne SVG-filer er ikke kopiert inn.

## Begrensninger

Dette er en første visuell utgave, ikke en erklæring om fullstendig samsvar med ArchiMate 4. Den fullstendige offisielle HTML-spesifikasjonen krevde innlogging. Eksakt symbolgeometri for hele settet er derfor ikke verifisert mot standarden. Særlig de mindre brukte Strategy-, Motivation- og Implementation-symbolene bør gjennomgås før man bruker dem som autoritativ notasjonsreferanse.

Komponentene bruker hovedsakelig boks med hjørnesymbol. Alternative store elementformer, endepunktsmultiplikasjoner og full notasjon for nestede relasjoner inngår ikke. Ingen regler for lovlige kombinasjoner av elementer og relasjoner er implementert. Vanlig Eraser-validering av JSON-format og referanser gjelder fortsatt.

ArchiMate® er et registrert varemerke for The Open Group. Prosjektet er uavhengig og er ikke godkjent eller sertifisert av The Open Group.
