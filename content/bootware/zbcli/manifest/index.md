---
title: "zbcli manifest"
linkTitle: "manifest"
description: Configures Bootware® overlay image update; edits manifest files
date: "2024-08-14"
lastmod:
draft: false
images: []
type: docs
layout: single
weight: 60
toc: true

---

-----

## `zbcli manifest`

### Description

Requires superuser privileges.

Configures bootware overlay manifest updates. Overlay images provide a way to selectively add and delete files or directories from your deployed images.

Selecting the "Overlay image from files added with zbcli manifest" option in the [Imager](../imager) will create an Overlay zi image using the contents of the file additions and deletions manifests.

### Usage

```
zbcli manifest <COMMAND>

Commands:
  add           Add file/directory to overlay update manifest. These files are added during an update
  delete        Add file/directory to overlay deletions manifest. These files are deleted during an update
  remove-entry  Remove file/directory from both manifests
  clear-all     Clear all entries in the manifest and deletions list
  print         Print the additions and deletions manifests
  help          Print this message or the help of the given subcommand(s)

Options:
  -h, --help  Print help

```

### Additions manifest
Entries in the additions manifest are absolute paths to files which reside on the current filesystem. When creating an overlay image via the Imager, these will be added to the resulting zi image and placed into the target filesystem during the [update](../update) process.

### Deletions manifest
Entries in the additions manifest are absolute paths to files which may or may not reside on the current filesystem. When creating an overlay image via the Imager, a list of these file names will be included in the resulting zi image, and removed (if present) from the target filesystem during the [update](../update) process.

### More information

See [Overlay updates](../../features/overlays) for more information.


