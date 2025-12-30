---
title: "FAQ and Troubleshooting"
draft: false
images: []
weight: 40
# headless: true
---
### **Troubleshooting Checklist**

Before contacting Zymbit with troubleshooting related questions, please read through the following troubleshooting checklist.

1. Power supply. Most of the problems we see are from a poor power source. Start with a good power supply from the PI foundation or Canakit, not a phone charger. The recommended power for the PI4 is 5V and 3 amps.  For a PI5, the recommended power supply should provide 5V, 5 amps.
2. (For Zymkey, HSM4, HSM6) I2C enabled. Double check that you have enabled the I2C bus. An easy way to check is "ls -l /dev/i2c-1". If /dev/i2c-1 exists, the I2C bus is enabled.
3. apt update and upgrade. Be sure that your software is up to date.
4. Installation. The curl script will reboot your system once completed. After the reboot, the blue LED on your Zymbit device should blink once every 3 seconds. You must get to this step before proceeding to encryption, etc.

If your issue is not related to any of the above list, read through the FAQ below to see if your issue is answered. If you still do not see a solution to your problem, reach out on our [Community Forum](https://community.zymbit.com/). Thank you!

-----

### Latest STABLE Platform and OS Support (December 2025)


|                  Pi Platform:     |    SEN-500/CM5    |  SEN-400/CM4           | Pi5                    |   Pi4             |
|:----------------------------------|:-----------------:|:----------------------:|:----------------------:|:-----------------:|
|                  **Zymbit HSMs:** | **Zymkey,HSM60**  | **Zymkey,HSM60,SCM**   | **Zymkey**             | **Zymkey**        |
| Raspberry Pi OS Bookworm (64-bit) | {{< supported >}} | {{< supported >}} &nbsp; | {{< supported >}} | {{< supported >}} &nbsp; |
| Raspberry Pi OS Bullseye (64-bit) |                   | {{< supported >}} [^1] |                        |  {{< supported >}} [^1] |
| Ubuntu 24.04.3 LTS Noble (64-bit) |{{< supported >}}  | {{< supported >}} &nbsp;     | {{< supported >}} | {{< supported >}} &nbsp; |
| Ubuntu 22.04 LTS Jammy (64-bit)   |                   | {{< supported >}} [^1] |                        |  {{< supported >}} [^1]                  |

{{< supported >}} Full Bootware Support

> NOTICE: Changes from the Pi foundation to the Pi5/CM5 firmware are incompatible with Bootware. Symptom is Bootware Updates cannot access USB Endpoints to get images. You won't see the problem with the 11/19 release. The 11/19 release can be downloaded from here: [Pi5 Raspberry Pi OS Lite 64-bit 2024-11-19](https://downloads.raspberrypi.com/raspios_lite_arm64/images/raspios_lite_arm64-2024-11-19/)

[^1]: For Bootware to use Wi-Fi to retrieve images from remote endpoints on Pi4/CM4 running either Ubuntu 22.04 (jammy) or Bullseye, you must use the latest dtb file, available [here:](/bootware/1.3.2/troubleshooting/pi4-wifi).

-----
### **Release Notes**
-----

#### December 2025
-----

- zkifc
   - Installation script can now set the distribution via an environment variable. This allows pointing a newer distribution to use an older repo. For example, to point any OS at the Zymbit `bookworm` repo, do the following on your Pi,

```
    export distro=bookworm
    curl -fsSL https://s3.amazonaws.com/zk-sw-repo/install_zk_sw.sh | sudo -E bash
```

-----
#### August 2025 
-----
Ubuntu 24.04.3 (Released 8/7/25)
- The Ubuntu team released 24.04.3 (updated Noble) on 8/7/25. The image straight from the Pi Imager can be used. There is no longer a need to use the daily image. 24.04.3 improves hardware support for the Pi5 and CM5. Ubuntu 24.04.3 works with Zymbit products on the platforms noted above (Pi5, CM5, Pi4, CM4).

Bootware® 1.3.2-3
- Bug fixes:
  - #202: Pi5/CM5 with 16GB RAM are showing up as 8GB when booting from u-boot

Bootware® 1.3.2-2
- Bug fixes:
  - #201: Adds Bootware support for Pi5 Rev 1.1 hardware.

-----
#### July 2025 
-----
Bootware® 1.3.2-1
- Features:
  - #189: Add static network configuration option. See [Advanced Networking Options](/bootware/1.3.2/features/static-networking) for details.
  - #190: Add `ignore_low_ram=true` flag. Ignores the low ram check in zboot to download images into the /DATA partition on devices that have less than 3GB RAM space. See [Low Memory Platforms](/bootware/1.3.2/features/lowmem) for details. NOTE: Zymbit recommends always using platforms with at least 4GB RAM.
  - #191: Add feature to sync time from Zymbit HSM in zboot. Also add a flag to override, `disable_cert_time_check=false`. The new feature will try to sync the zboot system clock with the Zymbit HSM, whichever is later. If `disable_cert_time_check=true` and neither the zboot time nor the HSM time is reasonably current, a future time is set. This feature is included to cover situations where certificates need to be provided to bring up Wi-Fi interfaces, which will perform a system time verification before bringing up the wlan0 interface.
- Bug fixes:
  - #197: Buildroot Wi-Fi related firmware added for all platforms. Prevented wlan0 from showing up in zboot for platforms running Ubuntu 22.04.
  - #193: zbcli overrides existing wifi related config values with defaults on some parameters. If the user Save and Exits the `zbcli update-config` menu without touching the wifi related parameters, existing wifi configs would be overriden with defaults. The default values turned off wifi and set the psk hash to an empty string. zbcli now only changes wifi configs when the user touches the wifi configs in the zbcli `update-config` menu.
  - #194: dhcp or ntp timeout defaults were too long. By default both dhcp and ntp retried  up to 30 times at possibly a minute a interval, which could have a user sitting at a screen for 30min - 1 hr. Reduced timeouts to 3 retries.
- Open bugs:
  - #196: overlay .zi images saves files as root regardless of what it was owned by before.
  - #195: If you delete the DATA partition with your update policy not set to BOTH, zboot does not inject the new data key into the non-updated partition's initramfs. If the user switches to the non-updated partition, the data key will return bad passphrase from initramfs. The system will timeout, boot up, and unlock the partition's LUKS volume. Access to the shared LUKS data partition will be unavailable.

-----
#### April 2025 
-----
Bootware® 1.3.1-2
- Bug fixes:
  - #188: `sudo zbcli update-config --update-endpoint https://192.168.42.125/my.zi --update-endpoint-cert myCert.crt` doesn't work. Endpoint certs now work.
  - #187: Bootware: ` --data-part-size-mb` doesn’t apply correctly. Now works either interactively or non-interactively.

-----
#### March 2025 
-----

Bootware® 1.3.1-1
- Features:
  - #182 Add support for Pi Zero 2W (ZYMKEY, HSM4, HSM6)
    - Bookworm 64 bit and Bullseye 64 bit
    - Uses the DATA partition as an alternative for Pis with limited RAM, like the Pi Zero 2W.
    - Slight optimizations on Update writes to the encrypted A/B partitions.
  - #184 `zbcli update` has a new `--no-pre-verify` flag. Normally the zi image is verified in userspace and also within zboot. Setting the `--no-pre-verify` flags skips the verify of the image/endpoint in userspace before launching into zboot, which saves some time. The images are always verified in zboot. WARNING: Setting this flag can lead to lost data, as the verification in zboot may require reformatting to make space for URL endpoints on limited RAM devices.
  - #185 Additional information is logged in /boot/zboot.log.
- Bug fixes:
  - #180: Bootware: zbcli update hostname/password cannot contain an @ character.

Zymbit Driver Package 
- Bug fixes:
  - #186: zkifc: Babbling with time sync issues. Setting the time forward or backwards caused zkifc to think it lost contact with the Zymkey. Babbling messages would result with the potential to fill logs with rapid messages. Babbling messages are now limited, and recovery has been improved. Fixed in zkifc 1.2-37.
- Current Versions:

| Name | Version | Description |
|----|----|----|
| libzk | 1.1-24 | Zymkey Base Communications Library |
| libzymkeyssl | 1.0-12 | Zymkey SSL Engine Library |
| zkapputilslib | 1.1-26 | Zymkey User API |
| zkbootrtc | 1.1-16 | Zymkey RTC retrieval standalone app |
| zkifc | 1.2-37 | Zymkey Interface Connector |
| zkpkcs11 | 1.0-4 | Zymkey PKCS11 Library |
| zksaapps | 1.0-18 | Stand alone zymkey apps |

-----
#### February 2025
-----
Bootware® 1.3.0 Release (1.3.0-1):
- Features:
  - #173 Add support for CM5 (ZYMKEY, HSM4, HSM6)
  - #174 Add second layer key verification of zi image to zboot. NOTE: This additional check requires updating 1.2.2 and earlier images by running `zbcli imager` from version 1.3.0-1. See [1.3.0 upgrade](/bootware/1.3.0/troubleshooting/#release-130-1)
  - #175 Add splashscreen to zboot
- Bug Fixes
  - #171 SAS token truncated at first "="
  - #170 update and update-config displays for DATA partition should reflect already exists
  - #169 zbconfig with blank hostname and password set will change hostname to zymbit-dev
  - #176 wpa_supplicant passthrough - certs were not read properly by zboot

-----
#### December 2024
-----
Standard Product:
- Update SCM pre-installed OS images to latest available matching Pi Imager:
  - Raspberry Pi OS Lite (64-bit) - Bookworm w/ no desktop. Released: 2024-11-19
  - Raspberry Pi OS (Legacy, 64-bit) Lite - Bullseye w/ no desktop. Released: 2024-10-22
  - Ubuntu Server 22.04.5 LTS (64-bit) - Jammy. Released: 2024-09-12

- Confirmed ZYMKEY/HSM4/HSM6 support for CM5 with Bookworm64

Bootware® 1.2.2 Release (1.2.2-1):
- Adds certificate based authentication (dot1x) for ethernet and wifi. Includes method to import wpa_supplicant.conf formatted file.
- Adds support for URLs that include additional parameters after a question mark, such as those used with Azure SAS.
- Allows either HTTPS or HTTP as valid endpoints.
- Supports self-signed HTTPS endpoints.
- Adds new feature to change hostname and specified user password on `zbcli update` post-install.
- Adds new feature in recovery to override recovery mechanisms and "boot up anyway"; clears counters and attempts to boot.
- Adds `-y` option to `zbcli rollback-swap` for non-interactive rollback.
- Adds specifying platform as Pi4 or Pi5 to bootstrap install for DevOps systems that are not running on a real Pi. Allows non-interactive bootstrap of Bootware tools.

#### September 2024
-----

Bootware® 1.2.0 Release (1.2.0-30):
- Adds support for Pi 5
- Adds all new rust-based user interface
- Adds support for HSM4 and HSM6
- u-boot updated to linux 6.6 kernel

#### June 2024
-----

Bootware 1.1 General Platform Support - Along with the SCM-based products, Bootware 1.1 includes cross-platform support for ZYMKEY on CM4 and RPi4.

The Zymbit Products also include Bookworm 64-bit support.

#### Other significant enhancements in Bootware 1.1:

**Issue #142** - FIXED. OS updates that change boot.scr can prevent future boot. Affects Ubuntu. Although the PI version of Ubuntu does not use U-Boot, Ubuntu's dpkg kernel update re-writes the file /boot/firmware/boot.scr. boot.scr was used by Bootware 1.0, and a re-write of the file could leave the system unable to boot. Bootware 1.1 no longer relies on the file. 

**Enhancement** - The common data partition is now encrypted and the LUKS key is locked by the Zymbit HSM.

---

<br>

#### April 2024
-----
Bootware 1.0 is now released for General Availability. Along with Bootware 1.0 GA, The SCM/SEN product line now officially supports both Bullseye 64-bit and Ubuntu 22.04 64-bit.


#### March 2024
-----
Raspberry PI OS updated kernels to 6.6.y on March 12th. The kernel no longer overrides an upstream kernel decision to force the base number of the main GPIO controller to be global GPIO 0. If the ZYMKEY4 WAKE_PIN number is not set, the ZYMKEY will not bind. The install_zk_sw.sh script has been updated to set the WAKE_PIN number for you if it detects a kernel version of 6.6.x or later. If you update the kernel on an existing installation without making the change below, you will see 5 flashes per second continuously.

For RPI4, RPI5, and CM4 platforms, you will need to set the WAKE_PIN in the following manner:

Determine the numbering for GPIO4 by examining /sys/kernel/debug/gpio for the number associated with GPIO4, then set an environment variable in the Zymbit environment variable file:

```bash
sudo su
wake_pin=`grep GPIO4 /sys/kernel/debug/gpio | sed -r 's/[^0-9]*([0-9]*).*/\1/'`
echo "wake_pin=$wake_pin"   # sanity check value is set
echo "ZK_GPIO_WAKE_PIN=$wake_pin" > /var/lib/zymbit/zkenv.conf
systemctl restart zkifc
```

The kernel version can be retrieved with `uname -r`. As of version 6.6.20, the numbering is: RPI4=516 RPI5=575 CM4=516

You do not need to do anything for new installations as the install_zk_sw.sh will take care of things for you.


#### December 2023
-----
We have added support for Bookworm (64-bit) on the Pi5, PI4 and CM4 for the ZYMKEY, HSM4, and HSM6. Follow the Getting Started guides to install and encrypt.

#### October 2023
-----
Secure Compute Module moved from Revision A to Revision B. The Zymbit Driver Package did not change. The root filesystem partitioning changed from 100% of the eMMC to 50% of the eMMC (encrypted). This was done to accommodate future support for Bootware, which is available in a Preview mode. A utility is included to repartition to 100% (encrypted) if required.



