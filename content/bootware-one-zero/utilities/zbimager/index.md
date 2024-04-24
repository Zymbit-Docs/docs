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

--binary-image                   Convert a binary image to a zymbit image

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


#### Example to create a zi image from your current running root file system

```
sudo zb-imager
```
| Item | Description |
| ----- | ----- |
| Name of Image?: myImage            | Name of the converted output file. A zi extension will be added to the name. |
| Version?: 1.0                                 | An arbitrary version number for your reference. |

### Example to convert boot/root tarballs (created from `tar cvf my_boot.tar <boot_part>`, `tar cvf my_rfs.tar <root_part>`)

You will need to provide the names and paths to your tarballs. Run the script:

```
sudo zb-imager --boot-tarball ./boot.tar --root-tarball ./root.tar
```

The script will prompt for information:

| Item | Description |
| ----- | ----- |
|Name of Image?: myImage | Name of the converted output file. A zi extension will be added to the name. |
| Version?: 1.0 | An arbitrary version number for your reference. |

The script extracts the boot/root tarballs. It will then package it up in a Zymbit image and output it to:


`zb-imager` will also need a private key. It can generate one for you if you do not have one. The key can either be software-based or Zymbit HSM-based. See [Signing/Verifying Images](../features/signing) for more information.

### Output

`zb-imager` will output the private and public key if using software keys along with the zi image. If you do not specify an output location, the files will be placed in `/etc/zymbit/zboot/update_artifacts/output`.


