---
title: "zbcli imager"
linkTitle: "imager"
description: Generates signed zymbit images (zi) 
date: "2024-08-22"
lastmod: "2024-09-16"
draft: false
images: []
type: docs
layout: single
weight: 20
toc: true

---

-----

## `zbcli imager`

### Description

Requires superuser privilege. 

Bootware requires images in a particular format. Use `zbcli imager` to convert images into Zymbit Image (zi) format. The script will prompt you for all required information. The Flags in the Usage below can be used to provide that information from the command line and skip prompts.

### Usage

```
zbcli imager [OPTIONS]

Options:
      --boot-tarball <BOOT_TARBALL>
          Path of boot tarball
      --root-tarball <ROOT_TARBALL>
          Path of root tarball
      --binary-image <BINARY_IMAGE>
          Path of binary image to convert to Zymbit image
      --image-name <IMAGE_NAME>
          Zymbit image name
      --image-version <IMAGE_VERSION>
          Zymbit image version
      --full-image
          Generate image of update type: FULL
      --overlay-image
          Generate image of update type: OVERLAY
      --new-key
          Generate a new key for signing/verifying
      --save-wallet-info
          If a new HSM wallet slot was generated, saves the mnemonic and public key
  -f, --key-file <KEY_FILE>
          Path of HSM key slot to sign the image with
  -o, --output-directory <OUTPUT_DIRECTORY>
          Output directory for new .zi images
      --exclude <EXCLUDE>
          Files or directories to exclude from image
  -h, --help
          Print help

```

### Examples


#### Example: create a zi image from your currently running root file system

This is an example of how you can create a snapshot image of your running system. You can perform your development and configuration on one system, and once you are satisfied your system is working correctly, create an image to use for backup purposes and for propogation to other units.

First, mount a USB stick or some other external device to store the image.

```bash
sudo mount /dev/sda1 /mnt
```

Run the imager. Options can be provided on the command line to run without prompting. 

```bash
sudo zbcli imager
```

The script will prompt for information. We will use the mount point of our USB stick, `/mnt`. Provide the mount point, a name for your image (without a zi extension, it will be added automatically), and choose `Full image of live system`.

```
   Validated bootware installation
        ---------
        Pi Module:         Raspberry Pi 4
        Operating System:  Rpi-Bookworm
        Zymbit module:     Zymkey
        Kernel:            kernel8.img
        ---------
     Cleaned '/etc/zymbit/zboot/update_artifacts/tmp'
✔ Enter output directory · /mnt
✔ Enter image name · myFullImage
? Select image type ›
❯ Full image of live system
  Overlay image from files added with zb-manifest
```

The script will ask for an optional image version. This is entirely for your use. It is not used by Bootware.

Next, the script will ask for a private key with which to sign the image. If you are using an SCM or an HSM6, hardware signing by a key from the SCM or HSM is available. Software signing is also available for all products. You can choose to create a new key, or use an existing key. Pre-existing software keys will require a key file in PEM format. Pre-existing hardware keys will require providing information as to which slot on the SCM or HSM6 contains the key. Below, we selected to use and create a new software key.

The image creation now has all required information and begins.

```
✔ Enter output directory · /mnt
✔ Enter image name · myFullImage
✔ Select image type · Full image of live system
✔ (Optional) enter image version ·
✔ Select key · Create new software key
     Created signing key
     Created '/etc/zymbit/zboot/update_artifacts/file_manifest'
     Created '/etc/zymbit/zboot/update_artifacts/file_deletions'
    Verified path unmounted '/etc/zymbit/zboot/mnt'
     Cleaned '/etc/zymbit/zboot/mnt'
    Verified disk size (required: 2.57 GiB, free: 11.01 GiB)
      Copied file (/boot/firmware/zboot_bkup/kernel8.img.A) to (/boot/firmware/kernel8.img)
     Created initramfs
     Created snapshot of boot (/etc/zymbit/zboot/update_artifacts/tmp/.tmpQxuGnU/myFullImage_boot.tar)
     Running [=======>                                ] 2/11 (00:16:36): taking snapshot of root        
```

The image creation time is dependent on the size of the boot and root filesystems. When completed, `/mnt` will contain your zi image, and, if you chose to create a new software key, a private key file and a public key file. You can now distribute the zi image file and the public key for verification to load the zi image file on additional units.

#### Example: create a zi image from a binary disk image

You can also make a zi image directly from a previously created disk image file, created with `dd` or some other imaging utility. This may be a preferred method if tied into a CI/CD procedure used to generate complete image files. This process assumes your image contains two partitions corresponding to a boot and root file system. `zbcli imager` will assume the boot partition is partition 1 and the root partition is partition 2.

You will need the path to the image file.

```bash
sudo zbcli imager --binary-image /home/zymbit/my.img
```

The imager will prompt for information:
<!-- FIXME -->
```
Checking for zymbit scm...
Image Name?: bullseye
Version? [OPTIONAL]: 1.1
Note:Software/Hardware keys are not interchangeable. Stick with one method.
Use software-based keys for Signing?
(No for hardware-based keys) (Y/n):
Y
Key?
   1. Create new software key files
   2. Use a pre-existing software key files
: 2
Existing private key file? (Pem format): /home/zymbit/keys/private_key.pem
Setting up environment...
Copying boot files from binary image...
```
<!-- END FIXME -->
#### Example: create a zi image from boot & root tarballs

A zi image can be created by providing two tarballs - one of your boot filesystem and one of your root filesystem. You will need to provide the names and paths to your tarballs. Run the imager:

```
sudo zbcli imager --boot-tarball ./boot.tar --root-tarball ./root.tar
```

The imager will prompt for information:
<!-- FIXME -->
```
Checking for zymbit scm...
Image Name?: myImage
Version? [OPTIONAL]: 1.1
Note:Software/Hardware keys are not interchangeable. Stick with one method.
Use software-based keys for Signing?
(No for hardware-based keys) (Y/n):
Y
Key?
   1. Create new software key files
   2. Use a pre-existing software key files
: 2
Existing private key file? (Pem format): private_key.pem
Setting up environment...
Verifying image...
Checking for zymbit bootware..
Checking for zymbit tools..
Done!
Creating headers...
Creating Zymbit Image...
```
<!-- END FIXME -->
`zbcli imager` will also need a private key. It can generate one for you if you do not have one. The key can either be software-based or Zymbit HSM-based. See [Signing/Verifying Images](../../features/signing) for more information.

All necessary parameters for each type of image creation can be provided on the command line to prevent the need for interactive input.

### Output

`zbcli imager` will output the private key and public key if using software keys, along with the zi image, into the specified output directory.

