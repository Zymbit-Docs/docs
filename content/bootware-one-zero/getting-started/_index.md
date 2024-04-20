---
title: Bootware Getting Started
linkTitle: "Getting Started"
lastmod:
#aliases:
#    - /zboot-preview/
date: "2024-04-19"
draft: false
type: docs
images: []
weight: 20
headless: false

---

-----

## Quickstart - Download and Install Bootware Software

In this Getting Started guide we describe how to bring up a common use case for Bootware - A/B partitioning for fallback and recovery.

The default SCM/SEN as shipped has Zymbit software pre-installed. The Zymbit product should be up and running with the blue LED flashing once every three seconds.

Details of the features in this Quickstart are linked in line. See the Features section for other examples of how to use Bootware.

### Overview of steps to get up and running

1. Download the Bootware tools package and untar. Run zb-install to install the Bootware tools
2. Run zb-imager to create and sign a Zymbit image file (zi image) of your current root file system as a backup. 
3. Run zb-wizard to configure Partitions and Recovery strategy. For this Quickstart, we will setup A/B partitions.
4. Run zb-update to load a known good example zi image into the Backup (B) partition; set B to as the Active partition.
5. Use the "-r" option to force a Rollback to your original partition to verify your A/B setup is working.

### 1. Download Bootware

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

### 2. Run zb-imager to create Bootware-ready Zymbit Image backup (zi image)

Bootware requires images in a secure, signed format for loading with zboot. An image conversion tool, `zb-imager`, creates the zi image. Input images can be either complete binary images of your entire eMMC or tarballs of your /boot and /rootfs partitions. Images can also be partial file additions and deletions called Overlay images.

TODO - Explain Full and Overlay images


#### Create a zi image backup from your current running root file system

Use `zb-imager` to create a zi image backup of your current running system. Once created, the zi image can be propagated to other disk partitions securely. A Private/Public key pair will be used for signing the zi image at time of creation, and verifying at time of loading onto a new partition. Key pairs can either be created in software or using the Zymbit HSM hardware. For this Quickstart, we will use software keys. See KEYS for detailed information.

```
sudo zb-imager
```

Make the following selections:

| Item | Description |
| ----- | ----- |
| Image Type?   | Choose 1. for a Full Image |
| Name of Image?: | Any name. Ex. `myImage`. Name of the converted output file. A zi extension will be added to the name. |
| Version?: 1.0                                 | Optional. An arbitrary version number for your reference. |


Next, you will be prompted for Signing Keys. Keys can be Software or Hardware based. You can use an existing key or the script will create keys for you. For this Quickstart, we will assume you need to generate Software keys,

| Item | Description |
| ----- | ----- |
| Use software-based keys? | Yes |
| Key? | 1. Create new software key |

The `zb-imager` script will now build your zi image.

The imager takes 15-20 minutes, or longer depending on the size of your file system. Once completed, the zi image and Private/Public key will be saved in `/etc/zymbit/zboot/update_artifacts/output/`. Keep your private key private. The zi image can be copied to either a local stoage device, such as a USB stick or a remote service accessible via HTTPS. The public key file will be needed to load the zi image. 

Additional examples of zb-imager usage can be found here: [zb-imager usage](../utilities/zbimager)


### 3. Run zb-wizard to configure the Partitioning and Image loading

For this quickstart, we will use a known-good zi image. We've converted the pre-installed base image on the SCM to the zi format. 
You will need the corresponding public key in order to verify the downloaded image. The public key in PEM format can be downloaded here:

```
curl https:///bootware.s3.amazonaws.com/pub_key.pem --output pub_key.pem
```

We will configure the zi image to be accessed remotely via HTTPS. If you wish to run from a local source such as a USB stick, our example image can be downloaded from here:

```
curl https:///bootware.s3.amazonaws.com/base_bullseye.zi --output base_bullseye.zi
```

#### Use the Bootware Wizard to Configure your System

Bootware includes a tool to help configure your system called `zb-wizard`. `zb-wizard` is meant to setup your device environment to load a zi image from a configured endpoint and the update policies for how to apply those updates. More information on `zb-wizard` can be found [here](../utilities/zbwizard). 

We are going to configure with A/B schema to have a stable backup partition for fallback. To start the wizard,

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

*	3  A/B – RECOMMENDED This will take the remaining disk space available after the boot partition and create two encrypted partitions, each taking up half of the remaining space (around 14.4 GB). 

**Update Policy** – The update policies define if image updates are applied to the Backup, Active, or Both partitions. Choose the recommeded Option 1 - Backup. This way you know you have a good Active partition for fallback.

**Endpoint Setup** – The configured endpoint with .zi image. The endpoint can be either an HTTPS URL or a local external mass storage device like a USB stick or nVME drive. We are going to use the URL of our known good image:

```
https:///bootware.s3.amazonaws.com/base_bullseye.zi
```

If you opted to download the `base_bullseye.zi` image to a local device, enter that instead.

```
/dev/sda1
```

`zb-wizard` will attempt to verify the zi image is reachable.

**Wireless Setup** – Bootware supports pulling updates via Wifi or LAN connections. Wifi credentials need to be provided in order for bootware to access the wifi during updates. If no wireless credentials are provided, the wireless interface is disabled in zboot.

**Save** and **Exit** to exit `zb-wizard`.


### 4. Run `zb-update` to create the Backup partition and load the zi image.

Once you have completed using the Wizard to configure your Bootware, run `zb-update` to complete the process of repartitioning and loading your image.

```
sudo zb-update
```

The script will show your configuration for review and confirmation and give you the option to change the configuration. 

{{< cardpane >}}
{{% card header="zb-update" %}}
{{< figure
    src="zb-update2.png"
    alt="zb-update"
    caption="Review and continue for Bootware update"
    >}}
{{% /card %}}
{{< /cardpane >}}

Hit return or Y to start the download process. Once completed, `zb-update` will ask you to confirm the name of the image, and the verification public key information. For this example, that will be the software-based public key PEM file downloaded earlier.


The script will prompt for a reboot to complete the process. 

#### zboot Boot Process

The Bootware boot process will now take place, using zboot to boot your system. Upon reboot, an encrypted B partition will be created and the zi image will be loaded onto B. The A partition will remain untouched.

{{< callout warning >}}The initial configuration process can take up to an hour to complete, depending on the size of the image. The process can be completed via ssh, but an HDMI console is helpful to follow the process. During the process, the blue LED will be OFF.{{< /callout >}}

On the console, you will see:

* “Loading: Encrypted zboot please wait…” message, which takes around 4-5min.
* The B partitions will be configured and setup for LUKS encryption protected by the Zymbit SCM
* It will then take a few minutes to get/unpack tarballs from the image, and verify the signature
* It will take some time to unpack the image into the B root partition, depending on the size of the image.
* Once it's done unpacking the image to the B partition, it will boot into the B partition as the ACTIVE partition. You can use `lsblk` to examine the partitions.

### 4. Quickcheck - Force Failover (Change Active/Backup partitions)

A failover from Active to Backup is done with the `-r` option to `zb-update`

```
sudo zb-update -r
```

You should now have Active and Backup partitions with working images ready for your development.

### Additional Information and Support
    
[Contact Support](mailto:support@zymbit.com)

