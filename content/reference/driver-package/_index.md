---
title: Installing the Zymbit Driver Package
linkTitle: Zymbit Driver Package
description: "Install or upgrade to Zymbit Driver Package 2.x with apt, and choose the packages your device needs."
date: "2026-10-29"
lastmod: "2026-10-29"
draft: false
images: []
weight: 15
toc: true
---

Zymbit Driver Package 2.x installs and updates through `apt` like any other package on your system. Installing the `zymbit-repo` package switches a device to the Zymbit repository; after that, every Zymbit package installs and updates through `apt`. This works the same for new installs and for devices already set up with the legacy `install_zk_sw.sh` script.

## Supported distributions

Zymbit Driver Package 2.x supports 64-bit ARM (arm64/aarch64) only.

| Distribution | Codename | Driver Package 2.x |
| --- | --- | --- |
| Ubuntu 26.04 LTS | resolute | Supported |
| Ubuntu 24.04 LTS | noble | Supported |
| Ubuntu 22.04 LTS | jammy | Not supported |
| Debian 13 (Raspberry Pi OS) | trixie | Supported |
| Debian 12 (Raspberry Pi OS) | bookworm | Supported |
| Debian 11 (Raspberry Pi OS) | bullseye | Not supported |

Ubuntu 22.04 and Debian 11 are not supported because the packages require glibc 2.36 or newer. Devices on those releases, or on a 32-bit OS, should stay on the [Driver Package 1.x packages](legacy/) or upgrade the OS.

Production ZYMKEY5 units identify as `zymkey5`, which Driver Package 1.x does not recognize, so they require Driver Package 2.x. A production ZYMKEY5 cannot be used on Ubuntu 22.04, Debian 11, or a 32-bit OS. Pre-production ZYMKEY5 units, which identify as an HSM6, work with both Driver Package 2.x and 1.x.

Driver Package 2.x is required for production versions of ZYMKEY5, SEN-505, and HSM60.

## Before you upgrade

On a device set up with `install_zk_sw.sh`, Driver Package 2.x is a migration, not a routine update. Running `apt upgrade` will not move the device to 2.x; you must install `zymbit-repo` as described below.

* Back up `/var/lib/zymbit`.
* Keep a copy of `/etc/zk_pkcs11.conf` and your PKCS#11 tokens. The token directory stays at `/var/lib/zymbit/zk_pkcs11/tokens/`, so existing tokens carry over.
* Plan to rebuild applications built against the old Zymkey API libraries. The new libraries have versioned names.

{{< callout warning >}}
**Upgrading deployed devices?** Driver Package 2.x has been tested in upgrade scenarios; however, there is always risk when encrypted in-field devices are being upgraded. Test before deployment and proceed at your own risk. Please contact Zymbit support if in need of assistance.
{{< /callout >}}

The `zymbit-repo` package is aware of the old driver and will generally behave correctly. However, if the system install has been customized, or the distribution is non-standard, the automatic script may not upgrade properly. Always test and check to make sure the upgrade is working as intended.

## Add the Zymbit repository

1. Download the repository package. The `-J` option saves the file under the versioned name reported by the server, for example `zymbit-repo_2.0-1_all.deb`:

    ```bash
    curl -fsSLOJ https://zk-repo.s3.amazonaws.com/zymbit-repo.deb
    ```

1. Install the repository package. This adds `/etc/apt/sources.list.d/zymbit.sources` and the Zymbit signing key, and removes the legacy zk-sw-repo entry from `/etc/apt/sources.list.d/zymbit.list`:

    ```bash
    sudo apt install ./zymbit-repo_*_all.deb
    ```

1. Refresh the package lists:

    ```bash
    sudo apt update
    ```

Removing `zymbit-repo` later removes the Zymbit repository and signing key, but leaves any other Zymbit packages installed. Remove those explicitly.

### Beta updates

By default, `zymbit-repo` installs without prompting and leaves beta updates off.

* To be asked during install, run `sudo DEBIAN_PRIORITY=medium apt install ./zymbit-repo_*_all.deb`.
* To opt in without a prompt, for example in unattended installs, set the answer before installing:

    ```bash
    sudo debconf-set-selections <<< "zymbit-repo zymbit-repo/enable-beta-updates boolean true"
    ```

* To change the answer later, run `sudo dpkg-reconfigure zymbit-repo`.

## Enable I2C

The host's I2C interface must be enabled to communicate with the Zymkey. On Ubuntu, it is enabled by default. On Raspberry Pi OS, run:

```bash
sudo raspi-config nonint do_i2c 0
sudo reboot
```

## Install the packages you need

Dependencies from Zymbit and from the OS distribution install automatically. Reboot after installing.

| To use | Install |
| --- | --- |
| Base functionality, including disk encryption | `sudo apt install zkifc zksaapps` |
| The OpenSSL engine and PKCS#11 | `sudo apt install zkifc libzymkeyssl zkpkcs11` |
| The Python API | `sudo apt install zkifc python3-zku` |
| Programs built against the C API | `sudo apt install zkifc libzkapputils` |
| Programs built against the C++ API | `sudo apt install zkifc libzkapputils-c++` |
| Building programs against the C or C++ API | `sudo apt install zkifc libzkapputils-dev` or `libzkapputils-c++-dev` |

Container and cross-compilation environments have no access to a Pi's I2C bus, so installing `zkifc` there fails. Skip it with `--no-install-recommends`:

```bash
sudo apt install --no-install-recommends libzkapputils-dev
```

The new packages replace the old ones: `apt` removes `libzk` and `zkapputilslib` as part of the install, and `python3-zku` removes the `zku` package installed with `pip`. Example scripts are in `/usr/share/zymkey/examples`.

For the full list of package changes and known issues, see the [October 2026 release notes](/#october-2026-details).
