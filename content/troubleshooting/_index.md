---
title: "FAQ and Troubleshooting"
description: "Start here: a troubleshooting checklist, fixes for common issues, and general FAQs, with links to each product's FAQ and past release notes."
lastmod: "2026-10-31"
draft: false
images: []
weight: 40
toc: true
aliases:
    - /troubleshooting/general/
---

## Troubleshooting checklist

Before contacting Zymbit with troubleshooting related questions, please read through the following troubleshooting checklist.

1. Power supply. Most of the problems we see are from a poor power source. Start with a good power supply from the PI foundation or Canakit, not a phone charger. The recommended power for the PI4 is 5V and 3 amps.  For a PI5, the recommended power supply should provide 5V, 5 amps.
1. (All products except SCM) I2C enabled. Double check that you have enabled the I2C bus. An easy way to check is "ls -l /dev/i2c-1". If /dev/i2c-1 exists, the I2C bus is enabled.
1. apt update and upgrade. Be sure that your software is up to date. On Driver Package 1.x (installed with `install_zk_sw.sh`), `apt upgrade` does not move you to Driver Package 2.0; see [Installing the Zymbit Driver Package](/reference/driver-package/).
1. Installation. Install the Zymbit Driver Package as described in [Installing the Zymbit Driver Package](/reference/driver-package/), then reboot. After the reboot, the blue LED on your Zymbit device should blink once every 3 seconds. You must get to this step before proceeding to encryption, etc.

If your issue is not related to any of the above list, check the common issues and FAQ below, then the FAQ for your product. If you still do not see a solution to your problem, reach out on our [Community Forum](https://community.zymbit.com/). Thank you!

## Common issues

### Updating the Zymbit Driver Package

On Driver Package 2.0, Zymbit packages update with the rest of your system:

```bash
sudo apt update
sudo apt upgrade
```

A device set up with the legacy `install_zk_sw.sh` script is on Driver Package 1.x, and `apt upgrade` will not move it to 2.0. To migrate, follow [Installing the Zymbit Driver Package](/reference/driver-package/). Devices on Ubuntu 22.04, Debian 11, or a 32-bit OS cannot run 2.0; see [Driver Package 1.x](/reference/driver-package/legacy/). Production ZYMKEY5 units identify as `zymkey5`, which Driver Package 1.x does not recognize, so they require Driver Package 2.0.

For current and previous package versions, see the [Driver Package 2.0 release notes](/#october-2026-details).

### Expired GPG key preventing access to the repository

This applies only to devices on Driver Package 1.x, which use the legacy zk-sw-repo repository. On Driver Package 2.0, the signing key is installed by the `zymbit-repo` package.

The Zymbit GPG key expired and was renewed on September 30, 2024. New installations should not have any problems. `apt-get update` may complain that the GPG key has expired. To update your local key, do the following:

```bash
curl -L https://zk-sw-repo.s3.amazonaws.com/apt-zymkey-pubkey.gpg | sudo gpg --dearmor --yes -o /usr/share/keyrings/zymbit.gpg
```

For those of you that are on older installations, make sure the `signed-by` option is included in the `/etc/apt/sources.list.d/zymbit.list`,

This parameter - `[signed-by=/usr/share/keyrings/zymbit.gpg]`

The following will check and fix for you,

```bash
sudo sed -i 's/^deb https/deb [signed-by=\/usr\/share\/keyrings\/zymbit.gpg] https/' /etc/apt/sources.list.d/zymbit.list
```

### Wake pin issues after upgrading to kernel 6.6 or later

On Driver Package 2.0, `apt install zkifc` sets the wake pin for you, so you do not need to set it by hand.

On Driver Package 1.x, the installation script sets it for new installations. If you installed Driver Package 1.x and then upgraded the kernel to 6.6 or later, please note the following.

Raspberry PI OS Bookworm updated the kernel to version 6.6.y in March 2024. The kernel no longer overrides an upstream kernel decision to force the base number of the main GPIO controller to be global GPIO 0. If the WAKE_PIN number is not set, the ZYMKEY will not bind. You will see 5 flashes per second continuously.For RPI4, RPI5, and CM4 platforms, you will need to set the WAKE_PIN in the following manner:

Determine the numbering for GPIO4 by examining /sys/kernel/debug/gpio for the number associated with GPIO4, then set an environment variable in the Zymbit environment variable file:

```bash
sudo su
wake_pin=`grep GPIO4 /sys/kernel/debug/gpio | sed -r 's/[^0-9]*([0-9]*).*/\1/'`
echo "wake_pin=$wake_pin"   # sanity check value is set
echo "ZK_GPIO_WAKE_PIN=$wake_pin" > /var/lib/zymbit/zkenv.conf
systemctl restart zkifc
```

As of Dec 2025, the numbering is:
RPI4=516
RPI5 (1.0)=575
RPI5 (1.1)=573
CM4=516
CM5=573

### CPU scaling governor

We have seen some issues with the scaling cpu governor on the raspberry pi interfere with the i2c bus. This sometimes causes the zymkey to be put into a odd state or return failures from operations that get optimized out by the governor. The raspberry pi sets the **scaling governor** to be "**ondemand**" by default. We recommend switching this mode to "**performance**" to get the best out of the zymkey. Details:

{{< resource_link "reference/cpu-scaling/" >}}
How to set cpu governor to performance.
{{< /resource_link >}}

### Unattended upgrades

When encrypting your rootfs, we highly recommend turning off unattended-upgrades prior to the encryption process. In some cases primarily with Ubuntu, during an update/upgrade after encryption, the `update-initramfs` process may fail and leave the system unable to boot.

To mitigate this issue, remove the service unattended-upgrades:

Check `/etc/apt/apt.conf.d/20auto-upgrades`. Make sure the following lines are set to 0,

```text
APT::Periodic::Update-Package-Lists "0";
APT::Periodic::Unattended-Upgrade "0";
```

Stop and remove the unattended-upgrade service:

```bash
sudo systemctl stop unattended-upgrades
sudo systemctl disable unattended-upgrades
sudo apt-get remove --purge -y unattended-upgrades
```

### Running a 32-bit operating system

Driver Package 2.0 supports 64-bit ARM only. On a 32-bit OS, install [Driver Package 1.x](/reference/driver-package/legacy/) and apply the following. Production ZYMKEY5 units identify as `zymkey5`, which Driver Package 1.x does not recognize, so they require Driver Package 2.0. A production ZYMKEY5 cannot be used on a 32-bit OS.

As of March 2023, Raspberry PI OS 32-bit images install the 64-bit kernel along with the 32-bit root filesystem. This does not allow our installation script to work. In order to properly install on an 32-bit system, edit `/boot/config.txt` and add the following line to the bottom of the file, then reboot.

`arm_64bit=0`

## Products FAQ

### Q: Where can I learn about and/or pre-order future products?

<details>

<summary>Expand for Answer</summary>

<br>

A: Sign up for our new product email updates at the bottom of [Zymbit's homepage](https://www.zymbit.com/).

-----

</details>

### Q: What are the differences between Zymbit's Products?

<details>

<summary>Expand for Answer</summary>

<br>

A: See the [Product Comparison Matrix](https://www.zymbit.com/security-modules/#compare-modules) for the differences between ZYMKEY4, ZYMKEY5, HSM4, HSM6, and HSM60. Please [reach out](https://www.zymbit.com/contact-us/) with any further questions.

-----

</details>

### Q: How much power do Zymbit products consume?

<details>

<summary>Expand for Answer</summary>

<br>

* ZYMKEY4 (3.3V): idle approx. 1mA; max active < 25mA with LED off, < 35mA with LED on.

See [Power Quality]( https://docs.zymbit.com/reference/power-quality/) for more information.

-----

</details>

### Q: What is the expected battery life for Zymbit Products?

<details>

<summary>Expand for Answer</summary>

<br>

![Battery Lifetime Guidelines](pub-battery-lifetimes.png)

-----

</details>

## Compatibility FAQ

### Q: Which operating systems does Zymbit support?

<details>

<summary>Expand for Answer</summary>

<br>

A: See:

* [Latest stable platform and OS support](/#latest-stable-platform-and-os-support) on the home page, for each platform and which operating systems Bootware supports.
* [Supported distributions](/reference/driver-package/#supported-distributions) for Zymbit Driver Package 2.0.

-----

</details>

### Q: Which SBCs are compatible with Zymbit Products?

<details>

<summary>Expand for Answer</summary>

<br>

* Electrically, Zymbit I2C-based HSMs will interface to any single board computer using I2C. Check compatibility with your particular Linux distribution.
* Raspberry Pi 4, Raspberry Pi 5, Compute Module 4, and Compute Module 5
* Raspberry Pi Zero 2W: [contact support](mailto:support@zymbit.com)
* Raspberry Pi 3 and Compute Module 3 are not supported

-----

</details>

### Q: What curves are supported for Zymbit products?

<details>

<summary>Expand for Answer</summary>

<br>

ZYMKEY4 and HSM4: NIST P-256 and secp256r1

SCM, HSM6, ZYMKEY5, and HSM60: NIST P-256, secp256r1, secp256k1, X25519, ED25519

All Products: Only EC curves are supported. No RSA support is provided in hardware. RSA support is provided via hardware lock/unlock of PKCS11 store on host.

-----

</details>

### Q: Do Zymbit Products work with Arduino?

<details>

<summary>Expand for Answer</summary>

<br>

A: We have no plans to release an Arduino shield version. While we love Arduinos and use them all the time, they generally don’t have enough resources to handle cryptographic operations at this level.

-----

</details>

### Q: Do Zymbit Products work with BeagleBone?

<details>

<summary>Expand for Answer</summary>

<br>

A: Zymbit does not officially support the BeagleBoard platform at this time.

-----

</details>

## Product FAQs and release notes

Questions specific to one product are in that product's FAQ, listed below. Past release notes are in [Release notes](release-notes/).
