---
title: "Working with SCM Supervised Boot"
linkTitle: "Supervised Boot (SCM Alpha)"
description: ""
aliases:
    - /tutorials/verified-boot/
date: "2022-03-28"
lastmod: "2022-05-19"
draft: false
images: []
toc: true
---
Updated: 2022-07-22

## What is Supervised Boot?

Supervised Boot is Zymbit's method for insuring that the boot process is secure. A list of files can be specifed to be hashed, signed, and verified by the SCM prior to allowing the CM4 module to boot. By default, the following files are signed and verified:

```
/boot/bcm2711-rpi-cm4.dtb
/boot/bootcode.bin
/boot/cmdline.txt
/boot/config.txt
/boot/initrd.img
/boot/kernel7l.img
/boot/start4.elf
/boot/zymbit_mac_address
/boot/overlays/vc4-kms-v3d.dtbo
```

## The Manifest

The Manifest is the list of files that will be tracked and verified by the Zymbit Secure Compute Module (SCM) during the boot process. The Manifest resides within the SCM itself. It does not live on any file system. Zymbit provides an API interface to add/update/delete entries in the Manifest, as well as set the action to take if a signature verification of a file should fail.
 
All files in the Manifest must reside within the /boot partition. File paths in the Manifest all include `/boot/` by default. Only include the portion of the file path after `/boot/`. For instance, to include `/boot/config.txt`, you would call our API with the string `config.txt`.

If any file exists in the Manifest, Supervised Boot is automatically enabled. To turn off Supervised Boot, remove all files from the Manifest.

## Example Python CLI Application

{{% callout notice %}}

The name of the feature has been changed to **Supervised Boot** and the API methods have also been changed from earlier versions. The example below requires new API and Zymbit python code. Changes are in version `zkapputilslib 1.1-24` and `zku 1.0.32`. To update to the new naming convention,
```
sudo apt-get update
sudo apt-get upgrade
sudo pip3 install -i https://test.pypi.org/simple/ zku --upgrade
```

To check the current versions,

```
dpkg --list zkapputilslib
pip3 show zku
```

{{% /callout %}}

### Prerequisites

* Zymbit Modules that support this feature:
    * [SCM Early Access](https://www.zymbit.com/secure-compute-node/)

* All code snippets written in this article are written using Python3. For more Zymbit API documentation (Python/C/C++) visit: [API Documentation](../../api)

### Example Application

The code below can be used to add/update/delete and display the Manifest of files to check during Secure Boot operation. Save the code below to a file. We will name it manifest.py for the following examples.

```python
#!/usr/bin/python3

import argparse
import zymkey

class Manifest:

    def add_update(slot, filepath):
        print(f"Manifest Add/Update (slot={slot}):  {filepath}")
        zymkey.client.add_or_update_supervised_boot_file(int(slot), filepath)

    def delete(filepath):
        print(f"Manifest Delete:  {filepath}")
        zymkey.client.remove_supervised_boot_file(filepath)

    def show():
        print("\nManifest:")
        print("---------")
        list = zymkey.client.get_supervised_boot_file_manifest()
        if len(list) ==  0:
            print("Manifest is empty")
        else:
            for filepath in list.split():
                print(filepath)
        print("")

# Setup arg parser
parser = argparse.ArgumentParser(
    description="add/del/update Supervised Boot Manifest. (show by default)",
    epilog="filepath from /boot. ex: for /boot/config.txt, provide config.txt."
    )
group = parser.add_mutually_exclusive_group()
group.add_argument("-a", "--add", metavar="filepath", help="add filepath to manifest", action="store", required=False)
group.add_argument("-u", "--update", metavar="filepath", help="update filepath in manifest", action="store", required=False)
group.add_argument("-d", "--delete", metavar="filepath", help="delete filepath from manifest", action="store", required=False)
parser.add_argument("-s", "--slot", metavar="slot_num", help="use slot for add/delete (default=0)", default=0, action="store", required=False)
args = parser.parse_args()
parser.parse_args()

if args.add:
    Manifest.add_update(args.slot, args.add)
elif args.update:
    Manifest.add_update(args.slot, args.update)
elif args.delete:
    Manifest.delete(args.delete)

Manifest.show()
```

### Working with the Manifest

Running the example with no parameters will display the current contents of the Manifest. The default Manifest as shipped contains:

```
$ ./manifest.py
Manifest:
---------
bcm2711-rpi-cm4.dtb
bootcode.bin
cmdline.txt
config.txt
initrd.img
kernel7l.img
start4.elf
zymbit_mac_address
overlays/vc4-kms-v3d.dtbo
```

To add a file to the Manifest, run the example script with the --add option and give it a filepath to a file in /boot. We'll create a sample file by copying /etc/hosts,

```
$ sudo cp /etc/hosts /boot/sample.txt
$ ./manifest.py --add sample.txt
Manifest:
---------
bcm2711-rpi-cm4.dtb
bootcode.bin
cmdline.txt
config.txt
initrd.img
kernel7l.img
start4.elf
zymbit_mac_address
overlays/vc4-kms-v3d.dtbo
sample.txt
```

The SCM will create a signature for the file `sample.txt` and store it internally. The SCM will verify that signature against the file upon the next boot. If the signature does not verify, the SCM will be held in reset and will not boot. For alpha, the SCM will "simulate" this process by flashing an LED sequence of 22 flashes followed by 9 flashes, repeated three times, and then the SCM will boot normally. 

You can test this out:

 * First, after adding `sample.txt` to the Manifest and power cycle. The system should boot normally.
 * Next, edit `/boot/sample.txt` and power cycle. The sign/verify process will fail and the SCM will simulate a __Held in Reset__ condition with a sequence of 22 flashes followed by 9 flashes, three times. For Alpha, the SCM will boot up and allow you to recover. 

There are three ways you can remedy the verification failure:
 
 * Edit `/boot/sample.txt` and revert back to its original contents.
 * Update the Manifest to sync up the current contents of the file with the Manifest

    `./manifest.py --update sample.txt`
    
 * Remove the file from the Manifest with `./manifest.py --delete

    `./manifest.py --delete sample.txt`

The next powercycle should boot with the normal sequence - it should not flash the 22 flashes followed by 9 flashes, three times sequence.

### Specifying a Different Slot

Any of the SCM key slots can be used for the sign/verify functions. The example above uses slot 0 by default but will take alternative slot numbers. Slots 0-13 are always available. To use a slot in the key store (Slots 16-528) you would need to change the above script to first include generating a key for that slot. See the [API Documentation](../../api).



