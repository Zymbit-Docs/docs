---
title: "zb-install"
linkTitle: "zb-install"
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

## `zb-install`

### Description

Requires superuser privilege.  

Bootstraps the proper binary `zbcli` executable for installation. Can be called via `curl` (normally) or downloaded and run directly.

### Usage

```
zb-install [OPTIONS]

Options:
    --with-hardware-signing
        Choose the zbcli binary that supports hardware signing (SCM, HSM6 only)
    --with-software-signing
        Choose the zbcli binary that supports software signing (all Zymbit products)
    --zb-version <latest|VERSION_TAG>
        Specify the latest version of the zbcli release, or specify a particular version tag
    --rpi-model <rpi4 or rpi5>
        Specify the rpi model. Can be useful if not running natively. 
    -h, --help
        Print help
```

The most straight forward way to get started installing Bootware is to use curl to run the bootstrap install script. The install will identify your Pi and OS and then prompt you if you’d like to include hardware signing. The SCM and HSM6 support hardware signing. All Zymbit products support software signing. 

### To install interactively:

```
curl -sSf https://raw.githubusercontent.com/zymbit-applications/zb-bin/main/install.sh | sudo bash
```

### To install non-interactively:

If you prefer to run non-interactively, download the installer and run directly on your system or in you build environment. You can supply optional arguments for your choices of hardware or software signing, as well as specifying the rpi model if you are not on an actual Pi at the time of install, for instance, if you are building with Pi-Gen in a container.

Download the installer:

```
curl -sSL https://github.com/zymbit-applications/zb-bin/releases/download/installer/installer --output zb-installer
chmod +x zb-installer
```

Run the installer:

```
./zb-install [--with-hardware-signing | --with-software-signing] [--rpi-model <rpi4|rpi5>] [--zb-version <latest|VERSION_TAG>]
```

### OR non-interactively via `curl` with options

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

After running `zb-install`, the next step is almost always to complete the installation of the Bootware tools and artifacts with `zbcli install`.

### See also

[zbcli install](../install)

