# buracas.com — migration notes

The old static site (`!old/`) has been migrated to the **academic-portfolio-astro** template.
The build was verified with `npm run build` (Node 22): **77 pages, 0 errors.**

## What maps where

| Old page | New location |
|---|---|
| `biography.html` (intro) | `src/content/bio.md` — homepage |
| `biography.html` (timeline, honours, memberships, courses) | `src/content/cv.md` — `/cv` |
| `publications.html` | 7 entries in `src/content/publications/` |
| `metaeconomics.html` | `src/content/projects/metaeconomics.md` |
| `finterms.html` | `projects/banking-commerce-dictionary.md` |
| `statterms.html` | `projects/statistical-terms-glossary.md` |
| `classificators.html` | `projects/international-classificators.md` |
| `ethnic.html` | `projects/ethnic-cultural-heritage.md` |
| `eu.html` | `projects/eu-currency-strategies.md` |
| `sajudis.html` | `projects/sajudis.md` |
| `hobbies.html` | `projects/hobbies-heritage.md` |
| Lecture courses | 5 entries in `src/content/teaching/` |
| Congress / conference papers | 4 entries in `src/content/talks/` |

Images copied to `public/images/`, PDFs to `public/files/`, profile photo to `public/foto.jpg`.
A Decap CMS admin (matching the real collections) is at `public/admin/`.

## ⚠️ Placeholders to fill in `src/config/social.ts`
- `CONTACT_EMAIL_PLACEHOLDER` — the email to show in the sidebar
- `GOOGLE_SCHOLAR_URL_PLACEHOLDER` — Google Scholar profile URL (or set `isActive: false`)
- `ORCID_URL_PLACEHOLDER` — ORCID URL (or set `isActive: false`)

The old site hid the email and listed a 2019 Vilnius address/phone — these were **omitted** per your choice (email-only contact).

## Notes
- The **Blog** section is disabled (`pages.ts` → `blog.isActive: false`) since the old site had none. To enable it later, flip that flag and add posts (the CMS already has a posts collection ready).
- `site.ts` → `website` is set to `https://buracas.com/`. Adjust if deploying elsewhere.
- A stray partial `.git/` folder from a failed clone may remain here and couldn't be removed automatically — delete it, or just copy `src/` + `public/` into your existing GitHub clone (64715/buracas-com).

## Run locally
```
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
```
