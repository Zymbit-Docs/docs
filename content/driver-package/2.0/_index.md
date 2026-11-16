---
title: Install Zymbit Driver Package 2.0
linkTitle: Driver Package 2.0
description: "Install or upgrade to Zymbit Driver Package 2.0 with apt, and choose the packages your device needs."
date: "2026-10-29"
lastmod: "2026-11-16"
draft: false
images: []
weight: 15
# toc: true
---


# Zymbit Driver Package 2.0

Zymbit Driver Package 2.0 installs and updates through `apt` like any other package on your system. Installing the `zymbit-repo` package points a device to the Zymbit repository; after that, every Zymbit package installs and updates through `apt`. This works for new installs and for devices already set up with the legacy `install_zk_sw.sh` script.

On a device set up with the legacy `install_zk_sw.sh`, Driver Package 2.0 is a migration, not a routine update. Running `apt upgrade` will not move the device to 2.0; you must follow the installation instructions on this page in order to install the latest packages from Zymbit. 

Before proceeding, confirm your [system is supported](./distro_support/). On a device previously set up with the legacy `install_zk_sw.sh`, Driver Package 2.0 is a migration, not a routine update. Running `apt upgrade` will not move the device to 2.0; you must follow the installation instructions on this page in order to install the latest packages from Zymbit. User with existing Zymbit Driver Package installations should review the [pre-upgrade checklist](pre_upgrade) before proceeding.

## Installation 
### Add the Zymbit repository

1. Download the repository package. The `-J` option saves the file under the versioned name reported by the server, for example `zymbit-repo_2.0-1_all.deb`:

    ```bash
    curl -fsSLOJ https://zk-repo.s3.amazonaws.com/zymbit-repo.deb
    ```

2. Install the repository package. This adds `/etc/apt/sources.list.d/zymbit.sources` and Zymbit's GPG signing key, and removes the legacy zk-sw-repo entry from `/etc/apt/sources.list.d/zymbit.list`:

    ```bash
    sudo apt install ./zymbit-repo_*_all.deb
    ```

3. Refresh the package lists:

    ```bash
    sudo apt update
    ```

Removing `zymbit-repo` later removes the Zymbit repository and signing key, but leaves any other Zymbit packages installed. Remove those explicitly.

#### Beta updates

By default, `zymbit-repo` installs without prompting and leaves beta updates off.

* To be asked during install, run `sudo DEBIAN_PRIORITY=medium apt install ./zymbit-repo_*_all.deb`.
* To opt in without a prompt, for example in unattended installs, set the answer before installing:

    ```bash
    sudo debconf-set-selections <<< "zymbit-repo zymbit-repo/enable-beta-updates boolean true"
    ```

* To change the answer later, run `sudo dpkg-reconfigure zymbit-repo`.

### Enable I2C

The host's I2C interface must be enabled to communicate with the Zymkey. On Ubuntu, it is enabled by default. On Raspberry Pi OS, run:

```bash
sudo raspi-config nonint do_i2c 0
sudo reboot
```

### Install packages for the intended use case

Necessary dependencies from Zymbit and the OS distribution will be automatically installed.

| To use | Install |
| --- | --- |
| Base functionality, including disk encryption | `apt install zkifc zksaapps` |
| The OpenSSL engine and PKCS#11 | `apt install zkifc libzymkeyssl zkpkcs11` |
| The Python API | `apt install zkifc python3-zku` |
| Programs built against the C API | `apt install zkifc libzkapputils` |
| Programs built against the C++ API | `apt install zkifc libzkapputils-c++` |
| Building programs against the C or C++ API | `apt install zkifc libzkapputils-dev` or `libzkapputils-c++-dev` |
| FULL Driver 2.0 suite | `apt install zkifc zksaapps libzymkeyssl zkpkcs11 python3-zku libzkapputils-dev libzkapputils-c++-dev` |

Container and/or cross-compilation environments will likely need to skip the automatic installation of `zkifc`, which fails without access to a Pi's hardware I2C bus:

```bash
apt install --no-install-recommends libzkapputils-dev
```

The new packages replace the old ones: `apt` removes `libzk` and `zkapputilslib` as part of the install, and `python3-zku` removes the `zku` package installed with `pip`. Example scripts are in `/usr/share/zymkey/examples`.

For the full list of package changes and known issues, see the [Driver Package 2.0 release notes](/#november-2026-details).
