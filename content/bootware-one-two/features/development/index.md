---
title: Developing on the CM4
linkTitle: Developing on the CM4"
lastmod:
#aliases:
#    - /zboot-preview/
date: "2024-06-05"
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
1. Start with Bullseye or Ubuntu 22.04 image
2. Load Zymbit software (a ZYMBIT HSM is not necessary)
3. Load/Install bootware tools
4. Use zb-imager to create a zi image signed with software key
5. Pre-configure the SCM with a known good A/B partition. This is just in case the CM4 image has any problem
6. Load zi image on SCM with zb-update

### 1. Start with Bullseye or Ubuntu

Follow the standard instructions from Raspberry PI Foundation using `rpiboot` and the PI Imager to load Bullseye Lite 64-bit or Ubuntu Server 22.04 (jammy). Load all of the necessary software and debug and test your application.

### 2. Load the Zymbit software

Once the image is put together and loaded on the SCM, load Zymbit software. For now, Zymbit hardware is not needed. You only need to complete the software installation. The following will load all packages and reboot to complete the software installation.

```bash
curl -G https://s3.amazonaws.com/zk-sw-repo/install_zk_sw.sh | sudo bash
```

### 3. Install Bootware 1.1 Tools

Load the Bootware software. Part of the zi image creation includes all of the Bootware software. Download the Bootware software to the SCM. The Bootware software can be downloaded with curl:

```bash
curl https://bootware.s3.amazonaws.com/bootware-1.1.tgz --output bootware-1.1.tgz
```

Once the tar file is downloaded, untar:

```bash
tar xvzf bootware-1.1.tgz
```

Run the following install script on the SCM to install the zboot utilities:

```bash
cd bootware-1.1
sudo ./zb-install.sh
```

The installation script will do two reboots. With everything in place, you can now run `zb-imager` to create an image.

### 4. Run `zb-imager` and sign with a software-based key

The next step will be to create the zi image to load with Bootware onto your SCM. Use the Software Key choices since there is no Zymbit HSM hardware involved at this point. `zb-imager` will default to prompt you to use a software key, and will create one for you.

```bash
sudo zb-imager
```

Make the following selections:

| Item | Description |
| ----- | ----- |
| Image Type?   | Choose 1. for a Full Image |
| Name of Image?: | Any name. Ex. `myImage`. Name of the converted output file. A zi extension will be added to the name. |
| Version?: 1.1                                 | Optional. An arbitrary version number for your reference. |


Next, you will be prompted for Signing Keys. Hit return to choose the default Software option. Choose to let the script create keys for you.

| Item | Description |
| ----- | ----- |
| Use software-based keys? | Yes |
| Key? | 1. Create new software key |

The `zb-imager` script will now build your zi image. At the end of the zi image creation (takes 15-20 minutes, based on the size of your image), the script will show you the paths for the private key file, public key file, and the zi image. You will need your public key file along with the zi file to move to the SCM. You should also keep track of your private key file to use if you need to create and sign additional images. The zi image and private key can be used via local SCM storage such as a USB stick, or via the network and an HTTPS endpoint. Copy the zi file and public key file to the endpoint.

### 5. Setup the SCM

Prepare your SCM with Bootware and an A/B partition, and a known good image, such as our example image. This is the safest way to insure should something go wrong loading your CM4 image, you will have a way to recover. The [Getting Started Guide](../../getting-started/) details the steps. Complete those steps first.

### 6. Load the zi file from your ENDPOINT to the SCM

Copy your public key file to a local folder. Run `sudo zb-update` and double-check the settings are correct. Enter "n" to correct the configuration. Specify the ENDPOINT (USB or HTTPS) where the zi file is located. Choose one root filesystem - false for A/B, update_mode=UPDATE_BACKUP, and resize_a=false. Let `zb-update` continue. It will confirm your ENDPOINT and prompt for your public key file. Enter your public key file. The process will then continue to load your CM4 image onto the BACKUP partition, and attempt to boot up on that partition.

If successful, the SCM will end up successfully bound, and up and running on an encrypted partition. Use `lsblk` to verify the encrypted partition. The blue LED should be blinking once every three seconds. The CM4 image transfer is complete.


### See also:

[zb-imager utility](../../utilities/zbimager)


### Additional Information and Support

[Contact Support](mailto:support@zymbit.com)

