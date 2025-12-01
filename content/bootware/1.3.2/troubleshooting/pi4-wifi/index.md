---
title: "Pi4/CM4 Wi-Fi Device Tree Blob Update"
linkTitle: "Pi4/CM4 Wi-Fi: Device Tree Blob Update"
description: "Steps necessary to update the Device Tree Blob file to allow Bootware Wi-Fi endpoint access"
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

2. Copy files into boot partition. If your boot partition is /boot/firmware, copy there instead of /boot.

```bash
sudo cp firmware-master/boot/*2711*.dtb /boot
```

3. Reboot to make sure you can still boot

4. You can cleanup the download files now.

```bash
rm -rf firmware-master
rm master.zip
```

Now you can continue with the [Getting Started](../../getting-started) guide to install and configure Bootware.


