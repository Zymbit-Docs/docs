---
title: "Troubleshooting and FAQ"
linkTitle: "Troubleshooting/FAQ"
description: Collection of Bootware troubleshooting tips and FAQ items
lastmod: "2025-04-13"
aliases:
    - /bootware/troubleshooting/
draft: false
images: []
weight: 50
toc: true

---

-----
### Troubleshooting tips and FAQ

> NOTICE (3/31/2025): Changes from the Pi foundation to the Pi5/CM5 firmware from last week are incompatible with Bootware. We are working on a solution to the problem. Symptom is Bootware Updates cannot access USB Endpoints to get images. You won't see the problem with the 11/19 image, but you will if you upgrade to the latest from last week.

#### Supported Platforms and Operating Systems

|                  Pi Platform:     |    CM5            |  CM4                   | CM4 or Pi4             |   Pi5             | PiZero 2W       |
|:----------------------------------|:-----------------:|:----------------------:|:----------------------:|:-----------------:|:---------------:|
|                  **Zymbit HSMs:** | **Zymkey,HSM4**   |   **SCM**              | **Zymkey,HSM4**        | **Zymkey,HSM4**   | **Zymkey,HSM4** |
| Raspberry Pi OS Bookworm (64-bit) | {{< supported >}} | {{< supported >}}      | {{< supported >}}      | {{< supported >}} | {{< supported >}} |
| Raspberry Pi OS Bullseye (64-bit) |                   | {{< supported >}} [^2] | {{< supported >}} [^2] |                   | {{< supported >}} [^1] |
| Ubuntu 22.04 LTS Jammy (64-bit)   |                   | {{< supported >}} [^2] | {{< supported >}} [^2] |                   | {{< supported >}} |
| Raspberry Pi OS Bullseye (32-bit) |                   |                        | {{< partially-supported >}}       |                   |                 || Ubuntu 22.04 LTS Jammy (32-bit)   |                   |                        | {{< partially-supported >}}       |                   |                 |

{{< supported >}} Full Bootware Support

{{< partially-supported >}} Bootware Not Supported


[^1]: To install Bootware on a PiZero2W running Bullseye64, you need to update the boot artifacts prior to installation. See instructions [here](/bootware1.3.2/troubleshooting/pizero-bullseye).
[^2]: For Bootware to use Wi-Fi to retrieve images from remote endpoints on Pi4/CM4 running either Ubuntu 22.04 (jammy) or Bullseye, you must use the latest dtb file, available [here:](/bootware1.3.2/troubleshooting/pi4-wifi).

> NOTICE: Changes from the Pi foundation to the Pi5/CM5 firmware are incompatible with Bootware. Symptom is Bootware Updates cannot access USB Endpoints to get images. You won't see the problem with the 11/19 release. The 11/19 release can be downloaded from here: [Pi5 Raspberry Pi OS Lite 64-bit 2024-11-19](https://downloads.raspberrypi.com/raspios_lite_arm64/images/raspios_lite_arm64-2024-11-19/)                                                                    

<br>

To install Bootware on a PiZero2W running Bullseye64, you need to update the boot artifacts prior to installation. See instructions [here](pizero-bullseye).

> It is highly recommended to use a Pi with at least 4GB of RAM. Bootware requires approximately 700MB of RAM overhead for image verification and encryption. For HTTPS endpoints, the image must be 700MB smaller than your total RAM.


### Issues and Notes

#### Release 1.3.1-2

- Bug fixes:
  - #188: `sudo zbcli update-config --update-endpoint https://192.168.42.125/my.zi --update-endpoint-cert myCert.crt doesn't work. Endpoint certs now work.
  - #187: Bootware: ` --data-part-size-mb` doesn’t apply correctly. Now works either interactively or non-interactively.

-----

#### Release 1.3.1-1

- Features:
  - #182 Add support for Pi Zero 2W (ZYMKEY, HSM4, HSM6)
    - Bookworm 64 bit and Bullseye 64 bit
    - Uses the DATA partition as an alternative for Pis with limited RAM, like the Pi Zero 2W.
    - Slight optimizations on Update writes to the encrypted A/B partitions.
  - #184 `zbcli update` has a new `--no-pre-verify` flag. Normally the zi image is verified in userspace and also within zboot. Setting the `--no-pre-verify` flags skips the verify of the image/endpoint in userspace before launching into zboot, which saves some time. The images are always verified in zboot. WARNING: Setting this flag can lead to lost data, as the verification in zboot may require reformatting to make space for URL endpoints on limited RAM devices.
  - #185 Additional information is logged in /boot/zboot.log.
- Bug fixes:
  - #180: Bootware: zbcli update hostname/password cannot contain an @ character.

#### Release 1.3.0-1

* Bootware 1.3.0-1 requires updated images. zi images made with 1.2.2-1 or earlier will not work with 1.3.0-1, due to additional signature files in the 1.3.0-1 based images used for secondary verification step. Procedure for updating an image made with 1.2.2-1 or earlier:

  1. Start with Bootware 1.2.2 installed on staging device.
  2. Update staging device with existing 1.2.2 zi image.
  3. Update staging device with Bootware 1.3.0-1
  4. Create a new updated zi image with Bootware 1.3.0-1

#### Release 1.2.2-1

* Incorporates fixes from 1.2.0. There are no known open issues in 1.2.2 at this time.

#### Release 1.2.0-30

*  *Issue #168:*  Correction for change in latest Bookworm 11/19 update. /etc/initramfs-tools/initramfs.conf switched to MODULES=dep, which ended up not including all necessary modules in initramfs images. Bootware will change back to MODULES=most prior to creating images.
*  
#### Release 1.2.0-29

*  *Issue #167:*  Syncing salt with the root filesystem after bootware update. Applies to Production Mode only.

    Bootware update in zboot doesn't sync up the good salt file to the root filesystem after a full image update. When the device is put into Production Mode, it will reject bad salt files, and stop regenerating new ones. When the root filesystem doesn't have the correct salt file, it causes multiple errors for Production Mode.

    The ZYMKEY will generate a salt (created from atecc id, rpi cpu id, memory id) in `zkifc`. The ZYMKEY's ATECC will store the latest salt. While in Developer Mode, provided the salt file is not null and is in the correct serial number folder in `/var/lib/zymbit`, it will accept the salt file for opening a session even if it doesn't match the salt stored in the ATECC. In Production Mode, it will be very strict with salt checking.

    For encrypted filesystems and Bootware, the salt needs to be synced up to be the same in userspace and the initramfs. The initramfs needs a correct salt to open a session to the ZYMKEY to decrypt the encrypted filesystems. If the ZYMKEY regenerates a new salt in userspace, then the one in the initramfs must be updated as well. Production Mode requires a match. Development Mode is lenient and will not error off.

    In previous versions, if a user makes an image on a different Pi and ZYMKEY, then loads the image onto another Pi/ZYMKEY. The salt file will not match up after a full image update. `zkifc` in Developer Mode will act without errors; it will regenerate the salt file. In Production Mode, because the salt in initramfs is not updated, the next reboot will fail.

#### Release 1.2.0-28

* *Issue #166:*  `zbcli imager` excluded the create-initramfs script from /etc/zymbit/zboot/scripts. The change to fix Issue #165 (closed) moved create-iniramfs.sh out of the binary and back to the file system, meaning the imager now must include create-initramfs. Fixed in 1.2.0-28.

#### Release 1.2.0-27

* *Issue #163:*  Bootware: 1.2.0 version string changed from 1.2.0-rc.26 to 1.2.0-27.  Note: two small fixes included in the change.
       
   *   #164 Fix to allow https or http. #164 (closed)       
   *   #165 Fix Rearranged how zbcli runs create-initramfs.sh from internally to filesystem (closed)
  
* *Fixed Issue #145:* Fixed in Bootware 1.2: Switching OS with Zymkey does not properly set GPIO WAKE PIN. For instance, if you install on Bookworm, the WAKE PIN is set at installation time to 516. If you then load a bullseye zi, bullseye with older kernels wants the WAKE PIN at 4. Bootware needs to take this into account. Workaround is to setup your Zymkey with the operating system you intend to use and create your Bootware zi image within that OS.

* *Issue #147:* Bootware: Needs to identify the kernel file to be loaded for custom kernels named something other than kernel8.img or vmlinuz. Needed for supporting custom kernel versions. Workaround is to copy or link your custom kernel to either kernel8.img for Raspberry Pi based OS, or vmlinuz for Ubuntu based OS.

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
### Changes to our standard images

The table below summarizes changes made to the standard image coinciding with the release of Bootware 1.2.

| Default | As Shipped |
|------------------|--------------------------|
| Boot partition of 256MB | 2x Boot partition size - 512MB |
| SSH optionally enabled |SSH with password allowed |
| Hostname is `raspberrypi` | Hostname changed to `zymbit-dev` |
| Default user of `pi` | Default user is `zymbit`. User `pi` removed. Password is set to `zymbit` |

-----

