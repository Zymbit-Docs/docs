---
title: Bootware Getting Started
linkTitle: "Getting Started"
lastmod:
#aliases:
#    - /zboot-preview/
date: "2024-04-02"
draft: false
type: docs
images: []
weight: 20
headless: true

---

-----


## Quickstart - Download and Install Bootware Software

### Steps to get up and running

1. Download the Bootware tar package and unpack
2. Create a Zymbit image file (zi file)
3. Run zb-wizard to configure Partitions and Recovery strategy
4. Run zboot install to load zi images into Partitions

Download the Bootware software to the SCM. The Bootware software can be downloaded with curl:

```
curl https://s3.amazonaws.com/bootware/bootware1.0.tgz --output bootware1.0.tgz
```

Once the tar file is downloaded, untar:

```
tar xvzf bootware1.0.tgz
```

The contents will be extracted into bootware1.0. Files extracted: 

| Item | Description |
| ----- | ----- |
| install_zboot_tools.sh | Shell script to install zboot tools       |
| scripts/               | Scripts and configuration files for zboot |
| zboot_artifacts/       | zboot executable and boot artifacts       |



Run the following install script on the SCM to install the zboot utilities:

```
cd bootware1.0
sudo ./install_zboot_tools.sh
```

```
Installing zboot tools...
Reading package lists... Done
Building dependency tree... Done
…
Installing zboot...
Done!
After installing the zboot tools. A reboot is required. Reboot now? (Y/n)
```
Reboot to complete the installation process. Once completed, all necessary files required for loading new images via zboot will be installed.

## Installing and running zboot to reflash an image

zboot requires images in a particular format unique to zboot. An image conversion tool is provided. Input images can be either complete binary images of your entire eMMC or tarballs of your /boot and /rootfs partitions. 

> If you would like to get started with a sample image, we've converted the base image installed on the SCM for the preview to a zboot format. Otherwise, continue on to create your own image. Our example image can be downloaded from here, or you can use the URL as a valid endpoint to load a known good image:

```
curl https://s3.amazonaws.com/bootware/base_bullseye.zi --output base_bullseye.zi
```

The script used to convert to a zboot image is: 

```
zymbit-image-converter [ test.img | {-b <boot.tar> -r <root.tar} | -z ] [-o <directory> ]  
    test.img	      Binary image file of eMMC (e.g. created from dd). Name of output image need not match.  
    -b	<boot.tar>    Use this boot tarball as input. Must include -r option.  
    -r  <root.tar>    Use this root tarball as input. Must include -b option.  
    -o  <directory>   Output directory for new .zi image.  
    -z                Creates a zi image from your current running root file system.  
```

### Examples of Image conversions:

### Example to create a zi image from your current running root file system

```
sudo zymbit-image-converter -z
```
| Item | Description |
| ----- | ----- |
| Name of Image?: base_bullseye            | Name of the converted output file. A zi extension will be added to the name.  The name does not need to match the name given on the command line. |
| Version?: 1.0                                 | An arbitrary version number for your reference. |

### Example to convert a binary image file (created from `dd if=/dev/sda bs=4M of=my.img`):

```
sudo zymbit-image-converter my.img
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
sudo zymbit-image-converter -b ./boot.tar -r ./root.tar
```

The script will prompt for information:

| Item | Description |
| ----- | ----- |
|Name of Image?: base_bullseye | Name of the converted output file. A zi extension will be added to the name. |
| Version?: 1.0 | An arbitrary version number for your reference.

The script extracts the boot/root tarballs of the binary image. It will then package it up in a Zymbit image and output it to:

`/etc/zymbit/zboot/update_artifacts/output/base_bullseye.zi`

Put the .zi image from the script on a server or USB drive for download. Zboot downloads images from either a USB storage device or the internet via curl requests.

## Use the Bootware Wizard to Configure your System

Bootware Preview includes a a tool to help configure your system called `zb-wizard`. `zb-wizard` is meant to set your device environment up for pulling down updates from a configured endpoint and the update policies for how to apply those updates. Bootware recommends update policies with A/B schema to have a stable backup partition for rollback. To start the wizard,

```
sudo zb-wizard
```
Choose your settings as described below.

{{< cardpane >}}
{{% card header="Bootware Wizard -Main Screen" %}}
{{< figure
    src="wizmain.png"
    alt="Bootware Wizard"
    caption="Choose your options, save and exit."
    >}}
{{% /card %}}
{{< /cardpane >}}

**Partition Setup** – Specifies the device partition layout after an update. The root file system will be re-partitioned with your chosen configuration. Filesystem sizes estimates are based off of 32GB CM4s.

*	1  A Only [HALF DISK] – This will take the remaining disk space available after the boot partition and create an encrypted partition that will use half of this space as the root partition (around 14.4 GB). This leaves half the disk empty on purpose for dev usage.

*	2  A only [FULL DISK] – This will take the remaining disk space available after the boot partition (around ~29GB) and create an encrypted partition that will use almost all of this space as the root partition.

*	3  A/B – RECOMMENDED This will take the remaining disk space available after the boot partition and create two encrypted partitions, each taking up half of the remaining space (around 14.4 GB). Most useful for rollback and recovery with an Active/Backup configuration.

**Update Policy** – The update policies are centered around how a new update gets applied to the filesystems on the device. The update policies listed below are only related to (A)ctive/(B)ackup partitioned devices, as (A)ctive only devices only have one filesystem to update.

*	1  Backup – RECOMMENDED Apply new updates to current backup filesystem and swap to booting the new updated backup partition as the active partition now. If the new update is bad, it will rollback into the previous stable active partition. Only relevant when configured with A/B partitions.
  
*	2  Active – Apply new updates to only the current active filesystem and keep the backup partition untouched. Only relevant when configured with A/B partitions.

*	3  Both – Apply new updates to both filesystems and always boot on the first root partition as the active partition. Warning: A bad update will have nothing to rollback to; the device will have to go through a recovery process.

**Endpoint Setup** – The configured endpoint ready with a new update(.zi image). The endpoint can be either an https URL or an external mass storage device like a USB stick. 

*	Endpoint – Type the endpoint where the .zi image resides for the device to pull updates from. The endpoint will be checked for validity.

    > Example https URL: https://zk-sw-repo.s3.amazonaws.com/ota_preview/base_preview.zi  
    > Example USB stick: /dev/sda1

**Wireless Setup** – Bootware supports pulling updates via Wifi or LAN connections. Wifi credentials need to be provided in order for bootware to access the wifi during updates. If no wireless credentials are provided, the wireless interface is disabled in zboot.

*   SSID - Provide the Wifi SSID
*   Passphrase - Provide the Wifi passphrase

**Save** and **Exit**. You may also choose to Revert to the default configuration.


### Use zboot to Install the New Image
Once you have completed using the Wizard to configure your Bootware, run `zboot-install-new-update` to complete the process by repartitioning and loading your image.

```
sudo zboot-install-new-update
```

The script will show your configuration for review and confirmation, or give you the option to change the configuration. This method can be used as an alternative to using the Wizaard.

{{< cardpane >}}
{{% card header="zboot-install-new-update" %}}
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

A failover from Active to Backup is done with the `-r` option to `zboot-install-new-update`

```
sudo zboot-install-new-update -r
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

