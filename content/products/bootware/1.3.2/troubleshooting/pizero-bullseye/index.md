---
title: "PiZero 2W with Bullseye: Boot Artifact Update"
linkTitle: "PiZero 2W with Bullseye: Boot Artifact Update"
description: "Steps necessary to update Bullseye with new Pi Boot Artifacts prior to installing Bootware"
lastmod: "2025-10-15"
draft: false
images: []
type: docs
layout: single
weight: 0
toc: false
---

-----

1. Pull latest files from github

```bash
 wget https://github.com/raspberrypi/firmware/archive/refs/heads/master.zip
 unzip master.zip
```

2. Copy files into boot partition

```bash
sudo cp firmware-master/boot/*.dtb /boot
sudo cp firmware-master/boot/*.dat /boot
sudo cp firmware-master/boot/*.elf /boot
sudo cp firmware-master/boot/overlays/* /boot/overlays
```

3. Reboot to make sure you can still boot

4. You can cleanup the download files now.

```bash
rm -rf firmware-master
rm master.zip
```

Now you can continue with the [Getting Started](../../getting-started) guide to install and configure Bootware.


