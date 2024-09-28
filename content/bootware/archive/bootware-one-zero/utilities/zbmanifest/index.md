---
title: Zymbit Bootware® Overlay Manifest Utility
linkTitle: "zb-manifest"
lastmod:
#aliases:
#    - /zboot-preview/
date: "2024-04-17"
draft: false
images: []
type: docs
layout: single
weight: 50
toc: true

---

-----


## zb-manifest

### Description

Requires superuser privilege.

Utility to perform Bootware® Overlay Manifest Updates. Overlay images provide a way to selectively add and delete files or directories from your deployed images.

### Usage

```
zb-manifest [-a <file_path> ] | [-r <file_path> ] | [-d <file_path> ] | [-p] [-c]


Flags                Description

--------------------------------------------------------------------------------------------------------

-a, --add                   Add file or directory to update manifest

-r, --remove                Remove file or directory from update manifest and deletion list

-d, --delete                Add file or directory to update deletion list

-c, --clear                 Clear all entries in the manifest and deletions list

-p, --print                 Print out the file manifest for additions and deletions


--------------------------------------------------------------------------------------------------------

```

### More information

See [Overlay updates](../../features/overlays) for more information. `zb-manifest` will need a key. The key can either be software-based or hardware-based. See [Signing/Verifying Images](../../features/signing) for more information on keys.


