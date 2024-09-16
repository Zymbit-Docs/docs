---
title: "zbcli manifest"
linkTitle: "manifest"
description: Configures Bootware overlay image update; edits manifest files
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

## zbcli manifest

### Description

Requires superuser privilege.

Utility to perform Bootware Overlay Manifest Updates. Overlay images provide a way to selectively add and delete files or directories from your deployed images.

### Usage

```
zbcli manifest <COMMAND>

Commands:
  add     File or directory to add to update manifest
  remove  File or directory to remove from update manifest and deletion list
  delete  File or directory to delete add to update deletion list
  clear   Clears all entries in the manifest and deletions list
  print   Prints the file manifest for additions and deletions
  help    Print this message or the help of the given subcommand(s)

Options:
  -h, --help  Print help

```

### More information

See [Overlay updates](../../features/overlays) for more information. `zbcli manifest` will need a key. The key can either be software-based or hardware-based. See [Signing/Verifying Images](../../features/signing) for more information on keys.


