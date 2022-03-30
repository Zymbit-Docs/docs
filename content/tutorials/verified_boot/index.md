---
title: "Working with SCM Verified Boot"
linkTitle: "Verified Boot (SCM Early Access)"
description: ""
date: "2022-03-28"
lastmod: ""
draft: false
images: []
toc: true
---
Updated: 2022-03-28

## What is Verified Boot?

Description for Verfied Boot and the Manifest.

## The Manifest

The Manifest is the list of files that will be tracked and verified by the Zymbit Secure Compute Module (SCM) during the boot process. The Manifest resides within the SCM itself. It does not live on any file system. Zymbit provides an API interface to add/update/delete entries in the Manifest, as well as set the action to take if a signature verification of a file should fail.
 
All files in the Manifest must reside within the /boot partition. File paths in the Manifest all include `/boot/` by default. Only include the portion of the file path after `/boot/`. For instance, to include `/boot/config.txt`, you would call our API with the string `config.txt`.

## Example Python CLI Application

### Prerequisites

* Zymbit Modules that support this feature:
    * [SCM Early Access](https://www.zymbit.com/secure-compute-node//)

* The SCM comes pre-installed and ready to run. No additional steps are necessary

* All code snippets written in this article are written using Python3. For more Zymbit API documentation (Python/C/C++) visit: [API Documentation](/api)

### Example Application

The code below can be used to add/update/delete and display the Manifest of files to check during Secure Boot operation. Save the code below to a file. We will name it manifest.py for the following examples.

```python
#!/usr/bin/python3

import argparse
import zymkey

class Manifest:
    def add_update(slot, filepath):
        print(f"Manifest Add/Update (slot={slot}):  {filepath}")
        zymkey.client.add_or_update_verified_boot_file(slot, filepath)

    def delete(filepath: str):
        print(f"Manifest Delete:  {filepath}")
        zymkey.client.remove_verified_boot_file(filepath) 

    def show():
        print("Manifest:")
        print("---------")
        zymkey.client.retrieve_manifest_method()

# Setup arg parser
parser = argparse.ArgumentParser(
    description="add/del/update Verified Boot Manifest. (show by default)",
    epilog="filepath from /boot. ex: for /boot/config.txt, provide config.txt."
    )
group = parser.add_mutually_exclusive_group()
group.add_argument("-a", "--add", metavar="filepath", help="add filepath to manifest", action="store", required=False)
group.add_argument("-u", "--update", metavar="filepath", help="update filepath in manifest", action="store", required=False)
group.add_argument("-d", "--delete", metavar="filepath", help="delete filepath from manifest", action="store", required=False)
parser.add_argument("-s", "--slot", metavar="slot_num", help="use slot for add/delete (default=0)", default=0, action="store", required=False)
args = parser.parse_args()
parser.parse_args()

# Do the work
if args.add:
    Manifest.add_update(args.slot, args.add)

elif args.update:
    Manifest.add_update(args.slot, args.update)

elif args.delete:
    Manifest.delete(args.delete)

Manifest.show()
```

### Display the Current Manifest

Running the example with no parameters will display the current contents of the Manifest. The default Manifest as shipped contains:


```
$ ./manifest.py
Manifest:
---------
config.txt
cmdline.txt
start4.elf
kernel.img
```

To add a file to the Manifest, run the example script with the --add option and give it a filepath to a file in /boot. We'll create a sample file by copying /etc/hosts,

```
$ sudo cp /etc/hosts /boot/sample.txt
$ ./manifest.py --add sample.txt
Manifest:
---------
config.txt
cmdline.txt
start4.elf
kernel.img
sample.txt
```

The SCM will create a signature for the file `sample.txt` and store it internally. The SCM will verify that signature against the file upon the next boot. If the signature does not verify, the SCM will be held in reset and will not boot. For alpha, the SCM will "simulate" this process by flashing an LED sequence of 20 flashes, repeated three times, and then the SCM will boot normaly. 

You can test this out:

 * First, after adding `sample.txt` to the Manifest, reboot. The system should boot normally.
 * Next, edit `sample.txt` and reboot. The sign/verify process will fail and the SCM will simulate a __Held in Reset__ condition with a sequence of 20 flashes, three times.
 * Revert the sample.txt back to it's original contents. Reboot should return to normal.

TODO:

*  Add example of deleting file
*  Add example of updating file
*  Add example using an alternative slot ! 0


