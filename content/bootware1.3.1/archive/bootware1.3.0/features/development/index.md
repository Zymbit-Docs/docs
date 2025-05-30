---
title: Developing on the CM4
linkTitle: Developing on the CM4
description: Outlines the process for developing on the CM4 and transitioning to the secure SCM
date: "2024-08-22"
lastmod: "2025-03-13"
draft: false
images: []
type: docs
layout: single
weight: 10
toc: true
---

-----

### How to Develop on a CM4 and transfer your Image to an SCM

Developing your applications on the CM4 allows you the freedom to start completely over in a well-known environment before transitioning to the secure SCM. The steps below outline how to take your existing CM4 solution directly to an SCM using bootware. The end result of this procedure will be an image in zi format ready for transfer to an SCM.

### Steps
1. Start with Bookworm, Bullseye or Ubuntu 22.04 image on the CM4.
2. Load Zymbit Driver Package on the CM4 (a ZYMBIT HSM is not necessary).
3. Load/Install Bootware on the CM4.
4. Use `zbcli imager` to create a zi image signed with software key.
5. Use Bootware to pre-configure the SCM with a known good A/B partition. This is just in case the CM4 image has any problem.
6. Load zi image on SCM with `zbcli update`.

### 1. Start with Bookworm, Bullseye or Ubuntu

Follow the standard instructions from Raspberry Pi Foundation using `rpiboot` and the Pi Imager to load Bookworm or Bullseye Lite 64-bit or Ubuntu Server 22.04 (jammy). Load all of the necessary software and debug and test your application.

### 2. Load the Zymbit Driver Package on the CM4

Once the image is put together and loaded on the SCM, load Zymbit Driver Package. For now, Zymbit hardware is not needed. You only need to complete the software installation. The following will load all packages and reboot to complete the software installation.

```bash
curl -G https://s3.amazonaws.com/zk-sw-repo/install_zk_sw.sh | sudo bash
```

### 3. Install Bootware on the CM4

Load the Bootware software. Part of the zi image creation includes all of the Bootware software. Download the Bootware software to the SCM. The Bootware software can be downloaded with curl:

```bash
curl -sSf https://raw.githubusercontent.com/zymbit-applications/zb-bin/main/install.sh | sudo bash
```

```bash
sudo zbcli install
```

The installation script will require a reboot. With everything in place, you can now run `zbcli imager` to create an image.

### 4. Run `zbcli imager` and sign with a software-based key on the CM4

```bash
sudo zbcli imager
```

`zbcli imager` will build your zi image. At the end of the zi image creation (takes 15-20 minutes, based on the size of your image), your output location will have the private key file, public key file, and the zi image. You will need your public key file along with the zi file to move to the SCM. You should also keep track of your private key file to use if you need to create and sign additional images. The zi image and Public key can be used via local SCM storage such as a USB stick, or via the network and an HTTPS endpoint. Copy the zi file and public key file to the endpoint.

### 5. Setup the SCM

Prepare your SCM with Bootware and an A/B partition, and a known good image, such as our example image. This is the safest way to insure should something go wrong loading your CM4 image, you will have a way to recover. The [Getting Started Guide](../../getting-started/) details the steps. Complete those steps first.

### 6. Load the zi file from your ENDPOINT to the SCM

Copy your Public key file to a local folder. Run `sudo zbcli update` and double-check the settings are correct. Enter "n" to correct the configuration. Specify the ENDPOINT (USB or HTTPS) where the zi file is located. If you need to correct anything, use `zbcli update-config`. Let `zbcli update` continue. It will confirm your ENDPOINT and prompt for your public key file. Enter your public key file. The process will then continue to load your zi image onto your partitions and attempt to boot up on that partition.

If successful, the SCM will end up successfully bound, and up and running on an encrypted partition. Use `lsblk` to verify the encrypted partition. You should see four partitions, the root, the Active partition (mounted as cryptrfs_A or cryptrfs_B), the backup partition (not mounted), and the shared DATA partition. The blue LED should be blinking once every three seconds. The CM4 image transfer is complete.


### See also:

[zbcli imager](../../zbcli/imager)


### Additional Information and Support

[Contact Support](mailto:support@zymbit.com)

