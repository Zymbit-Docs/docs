---
title: "install.sh"
linkTitle: "install.sh"
description: Bootstraps the proper binary zbcli executable for installation
date: "2024-12-11"
lastmod: "2024-12-11"
draft: false
images: []
type: docs
layout: single
weight: 10
toc: true

---

-----

## `install.sh`

### Description

Requires superuser privilege.  

Bootstraps the proper binary zbcli executable for installation. Can be called via curl (normally) or downloaded and run directly.

### Usage

```
The most straight forward way to get started installing Bootware is to use curl to run the bootstrap install script. The script will attempt to determine whether you are running on an Pi4/CM4 platform or a Pi5/CM5 platform by examining the /sys directory.
```
### To install interactively:

```
curl -sSf https://raw.githubusercontent.com/zymbit-applications/zb-bin/main/install.sh | sudo bash
```

### To install non-interactively:

- Download the installer from the "releases" section of this repo or build it yourself
- Run:
```
./zb-install [--with-hardware-signing | --with-software-signing] [--rpi-model <rpi4|rpi5>] [--zb-version <latest|VERSION_TAG>]
```

**OR**

Add the `-s` flag to `bash` and specify installer arguments:
```
curl -sSf \
    https://raw.githubusercontent.com/zymbit-applications/zb-bin/main/install.sh \
    | sudo bash -s -- <installer-args>
```

### Example

```bash
curl -sSf  https://raw.githubusercontent.com/zymbit-applications/zb-bin/main/install.sh | sudo bash -s -- --rpi-model rpi4
```

After running `install.sh`, the next command is almost always `zbcli install`.

### See also

[zbcli uninstall](../uninstall)

