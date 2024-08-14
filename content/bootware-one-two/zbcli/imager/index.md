---
title: "imager - Generates zi images"
linkTitle: "imager"
lastmod:
#aliases:
#    - /zboot-preview/
date: "2024-08-14"
draft: false
images: []
type: docs
layout: single
weight: 10
toc: true

---

-----


## zbcli imager

### Description

Requires superuser privilege. 

Bootware requires images in a particular format. Use `zbcli imager` to convert images into Zymbit Image (zi) format. The script will prompt you for all required information. The Flags in the Usage below can be used to provide that information from the command line and skip that prompt.

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


#### Example to create a zi image from your current running root file system

```
sudo zbcli imager
```

The script will prompt for information.

```
Checking for zymbit scm...
Image type?
   1. Full image of this live system
   2. Overlay image from files added with zb-manifest
: 1
Image Name?: myFullImage
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
Copying boot from live system...
```

#### Example to create a zi image from a binary image created with dd (created from dd if=/dev/sda bs=4M of=my.img):

You will need the path to the image file.

```
sudo zbcli imager --binary-image /home/zymbit/my.img
```

The script will prompt for information:

```
Checking for zymbit scm...
Image Name?: bullseye
Version? [OPTIONAL]: 1.1
Boot File System Partition Number? (EX: 1): 1
Root File System Partition Number? (EX: 2): 2
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

#### Example to convert boot/root tarballs (created from: tar cvf my_boot.tar <boot_part>;  tar cvf my_rfs.tar <root_part>)

You will need to provide the names and paths to your tarballs. Run the script:

```
sudo zbcli imager --boot-tarball ./boot.tar --root-tarball ./root.tar
```

The script will prompt for information:

```
Checking for zymbit scm...
Image type?
   1. Full image of this live system
   2. Overlay image from files added with zb-manifest
: 1
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

`zbcli imager` will also need a private key. It can generate one for you if you do not have one. The key can either be software-based or Zymbit HSM-based. See [Signing/Verifying Images](../../features/signing) for more information.

### Output

`zbcli imager` will output the private key and public key if using software keys, along with the zi image. If you do not specify an output location, the files will be placed in `/etc/zymbit/zboot/update_artifacts/output`.


