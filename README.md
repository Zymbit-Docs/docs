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
