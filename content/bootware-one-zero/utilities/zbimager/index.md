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


## zb-imager

### Description

Requires superuser privilege. 

Bootware requires images in a particular format. Use `zb-imager` to convert images into Zymbit Image (zi) format.

### Usage

```
zb-imager [-k <key slot> ] | [--output-directory=<output dir>]


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


### Examples

An image conversion tool is provided. `zb-imager` can take a snapshot of your running system or input tarballs of your /boot and /rootfs partitions.


#### Example to create a zi image from your current running root file system

```
sudo zb-imager
```
| Item | Description |
| ----- | ----- |
| Name of Image?: base_bullseye            | Name of the converted output file. A zi extension will be added to the name.  The name does not need to match the name given on the command line. |
| Version?: 1.0                                 | An arbitrary version number for your reference. |

### Example to convert boot/root tarballs (created from `tar cvf my_boot.tar <boot_part>`, `tar cvf my_rfs.tar <root_part>`)

You will need to provide the names and paths to your tarballs. Run the script:

```
sudo zb-imager --boot-tarball ./boot.tar --root-tarball ./root.tar
```

The script will prompt for information:

| Item | Description |
| ----- | ----- |
|Name of Image?: base_bullseye | Name of the converted output file. A zi extension will be added to the name. |
| Version?: 1.0 | An arbitrary version number for your reference.

The script extracts the boot/root tarballs of the binary image. It will then package it up in a Zymbit image and output it to:

`/etc/zymbit/zboot/update_artifacts/output/base_bullseye.zi`

Put the .zi image from the script on a server or USB drive for download. Zboot downloads images from either a USB storage device or the internet via curl requests.


`zb-imager` will also need a key provided. The key can either be software-based or Zymbit HSM-based. See [Signing/Verifying Images](../features/signing) for more information.

