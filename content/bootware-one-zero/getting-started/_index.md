---
title: Bootware Getting Started
linkTitle: "Getting Started"
lastmod:
#aliases:
#    - /zboot-preview/
date: "2024-04-15"
draft: false
type: docs
images: []
weight: 20
headless: false

---

-----


## Quickstart - Download and Install Bootware Software

### Overview of steps to get up and running

1. Download the Bootware tools package and untar. Run zb-install to install the Bootware tools
2. Run zb-imager to create and sign a Zymbit image file (zi image)
3. Run zb-wizard to configure Partitions and Recovery strategy
4. Run zb-update to load zi image into Partitions

Download the Bootware software to the SCM. The Bootware software can be downloaded with curl:
```
curl https://bootware.s3.amazonaws.com/bootware-1.0.tgz --output bootware-1.0.tgz
```

Once the tar file is downloaded, untar:

```
tar xvzf bootware-1.0.tgz
```

The contents will be extracted into bootware1.0. Files extracted: 

| Item | Description |
| ----- | ----- |
| zb-install.sh          | Shell script to install Bootware tools       |
| scripts/               | Scripts and configuration files for Bootware |
| zboot_artifacts/       | zboot executable and boot artifacts          |
| zb-uninstall.sh        | Shell script to uninstall Bootware tools     |



Run the following install script on the SCM to install the zboot utilities:

```
cd bootware-1.0
sudo ./zb-install.sh
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

zboot requires images in a particular format unique to zboot, and signed. An image conversion tool is provided. Input images can be either complete binary images of your entire eMMC or tarballs of your /boot and /rootfs partitions. 

> If you would like to get started with a sample image, we've converted the base image pre-installed on the SCM zi format. A public key is also provided to verify the image. Our example image can be downloaded from here, or you can use the URL as a valid endpoint to load a known good image:

```
curl https:///bootware.s3.amazonaws.com/base_bullseye.zi --output base_bullseye.zi
```
You will the correct public key in order to verify the downloaded image. The public key is available as binary file,

curl https:///bootware.s3.amazonaws.com/base_bullseye_pubkey.bin --output base_bullseye_pubkey.bin


### Quickstart to create a zi image from your current running root file system

If you would like to create your own zi image, the most straightforware way to start would be with a snapshot of your known good, running system. You can do this in situ with the `-z` option. Additional examples of zb-imager usage can be found here: [zb-imager usage](utilities/zbimager)

You will also need to provide a Public/Private key pair to sign your image. The `zb-update` utility will prompt you through that process.

```
sudo zb-imager -z
```
| Item | Description |
| ----- | ----- |
| Name of Image?: base_bullseye            | Name of the converted output file. A zi extension will be added to the name.  The name does not need to match the name given on the command line. |
| Version?: 1.0                                 | An arbitrary version number for your reference. |

TODO: Add quickstart signing choices

Put the .zi image from the script on a server reachable vi an HTTPS GET or LOCAL EXTERNAL STORAGE such as an nVME drive or USB for download. 

## Use the Bootware Wizard to Configure your System

Bootware includes a tool to help configure your system called `zb-wizard`. `zb-wizard` is meant to set your device environment up for pulling down updates from a configured endpoint and the update policies for how to apply those updates. Bootware recommends update policies with A/B schema to have a stable backup partition for rollback. To start the wizard,

```
sudo zb-wizard
```
Choose your settings as described below.

{{< cardpane >}}
{{% card header="Bootware Wizard -Main Screen" %}}
{{< figure
    src="../utilities/zbwizard/wizmain.png"
    alt="Bootware Wizard"
    caption="Choose your options, save and exit."
    >}}
{{% /card %}}
{{< /cardpane >}}

**Partition Setup** – Specifies the device partition layout after an update. The root file system will be re-partitioned with your chosen configuration. Filesystem sizes estimates are based off of 32GB CM4s. Choose the recommended Option 3 A/B.

*	3  A/B – RECOMMENDED This will take the remaining disk space available after the boot partition and create two encrypted partitions, each taking up half of the remaining space (around 14.4 GB). Most useful for rollback and recovery with an Active/Backup configuration.

**Update Policy** – The update policies are centered around how a new update gets applied to the filesystems on the device. The update policies listed below are only related to (A)ctive/(B)ackup partitioned devices, as (A)ctive only devices only have one filesystem to update. Choose the recommeded Option 1 - Backup. This way you know you have a good Active partition for fallback.

**Endpoint Setup** – The configured endpoint ready with a new update(.zi image). The endpoint can be either an https URL or a local external mass storage device like a USB stick or nVME drive. 

*	Endpoint – Type the endpoint where the .zi image resides for the device to pull updates from. The endpoint will be checked for validity.

    > Example https URL: https://zk-sw-repo.s3.amazonaws.com/ota_preview/base_preview.zi  
    > Example USB stick: /dev/sda1

**Wireless Setup** – Bootware supports pulling updates via Wifi or LAN connections. Wifi credentials need to be provided in order for bootware to access the wifi during updates. If no wireless credentials are provided, the wireless interface is disabled in zboot.

*   SSID - Provide the Wifi SSID
*   Passphrase - Provide the Wifi passphrase

**Save** and **Exit**. You may also choose to Revert to the default configuration.


### Use `zb-update` to install the new image

Once you have completed using the Wizard to configure your Bootware, run `zb-update` to complete the process of repartitioning and loading your image.

```
sudo zb-update
```

The script will show your configuration for review and confirmation and give you the option to change the configuration. This method can be used as an alternative to using the Wizaard.

{{< cardpane >}}
{{% card header="zb-update" %}}
{{< figure
    src="../utilities/zbwizard/updatemain.png"
    alt="zb-update"
    caption="Review and continue for Bootware update"
    >}}
{{% /card %}}
{{< /cardpane >}}

The script will prompt for a reboot to complete the process. 


## zboot Boot Process

The Bootware boot process will now take place, using zboot to boot your system. 

{{< callout warning >}}The initial configuration process can take up to 2 hours to complete. The process can be completed via ssh, but an HDMI console is helpful to follow the process. During the process, the blue LED will be OFF.{{< /callout >}}

On the console, you will see:

* “Loading: Encrypted zboot please wait…” message, which takes around 4-5min.
* The A/B partitions will be configured and setup for LUKS encryption protected by the Zymbit SCM
* It will then take a few minutes to get/unpack tarballs from the image.
* It will take some time to unpack the image into the A/B root partitions depending on the size of the image.
* Once it's done unpacking the image to the A and B partitions, it will boot into the updated ACTIVE partition. You can use `lsblk` to examine the partitions.

## Quickcheck - Force Failover (Change Active/Backup partitions)

A failover from Active to Backup is done with the `-r` option to `zb-update`

```
sudo zb-update -r
```

You should now have Active and Backup partitions with working images ready for your development.

### Additional Information and Support
    
[Contact Support](mailto:support@zymbit.com)

