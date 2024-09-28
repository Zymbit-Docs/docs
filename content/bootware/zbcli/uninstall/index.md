---
title: "zbcli uninstall"
linkTitle: "uninstall"
description: "Uninstalls Bootware tools and artifacts"
date: "2024-08-14"
lastmod: "2024-09-16"
draft: false
images: []
type: docs
layout: single
weight: 70
toc: true

---

-----


## `zbcli uninstall`


### Description

Requires superuser privilege. 

Uninstalls Bootware, returning to the standard linux boot process. The uninstall process will leave you in the current encrypted active partition and preserve the contents of that partion as well as the overall partition layout.

### Usage 

```
zbcli uninstall [OPTIONS]

Options:
  -y, --yes   Says `yes` to all prompts. This includes rebooting your system
  -h, --help  Print help
```

The script will confirm you would like to uninstall the bootware scripts and artifacts, as well as a required reboot.


### See also

[zbcli install](../install)

