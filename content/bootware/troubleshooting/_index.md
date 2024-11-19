---
title: "Troubleshooting and FAQ"
linkTitle: "Troubleshooting/FAQ"
description: Collection of Bootware troubleshooting tips and FAQ items
lastmod: "2024-10-29"
draft: false
images: []
weight: 50
toc: true

---

-----
### Troubleshooting tips and FAQ


#### Supported Platforms and Operating Systems

| Platform | Zymbit Module | OS Support |
| ----- | ----- | ----- |
| CM4 | SCM | Bookworm 64-bit, Bullseye 64-bit, Ubuntu 22.04 (jammy) |
| CM4 | ZYMKEY4, HSM4, HSM6 | Bookworm 64-bit, Bullseye 64-bit, Ubuntu 22.04 (jammy) |
| Pi4 | ZYMKEY4, HSM4, HSM6 | Bookworm 64-bit, Bullseye 64-bit, Ubuntu 22.04 (jammy) |
| Pi5 | ZYMKEY4, HSM4, HSM6 | Bookworm 64-bit |

> It is highly recommended to use a Pi with at least 4GB of RAM. Bootware requires approximately 700MB of RAM overhead for image verification and encryption. For HTTPS endpoints, the image must be 700MB smaller than your total RAM.

#### Pre-installed SCM Operating Systems

The SCM ships with a pre-installed with the following options for Operating System:

* Raspberry Pi OS Lite (bookworm 64bit)
* Raspberry Pi OS Lite (bullseye 64bit)
* Ubuntu Server LTS 22.04 (jammy 64bit)

{{< callout notice >}}
The SCM pre-installed image is encrypted and cannot be replaced via `rpiboot`. Once Bootware is installed, Bootware can install new images based off Bookworm, Bullseye or Jammy in the Zymbit `zi` image format. See the [Getting Started](../getting-started) section and the [zbcli update](../zbcli/update) tool.

Important: The CM4/SCM firmware must include bootloader version 2023/01/11 or later in order to work with Ubuntu 22.04. The version can be verified with the `vcgencmd bootloader_version` command. The firmware is not field upgradeable. If you have a CM4/SCM with an earlier version of the bootloader and need to run Ubuntu 22.04, please contact support@zymbit.com.

{{< /callout >}}

### Precautions

- Important boot files to not delete.
    - Boot.scr
    - zboot.enc
    - u-boot.bin
    - config.txt
    - [After bootware update] usr-kernel.enc
    - [Before bootware] cmdline.txt
    - [Before bootware] kernel8.img for rpiOS and vmlinuz for ubuntu

- The `/boot` filesystem should be partitioned for 512MB of space or more. Our default configuration as shipped uses a `/boot` partition of 512MB. Ubuntu in particular creates backups of all files on updates that may exceed free space with Bootware.
- In config.txt, otg_mode=1 cannot be set. DWC2 needs to be enabled. This is set at our factory and by bootware (and is the default with ubuntu), but if changed, the system will not boot.
- Non Bootware: Ubuntu requires the initrd.img on the system to boot up. Be wary of replacing this file or removing it.
- Be cautious around the policies set in the supervised boot and the files put in the manifest. This follows hardware not images. This also applies to the other tamper policies.

### Issues

#### Release 1.2.0-29

*  *Issue #167:*  Syncing salt with the root filesystem after bootware update. Applies to Production Mode only.

    Bootware update in zboot doesn't sync up the good salt to the root filesystem after a full image update. When the device is put into production mode, it will reject bad salts and stop regenerating new ones. When the root filesystem doesn't have the correct salt it causes multiple errors for production mode.

    The ZYMKEY will generate a salt (created from atecc id, rpi cpu id, memory id) in `zkifc`. The ZYMKEY's ATECC will store the latest salt. While in Developer Mode, provided the salt file is not null and is in the correct serial number folder in `/var/lib/zymbit`, it will accept the salt file for opening a session even if it doesn't match the salt stored in the ATECC. In Production Mode, it will be very strict with salt checking.

For encrypted filesystems and Bootware, the salt needs to be synced up to be the same in userspace and the initramfs. The initramfs needs a correct salt to open a session to the ZYMKEY to decrypt the encrypted filesystems. If the ZYMKEY regenerates a new salt in userspace, then the one in the initramfs must be updated as well. Production Mode requires a match. Development Mode is lenient and will not error off.

    Example problem: In previous versions, if a user makes an image on a different Pi and ZYMKEY, then loads the image onto another Pi/ZYMKEY. The salt will not match up after a full image update. `zkifc` in Developer Mode will act without errors; it will regenerate the salt file. In Production Mode, because the salt in initramfs is not updated, the next reboot will fail.

#### Release 1.2.0-28

* *Issue #166:*  `zbcli imager` excluded the create-initramfs script from /etc/zymbit/zboot/scripts. The change to fix Issue #165 (closed) moved create-iniramfs.sh out of the binary and back to the file system, meaning the imager now must include create-initramfs. Fixed in 1.2.0-28.

#### Release 1.2.0-27

* *Issue #163:*  Bootware: 1.2.0 version string changed from 1.2.0-rc.26 to 1.2.0-27.  Note: two small fixes included in the change.
       
   *   #164 Fix to allow https or http. #164 (closed)       
   *   #165 Fix Rearranged how zbcli runs create-initramfs.sh from internally to filesystem (closed)
  
* *Fixed Issue #145:* Fixed in Bootware 1.2: Switching OS with Zymkey does not properly set GPIO WAKE PIN. For instance, if you install on Bookworm, the WAKE PIN is set at installation time to 516. If you then load a bullseye zi, bullseye with older kernels wants the WAKE PIN at 4. Bootware needs to take this into account. Workaround is to setup your Zymkey with the operating system you intend to use and create your Bootware zi image within that OS.

* *Issue #147:* Bootware: Needs to identify the kernel file to be loaded for custom kernels named something other than kernel8.img or vmlinuz. Needed for supporting custom kernel versions. Workaround is to copy or link your custom kernel to either kernel8.img for Raspberry Pi based OS, or vmlinuz for Ubuntu based OS.

### Changes to our standard images

The table below summarizes changes made to the standard image coinciding with the release of Bootware 1.2.

| Default | As Shipped |
|------------------|--------------------------|
| Boot partition of 256MB | 2x Boot partition size - 512MB |
| SSH optionally enabled |SSH with password allowed |
| Hostname is `raspberrypi` | Hostname changed to `zymbit-dev` |
| Default user of `pi` | Default user is `zymbit`. User `pi` removed. Password is set to `zymbit` |

-----

