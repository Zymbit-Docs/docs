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
