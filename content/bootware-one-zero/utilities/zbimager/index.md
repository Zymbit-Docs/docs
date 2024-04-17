---
title: Zymbit Bootware Image Converter
linkTitle: "zb-imager"
lastmod:
#aliases:
#    - /zboot-preview/
date: "2024-04-02"
draft: false
images: []
type: docs
layout: single
weight: 20
toc: true

---

-----


## Installing and running zboot to reflash an image

Bootware requires images in a particular format unique to zboot. An image conversion tool is provided. Input images can be either complete binary images of your entire eMMC or tarballs of your /boot and /rootfs partitions.  You can also take a snapshot and convert from you running system.


The script used to convert to a zboot image is: 

```
sudo zb-imager -h
Version: 0.4.7


Usage: zb-imager [-k <key slot> ] | [--output-directory=<output dir>]


Flags                Description

---------------------------------------------------------------------------------------------------------------------

--boot-tarball                   Use this boot tarball

--root-tarball                   Use this root tarball

--image-name                     The image name of the zymbit image

--image-version                  The image version of the zymbit image

--full-image                     Generate a image of update type:FULL

--overlay-image                  Generate a image of update type:OVERLAY

--use-hardware                   Use Zymbit HSM to sign/verify the image

--use-software                   Use priv/pub key pem files to sign/verify the image

--new-key                        Generate a new key for signing/verifying

--save-wallet-info               If a new HSM wallet slot was generated. Save the mnemonic and public key

-k, --key-slot                   The HSM key slot to sign the image with

-f, --key-file                   The private key pem to sign the image with

-o, --output-directory           Output directory for new .zi images

-z, --take-snapshot              Create a .zi snapshot of current running system.

-h, --help                       To view the manual.

---------------------------------------------------------------------------------------------------------------------

```

### Examples of Image conversions:

### Example to create a zi image from your current running root file system

```
sudo zb-imager -z
```
| Item | Description |
| ----- | ----- |
| Name of Image?: base_bullseye            | Name of the converted output file. A zi extension will be added to the name.  The name does not need to match the name given on the command line. |
| Version?: 1.0                                 | An arbitrary version number for your reference. |

### Example to convert a binary image file (created from `dd if=/dev/sda bs=4M of=my.img`):

```
sudo zb-imager my.img
```
The script will prompt for information:

| Item | Description |
| ----- | ----- |
| Name of Image?: base_preview             | Name of the converted output file. A zi extension will be added to the name.  The name does not need to match the name given on the command line. |
| Version?: 2.1                                 | An arbitrary version number for your reference. |
| Boot File System Partition Number? (EX: 1): 1 | Partition number of boot filesystem in binary image file. Must be provided; no default. |
| Root File System Partition Number? (EX: 2): 2 | Partition number of root filesystem in binary image file. Must be provided; no default. |

The script extracts the boot/root tarballs of the binary image. It will then packages it up in a Zymbit image and output it to:

`/etc/zymbit/zboot/update_artifacts/output/base_preview.zi`

### Example to convert boot/root tarballs (created from `tar cvf my_boot.tar <boot_part>`, `tar cvf my_rfs.tar <root_part>`)

You will need to provide the names and paths to your tarballs. Run the script:

```
sudo zb-imager -b ./boot.tar -r ./root.tar
```

The script will prompt for information:

| Item | Description |
| ----- | ----- |
|Name of Image?: base_bullseye | Name of the converted output file. A zi extension will be added to the name. |
| Version?: 1.0 | An arbitrary version number for your reference.

The script extracts the boot/root tarballs of the binary image. It will then package it up in a Zymbit image and output it to:

`/etc/zymbit/zboot/update_artifacts/output/base_bullseye.zi`

Put the .zi image from the script on a server or USB drive for download. Zboot downloads images from either a USB storage device or the internet via curl requests.


### Additional Information and Support
    
[Contact Support](mailto:support@zymbit.com)

