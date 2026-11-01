# Docs Deployment Workflows

This repo has three workflows. The API reference pages are not built by any of them: their data arrives as ordinary pull requests, opened from each library's repo (see "API reference" in the top-level README).

## `deploy-site.yml`: Deploy docs site via GitHub Pages

Builds the site when changes are merged to `main` and deploys it to GitHub Pages: Hugo, then the Pagefind search index, then an upload to the `github-pages` environment, which only `main` can deploy to. Changes under `.github/` alone do not trigger it.

## `check-pr.yml`: Check pull request

Builds the site, with the search index, for every pull request into `main`, so a change that breaks the build fails on the PR instead of in the deploy after it is merged. The API reference templates fail the build on raw HTML in the text or on a data field they do not render, which makes this the check for the automated API docs PRs.

## `push-staging.yml`: Push branches to staging environment

Push changes to non-`main` branches to a separate staging repository where they will be built and deployed.

This workflow doesn't actually handle the building of the site for the staging repo. Instead, it checks out the working branch and the main branch from the staging repo, copies the workflows from the staging repo to the working branch, and pushes the result to the staging repo. At that point, the workflows that have been added to the newly-pushed staging branch will build the Hugo site and deploy it in-place.

A new branch triggers this twice, once for the branch's creation and once for the push, and the two runs race. One of them can fail with `cannot lock ref ... reference already exists`; the other succeeds, and the staging copy is fine.
