---
title: Zymbit Bootware Install Utility
linkTitle: "zb-install"
lastmod:
#aliases:
#    - /zboot-preview/
date: "2024-04-17"
draft: false
images: []
type: docs
layout: single
weight: 10
toc: true

---

-----


## zb-install.sh


### Description

Requires superuser privilege.  Resides in the original bootware untar directory.

Installs the Bootware sofware.

### Usage

```
zb-install.sh [-y]

-y	Answers Yes to all prompts. Warning: will reboot without confirmation.
```

### Example

```bash
cd ~/bootware-1.0
sudo ./zb-install
```

### See also

[zb-uninstall](../zbuninstall)

