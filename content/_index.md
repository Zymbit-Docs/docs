---
title: "Zymbit Documentation"
linktitle: "Zymbit Documentation"
description: "Zymbit Documentation"
aliases:
    - /getting-started
date: 2020-10-06T08:47:36+00:00
lastmod: "2026-11-06"
draft: false
images: []
weight: 8
layout: single
---

Welcome to Zymbit’s Documentation Site! Here, you will find all the resources you need to learn about and to use all Zymbit hardware and software.

{{% callout note %}}
Recent Updates
#### November 2026:
- Release of Zymbit Driver Package 2.0.  This is the first overall update to all of the Zymbit Driver Packages since 2025. Consider it a migration, not a routine update. Major feature changes:
  - Adds support for the production ZYMKEY5
  - Adds support for Ubuntu 26.04 (resolute)
  - Completely re-vamped packaging and installation; no longer uses install_zk_sw.sh script method. Installation is purely apt package based. Running apt upgrade on a device still using zk-sw-repo will not move it to 2.x.
  - Deprecates support for Ubuntu 22.04 (jammy), Debian 11 (bullseye) and 32-bit ARM. 

    Details: [November 2026 Update](#november-2026-details)

#### June/July 2026:
- Added trixie support for Zymbit Driver Package
#### February 2026:
- Update to Zymbit Driver Package
  - PKCS11 bug fix for 64-bit OS builds

{{% /callout %}}


#### Zymbit Driver Package platform and OS support

|                                   |    SEN-505/CM5    |  SEN-400/CM4           | Pi4                    |   Pi5             |
|:----------------------------------|:-----------------:|:----------------------:|:----------------------:|:-----------------:|
|                  **Zymbit HSMs:** | **ZYMKEY5/4, HSM60**| **ZYMKEY5/4, HSM60, SCM**| **ZYMKEY5/4**         | **ZYMKEY5/4**     |
| Raspberry Pi OS Trixie (64-bit) | {{< supported label="Zymbit Driver Package 2.x" >}} | {{< supported label="Zymbit Driver Package 2.x" >}} | {{< supported label="Zymbit Driver Package 2.x" >}} | {{< supported label="Zymbit Driver Package 2.x" >}} |
| Raspberry Pi OS Bookworm (64-bit) | {{< supported label="Zymbit Driver Package 2.x" >}} | {{< supported label="Zymbit Driver Package 2.x" >}} | {{< supported label="Zymbit Driver Package 2.x" >}} | {{< supported label="Zymbit Driver Package 2.x" >}} |
| Raspberry Pi OS Bullseye (64-bit) |                   | {{< partially-supported label="Driver Package 1.x (legacy) only" >}} [^1] | {{< partially-supported label="Driver Package 1.x (legacy) only" >}} [^1] |                   |
| Ubuntu 26.04 LTS Resolute (64-bit) | {{< supported label="Zymbit Driver Package 2.x" >}} | {{< supported label="Zymbit Driver Package 2.x" >}} | {{< supported label="Zymbit Driver Package 2.x" >}} | {{< supported label="Zymbit Driver Package 2.x" >}} |
| Ubuntu 24.04 LTS Noble (64-bit) | {{< supported label="Zymbit Driver Package 2.x" >}} | {{< supported label="Zymbit Driver Package 2.x" >}} | {{< supported label="Zymbit Driver Package 2.x" >}} | {{< supported label="Zymbit Driver Package 2.x" >}} |
| Ubuntu 22.04 LTS Jammy (64-bit)   |                   | {{< partially-supported label="Driver Package 1.x (legacy) only" >}} [^1] | {{< partially-supported label="Driver Package 1.x (legacy) only" >}} [^1] |                   |

{{< supported label="Zymbit Driver Package 2.x" >}} [Zymbit Driver Package 2.x](/reference/driver-package/)

{{< partially-supported label="Driver Package 1.x (legacy) only" >}} [Driver Package 1.x (legacy)](/reference/driver-package/legacy/) only

32-bit operating systems are supported by Driver Package 1.x only. If you have a 32-bit requirement, contact Zymbit support at <support@zymbit.com>.

Contact <support@zymbit.com> for PiZero 2W.

For Bootware support, see [Bootware](/bootware/).

[^1]: Production ZYMKEY5, HSM60, and SEN-505 units require Driver Package 2.x and cannot be used on Raspberry Pi OS Bullseye or Ubuntu 22.04.

-----
### November 2026 Details
-----


#### Zymbit Driver Package 2.0 release notes

{{< callout warning >}}
**Upgrading from the 1.x Zymbit Driver to Zymbit Driver Package 2.x is a migration, not a routine update.** It moves devices from the heterogeneous, distribution-specific legacy APT repositories to a common new APT repository, renames and splits several packages, and drops Ubuntu 22.04, Debian 11 and 32-bit ARM. Running `apt upgrade` on a device still using zk-sw-repo will not move it to 2.x.

Before you upgrade a device:

- Check that it runs a [supported distribution](#supported-distributions).
- On devices set up with `install_zk_sw.sh`, back up `/var/lib/zymbit`.
- Plan to rebuild applications built against the old Zymkey API libraries.

Then follow the [install steps](#install-and-upgrade) below.

**UPGRADING DEPLOYED DEVICES?** Driver Package 2.x has been tested in upgrade scenarios; however, there is always risk when encrypted in-field devices are being upgraded. Test before deployment and proceed at your own risk. Please contact Zymbit support at <support@zymbit.com> if you need assistance.

**ZYMKEY5 REQUIRES DRIVER 2.x.** Driver Package 2.x is required for production versions of ZYMKEY5, SEN-505 and HSM60. Earlier units may continue to run on Driver Package 1.x; however, no regular security updates are planned for 1.x unless a critical or severe issue is discovered.
{{< /callout >}}

#### What's new

Zymbit Driver Package 2.0 includes the following:

- **Install and update with apt.** Add the Zymbit repository once, and every Zymbit package installs and stays current through standard apt commands, alongside the rest of your system. No more `install_zk_sw.sh` script.
- **Production-ready ZYMKEY5.** Production ZYMKEY5 modules now identify as zymkey5, replacing the pre-production hsm6 name. Zymbit Driver Package 2.x is required for modules identifying as zymkey5 and is backwards compatible with modules identifying as hsm6.
- **Ready for Ubuntu 26.04 LTS.** Adds support for Ubuntu 26.04 LTS, so you can move your fleet to the latest LTS.
- **Install only what you need.** The Zymkey app utilities API is split into separate runtime, development and Python packages. Production devices need no longer install development headers and utilities.
- **Python API as a native package.** python3-zku installs with apt like everything else and automatically replaces the old pip package.
- **Build your apps the standard way.** Native libraries now install to standard multiarch-aware locations with versioned names, and ship with pkg-config and CMake helpers. Applications built against the old libraries need a rebuild; see [Known issues](#known-issues).

#### Moving from ZYMKEY4 to ZYMKEY5

ZYMKEY5 is a significant upgrade to the cryptographic and physical protection capabilities of the ZYMKEY4, bringing in the 500-slot wallet and many new features while keeping the same 10-pin plug-in form factor. Zymbit is no longer able to produce ZYMKEY4 due to part obsolescence. If you have been using ZYMKEY4 in production, please migrate to ZYMKEY5.

In many cases, ZYMKEY5 is a drop-in upgrade for existing ZYMKEY4 designs. However, there are a few differences to keep in mind:

- **ZYMKEY5 includes the full hardware wallet.** BIP32, SLIP39 and 500+ key slots are supported. Hardware protection features include 2 cryptographically encoded perimeter loops, accurate coin cell battery measurement and temperature monitoring. ZYMKEY5 features are now aligned with the HSM series products and the Secure Edge Nodes. All software APIs supported on ZYMKEY4 are supported on ZYMKEY5.
- **ZYMKEY5 no longer has the built-in battery holder.** Instead, there is a standard Pi 5 battery connector ([SM02B-SRSS-TB](https://octopart.com/part/jst/SM02B-SRSS-TB%28LF%29%28SN%29) on the PCB), so an external battery of suitable size and capacity may be used. Rechargeable battery support is available for OEM customers. Do not use a standard Pi rechargeable battery on a standard ZYMKEY5. Zymbit recommends 2032 lithium coin cells with suitable connectors and wiring. The ZYMKEY5 Developer Kit includes the battery holder.
- **ZYMKEY5 does not have the accelerometer.** For applications requiring an accelerometer, please use a suitable, generally available I2C module. The accelerometer was removed because it consumes too much power to be usable while running on the coin cell battery, and cannot maintain a consistent speed while ZYMKEY5 is busy with a longer compute task. Other Zymbit modules and nodes retain the accelerometer (HSM60, SEN-505).
- **ZYMKEY5 uses the new 12-pin I/O connector** ([SM12B-SURS-TF](https://octopart.com/part/jst/SM12B-SURS-TF%28LF%29%28SN%29) on the PCB), which is now standard on all Zymbit products. It replaces the older mini-USB connector for the perimeter loops and adds lines including the LED outputs and the bulk battery monitor. Zymbit is beta testing the additional I/O features; please contact us if your application can benefit. Zymbit now offers a breakout cable and boards to aid with hardware integration.
- **ZYMKEY5 does not use the breakable tab for production mode.** This is now done via a software command; see the [production mode](/tutorials/production-mode/#activate-production-mode) doc page.

#### Supported distributions

Zymbit Driver Package 2.x supports 64-bit ARM (arm64/aarch64) only. 32-bit ARM (armhf) packages are no longer built as standard, due to incompatibilities with older versions of system libraries. If you have a 32-bit requirement, contact Zymbit support at <support@zymbit.com>; case-by-case support may be available.

| Distribution | Codename | Status |
| --- | --- | --- |
| Ubuntu 26.04 LTS | resolute | New |
| Ubuntu 24.04 LTS | noble | Supported |
| Ubuntu 22.04 LTS | jammy | Dropped |
| Debian 13 | trixie | Supported |
| Debian 12 | bookworm | Supported |
| Debian 11 | bullseye | Dropped |

Ubuntu 22.04 (jammy) and Debian 11 (bullseye) are no longer supported because the packages require glibc 2.36 or newer. Devices on 22.04 should stay on the zk-sw-repo packages or upgrade to Ubuntu 24.04. Devices on bullseye should stay on the zk-sw-repo packages or upgrade to Debian 12 (bookworm).

#### Zymbit Driver Package 2.0 package versions

All packages now come from one signed repository, `https://zk-repo.s3.amazonaws.com/debian/` (suite `stable`), shared by every supported distribution. **Zymbit Driver Package 2.x** names this set of packages as a whole. Each package keeps its own version number, listed below. Previous versions are the newest from the legacy zk-sw-repo repository.

| Package | Previous version | New version | Notes |
| --- | --- | --- | --- |
| zymbit-repo | — | 2.0-1 | New. Configures the APT source and installs Zymbit GPG signing key. |
| zkifc | 1.2-38 | 2.0.0-2 | Now includes libzk; replaces the libzk package. |
| libzk | 1.1-26 | — | Removed; merged into zkifc. |
| zkapputilslib | 1.1-27 | — | Removed; split into the following four libzkapputils\* packages. |
| libzkapputils | — | 1.2.2-1 | New. C library. Needed to run user-built programs which utilize the Zymkey API. |
| libzkapputils-c++ | — | 1.2.2-1 | New. C++ library. Needed to run user-built programs which utilize the C++ bindings to the Zymkey API. |
| libzkapputils-dev | — | 1.2.2-1 | New. C headers. Only necessary on systems being used to build programs with the Zymkey API. |
| libzkapputils-c++-dev | — | 1.2.2-1 | New. C++ headers. Only necessary on systems being used to build programs with the C++ bindings to the Zymkey API. |
| python3-zku | — | 1.2.2-1 | New. Python bindings to the Zymkey API. Replaces the old pip zku package. |
| libzymkeyssl | 1.0-13 | 2.0.0-2 | OpenSSL engine 3.x support only. OpenSSL 4.x not supported. |
| zkbootrtc | 1.1-16 | 1.1.17-6 | Zymbit real-time clock synchronization service. |
| zkpkcs11 | 1.0-4 | 1.3.0-7 | PKCS#11 softhsm-util style utility using the HSM for additional security. |
| zksaapps | 1.0-18 | 2.0.0-2 | Standalone apps used for LUKS encryption process |

#### Package changes

| Package | Changes |
| --- | --- |
| zymbit-repo | New. Adds the Zymbit apt source (`/etc/apt/sources.list.d/zymbit.sources`) and signing key, and removes the legacy zk-sw-repo source. Offers an opt-in beta channel. |
| zkifc | Adds support for Ubuntu 26.04. Includes libzymkey, so the separate libzk package is no longer installed. Service and udev rules now install under `/usr/lib/systemd/system` and `/usr/lib/udev/rules.d`. |
| libzkapputils, libzkapputils-c++ | Replace zkapputilslib. Libraries are in `/usr/lib/aarch64-linux-gnu` with versioned names: `libzk_app_utils.so.1` and `libzkAppUtilsClassCPP.so.1`. |
| libzkapputils-dev, libzkapputils-c++-dev | New development packages with headers, pkg-config files (`zkapputils`, `zkapputils-c++`) and CMake packages (`zkAppUtils`, `zkAppUtilsCXX`). |
| python3-zku | Replaces the `zku` pip package (removes zku when installed). Example scripts move to `/usr/share/zymkey/examples`. |
| libzymkeyssl | The OpenSSL 3.x engine is now `/usr/lib/aarch64-linux-gnu/libzymkey_ssl.so`, linked into the OpenSSL engines directory as `libzymkey_ssl.so`. It was previously copied there as `zymkey_ssl.so`. |
| zkpkcs11 | The module is now `/usr/lib/aarch64-linux-gnu/libzk_pkcs11.so`. Adds `/etc/zk_pkcs11.conf.sample` and a `zk_pkcs11` system group for token access. |
| zksaapps | Standalone apps used for encryption. Tools install to `/usr/sbin`. |
| zkbootrtc | Real time Clock sync service. Service installs under `/usr/lib/systemd/system`. |

#### Install and upgrade

Installing the [`zymbit-repo` package](https://zk-repo.s3.amazonaws.com/zymbit-repo.deb) switches a device to the new repository; after that, every Zymbit package installs and updates through APT.

This process works the same for new installs and for devices already using zk-sw-repo. The new installer package is aware of the old driver and will generally behave correctly. However, if the system install has been customized, or the distribution is non-standard, the standard procedure may not upgrade properly.

Always test and check to make sure the upgrade is working as intended. See above for how to back up and preserve critical system information to avoid LUKS key loss.

1. Pull down the installation package, `zymbit-repo`. The `-J` option tells `curl` to automatically save the file under the version name reported by the download server; e.g.: `zymbit-repo_2.0-1_all.deb`:

   ```bash
   curl -fsSLOJ https://zk-repo.s3.amazonaws.com/zymbit-repo.deb
   ```
2. Install the repository package. This will configure APT sources and import Zymbit's GPG signing key. By default, it installs without asking anything and leaves beta updates off. Removing this package later will remove Zymbit's repository from APT and clear the GPG key from the system's trusted keyring but will leave behind any other Zymbit packages that have been installed on the system. Those must be removed explicitly.

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
4. In order to communicate with the Zymkey, the host's I2C interface must be enabled. On Ubuntu, this is the case out of the box. On Debian (Raspberry Pi OS), this can be done via the following command:

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

#### Known issues

- **Applications built against zkapputilslib must be rebuilt.** The old libraries had unversioned names (`libzk_app_utils.so`, `libzkAppUtilsClassCPP.so`). Rebuild against the new packages. See the [C](/api/c_api/) and [C++](/api/cpp_api/) API docs for instructions on using the CMake and pkg-config helpers.
- **Update PKCS#11 configurations that name old paths.** Configurations that load the PKCS#11 module from `/usr/lib/libzk_pkcs11.so` must point to the new names in `/usr/lib/aarch64-linux-gnu/libzk_pkcs11.so`. (`zk_pkcs11-util` does this automatically.)
- **Back up your PKCS#11 configuration before upgrading.** The token directory stays at `/var/lib/zymbit/zk_pkcs11/tokens/`, so existing tokens carry over. As a precaution, keep a copy of `/etc/zk_pkcs11.conf` and your tokens before upgrading.
- **libzymkeyssl.** Only supports OpenSSL ENGINE using the EC\_KEY\_METHOD interface; runs on OpenSSL 3.0 through 3.x. Not supported on OpenSSL 4.0. Support for 3.5 LTS runs to 2030.

-----
#### Previous release notes are in [Troubleshooting](troubleshooting/release-notes/).
-----
<br>

