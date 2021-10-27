# Zymbit User Documentation

## Developing locally

### Dependencies

The only local dependency to begin developing locally is `npm`. Hugo is a dependency that you can optionally install using the [standard installation instructions](https://gohugo.io/getting-started/installing/) if you would like direct access to the Hugo executable. However, a Hugo executable is also bundled as an npm dependency, so this isn't strictly necesary.

### Installation

To run this site locally for development purposes, clone it to your local machine and run `npm install` to install the site's dependencies.

```bash
git clone git@github.com:Zymbit-Docs/docs.git
cd docs
npm install
```

### Preview changes in development

After you have installed the necessary dependencies, there are a few different commands for running the site locally. This will use the `hugo server` command directly to run a live-reloading development version of the site at <http://localhost:1313/>.

```bash
# npm script command:
npm start

# Underlying native command:
hugo server --disableFastRender --cleanDestinationDir --enableGitInfo --ignoreCache --noHTTPCache
```

### Previewing production

The site rendered by `hugo server` isn't *exactly* the same as what will be deployed for a few reasons:

* The `development` configuration doesn't compress and minify asset files.
* Hugo serves the site from memory in development mode and from disk in production mode.
* Various development/debugging features causes the development mode site to be rendered slightly differently (e.g. sometimes it's possible to scroll past the top of a page when serving directly from Hugo).

To verify that the production version of the site renders as expected, you can run the following command to render the site to disk and serve it locally on <http://localhost:1313/>:

```bash
npm run build:preview
```

If your changes appear when you run in development mode but are unavailable when you build a preview of the site, the modified pages may have `draft: true` set in the front matter or a publication date that's set in the future. To build a preview that includes drafts and future content, you can run:

```bash
npm run build:preview:all
```

### [Advanced] Render to disk with live-reloading

Hugo can render the site to disk and watch for any source changes that should trigger a rebuild. The site's rendered `public/` directory is then served using the `browser-sync` package, which offers live reloads and serves the site on <http://localhost:1313/>.

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
