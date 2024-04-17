---
title: Zymbit Image Converter
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
Version: 0.4.6


Usage: zymbit-image-converter [-k <key slot> ] | [--output-directory=<output dir>]


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


### Use zb-update to install the new image

Once you have created an image, run `zb-update` to complete the process by repartitioning and loading your image.

```
sudo zb-update
```

The script will show your configuration for review and confirmation, or give you the option to change the configuration. This method can be used as an alternative to using the Wizaard.

{{< cardpane >}}
{{% card header="zb-update" %}}
{{< figure
    src="updatemain.png"
    alt="zboot update"
    caption="Review and continue for zboot update"
    >}}
{{% /card %}}
{{< /cardpane >}}

The script will prompt for a reboot to complete the process. 


## zboot Boot Process

The Zboot process will now take place. 

{{< callout warning >}}The initial configuration process can take up to 2 hours to complete. The process can be completed via ssh, but an HDMI console is helpful to follow the process. During the process, the blue LED will be OFF.{{< /callout >}}

On the console, you will see:

* “Loading: Encrypted zboot please wait…” message, which takes around 4-5min.
* The A/B partitions will be configured and setup for LUKS encryption protected by the Zymbit SCM
* It will then take a few minutes to get/unpack tarballs from the image.
* It will take some time to unpack the image into the A/B root partitions depending on the size of the image.
* Once it's done unpacking the image to the A and B partitions, it will boot into the updated ACTIVE partition. You can use `lsblk` to examine the partitions.

## Reload all utilities

The Bootware utilities are needed for Bootware to function. If not included in your newly loaded image, you will need to load the utilities into your partition(s). Our example zi file base_bullseye.zi has the Bootware Utilities pre-loaded.

## Recovery

Each successful boot will clear a max_boot_failure counter. A max_boot_failure count of 3 will trigger the recovery mechanism. The BACKUP partition will become the ACTIVE partition. If neither can boot, the endpoint with a good image will be loaded. A ROLLOVER notification message will be added to the MOTD.

## Force Failover (Change Active/Backup partitions)

A failover from Active to Backup is done with the `-r` option to `zb-update`

```
sudo zb-update -r
```

## Uninstall Bootware

A utility is included to uninstall bootware, returning to the standard linux boot process. The uninstall process will leave you in the current encrypted active partition and preserve the contents of that partion as well as the overall partition layout.

```
cd ~/zymbit-ota-preview
sudo ./uninstall_zboot.sh
```
The script will confirm you would like to uninstall the bootware scripts and artifacts, as well as a required reboot.

### Additional Information and Support
    
[Contact Support](mailto:support@zymbit.com)

