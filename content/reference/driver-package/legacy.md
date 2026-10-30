---
title: Installing Zymbit Driver Package 1.x
linkTitle: Driver Package 1.x
description: "Install the legacy Zymbit Driver Package on Ubuntu 22.04, Debian 11, or a 32-bit OS, which Driver Package 2.0 does not support."
date: "2026-10-29"
lastmod: "2026-10-29"
draft: false
images: []
weight: 10
toc: true
---

{{< callout warning >}}
Use these instructions only on a distribution that [Zymbit Driver Package 2.0](../) does not support: Ubuntu 22.04 (jammy), Debian 11 (bullseye), or any 32-bit OS. On every other distribution, install Driver Package 2.0.
{{< /callout >}}

Driver Package 1.x is installed by a setup script that adds the legacy zk-sw-repo `apt` repository and installs the Zymbit packages from it, including:

* Zymbit `.service` files located in the `/etc/systemd/system` directory
* `pip`

Enable the host's I2C interface before you start. On Raspberry Pi OS, run `sudo raspi-config nonint do_i2c 0`.

1. Ensure that `curl` is installed on your host:

    ```bash
    sudo apt install curl
    ```

1. Download and run the setup script:

    ```bash
    curl -G https://s3.amazonaws.com/zk-sw-repo/install_zk_sw.sh | sudo bash
    ```

When the installation completes, the script reboots your device. Example scripts are in `/usr/local/share/zymkey/examples`.

To move a device to Driver Package 2.0 later, upgrade the OS to a supported distribution, then follow the [Driver Package 2.0 install steps](../#add-the-zymbit-repository). Running `apt upgrade` alone does not move a device to 2.0.
