# alishahidi.github.io

Personal site of **Ali Shahidi** — Backend Developer (Java & Spring Boot).

Live at [alishahidi.github.io](https://alishahidi.github.io).

## Pages

| Route | What it is |
| --- | --- |
| `/` | Portfolio — hero with a live service-topology diagram, experience as a commit log, projects, stack, contact |
| `/resume` | Résumé in HTML, switchable between **English** and **فارسی** (RTL), with PDF download and print support |
| `/explore` | The interactive 3D solar-system portfolio (Three.js) — terminal, achievements, easter eggs |

## Stack

Next.js (static export) · React · Tailwind CSS v4 · Three.js / react-three-fiber (explorer) · Zustand

Fonts: Archivo (display/body) · IBM Plex Mono (utility) · Vazirmatn (Persian).

## Development

```bash
npm install
npm run dev     # local dev server
npm run build   # static export to out/
```

## Regenerating the résumé PDFs

The downloadable PDFs live in `public/resume/` and are generated from the
print routes with headless Chromium:

```bash
npm run build
python3 -m http.server 8931 -d out &
chromium --headless=new --no-pdf-header-footer \
  --print-to-pdf=public/resume/Ali-Shahidi-Resume-EN.pdf \
  http://localhost:8931/resume/print/en/
chromium --headless=new --no-pdf-header-footer \
  --print-to-pdf=public/resume/Ali-Shahidi-Resume-FA.pdf \
  http://localhost:8931/resume/print/fa/
npm run build   # rebuild so out/ includes the fresh PDFs
```

Résumé content is defined once, bilingually, in `data/resume.ts`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it to GitHub Pages.
