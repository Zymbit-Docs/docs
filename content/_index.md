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

#### November 2026

* Release of Zymbit Driver Package 2.0.  This is the first overall update to all of the Zymbit Driver Packages since 2025. Consider it a migration, not a routine update. Major feature changes:
    - Adds support for the production ZYMKEY5
    - Adds support for Ubuntu 26.04 (resolute)
    - Completely re-vamped packaging and installation; no longer uses install_zk_sw.sh script method. Installation is purely apt package based. Running apt upgrade on a device still using zk-sw-repo will not move it to 2.0.
    - Deprecates support for Ubuntu 22.04 (jammy), Debian 11 (bullseye) and 32-bit ARM.

    Details: [November 2026 Update](#november-2026-details)

#### June/July 2026

* Added trixie support for Zymbit Driver Package

#### February 2026

* Update to Zymbit Driver Package
    - PKCS11 bug fix for 64-bit OS builds

{{% /callout %}}

#### Zymbit Driver Package platform and OS support

|                                   |    SEN-505/CM5    |  SEN-400/CM4           | Pi4                    |   Pi5             |
|:----------------------------------|:-----------------:|:----------------------:|:----------------------:|:-----------------:|
|                  **Zymbit HSMs:** | **ZYMKEY5/4, HSM60**| **ZYMKEY5/4, HSM60, SCM**| **ZYMKEY5/4**         | **ZYMKEY5/4**     |
| Raspberry Pi OS Trixie (64-bit) | {{< supported label="Zymbit Driver Package 2.0" >}} | {{< supported label="Zymbit Driver Package 2.0" >}} | {{< supported label="Zymbit Driver Package 2.0" >}} | {{< supported label="Zymbit Driver Package 2.0" >}} |
| Raspberry Pi OS Bookworm (64-bit) | {{< supported label="Zymbit Driver Package 2.0" >}} | {{< supported label="Zymbit Driver Package 2.0" >}} | {{< supported label="Zymbit Driver Package 2.0" >}} | {{< supported label="Zymbit Driver Package 2.0" >}} |
| Raspberry Pi OS Bullseye (64-bit) |                   | {{< partially-supported label="Driver Package 1.0 (legacy) only" >}} [^1] | {{< partially-supported label="Driver Package 1.0 (legacy) only" >}} [^1] |                   |
| Ubuntu 26.04 LTS Resolute (64-bit) | {{< supported label="Zymbit Driver Package 2.0" >}} | {{< supported label="Zymbit Driver Package 2.0" >}} | {{< supported label="Zymbit Driver Package 2.0" >}} | {{< supported label="Zymbit Driver Package 2.0" >}} |
| Ubuntu 24.04 LTS Noble (64-bit) | {{< supported label="Zymbit Driver Package 2.0" >}} | {{< supported label="Zymbit Driver Package 2.0" >}} | {{< supported label="Zymbit Driver Package 2.0" >}} | {{< supported label="Zymbit Driver Package 2.0" >}} |
| Ubuntu 22.04 LTS Jammy (64-bit)   |                   | {{< partially-supported label="Driver Package 1.0 (legacy) only" >}} [^1] | {{< partially-supported label="Driver Package 1.0 (legacy) only" >}} [^1] |                   |

{{< supported label="Zymbit Driver Package 2.0" >}} [Zymbit Driver Package 2.0](/driver-package/2.0)

{{< partially-supported label="Driver Package 1.0 (legacy) only" >}} [Driver Package 1.0 (legacy)](/driver-package/1.0/) only

32-bit operating systems are supported by Driver Package 1.0 only. If you have a 32-bit requirement, contact Zymbit support at <support@zymbit.com>.

Contact <support@zymbit.com> for PiZero 2W.

For Bootware support, see [Bootware](/bootware/).

[^1]: Production ZYMKEY5, HSM60, and SEN-505 units require Driver Package 2.0 and cannot be used on Raspberry Pi OS Bullseye or Ubuntu 22.04.

-----

### November 2026 details

-----

#### Zymbit Driver Package 2.0 release notes

{{< callout warning >}}
**Upgrading from the 1.0 Zymbit Driver to Zymbit Driver Package 2.0 is a migration, not a routine update.** It moves devices from the heterogeneous, distribution-specific legacy APT repositories to a common new APT repository, renames and splits several packages, and drops Ubuntu 22.04, Debian 11 and 32-bit ARM. Running `apt upgrade` on a device still using zk-sw-repo will not move it to 2.0.

Before you upgrade a device from 1.0, check that it runs a [supported distribution](/driver-package/2.0/distro_support), then review the [pre-upgrade checklist](/driver-package/2.0/pre_upgrade).

Then, follow the [installation steps](/driver-package/2.0).

**UPGRADING DEPLOYED DEVICES?** Driver Package 2.0 has been tested in upgrade scenarios; however, there is always risk when encrypted in-field devices are being upgraded. Test before deployment and proceed at your own risk. Please contact Zymbit support at <support@zymbit.com> if you need assistance.

**ZYMKEY5 REQUIRES DRIVER 2.0.** Driver Package 2.0 is required for production versions of ZYMKEY5, SEN-505 and HSM60. Earlier units may continue to run on Driver Package 1.0; however, no regular security updates are planned for 1.0 unless a critical or severe issue is discovered.
{{< /callout >}}

#### What's new

Zymbit Driver Package 2.0 includes the following:

* **Install and update with apt.** Add the Zymbit repository once, and every Zymbit package installs and stays current through standard apt commands, alongside the rest of your system. No more `install_zk_sw.sh` script.
* **Production-ready ZYMKEY5.** Production ZYMKEY5 modules now identify as zymkey5, replacing the pre-production hsm6 name. Zymbit Driver Package 2.0 is required for modules identifying as zymkey5 and is backwards compatible with modules identifying as hsm6.
* **Ready for Ubuntu 26.04 LTS.** Adds support for Ubuntu 26.04 LTS, so you can move your fleet to the latest LTS.
* **Install only what you need.** The Zymkey app utilities API is split into separate runtime, development and Python packages. Production devices need no longer install development headers and utilities.
* **Python API as a native package.** python3-zku installs with apt like everything else and automatically replaces the old pip package.
* **Build your apps the standard way.** Native libraries now install to standard multiarch-aware locations with versioned names, and ship with pkg-config and CMake helpers. Applications built against the old libraries need a rebuild; see [Known issues](#known-issues).

#### Moving from ZYMKEY4 to ZYMKEY5

ZYMKEY5 is a significant upgrade to the cryptographic and physical protection capabilities of the ZYMKEY4, bringing in the 500-slot wallet and many new features while keeping the same 10-pin plug-in form factor. Zymbit is no longer able to produce ZYMKEY4 due to part obsolescence. If you have been using ZYMKEY4 in production, please migrate to ZYMKEY5.

In many cases, ZYMKEY5 is a drop-in upgrade for existing ZYMKEY4 designs. However, there are a few differences to keep in mind:

* **ZYMKEY5 includes the full hardware wallet.** BIP32, SLIP39 and 500+ key slots are supported. Hardware protection features include 2 cryptographically encoded perimeter loops, accurate coin cell battery measurement and temperature monitoring. ZYMKEY5 features are now aligned with the HSM series products and the Secure Edge Nodes. All software APIs supported on ZYMKEY4 are supported on ZYMKEY5.
* **ZYMKEY5 no longer has the built-in battery holder.** Instead, there is a standard Pi 5 battery connector ([SM02B-SRSS-TB](https://octopart.com/part/jst/SM02B-SRSS-TB%28LF%29%28SN%29) on the PCB), so an external battery of suitable size and capacity may be used. Rechargeable battery support is available for OEM customers. Do not use a standard Pi rechargeable battery on a standard ZYMKEY5. Zymbit recommends 2032 lithium coin cells with suitable connectors and wiring. The ZYMKEY5 Developer Kit includes the battery holder.
* **ZYMKEY5 does not have the accelerometer.** For applications requiring an accelerometer, please use a suitable, generally available I2C module. The accelerometer was removed because it consumes too much power to be usable while running on the coin cell battery, and cannot maintain a consistent speed while ZYMKEY5 is busy with a longer compute task. Other Zymbit modules and nodes retain the accelerometer (HSM60, SEN-505).
* **ZYMKEY5 uses the new 12-pin I/O connector** ([SM12B-SURS-TF](https://octopart.com/part/jst/SM12B-SURS-TF%28LF%29%28SN%29) on the PCB), which is now standard on all Zymbit products. It replaces the older mini-USB connector for the perimeter loops and adds lines including the LED outputs and the bulk battery monitor. Zymbit is beta testing the additional I/O features; please contact us if your application can benefit. Zymbit now offers a breakout cable and boards to aid with hardware integration.
* **ZYMKEY5 does not use the breakable tab for production mode.** This is now done via a software command; see the [production mode](/tutorials/production-mode/#activate-production-mode) doc page.

#### Installation
See [Install Zymbit Driver Package 2.0](/driver-package/2.0)

#### Zymbit Driver Package 2.0 package versions

All packages now come from one signed repository, `https://zk-repo.s3.amazonaws.com/debian/` (suite `stable`), shared by every supported distribution. **Zymbit Driver Package 2.0** names this set of packages as a whole. Each package keeps its own version number, listed below. Previous versions are the newest from the legacy zk-sw-repo repository.

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

#### Known issues

* **Applications built against zkapputilslib must be rebuilt.** The old libraries had unversioned names (`libzk_app_utils.so`, `libzkAppUtilsClassCPP.so`). Rebuild against the new packages. See the [C](/api/c_api/) and [C++](/api/cpp_api/) API docs for instructions on using the CMake and pkg-config helpers.
* **Update PKCS#11 configurations that name old paths.** Configurations that load the PKCS#11 module from `/usr/lib/libzk_pkcs11.so` must point to the new names in `/usr/lib/aarch64-linux-gnu/libzk_pkcs11.so`. (`zk_pkcs11-util` does this automatically.)
* **Back up your PKCS#11 configuration before upgrading.** The token directory stays at `/var/lib/zymbit/zk_pkcs11/tokens/`, so existing tokens carry over. As a precaution, keep a copy of `/etc/zk_pkcs11.conf` and your tokens before upgrading.
* **libzymkeyssl.** Only supports OpenSSL ENGINE using the EC\_KEY\_METHOD interface; runs on OpenSSL 3.0 through 3.x. Not supported on OpenSSL 4.0. Support for 3.5 LTS runs to 2030.

-----

#### Previous release notes are in [Troubleshooting](troubleshooting/release-notes/)

-----
<br>