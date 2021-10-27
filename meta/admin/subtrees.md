# Using `git-subtree` to manage Zymdocsy

Unlike git submodules, which include sub-repositories within a project as a reference to an external commit, git subtrees allow developers to store the files from sub-projects directly within the super-project's git history.

One (overly) simplified way to think about git subtrees is to view commands like `git subtree merge --prefix [subdir]` as roughly equivalent to commands like `git -C [subdir] merge`, where git is run as if it were executed in the `subdir` specified by `-C`. The `git-subtree` command is merely a way to allow a project's git-based dependencies to exist under one file hierarchy and git index.

## Adding a subtree

This section describes the procedure that was used to add the Zymdocsy subtree to this repository.

### Remove old files

The contents of the upstream Docsy repo had already been added to this project directory, so these files needed to be removed. Adding a git subtree at a prefix that has already had content can sometimes have unexpected side effects on later splits, so it is recommended to add subtrees under prefixes that have no been used before.

In this case, `themes/docsy` was removed with the intention of adding the subtree at `themes/zydocsy`:

```bash
git rm -r themes/docsy
```

Result: https://github.com/Zymbit-Docs/docs/commit/f110fd5a2fdb7dc2ef193c274d999f39d588aa85

### Clone from remote

Zymdocsy's repository was added as a remote to the local development repo (a step which would need to be repeated on each fresh clone):

```bash
git remote add zymdocsy git@github.com:Zymbit-Docs/zymdocsy.git
```

Then, the subtree was added under the `themes/zymdocsy` prefix:

```bash
git subtree add --prefix themes/zymdocsy \
    --squash -m "chore: merge zymdocsy upstream back into repo" \
    zymdocsy main
```

Result: https://github.com/Zymbit-Docs/docs/commit/cbcf397256b90c62d403c693b7e2212461dc9339

#### Command explanation

The `git subtree add` functions essentially like the `git clone` command, where the `--prefix` value specifies the directory to clone the repository into. All `git subtree` commands must include a `--prefix [DIR]` value, so the default form of all Zymdocsy related commands is:

```bash
git subtree [SUBCOMMAND] --prefix themes/zymdocsy ...
```

The form of the `git subtree add` command used here is as follows:

```bash
git subtree [<options>] -P <prefix> add <repository> <remote-ref>

    -P, --prefix [DIR]    the name of the subdir to split out
    -m, --message [MSG]   use the given message as the commit message for the merge commit
    --squash              merge subtree changes as a single commit
```

* `<repository>` is a reference to a remote repository, either the git URL or the name of a remote added with `git remote add`.
* `<remote-ref>` should, in general, refer to the branch that you would like to clone from the remote.
* `--prefix` is the location where the sub-project will be cloned.
* `--message` is an optional parameter where an explanation can be added. In general, you can reuse the generic messages shown for each command in this document, but it's also acceptable to omit this argument and use the automatically-generated commit message.
* `--squash` essentially functions in the same way as the equivalent parameter for `git-merge`. If `--squash` is not specified, the sub-projects entire history will be added to the super-project's repository, so ***`--squash` should always be used***.

    From the man page of `git-subtree`:

    > Using this option helps to reduce log clutter. People rarely want to see every change that happened between v1.0 and v1.1 of the library they’re using, since none of the interim versions were ever included in their application.
    >
    > Using --squash also helps avoid problems when the same subproject is included multiple times in the same project, or is removed and then re-added. In such a case, it doesn’t make sense to combine the histories anyway, since it’s unclear which part of the history belongs to which subtree.

## Splitting out changes

There are multiple ways to split a subtree out from the super-project in order to push it to an upstream repository. The first method extracts the subtree to a separate branch, which can then be pushed to a remote origin, while the second method pushes the changes to the remote in one step.

If you have made significant changes, it's useful to extract the subtree before pushing it in order to verify that the result is what was expected.

### Split and push

This process will show how to extract a subtree, verify that it was extracted as expected, and push the result to the remote.

```bash
# Replace the date in the branch name below with today's date.
git subtree split --prefix themes/zymdocsy \
    --rejoin --squash \
    --branch zymdocsy-211027
```

You can then inspect the log to make sure that `git subtree split` behaved as expected; you should only see commits affecting the prefix `themes/zymdocsy` have been added on top of what is currently available upstream:

```shell
❯ git log zymdocsy-211027 --oneline
7b05d88321 (zymdocsy-211027) chore: remove unnecessary files added by upstream
33063b35a4 (zymdocsy/main) chore: vendorize bootstrap
ef79557839 chore: add zymdocsy theme
```

The standard `git push` command can then be used to push the branch with the extract subtree to the remote:

```shell
git push zymdocsy zymdocsy-211027:main
```

Example of a `split` operation that specified the `--rejoin` option: https://github.com/Zymbit-Docs/docs/commit/99f5425dee7b19fcb55aa5847d6550242fa4079a

#### Command explanation

The `git subtree split` reads the super-project's commit history to find commits that apply changes to the directory specified as the `--prefix`. All `git subtree` commands must include a `--prefix [DIR]` value, so the default form of all Zymdocsy related commands is:

The form of the `git subtree split` command used is as follows:

```bash
git subtree [<options>] -P <prefix> split [<local-commit>]

    -P, --prefix [DIR]    the name of the subdir to split out
    -m, --message [MSG]   use the given message as the commit message for the merge commit
    --squash              merge subtree changes as a single commit
    --rejoin              merge the new branch back into HEAD
```

* `[<local-commit>]` allows developers to specify the head of the branch to be extracted. That parameter is not used in this repo.
* `--prefix` is the location containing the subtree to be extracted.
* `--message` isn't used for `split` or `push`, as this specifies the commit message for the subtree's merger back *into* the super project, and the automatically generated message is more appropriate.
* `--squash` collapses the history of our newly extracted branch when it is merged back into the super-project, so ***`--squash` should always be used*** (see the command explanation for `git subtree add` above for more explanation).
* `--rejoin` causes our newly extracted branch to be merged back into the super-project's history. This should also *always* be specified, because the resulting merge commit will be as the fork point for future splits.

    From the man page of `git-subtree`:

    > After splitting, merge the newly created synthetic history back into your main project. That way, future splits can search only the part of history that has been added since the most recent --rejoin.
    >
    > If your split commits end up merged into the upstream subproject, and then you want to get the latest upstream version, this will allow git’s merge algorithm to more intelligently avoid conflicts (since it knows these synthetic commits are already part of the upstream repository).

### Direct push

It is also possible to directly push changes to a subtree without having to `split` it first. However, it may be preferable to push to a non-`main` branch in the `zymdocsy` upstream and then merge that branch into `main` in the upstream repository.

```bash
# Replace the date in the branch name below with today's date.
# Alternatively, it is *possible* to push directly to the remote's `main` branch.
git subtree push --prefix themes/zymdocsy \
    --rejoin --squash \
    zymdocsy zymdocsy-211027
```

#### Command explanation

The explanation of the options and arguments for this command is the same as the explanation above for `git subtree split`.

## Merging upstream changes

Any changes made to the remote repository can be merged back into the subtree. An example of when remote changes are likely to be made that need to be merged back in to the subtree are any changes from Zymdocsy's upstream.

If `google/docsy:master` diverges from `zymbit-docs/zymdocsy:main` and you would like to merge the upstream changes back into the copy of the subtree project, merge the upstream changes into `zymdocsy` using [GitHub's comparison tool](https://github.com/Zymbit-Docs/zymdocsy/compare/main...google:master) or a manual local rebase.

After the upstream changes have been merged into `zymdocsy/main`, you can then pull those changes into the subtree.

### Pulling changes

The `git subtree pull` can be used to pull changes using the same mechanism as the standard `git pull` command:

```bash
git subtree pull --prefix themes/zymdocsy \
    --squash -m "chore: update zymdocsy from upstream" \
    git@github.com:Zymbit-Docs/zymdocsy.git main
```

If `zymdocsy` has been added as a remote in the local repo, it's also possible to merge manually:

```bash
git subtree merge --prefix themes/docsy \
    --squash -m "chore: merge zymdocsy upstream into repo" \
    zymdocsy/main
```

However, before using `git subtree merge`, you should run `git fetch --all`, just as you would need to do when using `git merge` instead of `git pull`.
