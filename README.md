# Zymbit User Documentation

## Documentation standards

We try to adhere to the following standards when writing documentation:

* When calling a partial, ensure that you use `{{< /partial >}}` instead of `{{% /partial %}}`. This is because the former is more flexible and allows for the partial to be called from within a block element.
* **Always** enclose code or bash commands in 3 back-ticks (```) to ensure that it is rendered as a code block.
* When writing a code block, ensure that you specify the language of the code block. This is done by adding the language name after the first set of back-ticks. Having the language specified enables the `copy` button in the rendered code. For example, to specify a code block in bash, you would write:
  ```bash
  echo "Hello, World!"
  ```
## Developing locally

### Dependencies

The only dependency needed to get started is `npm`. Hugo ships as an npm dependency, so you do not have to install it separately, though you can via the [standard installation instructions](https://gohugo.io/getting-started/installing/) if you want the executable on your PATH.

Hugo is pinned to **0.151.1** in two places that must stay in sync: `hugo-extended` in `package.json`, and `hugo-version` in `.github/workflows/deploy-site.yml`. CI fails the build if they disagree. Do not add `hugo-bin` back as a dependency: it also provides a `hugo` executable, wins the `node_modules/.bin/hugo` symlink, and pins a much older Hugo regardless of what `hugo-extended` says.

### Installation

```bash
git clone git@github.com:Zymbit-Docs/docs.git
cd docs
npm install
```

### Which command to use

| Command | Use it for | Search works? |
|---------|------------|---------------|
| `npm start` | Writing and editing content. Live reload, fastest loop. | **No** |
| `npm run build:preview` | **Reviewing before merge.** Full production build, served locally. | Yes |
| `npm run build:preview:all` | Same, including drafts and future-dated content. | Yes |
| `npm run build` | Producing `public/` to inspect the output. Does not serve. | Yes |
| `npm run lint` | markdownlint over `*.md` and `content/**/*.md`. | n/a |

All three serving commands use <http://localhost:1313/>, so it is easy to be looking at one while thinking you are looking at another.

### Writing content

```bash
npm start
```

Runs `hugo server` with live reload. Hugo renders from memory, which is what makes it fast.

**Search does not work under `npm start`.** Search is Pagefind, and the index is generated from the rendered HTML in `public/` after Hugo finishes, which `hugo server` never produces. The search box will report that a full build is needed. That is expected: use `build:preview` for anything search-related.

### Reviewing before merge

```bash
npm run build:preview
```

Builds the production site to disk, generates the search index, and serves the result at <http://localhost:1313/>. Takes 15 to 20 seconds before it starts serving. This is the command to use when reviewing a branch, because it is the only local command that exercises everything the deployed site does.

It builds with `-b http://localhost:1313/` so that links stay on localhost. Without that, the theme emits absolute URLs and clicking through a locally built site silently lands you on the live docs.zymbit.com.

If a change appears under `npm start` but not here, the page probably has `draft: true` or a future publication date. To include those:

```bash
npm run build:preview:all
```

**Staging cannot substitute for this.** Pushing a non-`main` branch mirrors it to the staging repo, but `push-staging.yml` strips `.github` and substitutes the staging repo's own workflows, so the Pagefind step never runs there and search will look broken on staging regardless of the branch. Review locally.

### Building without serving

```bash
npm run build
```

Renders the production site into `public/` and then generates the search index into `public/pagefind/` through the `postbuild` script. Useful for inspecting output — checking canonical tags, `sitemap.xml`, or the generated HTML — rather than for browsing.

### [Advanced] Render to disk with live-reloading

Hugo can render to disk and watch for source changes, with `browser-sync` serving `public/` and reloading on <http://localhost:1313/>. Note that these also do not generate a search index.

```bash
npm run dev:serve

# If you would prefer that Hugo poll the source files for changes every 10s
# rather than watching for file changes, you can run:
npm run dev:serve:poll
```

The Hugo process and the webserver process can also be run independently in separate shell sessions (e.g. for debugging purposes) by running these commands separately:

```bash
# Run these commands in separate terminals:
npm run dev:build:watch
npm run dev:webserver

# If you would prefer that Hugo poll the source files for changes every 10s rather
# than watching for file changes, you can replace `npm run dev:build:watch` with:
npm run dev:build:poll
```

## Adding a product or a task

`/products/` and `/tasks/` are generated from two data files. Nothing about them is hand-maintained, and a link that points at a page which does not exist fails the build rather than shipping broken.

### Adding a product

**1. Make sure the product's hardware page exists.** The hub links to it and cannot be built without it. Its `description` becomes the lead paragraph on the hub, so write a good one.

**2. Add an entry to `data/products.yaml`.**

| Field | Required | What it does |
|-------|----------|--------------|
| `key` | yes | URL segment, `/products/<key>/`. Also the default name used to look for related pages. |
| `name` | yes | Display name, shown as the hub title and in task lists. |
| `status` | yes | `current`, `legacy`, or `component`. Groups the `/products/` landing page and controls the banner: `legacy` gets "use a current product for new designs", `component` gets "not sold separately". |
| `hardware` | yes | Path to the main hardware page. Declared because these paths are irregular (`/hardware/sen/...`, `/hardware/modules/...`, `/hardware/components/...`). |
| `refkey` | no | Use when the directories under `reference/` and `troubleshooting/` are named differently from `key`. |
| `perimeter` | no | Use when several products share one per-product tutorial page. All three SEN models set `perimeter: sen`. |
| `inherits` | no | Another product key whose tasks this product also supports. One level, not transitive. |
| `components` | no | Boards and modules inside this product, as page paths. |
| `also` | no | Extra links worth surfacing, as `{path, label}` pairs. |

**3. Create `content/products/<key>.md`.** It carries no body; the layout builds the page.

```yaml
---
title: "SEN 600"
linkTitle: "SEN 600"
description: "Setup, tasks, references, and troubleshooting for the SEN 600."
layout: product-hub
product: sen600
draft: false
images: []
---
```

**4. Record which tasks it supports** by adding its `key` to the `products` list of each relevant task in `data/tasks.yaml` — or set `inherits` in step 2 if it supports exactly what another product does.

**5. Build and check.**

```bash
npm run build:preview
```

Then open `/products/<key>/`. A mistyped path fails the build with a message naming the product and the path, so a green build means every link on the hub resolves.

### What happens without configuration

These are looked up at build time from `key` (or `refkey`). Create the page and the link appears on the hub; until then there is simply no link.

* `/reference/product-briefs/<key>/`
* `/reference/cad/<key>/`
* `/reference/conformity/<key>/`
* `/troubleshooting/<key>/`
* per-product versions of a task page, such as `/tutorials/perimeter-detect/<key>/`

### Worked example

Adding a hypothetical SEN 600 that ships with the Secure Base Board, supports the same tasks as the SEN 500, and shares the SEN perimeter detect page:

```yaml
  - key: sen600
    name: "SEN 600"
    status: current
    hardware: /hardware/sen/sen600
    perimeter: sen
    inherits: sen500
    components:
      - /hardware/components/sbb
```

That entry plus `content/products/sen600.md` is the whole change. If a product brief or troubleshooting FAQ is written for it later, both appear on the hub with no further edit.

### Adding a task

Add an entry to `data/tasks.yaml`:

```yaml
  - key: rotate-keys
    title: "Rotate device keys"
    page: /tutorials/rotate-keys
    products: [zymkey5, hsm60]
    note: "Optional caveat shown with the task."
```

Phrase `title` the way a reader would describe the problem, not the way the docs are filed. The task then appears on `/tasks/` and on the hub of every product listed.

If per-product versions of the page exist at `<page>/<key>/`, each hub links its own automatically.

> **NOTE:** The `products` lists were originally seeded from which products each tutorial happens to name in its own text, which is evidence of coverage rather than knowledge of support. Several are still unreviewed. Adding a key is a claim that the task is supported on that product, so add from product knowledge rather than from what the prose says.

## Theme development

The theme used in this site is [Zymdocsy](https://github.com/Zymbit-Docs/zymdocsy), a fork of Google's Docsy theme for Hugo. However, rather than using git submodules as Docsy does, we use git-subtree to handle the theme as well as its vendored dependencies.

> **NOTE:** As a subtree best-practice, any changes that affect both the `themes/zymdocsy` directory and source files elsewhere should be committed separately to keep Zymdocsy' history as clean as possible.

You can split out the commits affecting Zymdocsy in this repo and push those changes to the `zymdocsy` remote:

```bash
git subtree push --prefix themes/zymdocsy \
    --rejoin --squash -m "chore: push current zymdocsy theme to origin" \
    git@github.com:Zymbit-Docs/zymdocsy.git main
```

If changes are made directly to the `zymdocsy` upstream repo (for example, `zymbit-docs/zymdocsy:main` is rebased on top of `google/docsy:master`), they can be merged back in to the repo with the opposite command:

```bash
git subtree pull --prefix themes/zymdocsy \
    --squash -m "chore: update zymdocsy from upstream" \
    git@github.com:Zymbit-Docs/zymdocsy.git main
```

Optionally, you can also add `zymdocsy` to your local repository as a remote, and then replace the GitHub URL in the above commands with the remote's name:

```bash
git remote add zymdocsy git@github.com:Zymbit-Docs/zymdocsy.git

# Replace `git@github.com:Zymbit-Docs/zymdocsy.git` with `zymdocsy`:
git subtree pull --prefix themes/zymdocsy \
    --squash -m "chore: update zymdocsy from upstream" \
    zymdocsy main
```

For a better understanding of `git-subtree`, review the `man` page and its associated examples: [git-subtree(1)](https://manpages.debian.org/testing/git-man/git-subtree.1.en.html)

For a more thorough explanation of how git subtrees function in this repository, view the [reference document in the meta-docs](meta/admin/subtrees.md) directory.
