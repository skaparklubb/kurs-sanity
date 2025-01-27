# Sanity.io kurs

Det er mange måter å starte et prosjekt med Sanity.io. Her er en enkel guide for å komme i gang.

Hvis du ikke har noen bruker fra før så kan du gjøre det her på [sanity.io](https://www.sanity.io/)

Hva trenger du for å komme i gang?

- Node.js
- Git (hvis du vil bruke kode fra GitHub repo)

I dette kurset vil vi bruke [SvelteKit](https://svelte.dev) for å lage en enkel nettside.

## Klon Web- prosjektet fra GitHub

Hvis du ikke har gjort det, klon prosjektet fra GitHub.

```bash
git clone https://github.com/skaparklubb/kurs-sanity.git
```

Når du har klonet prosjektet kan du starte utviklingsserveren.

```bash

# Gå til prosjektmappen
cd kurs-sanity

# bruk start branch
git checkout start

# Installer avhengigheter
npm install

# Start utviklingsserver
npm run dev

```

Hvis du ønsker å sjekke ut løsningen kan du bytte til branch `almost/complete`
```bash
git checkout almost/complete

# Hvis du ikke har installert avhengigheter
npm install

# Start utviklingsserver
npm run dev

```

## Start fra bunnen av med SvelteKit

```bash

# Opprett et nytt SvelteKit prosjekt
# bytt ut my-app med ønsket navn
# Svar på spørsmålene som kommer
npx sv create my-app

cd my-app

npm install

npm run dev
```

### Spar tid 

Kopier mappen `src/lib/utils`eller filene i denne mappen og `src/lib/types/sanity.d.ts`  fra dette prosjektet til ditt nye prosjekt.

## Opprett Sanity- prosjekt med webgrensesnitt
Logg inn på [sanity.io](https://www.sanity.io/) og opprett et nytt prosjekt.

På https://www.sanity.io/manage/personal/project/<din-prosjekt-id>/getting-started kan du finne en kommando for å komme i gang med Sanity Studio.

```bash
npm create sanity@latest -- --project <din-prosjekt-id> --dataset production --template clean --typescript --output-path <mappe-for-sanity-studio>
```

Hvis prosjekt-id er `abc123` og du vil ha Sanity Studio i en mappe som heter `studio` så vil kommandoen se slik ut:

```bash
npm create sanity@latest -- --project abc123 --dataset production --template clean --typescript --output-path studio
``` 

kjør deretter

```bash
cd studio
npm install
npm run dev
```

## Nyttige lenker
- [Sanity.io dokumentasjon](https://www.sanity.io/docs)
- [Sanity Schema typer](https://www.sanity.io/docs/schema-types)
- [GROQ](https://www.sanity.io/docs/query-cheat-sheet)
- [Sanity.io kurs](https://www.sanity.io/courses)


## Hvis du ikke har NodeJS

Last ned og installer Node.js fra [nodejs.org](https://nodejs.org/)

Sjekk deretter at Node.js er installert ved å kjøre følgende kommando i terminalen
```bash
node -v
```