# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Hugo-based static documentation site for Zymbit hardware security products (docs.zymbit.com). Uses the Zymdocsy theme, a fork of Google's Docsy theme managed via git-subtree (not submodules).

## Common commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install all dependencies (includes Hugo extended) |
| `npm start` | Dev server with live-reload at localhost:1313 (runs `clean` first) |
| `npm run build` | Production build with minification (`-e production`) |
| `npm run build:preview` | Production build served locally |
| `npm run build:preview:all` | Production build including drafts and future-dated content |
| `npm run dev:serve` | Watch-mode build plus browser-sync server |
| `npm run dev:serve:poll` | Same, but polls every 10s (for filesystems without inotify) |
| `npm run lint` | Run markdownlint over `*.md` and `content/**/*.md` |
| `npm run clean` | Remove build artifacts (`public`, `resources`, `functions`, `docs`) |
| `npm run create docs/path/page.md` | Create new page from archetype |
| `npm run release` | Cut a release with standard-version |

There are no unit tests. `npm test` is an alias for `npm run lint`.

### Toolchain version caveats

- CI builds with Hugo **0.151.1** extended (pinned in `deploy-site.yml`), but `package.json` pins `hugo-extended` at `^0.91.0`. A local build can therefore behave differently from production; prefer verifying against the CI version when a change depends on newer Hugo behavior.
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

- **`bootware/`** - Versioned by semver directories: 1.0.0, 1.1.0, 1.2.2, 1.3.0, 1.3.2, 2.0.0. The layout at `layouts/section/bootware.html` auto-redirects `/bootware/` to the latest version. The version list that drives the picker and the outdated-version banner is `params.versions` in `config/_default/config.yaml` — adding a directory alone is not enough.
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
