---
title: Zymbit Bootware® Uninstall Utility
linkTitle: "zb-uninstall"
lastmod:
#aliases:
#    - /zboot-preview/
date: "2024-04-17"
draft: false
images: []
type: docs
layout: single
weight: 70
toc: true

---

-----


## zb-uninstall.sh


### Description

Requires superuser privilege. Resides in the original bootware untar directory.

Uninstalls Bootware®, returning to the standard linux boot process. The uninstall process will leave you in the current encrypted active partition and preserve the contents of that partion as well as the overall partition layout.

### Usage Example

```bash
cd ~/bootware-1.1
sudo ./zb-uninstall.sh
```

The script will confirm you would like to uninstall the bootware scripts and artifacts, as well as a required reboot.



### See also

[zb-install](../zbinstall)

