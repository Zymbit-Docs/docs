# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Hugo-based static documentation site for Zymbit hardware security products (docs.zymbit.com). Uses the Zymdocsy theme, a fork of Google's Docsy theme managed via git-subtree (not submodules).

## Common commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install all dependencies (includes Hugo extended) |
| `npm start` | Dev server with live-reload at localhost:1313 (runs `clean` first). **No search index** - see below |
| `npm run build` | Production build with minification (`-e production`), then Pagefind via `postbuild` |
| `npm run build:preview` | Production build served locally at localhost:1313, **with working search** |
| `npm run build:preview:all` | Production build including drafts and future-dated content |
| `npm run dev:serve` | Watch-mode build plus browser-sync server |
| `npm run dev:serve:poll` | Same, but polls every 10s (for filesystems without inotify) |
| `npm run lint` | Run markdownlint over `*.md` and `content/**/*.md` |
| `npm run clean` | Remove build artifacts (`public`, `resources`, `functions`, `docs`) |
| `npm run create docs/path/page.md` | Create new page from archetype |
| `npm run release` | Cut a release with standard-version |

There are no unit tests. `npm test` is an alias for `npm run lint`.

### Checking work locally

`npm run build:preview` is the full local check: it builds, generates the search index, and serves the result at localhost:1313. Use it instead of pushing a branch and waiting on the staging site.

Both `npm start` and `npm run build:preview` serve on port 1313, which makes them easy to confuse. `npm start` runs `hugo server`, which renders from memory and never runs Pagefind, so `/pagefind/` is a 404 there and the search UI reports that a full build is needed. That is expected: `npm start` is for fast content iteration, `build:preview` is for verifying anything search-related.

Pushing a non-`main` branch mirrors it to the staging repo, but `push-staging.yml` strips `.github` and substitutes the staging repo's own workflows - so **the Pagefind step in `deploy-site.yml` does not run on staging** and search will appear unindexed there. Verify search locally, not on staging.

### Toolchain version caveats

- Hugo is pinned to **0.151.1** in two places that must be kept in sync: `hugo-extended` in `package.json`, and `hugo-version` in `deploy-site.yml`. A CI step fails the build if they disagree. They drifted before (`^0.91.0` locally against 0.151.1 in CI), which silently broke `npm run build`.
- Do not add `hugo-bin` back. It also declares a `hugo` executable and wins the `node_modules/.bin/hugo` symlink over `hugo-extended`, pinning its own much older Hugo regardless of what `hugo-extended` says.
- The `theme` devDependency in `package.json` points at `file:themes/docs-theme`, a directory that no longer exists (the theme is `themes/zymdocsy`). It is a stale entry, not a path to fix by creating the directory.

## Hugo configuration

Config files are in `config/` with environment-specific overrides:

- `config/_default/` - Base config (config.yaml, params.yaml, menu.yaml, module.yaml, alias.html)
- `config/development/` - Enables `buildDrafts`, `buildFuture`, disables asset caching
- `config/staging/` - Enables `buildDrafts`, `buildFuture`
- `config/production/` - Empty (uses defaults: only published, non-future content)

Notable details in `config/_default/config.yaml`:

- All pages inherit `type: docs` via a frontmatter cascade, so individual pages don't need to set it.
- `theme` resolves to `zymdocsy`; `module.yaml` mounts the local `content`, `assets`, `layouts`, `data`, `static`, and `archetypes` directories over the theme's.
- Goldmark runs with `unsafe: true` (inline HTML renders) and `linkify: false` (bare URLs are not auto-linked).
- Table of contents covers heading levels 2-4.

## Content architecture

All documentation lives under `content/` as Markdown files:

- **`bootware/`** - Versioned by semver directories: 1.0.0, 1.1.0, 1.2.2, 1.3.0, 1.3.2, 2.0.0. `/bootware/` is a landing page, not a redirect: it renders the version dropdown plus quick links to the stable and beta releases. Adding a version directory is not enough on its own - see below.
- **`api/`** - Auto-generated from XML via the `process-api-update.yml` GitHub Action. Do not edit these files manually.
- **`hardware/`** - Product documentation (`sen`, `dev-kits`, `modules`, `components`)
- **`reference/`** - Technical reference (`binding`, `cad`, `conformity`, `engineering-notes`, `power-quality`, `product-briefs`, `real-time-clock`, `reserved-pins`, `zymbit-wallet-sdk`, plus `cpu-scaling.md`)
- **`tutorials/`** - Step-by-step guides
- **`troubleshooting/`** - FAQs organized by product (`general`, `hsm4`, `hsm6`, `scm`, `scm-mobo`, `zymkey4`)

Archetypes for `npm run create` live in `archetypes/`: `default.md`, `docs.md`, `api_docs.md`.

## Custom shortcodes

Located in `layouts/shortcodes/`:

- `bootware_version_notice` - Banner warning when viewing an outdated Bootware version
- `resource_link` - Linked resource card that extracts page title and description
- `supported` / `partially-supported` - Hardware and OS support status badges
- `youtube` - YouTube video embeds

Use `supported` / `partially-supported` for OS support status rather than writing the status in prose, so support tables stay consistent as new OS releases land.

## Site search

Search is Pagefind, generated from the rendered HTML in `public/` after Hugo runs (`postbuild` locally, an explicit step in `deploy-site.yml`). There is no index template to maintain; what gets indexed is controlled by `data-pagefind-*` attributes in the layouts.

All of it lives in project-level overrides; `themes/zymdocsy/` is untouched.

- `layouts/docs/baseof.html` - every page routes through this. Marks `<main>` and wraps nav chrome in `data-pagefind-ignore`. Keep in sync when pulling the theme subtree.
- `layouts/partials/pagefind-attrs.html` - returns `data-pagefind-body` or `data-pagefind-ignore`. Excludes every Bootware version except the stable one, taxonomy stubs, the 404, and anything with `pagefind_ignore: true`.
- `layouts/partials/bootware-releases.html` - returns the stable and beta Bootware releases.
- `layouts/partials/pagefind-filters.html` - filter and metadata carrier elements.
- `layouts/partials/search-input.html` - the trigger field, rendered twice per page.
- `layouts/partials/hooks/{head-end,body-end}.html` - overlay styles and markup; fetches the Pagefind bundle on first use, not on page load.
- `layouts/docs/search.html` + `content/search.md` - the `/search/` results page.

Two traps worth knowing before editing:

- Pagefind reads **one** `data-pagefind-filter` and **one** `data-pagefind-meta` per element, and does not split a comma-separated list. Writing `data-pagefind-filter="section:Bootware, version:2.0.0"` stores a single section literally named `Bootware, version:2.0.0`. Use one element per value.
- A partial used in attribute position must `return` a `safeHTMLAttr`. Returning a plain string yields `ZgotmplZ` in the output.

### Which Bootware version is searchable

Only the **stable** release is indexed, so results never land on a prerelease. Stable is declared by `stable: true` in the front matter of that version's `_index.md` (currently `content/bootware/1.3.2/_index.md`), read via `partials/bootware-releases.html`.

Do **not** sort by version number to find the current release. Bootware 2.0.0 is a beta and 1.3.2 is stable, so highest-semver points at prerelease docs. `weight` is display order, not stability - 2.0.0 is weight 20, above 1.3.2 at 30. When 2.0.0 ships, move the `stable: true` flag and nothing else needs to change.

The beta needs no flag: it is the highest version ranked above stable, so promoting a release automatically stops the old beta being advertised as one.

`partials/bootware-releases.html` is now the only place that identifies releases. Two dead layouts that duplicated the highest-semver logic (`section/bootware.html` and `section/products/bootware.html`) have been deleted; they were never reached, because everything cascades to `type: docs` and `docs/list.html` wins the lookup for `/bootware/`.

### Adding or promoting a Bootware version

Four things are driven by separate mechanisms, and three of them are manual:

1. `params.versions` in `config/_default/config.yaml` drives the version dropdown (`version-menu` shortcode and the navbar selector). A new directory does not appear there on its own.
1. `stable: true` in the version's `_index.md` selects the stable release, which controls both what search indexes and what the version banner says. Move it on promotion.
1. `hide_summary: true` in a version's `_index.md` keeps it out of the quick-links list on `/bootware/`. Today only 1.3.2 and 2.0.0 lack it, which is why that list resolves to exactly stable and beta - so on promotion, add it to the newly superseded version.
1. The beta is derived, not declared: it is the highest version ranked above stable. Nothing to update.

To exclude a page from search, set `pagefind_ignore: true` in its front matter.

## Theme management (git-subtree)

The Zymdocsy theme lives at `themes/zymdocsy/` and is managed with `git subtree`. Commits affecting `themes/zymdocsy/` must be separate from commits affecting other files. Always use `--squash` with subtree operations.

```bash
# Pull upstream changes
git subtree pull --prefix themes/zymdocsy \
    --squash -m "chore: update zymdocsy from upstream" \
    git@github.com:Zymbit-Docs/zymdocsy.git main

# Push theme changes upstream
git subtree push --prefix themes/zymdocsy \
    --rejoin --squash -m "chore: push current zymdocsy theme to origin" \
    git@github.com:Zymbit-Docs/zymdocsy.git main
```

## Deployment

- **Production**: Merging to `main` triggers `deploy-site.yml`, which builds with Hugo 0.151.1 extended and deploys to GitHub Pages (gh-pages branch).
- **Staging**: Pushing any non-main branch triggers `push-staging.yml`, which mirrors the branch to a separate staging repo.
- **API docs**: Pushing to an `api-docs-update*` branch triggers `process-api-update.yml`, which processes raw XML, converts via Hugoify, and auto-creates a PR.

## Content standards

Enforced by `.markdownlint.yaml` (`.markdownlintignore` excludes `node_modules` and `LICENSE.md`):

- Use `{{< >}}` delimiter (not `{{% %}}`) when calling partials/shortcodes.
- Always specify language on fenced code blocks (enables the copy button); use backtick fences, never indentation.
- Sentence case for all headings; one topic per page. ATX (`#`) style, one top-level heading per document, no trailing punctuation, blank line above and below.
- No hard-wrapping of text; let long lines soft-wrap. There is no line-length limit.
- Ordered lists always use `1.` for every item.
- Unordered list nesting: `*` top-level, `-` second-level, `+` third-level; indent 4 spaces per level.
- Wrap bare URLs in angle brackets — `<https://example.com>`. Goldmark has `linkify` off, so unbracketed URLs render as plain text.
- Images require alt text; horizontal rules use `---`.
- Inline HTML is allowed but should be used sparingly.
- Proper noun capitalization is enforced by the linter: Zymbit, Zymkey, Raspberry Pi, RPi, HSM4, Zymkey4, HSM6.
- American English, Oxford comma, address reader as "you", never use "I", use singular they.

## Editor settings

4-space indentation (2 for YAML, JSON, SCSS, HTML), UTF-8, LF line endings, final newline, trailing whitespace trimmed — except `CNAME`, which has no final newline (see `.editorconfig`).
