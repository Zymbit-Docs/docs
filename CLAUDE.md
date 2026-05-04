# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Hugo-based static documentation site for Zymbit hardware security products (docs.zymbit.com). Uses the Zymdocsy theme, a fork of Google's Docsy theme managed via git-subtree (not submodules).

## Common commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install all dependencies (includes Hugo extended) |
| `npm start` | Dev server with live-reload at localhost:1313 |
| `npm run build` | Production build with minification |
| `npm run build:preview` | Production build served locally |
| `npm run build:preview:all` | Production build including drafts and future-dated content |
| `npm run lint` | Run markdownlint on content |
| `npm run clean` | Remove build artifacts |
| `npm run create docs/path/page.md` | Create new page from archetype |

There are no unit tests. `npm test` is an alias for `npm run lint`.

## Hugo configuration

Config files are in `config/` with environment-specific overrides:

- `config/_default/` - Base config (config.yaml, params.yaml, menu.yaml, module.yaml)
- `config/development/` - Enables `buildDrafts`, `buildFuture`, disables asset caching
- `config/staging/` - Enables `buildDrafts`, `buildFuture`
- `config/production/` - Empty (uses defaults: only published, non-future content)

All pages inherit `type: docs` via a frontmatter cascade in `config/_default/config.yaml`, so individual pages don't need to set it.

## Content architecture

All documentation lives under `content/` as Markdown files:

- **`bootware/`** - Versioned by semver directories (1.0.0 through 2.0.0). The layout at `layouts/section/bootware.html` auto-redirects `/bootware/` to the latest version. Versions are defined in `config/_default/config.yaml` under `params.versions`.
- **`api/`** - Auto-generated from XML via the `process-api-update.yml` GitHub Action. Do not edit these files manually.
- **`hardware/`** - Product documentation (SEN, dev-kits, modules, components)
- **`reference/`** - Technical reference (CAD, engineering notes, product briefs, etc.)
- **`tutorials/`** - Step-by-step guides
- **`troubleshooting/`** - FAQs organized by product (HSM4, HSM6, SCM, Zymkey4)

## Custom shortcodes

Located in `layouts/shortcodes/`:

- `bootware_version_notice` - Banner warning when viewing an outdated Bootware version
- `resource_link` - Linked resource card that extracts page title and description
- `supported` / `partially-supported` - Hardware support status badges
- `youtube` - YouTube video embeds

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

- Use `{{< >}}` delimiter (not `{{% %}}`) when calling partials/shortcodes.
- Always specify language on fenced code blocks (enables the copy button).
- Sentence case for all headings; one topic per page.
- No hard-wrapping of text; let long lines soft-wrap.
- Ordered lists always use `1.` for every item.
- Unordered list nesting: `*` top-level, `-` second-level, `+` third-level; indent 4 spaces per level.
- Inline HTML is allowed but should be used sparingly.
- Proper noun capitalization is enforced by the linter: Zymbit, Zymkey, Raspberry Pi, RPi, HSM4, Zymkey4, HSM6.
- American English, Oxford comma, address reader as "you", never use "I", use singular they.

## Editor settings

4-space indentation (2 for YAML, JSON, HTML), UTF-8, LF line endings (see `.editorconfig`).
