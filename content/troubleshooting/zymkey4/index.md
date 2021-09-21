---
title: "Zymkey4 FAQ & Troubleshooting"
linkTitle: "ZYMKEY4"
lastmod:
draft: false
images: []
type: docs
api_docs: true
layout: single
weight: 1
toc: true
---

------
## **Troubleshooting**
------

### **Troubleshooting Checklist**

Before contacting Zymbit with troubleshooting related questions, please read through the following troubleshooting checklist.

1. Power supply. The recommended power for the PI4 is 5V and 3 amps. Most of the problems we see are from a poor power source. Start with a good power supply from the PI foundation or Canakit, not a phone charger.
2. I2C enabled. Double check that you have enabled the I2C bus. An easy way to check is "ls -l /dev/i2c-1". If /dev/i2c-1 exists, the I2C bus is enabled.
3. apt update and upgrade. Be sure that your software is up to date.
4. Installation. The curl script will reboot your system once completed. After the reboot, the blue LED on your Zymbit device should blink once every 3 seconds. You must get to this step before proceeding to encryption, etc.

If your issue is not related to any of the above list, read through the FAQ below to see if your issue is answered. If you still do not see a solution to your problem, reach out on our [Community Forum](https://community.zymbit.com/). Thank you!

##### Q: Why does the LED continue to blink rapidly? It never blinks with the described pattern of once (in Development mode) or three times (in Production mode) every three seconds.

<details>

<summary>Expand for Answer</summary>

<br>

A: Check the following:

1. Check that the Raspberry Pi power is sufficient. The red LED on most Raspberry Pi models indicates if the Pi is being powered adequately. If it is not lit at all or flashes intermittently, try a different power supply or a different USB cable. For the RPi4, your power supply must provide at least 3 Amps.

2. Make sure that you have enabled i2c support using raspi-config BEFORE your install the software. Also, when you enable i2c communications be sure to follow the enable-disable-enable sequence.

3. If i2c support has been enabled correctly and the Zymkey LED is still rapidly blinking, check proper physical installation of the Zymkey as detailed in this "Getting Started" guide.

4. Zymkey uses GPIO header pins 3 and 5 for i2c communications and pin 7 as an interrupt signal to the Pi. Pin 7 should preferably be dedicated exclusively to Zymkey. Other devices may share the i2c bus with Zymkey, but there may still be address conflicts. By default, Zymkey uses slave address 0x30. If the address conflict cannot be resolved on the other i2c devices, there is a way of changing the i2c address through an API call. Using this application, the Zymkey address can be changed anywhere in the ranges of 0x30-0x37 or 0x60-0x67. 

<details>

<summary>Expand for API information to change i2c address</summary>

<br>

Python: `set_i2c_address`

C: `int zkSetI2CAddr ( zkCTX ctx, int addr)`

[See API Documentation](http://docs.zymbit.com/quickstart/api/)

</details>
<p></p>

5. Oftentimes the 1-Wire interface relies on pin 7 (GPIO 4) for communication. If the 1-Wire interface is enabled, try disabling through raspi-config. If that resolves the problem take steps to either move the Zymkey interrupt signal from GPIO 4 or the 1-Wire interface from GPIO 4.

6. if the directory at _/var/lib/zymbit_ or any of the files and/or subdirectories are corrupted or deleted, the Zymkey will fail to work. 
**IMPORTANT: if this happens when the Zymkey is locked (i.e. Production Mode), the Zymkey can never be used again.**

-----

</details>

##### Q: The LED blinks rapidly when booting, but eventually turns off. It doesn't blink once or three times every 3 seconds as described.

<details>

<summary>Expand for Answer</summary>

<br>

A: This issue could be caused by the same issues described in the first question (Why does the LED continue to blink rapidly?). Additionally, this can be caused if a locked (Production Mode) Zymkey is moved to another Pi.

-----

</details>

##### Q: What do the different LED blinking patterns mean?

<details>

<summary>Expand for Answer</summary>

<br>

1. 1 second very rapid flash, 1 second off, 8 slow blinks
   * This indicates interrupted communications.

<p></p>

2. 1 second very rapid flash, 1 second off, 5 slow blinks
   * This indicates a failure to communicate with ATECC. The most likely cause is the Zymkey is in Production Mode, tamper detect was set to self-destruct, and a tamper detect event caused the Zymkey to self-destruct. If tamper detect is not armed, this indicates a hardware problem.

<p></p>

3. Constant rapid blinking (waiting for host to connect)
   * This indicates that you Zymkey is operational but has not bound to the host. If the Zymkey continues to blink this pattern, it could mean that there is a problem with the host Pi or that the i2c is not configured or that the i2c and wake pins are not making contact.

<p></p>

4. Once every 3 seconds
   * This indicates that your Zymkey is working and running.

<p></p>

5. Three rapid blinks every 3 seconds
   * This indicates the Zymkey is in Production Mode and is working and running.

<p></p>

6. Rapid blinking then LED off permanently
   * This indicates the Zymkey is in Production Mode but cannot bind with the RPi / SD card pair.  In Production Mode the binding with a particular Pi and SD card becomes permanent. Most likely cause for this is that the Zymkey, the SD card, or the PI has been swapped out.

-----

</details>

##### Q: How do I set an alternative I2C address?

<details>

<summary>Expand for Answer</summary>

<br>

A: You can change the I2C address through our standard APIs:
* C: `int zkSetI2CAddr ( zkCTX ctx, int addr)`
* Python: `set_i2c_address`

The I2C communication between the Zymkey and the Host is encrypted, but will not interfere with other devices on the same bus (assuming there is no address conflict).

[See API Documentation](http://docs.zymbit.com/quickstart/api/)

-----

</details>

##### Q: Why does my Zymkey fail to restart after cycling power?

<details>

<summary>Expand for Answer</summary>

<br>

A: Zymkey monitors the quality of 5V power coming into the host computer. If the voltage drops below a specified limit, even momentarily, then Zymkey will disable all security services to the host. This is a security feature to prevent power cycle and brown-own attacks. If you are powering a display, modem, or other power-hungry device from your Pi, then check the capacity and quality of your power supply. [**Learn more >**](https://docs.zymbit.com/reference/power-quality/) 

-----

</details>

##### Q: Why is my Zymkey "invisible" to the i2c-tools suite?

<details>

<summary>Expand for Answer</summary>

<br>

A: Some people have become accustomed to using i2c-detect to do a first level check for correct installation and baseline functionality of i2c devices. However, these tools only really work if the i2c device communicates via a protocol that sits on top of i2c called SMBus or SMB ([System Management Bus](https://en.wikipedia.org/wiki/System_Management_Bus)). Instead, Zymkey communicates to the host at a much more fundamental level, in part because the Zymkey protocol traffic is encrypted. 

You can tell if you successfully installed it by observing the blue LED. If it is flashing once every 3 seconds, then binding completed. You can also use the systemctl command. It should say “active (running)”:

`systemctl status zkifc`

-----

</details>

##### Q: If the install fails, can I run it more than once?

<details>

<summary>Expand for Answer</summary>

<br>

A: Yes, you should have no problem running it multiple times if it were to fail.

-----

</details>

### **Encrypting Root File System**

##### Summary of steps

* Start with a blank USB device.
* USB storage should be twice the size of the SD card.
* The process for encrypting the SD card stops zkifc. The blue LED will flash rapidly during the encryption process. It will return to blinking once every 3 seconds when complete.
* The process will automatically do two reboots. Be patient.
* If the encryption process does not complete, it's best to start fresh and try again.

##### Q: How can I check if the system matches the default parameters?

<details>

<summary>Expand for Answer</summary>

<br>

A: `lsblk` will show you the partitions. Look for the name of your / partition (default is mmcblk0p2) and the USB device (default is sda). Example output:

```
NAME         MAJ:MIN  RM   SIZE  RO TYPE  MOUNTPOINT
mmcblk0      179:0    0   14.9G   0  disk
|-mmcblk0p1  179:1    0    256M   0  part   /boot
`-mmcblk0p2  179:2    0   14.6G   0  part   /
sda            8:0    0   32.0G   0  disk
|_sda1         8:1    0   32.0G   0  part   
```

-----

</details>

##### Q: How can I monitor the status after phase 1 reboot?

<details>

<summary>Expand for Answer</summary>

<br>

A: Once you get to the second phase and login, you can monitor progress with 

`journalctl -fu cfg_SD_crfs`

That will show you progress of the second half of the encryption process.

-----

</details>

##### Q: How can I confirm my file system is encrypted and protected?

<details>

<summary>Expand for Answer</summary>

<br>

A: Since `zkifc` is stopped during the process, the blue LED will flash rapidly until the whole process completes. Once both of the automautic reboots are completed, the blue LED will return to flashing once every 3 seconds. 

`lsblk` will show you that you now have a "cryptrfs" partition under your mmcblk0p2 (default)

If your system reboots twice, the LED returns to flashing once every 3 seconds, and `lsblk` displays a "cryptrfs" partition, you can be confident your system is encrypted and protected.

-----

</details>

### For more help, see Zymbit's [Community Forum](https://community.zymbit.com/).

------
## **Features**
------

##### Q: What curves are supported for Zymbit products?

<details>

<summary>Expand for Answer</summary>

<br>

Zymkey and HSM4: NIST P-256 and secp256r1

HSM6: NIST P-256, secp256r1, secp256k1, X25519, ED25519

-----

</details>

##### Q: How do I use HSM6’s `store_foreign_public_key` function to store a Zymkey or HSM4 public key on HSM6?

<details>

<summary>Expand for Answer</summary>

<br>

A: The easiest way is to save the HSM4 key directly to a binary file, copy that file to the HSM6 and read in the binary file.

HSM4 side:


```
#!/usr/bin/python3
import zymkey

# Get the public key from slot 0 and save it in a file
pub_key_file = '/tmp/pub_key_slot0'
slot = 0
key = zymkey.client.get_public_key(slot)
with open(pub_key_file, "wb") as f:
    f.write(key)
```

*copy /tmp/pub_key_slot0 over to the HSM6 PI*

HSM6 side:

```
#!/usr/bin/python3
import zymkey

key_file = "/tmp/pub_key_slot0"
key = open(key_file, "rb").read()
# Store the key in the foreign key store
foreign_slot = zymkey.client.store_foreign_public_key('secp256r1', key)
```

-----

</details>

##### Q: How can I reset the clock to the current timestamp?

<details>

<summary>Expand for Answer</summary>

<br>

A: The clock will sync to the current timestamp once the Pi has achieved NTP sync. This requires you to have access to the Internet.

-----

</details>

##### Q: How do I access the devices (RTC, accelerometer, crypto) on Zymkey?

<details>

<summary>Expand for Answer</summary>

<br>

A: For Zymkey and HSMs, kernel drivers and libraries for all of the devices are included in the Zymkey software package via the APIs.

-----

</details>

##### Q: My GPG Key expired and I cannot access the Zymkey Repository. How do I update the Key?


<details>

<summary>Expand for Answer</summary>

<br>

A: You can update your existing key with the following command:

`curl -L https://zk-sw-repo.s3.amazonaws.com/apt-zymkey-pubkey.gpg | apt-key add -`

-----

</details>

##### Q: Can the Zymkey detect if the SD card has been removed?

<details>

<summary>Expand for Answer</summary>

<br>

A: No, but perimeter detect can be configured to prevent access to the SD card. When a tamper event is detected, the Zymkey will, when properly configured via the API, destroy all critical key material and the root fs will fail to be decrypted upon boot.

-----

</details>

### **Battery & Power Questions**

##### Q: Should I use an external battery on my Zymkey or HSM?

<details>

<summary>Expand for Answer</summary>

<br>

A: The following table compares Zymkey and HSM operational modes while connected to Main Power, Battery Power, and No Power.

The battery is required to maintain the Real Time Clock and the perimeter detect circuits when the host power is removed. Without the battery, these two functions will not be active when the host power is removed.

![external battery matrix](../external-battery.png) 

-----

</details>

##### Q: What happens when the battery dies? How can I change the battery when it dies, without self-destructing my device?

<details>

<summary>Expand for Answer</summary>

<br>

A: If the battery dies and the host is not connected to power, some features will go out, such as Perimeter Detect and Real Time Clock. See the table below for more information.

![external battery matrix](../external-battery.png) 

With Zymkey and HSM4, if tamper detect is enabled and the battery dies or is removed, the device will self-destruct. This is an intentional security feature. If tamper detect is NOT enabled, you should connect the host device to power to change the battery.

HSM6 has a battery monitoring feature to help the user prevent the battery from dying. If the battery dies, HSM6 users have the ability to choose whether the device should self-destruct or hold in reset mode until the battery is changed.

-----

</details>

### **Kernel & Kernel Boot Questions**

##### Q: Can you tell the kernel not to run a shell?

<details>

<summary>Expand for Answer</summary>

<br>

A: Someone could easily replace the kernel and, while it is possible to configure initramfs to not permit the busybox shell to, that can be sidestepped as well. Even if you hack your own changes to the kernel to ignore the `init` option, someone could replace your kernel. Also, kernel updates would have to be done manually and the updates from the apt repo would have to be blacklisted.

-----

</details>

##### Q:  Can you tell the kernel to ignore cmdline.txt?

<details>

<summary>Expand for Answer</summary>

<br>

A: There are many reasons why this is infeasible, but the main one is that, since the GPU initially functions as a bootloader processor during boot and since Broadcom has not made the GPU compiler publicly available as well as the source code for the bootloader, one cannot simply compile their own code that would ignore cmdline.txt.


-----

</details>


##### Q: Is it possible to encrypt the boot partition?

<details>

<summary>Expand for Answer</summary>

<br>

A: No because the GPU bootloader does not have encryption features implemented and, even in lieu of that, it does not know how to communicate with Zymkey. The best solution, then, would be to implement an independent secure boot procedure. As mentioned above, we are currently working on adding this feature in a future product.


-----

</details>

### **Production (“self-destruct”) Mode Questions**

##### Q: When using the perimeter-detect feature, does the “self-destruct” mode work (destroy all of its key material) even when the Lock Tab hasn’t been cut?

<details>

<summary>Expand for Answer</summary>

<br>

A: Self-destruct mode works only after the Lock Tab has been cut.

-----

</details>

##### Q: Is there a way to turn off “self-destruct” mode?

<details>

<summary>Expand for Answer</summary>

<br>

A: No, once turned on, "self-destruct" mode is permanent.

-----

</details>


##### Q: If my Zymkey does “self-destruct,” can I create new keys and reuse the hardware?

<details>

<summary>Expand for Answer</summary>

<br>

*   The SBC and SD card hardware will be reusable.
*   Because the SD card contents are encrypted and the decryption key was destroyed, the data is lost.
*   The Zymkey will not be reusable because the key slots will be destroyed.

-----

</details>

##### Q: If I cut the Lock-Tab on a Zymkey, can I move that Zymkey to another Pi or change the SD card?

<details>

<summary>Expand for Answer</summary>

<br>

A: No. Cutting the Lock-Tab **permanently** binds that instance of Zymkey to the specific instances of host computer and SD card. This is a security feature to prevent credentials being moved from one host to another. **DO NOT cut the Lock-Tab if you are still in development and expect to change the host or SD cards.**

-----

</details>

##### Q: Will Zymkey still self-destruct, even when my SBC is powered off?

<details>

<summary>Expand for Answer</summary>

<br>

A: Yes, because Zymkey is battery powered. As long as the battery is sufficiently charged, it will still self-destruct.

-----

</details>

 

------
## **Other**
------

##### Q: Where can I learn about and/or pre-order future products?

<details>

<summary>Expand for Answer</summary>

<br>

A: Sign up for our new product email updates at the bottom of [Zymbit's homepage](https://www.zymbit.com/).

-----

</details>

##### Q: Which SBCs are compatible with Zymkey?

<details>

<summary>Expand for Answer</summary>

<br>

*  Electrically, the Zymkey-I2C will interface to any single board computer using I2C. Check compatibility with your particular Linux distribution.
*  Raspberry Pi 3, 3B+, 4, Zero
*  RPi Compute Module 3, 4
*  NVIDIA Jetson Nano, Xavier NX

-----

</details>

##### Q: Does Zymkey work with Arduino?

<details>

<summary>Expand for Answer</summary>

<br>

A: We have no plans to release an Arduino shield version. While we love Arduinos and use them all the time, they generally don’t have enough resources to handle cryptographic operations at this level.


-----

</details>

##### Q: Does Zymkey work with BeagleBone?

<details>

<summary>Expand for Answer</summary>

<br>

A: Zymbit does not officially support the BeagleBoard platform at this time.

-----

</details>


##### Q: Which operating systems does Zymkey support?
 
<details>

<summary>Expand for Answer</summary>

<br>

![supported OSs](../supported-os-dots.png) 

-----

</details>
  

##### Q: How much power does Zymkey consume?

<details>

<summary>Expand for Answer</summary>

<br>

*   Zymkey-RPi (3.3V): idle approx. 1mA; max active < 25mA with LED off, < 35mA with LED on.
*   Zymkey-USB (5V): idle approx. 1.5mA; max active < 40mA with LEDs off, < 60mA with LEDs on.

See [Power Quality]( https://docs.zymbit.com/reference/power-quality/) for more information.

-----

</details>
