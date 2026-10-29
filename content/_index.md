---
title: "Zymbit Documentation"
linktitle: "Zymbit Documentation"
description: "Zymbit Documentation"
aliases:
    - /getting-started
date: 2020-10-06T08:47:36+00:00
lastmod: "2026-10-29"
draft: false
images: []
weight: 8
layout: single
---

Welcome to Zymbit’s Documentation Site! Here, you will find all the resources you need to learn about and to use all Zymbit hardware and software.

{{% callout note %}}
Recent Updates
#### October 2026:
- Release of Zymbit Driver Package 2.0.  This is the first overall update to all of the Zymbit Driver Packages since 2025. Consider it a migration, not a routine update. Major feature changes:
  - Adds support for the production ZYMKEY5 (no Bootware support)
  - Adds support for Ubuntu 26.04 (resolute) (no Bootware support)
  - Completely re-vamped packaging and installation; no longer uses install_zk_sw.sh script method. Installation is purely apt package based. Running apt upgrade on a device still using zk-sw-repo will not move it to 2.0.
  - Deprecates support for Ubuntu 22.04 (jammy), Debian 11 (bullseye) and 32-bit ARM. 
    Details: [October 2026 Update](october-2026)
#### June/July 2026:
- Added trixie support for Zymbit Driver Package (not Bootware)
- Minor update to Bootware 1.3.2 (stable)
  - 1.3.2-4: **Issue #211** Add [ability to set wake_pin](bootware/1.3.2/features/wake_pin) for Bootware via zbconfig.
#### February 2026:
- Release of Bootware 2.0 Beta - limited platform support (Pi5 only), not for production use.
  - Integration with Pi's Secure Boot
  - Full boot artifact isolation
  - Bootware bug fixes
- Update to Zymbit Driver Package
  - PKCS11 bug fix for 64-bit OS builds

{{% /callout %}}


#### Latest STABLE Platform and OS Support

|                                   |    SEN-500/CM5    |  SEN-400/CM4           | Pi4                    |   Pi5             | 
|:----------------------------------|:-----------------:|:----------------------:|:----------------------:|:-----------------:|
|                  **Zymbit HSMs:** | **Zymkey,HSM60**  | **Zymkey,HSM60,SCM**   | **Zymkey**             | **Zymkey**        |
| Raspberry Pi OS Trixie (64-bit) | {{< partially-supported >}} | {{< partially-supported >}} &nbsp; | {{< partially-supported >}} &nbsp; | {{< partially-supported >}} |
| Raspberry Pi OS Bookworm (64-bit) | {{< supported >}} | {{< supported >}} &nbsp; | {{< supported >}} &nbsp; | {{< supported >}} |
| Raspberry Pi OS Bullseye (64-bit) |                   | {{< supported >}} [^1] | {{< supported >}} [^1] |                   |
| Ubuntu 26.04 LTS Noble (64-bit) |{{< partially-supported >}}  | {{< partially-supported >}} &nbsp;     | {{< partially-supported >}} &nbsp;     | {{< partially-supported >}} |
| Ubuntu 24.04 LTS Noble (64-bit) |{{< supported >}}  | {{< supported >}} &nbsp;     | {{< supported >}} &nbsp;     | {{< supported >}} |
| Ubuntu 22.04 LTS Jammy (64-bit)   |                   | {{< supported >}} [^1] | {{< supported >}} [^1] |                   |

{{< supported >}} Full Bootware 1.3.2 Support

{{< partially-supported >}} Bootware Not Supported

> NOTICE: Changes from the Pi foundation to the Pi5/CM5 firmware are incompatible with Bootware. Symptom is Bootware Updates cannot access USB Endpoints to get images. You won't see the problem with the 11/19 release. The 11/19 release can be downloaded from here: [Pi5 Raspberry Pi OS Lite 64-bit 2024-11-19](https://downloads.raspberrypi.com/raspios_lite_arm64/images/raspios_lite_arm64-2024-11-19/)

Contact [support](support@zymbit.com) for PiZero 2W.

[^1]: For Bootware to use Wi-Fi to retrieve images from remote endpoints on Pi4/CM4 running either Ubuntu 22.04 (jammy) or Bullseye, you must use the latest dtb file, available [here:](//bootware/1.3.2/troubleshooting/pi4-wifi).

-----
#### October 2026 
-----

Zymbit Driver Package 2.0. The upgrade is more of a migration than a simple upgrade path. Before you upgrade:
  - Check that it runs a supported distribution.
  - On devices already set up with install_zk_sw.sh, back up /var/lib/zymbit.
  - Plan to rebuild applications built against the old Zymkey API libraries.

| **Z****y****mb****it ****Driver Package 2.0 is a migration, not a routine update.** It moves devices from the heterogeneous, distribution-specific legacy APT repositories to a common new APT repository, renames and splits several packages, and drops Ubuntu 22.04, Debian 11 and 32-bit ARM. Running `apt upgrade` on a device still using zk-sw-repo will not move it to 2.0.<br>Before you upgrade a device:<br>• Check that it runs a [supported distribution](#m6e99mv1xre.897).<br>• On devices set up with `install_zk_sw.sh`, back up `/var/lib/zymbit`.<br>• Plan to rebuild applications built against the old Zymkey API libraries.<br>Then follow the [install steps](#m6e99mv1xre.3901) below. |
| --- |

## What's New?

Zymbit Driver Package 2.0 makes Zymbit software install and update like any other package on your system: one signed apt repository, production ZYMKEY5 support, and Ubuntu 26.04 LTS out of the box.

- **Install and update with apt.** Add the Zymbit repository once, and every Zymbit package installs and stays current through standard apt commands, alongside the rest of your system. No more `install_zk_sw.sh` script.&#32;
- **Production-ready ZYMKEY5.** Production ZYMKEY5 adapters now identify as zymkey5, replacing the pre-production hsm6 name. Zymbit Driver Package 2.0 is required for adapters identifying as zymkey5 and is backwards compatible withe adapters identifying as hsm6.
- **Ready for Ubuntu 26.04 LTS.** zkifc supports the new GPIO character-device interface that replaces sysfs GPIO in Ubuntu 24.04, so you can move your fleet to the latest LTS.
- **Install only what you need.** The Zymkey app utilities API is split into separate runtime, development and Python packages. Production devices need no longer install development headers and utilities.
- **Python API as a native package.** python3-zku installs with apt like everything else and automatically replaces the old pip package.&#32;
- **Build your apps the standard way.** Native libraries now install to standard multiarch-aware locations with versioned names, and ship with pkg-config and CMake helpers. Applications built against the old libraries need a rebuild; see Known Issues.

## Supported platforms

Driver Package 2.0 supports 64-bit ARM (arm64/aarch64) only. 32-bit ARM (armhf) packages are no longer built.

| Distribution | Codename | Status |
| --- | --- | --- |
| Ubuntu 26.04 LTS | resolute | New |
| Ubuntu 24.04 LTS | noble | Supported |
| Ubuntu 22.04 LTS | jammy | Dropped |
| Debian 13 | trixie | Supported |
| Debian 12 | bookworm | Supported |
| Debian 11 | bullseye | Dropped |

Ubuntu 22.04 (jammy) and Debian 11 (bullseye) are no longer supported because the packages require glibc 2.36 or newer. Devices on 22.04 should stay on the zk-sw-repo packages or upgrade to Ubuntu 24.04. Devices on bullseye should stay on the zk-sw-repo packages or upgrade to Debian 12 (bookworm).

## Zymbit Driver Package 2.0 versions

All packages now come from one signed repository, `https://zk-repo.s3.amazonaws.com/debian/` (suite `stable`), shared by every supported distribution. **Driver Package 2.0** names this set of packages as a whole. Each package keeps its own version number, listed below. Previous versions are the newest from the legacy zk-sw-repo repository.

| Package | Previous version | New version | Notes |
| --- | --- | --- | --- |
| zymbit-repo | — | 1.0-1 | New. Configures the APT source and installs Zymbit GPG signing key. |
| zkifc | 1.2-38 | 2.0.0-1 | Now includes libzk; replaces the libzk package. |
| libzk | 1.1-26 | — | Removed; merged into zkifc. |
| zkapputilslib | 1.1-27 | — | Removed; split into the following four libzkapputils\* packages. |
| libzkapputils | — | 1.2.0-10 | New. C library.. Needed to run user-built programs which utilize the Zymkey API. |
| libzkapputils-c++ | — | 1.2.0-10 | New. C++ library, replaces zkapputilslib. Needed to run user-built programs which utilize the C++ bindings to the Zymkey API. |
| libzkapputils-dev | — | 1.2.0-10 | New. C headers. Only necessary on systems being used to build programs with the Zymkey API.&#32; |
| libzkapputils-c++-dev | — | 1.2.0-10 | New. C++ headers. Only necessary on systems being used to build programs with the C++ bindings to the Zymkey API. |
| python3-zku | — | 1.2.0-10 | New. Python bindings to the Zymkey API. Replaces the pip zku package. |
| libzymkeyssl | 1.0-13 | 2.0.0-1 | OpenSSL engine 3.x support only. OpenSSL 4.x not supported. |
| zkbootrtc | 1.1-16 | 1.1.17-5 | Zymbit real-time clock synchronization service. |
| zkpkcs11 | 1.0-4 | 1.3.0-6 | PKCS#11 softhsm-util style utility using the HSM for additional security. |
| zksaapps | 1.0-18 | 2.0.0-1 | Standalone apps used for LUKS encryption process |

## What's new

| Package | Changes |
| --- | --- |
| zymbit-repo | New. Adds the Zymbit apt source (`/etc/apt/sources.list.d/zymbit.sources`) and signing key, and removes the legacy zk-sw-repo source. Offers an opt-in beta channel. |
| zkifc | Supports Ubuntu 26.04, where sysfs GPIO is removed. Includes libzymkey, so the separate libzk package is no longer installed. Service and udev rules now install under `/usr/lib/systemd/system` and `/usr/lib/udev/rules.d`. |
| libzkapputils, libzkapputils-c++ | Replace zkapputilslib. Libraries are in `/usr/lib/aarch64-linux-gnu` with versioned names: `libzk_app_utils.so.1` and `libzkAppUtilsClassCPP.so.1`. |
| libzkapputils-dev, libzkapputils-c++-dev | New development packages with headers, pkg-config files (`zkapputils`, `zkapputils-c++`) and CMake packages (`zkAppUtils`, `zkAppUtilsCXX`). |
| python3-zku | Replaces the `zku` pip package (removes it zku when installed). Example scripts move to `/usr/share/zymkey/examples`. |
| libzymkeyssl | The OpenSSL 3.x engine is now `/usr/lib/aarch64-linux-gnu/libzymkey_ssl.so`, linked into the OpenSSL engines directory as `libzymkey_ssl.so`. It was previously copied there as `zymkey_ssl.so`. |
| zkpkcs11 | The module is now `/usr/lib/aarch64-linux-gnu/libzk_pkcs11.so`. Adds `/etc/zk_pkcs11.conf.sample` and a `zk_pkcs11` system group for token access. |
| zksaapps | Standalone apps used for encryption. Tools install to `/usr/sbin`. |
| zkbootrtc | Real time Clock sync service. Service installs under `/usr/lib/systemd/system`. |

## Install and upgrade

Installing the `[zymbit-repo` package](https://zk-repo.s3.amazonaws.com/zymbit-repo.deb) switches a device to the new repository; after that, every Zymbit package installs and updates through APT. This works the same for new installs and for devices already using zk-sw-repo.

1. Pull down the installation package, `zymbit-repo`. The `-J` option tells `curl` to automatically save the file under the version name reported by the download server; e.g.: `zymbit-repo_1.0-1_all.deb`:

   ```bash
   curl -fsSLOJ https://zk-repo.s3.amazonaws.com/zymbit-repo.deb
   ```
2. Install the repository package. This will configure APT sources and import Zymbit's GPG signing key. By default, it installs without asking anything and leaves beta updates off. Removing this package later will remove Zymbit's repository from APT and clear the GPG key from the system's trusted keyring, but will leave behind any other Zymbit packages that have been installed on the system. Those must be removed explicitly.

   ```bash
   sudo apt install ./zymbit-repo_*_all.deb
   ```

   The beta-updates question is asked only at debconf priority medium or lower. To be asked, install with:

   ```bash
   sudo DEBIAN_PRIORITY=medium apt install ./zymbit-repo_*_all.deb
   ```

   To opt in without a prompt, for example in unattended installs, set the answer before installing:

   ```bash
   sudo debconf-set-selections <<< "zymbit-repo zymbit-repo/enable-beta-updates boolean true"
   ```

   To change the answer later, run `sudo dpkg-reconfigure zymbit-repo`, which always asks.

   This adds `/etc/apt/sources.list.d/zymbit.sources` and the Zymbit signing key, and removes the old zk-sw-repo entry from `/etc/apt/sources.list.d/zymbit.list`.
3. Refresh the package lists:

   ```bash
   sudo apt update
   ```
4. In order to communicate with the Zymkey, the host's I2C interface must be enabled. On Ubuntu, this is the case by default. On Debian (Raspberry Pi OS), this can be done via the following command:

   ```bash
   sudo raspi-config nonint do_i2c 0
   sudo reboot
   ```
5. Install the packages needed for the intended use case. Necessary dependencies from Zymbit and the OS distribution will be automatically installed. On a device previously configured via the legacy `install_zk_sw.sh`, backup `/var/lib/zymbit` before proceeding. New devices, or devices that do not have this file, do not need to take any action.&#32;
   1. For base functionality of the Zymkey, including disk encryption, install the following packages, then reboot.&#32;

      ```bash
      sudo apt install zkifc zksaapps
      ```
   2. To use the Zymkey's OpenSSL engine backend and SoftHSM, run

      ```bash
      sudo apt install zkifc libzymkeyssl zkpkcs11
      ```
   3. &#32;To use the python bindings, run

      ```bash
      sudo apt install zkifc python3-zku
      ```
   4. To run programs linked against Zymbit's zkapputils library, run

      ```bash
      sudo apt install zkifc libzkapputils
      # OPTIONAL: to make use of the C++ API, run
      # sudo apt install zkifc libzkapputils-c++
      ```
   5. &#32;To build programs using libzkapputils, install the `-dev` variants of the above `libzkapputils` packages. Container and/or cross-compilation environments will likely need to skip the automatic installation of `zkifc`, which fails without access to a Pi's hardware I2C bus.

      ```bash
      sudo apt install zkifc libzkapputils[-c++]-dev
      # to skip zkifc installation, run
      sudo apt install --no-install-recommends libzkapputils[-c++]-dev
      ```

The new packages replace the old ones themselves: when applicable, `apt` removes `libzk` and `zkapputilslib` as part of the install and `python3-zku` removes the `zku` package installed with `pip`.

## Known issues

- **Applications built against zkapputilslib must be rebuilt.** The old libraries had unversioned names (`libzk_app_utils.so`, `libzkAppUtilsClassCPP.so`). Rebuild against the new packages. See \[LINK TO API DOCS' INSTRUCTIONS FOR USING CMAKE/PKG-CONFIG HELPERS\]
- **Update PKCS#11 configurations that name old paths.** Configurations that load the PKCS#11 module from `/usr/lib/libzk_pkcs11.so` must point to the new names in `/usr/lib/aarch64-linux-gnu/libzk_pkcs11.so`. (`zk_pkcs11-util` does this automatically.)
- **Back up your PKCS#11 configuration before upgrading.** The token directory stays at `/var/lib/zymbit/zk_pkcs11/tokens/`, so existing tokens carry over. As a precaution, keep a copy of `/etc/zk_pkcs11.conf` and your tokens before upgrading.
- **python3-zku leaks memory.** Calls that return data from the Zymkey do not free the library's buffer. `lock` and `unlock` together lose about 1.6 KB per call, so long-running Python services grow over time. C and C++ applications that free returned buffers are not affected. This was also true of the legacy zku pip module.
- **libzy****m****keyssl**. Only supports OpenSSL ENGINE using the EC\_KEY\_METHOD interface; runs on OpenSSL 3.0 through 3.x. Not supported on OpenSSL 4.0. Support for 3.5 LTS runs to 2030.


-----
#### February 2026 
-----

#### Bootware 2.0 Beta Platform Support

|                                   |   Pi5             |
|:----------------------------------|:-----------------:|
|                  **Zymbit HSMs:** | **Zymkey**        |
| Raspberry Pi OS Bookworm (64-bit) | {{< supported >}} |
| Ubuntu 24.04.3 LTS Noble (64-bit) |{{< supported >}}  |

- Features
  - Signed Boot Images: Provide known-good boot.img support for use with Bootware on Raspberry Pi devices to control the boot artifacts. Controlling boot artifacts by implementing the above will allow secure update paths for OS changes, kernel changes, overlay changes, eliminating the chance of Bootware no longer functioning after update. Images securely signed with Bootware.
  - Secure Boot: Seamless integration of Raspberry Pi's Secure Boot process into Bootware, ensuring only trusted software can run on the device. All  except SCM.

- Limitations
  - Platform support limited to Pi5.
  - Operating Systems NOT fully supported : Trixie, Bullseye, Jammy (Ubuntu 22)
  - Requires a clean Bootware install of Beta 2.0.0 - cannot upgrade from an existing Bootware 1.3.2.

- Bug fixes
  - #208: zbcli update-config doesn't allow you to clear wifi SSID and Passphrase, takes "" as valid characters.
  - #207: Bootware: replace ext2 with ext4; add fsck whenever booting through zboot.
  - #205: zbcli update-config cli errors off with `Invalid Parameter: user`. Workaround is to provide one option at a time.
  - #200: zbcli update confirmation screen indicates password has been set to change when it hasn't

- zkifc
   - zkpkcs11 package build fixed for 64-bit OSs


-----
#### December 2025
-----

- Released HSM 60 - Security Module for Pi Compute Modules
- Released ZYMKEY5 - Plug-in hardware security module (for Raspberry Pi).

- zkifc
   - Installation script can now set the distribution via an environment variable. This allows pointing a newer distribution to use an older repo. For example, to point any OS at the Zymbit `bookworm` repo, do the following on your Pi,

```
    export distro=bookworm
    curl -fsSL https://s3.amazonaws.com/zk-sw-repo/install_zk_sw.sh | sudo -E bash
```

Bootware® 1.3.2-3
- Open bugs:
  - #208: zbcli update-config doesn't allow you to clear wifi SSID and Passphrase, takes "" as valid characters.
  - #205: zbcli update-config cli errors off with `Invalid Parameter: user`. Workaround is to provide one option at a time.
  - #200: zbcli update confirmation screen indicates password has been set to change when it hasn't
  - #199: Multiple copies of rollback message in MOTD. Also refers to rollback as rollover. 
  - #196: overlay .zi images saves files as root regardless of what it was owned by before.
  - #195: If you delete the DATA partition with your update policy not set to BOTH, zboot does not inject the new data key into the non-updated partition's initramfs. If the user switches to the non-updated partition, the data key will return bad passphrase from initramfs. The system will timeout, boot up, and unlock the partition's LUKS volume. Access to the shared LUKS data partition will be unavailable.

-----
#### Previous Release Notes are in the [Troubleshooting](troubleshooting) section.
-----
<br>

