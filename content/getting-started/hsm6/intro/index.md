---
title: Getting Started with HSM6
linkTitle: Intro
description: ""
date: ""
lastmod: ""
draft: false
images: []
weight: -660
toc: true
---

## Prerequisites

* Raspberry Pi 3 or 4, if using Raspberry Pi.
* Raspbian or Ubuntu/ Tegra is installed.
    * Other Linux distributions will work, but may require extra configuration. We will gladly provide guidance, but cannot guarantee support. For information see the [Operating Systems](https://community.zymbit.com/c/23) Community Forum.
* Adequate power supply is used (5V).
    * **For Pi users:** if the Red Power LED on the Pi is not illuminated this means the supply voltage is inadequate.
    * More info [here](https://docs.zymbit.com/reference/power-quality/).
----------
## 1. Install the HSM6

Fit your HSM onto the PiZero HAT (Hardware Attached on Top). The connector plugs into the pins on the board.

![HSM6 Pi HAT Installation](HSM-install-to-hat.png)

----------
## 2. Install Battery
##### **Optional, but highly recommended**
Battery installation is highly recommended if your device is vulnerable to physical access. If main power to the HSM is removed, then the real-time-clock and tamper detect features will not function. The battery is used to maintain operation of the real-time-clock and tamper detect features in the event that main power (from the GPIO header) is lost. 

##### **Primary Battery Holder (Recommended)**
Your PiZero HAT can be fitted with a **3V CR2032  coincell**. This battery should last 3-5 years. We recommend using a high quality one like [this](https://www.amazon.com/Batteries-Panasonic-Lithium-Battery-Blister/dp/B002U00ZNK/ref=sr_1_5?crid=1YG7IIRUM96SP&dchild=1&keywords=panasonic+cr2032+3v+battery&qid=1602709891&sprefix=panasonic%2Caps%2C180&sr=8-5). 

**IMPORTANT:** Note the correct polarity with **+ve  facing upwards !!**

![HSM6 Battery Installation](HSM-battery-install.jpg)
 
##### **Optional Battery Connector (Alternative)**
**Caution**: Ensure you select the right connector type-- Molex 51021-0200-B (1.25mm Pitch). You can purchase the battery [here](https://www.amazon.com/CR2032-Battery-51021-0200-B-1-25mm-Connector/dp/B07TS54R42/ref=b2b_nav_d_bia_2/133-6806428-1529144?_encoding=UTF8&pd_rd_i=B07TS54R42&pd_rd_r=d30b0d19-eeab-4b5c-a2ee-0ceef542a1a2&pd_rd_w=ZXBat&pd_rd_wg=U87Gu&pf_rd_p=4a93c781-cfc8-46bb-85fa-dc304a3c96a9&pf_rd_r=91SXE6T1J2V2ZYD7C6FD&psc=1&refRID=91SXE6T1J2V2ZYD7C6FD).

Battery should look like this:
![HSM-battery-connector](HSM-battery-connector.png)

Mating component specifications:
![HSM-Molex-specs](HSM-molex-specs.png)

Plug wired CR2032 battery into optional battery connector, located below. 
![Optional Battery Connector Location](HSM-battery-plugin.png)


----------

## 3. Install Pi HAT

**Power off your Pi or Jetson before proceeding**

<p><img src="HSM-install-hat-1.png" alt="Install PiHAT onto RPi - Open" width="50%"><img src="HSM-install-hat-nvidia-1.png" alt="Install PiHAT onto RPi - Open Nvidia" width="50%"></p>
<p><img src="HSM-install-hat-2.png" alt="Install PiHAT onto RPi - Closed" width="50%"><img src="HSM-install-hat-nvidia-2.png" alt="Install PiHAT onto RPi - Closed Nvidia" width="50%"></p>

Follow the above pictures to position the PiHAT. The HSM and battery should be facing the Raspberry Pi and concealed from view.

**WARNING**: Be sure all the GPIO pins are aligned and have a respective slot. If misaligned, this could cause damage to the HSM, PiHAT, and/or your host device.

Once aligned properly, press firmly down onto the header. Your PiHAT should fit relatively snug.

Now power up the Pi and you will see a blue LED blinking rapidly and consistently (5 blinks per second). This indicates the HSM is operational but not configured. If the blue LED blinks erratically, or not at all, then there is an installation error and you should check your connections.

<img src="HSM4-LED-5times-per-second.gif" alt="HSM4-LED-5times-per-second" width="25%">

----------

## 4. Turn on the I2C Bus

For the Jetson, the Operating System - Tegra - is based on Ubuntu. The I2C bus is enabled by default. There are no additional steps required.

For the RPi, follow these steps to enable the I2C bus:
1. Log in to your pi and run `sudo raspi-config`
2. Select Interfacing Options -> I2C -> 
Would you like the ARM I2C interface to be enabled? select  (Yes), enter, enter
3. Arrow Right to Finish

Your I2C bus is now on and ready to talk to the HSM.

The default I2C address for HSM is 0x30. If needed, you can [change the I2C Address](https://docs.zymbit.com/quickstart/faq/hsm6/#q-how-do-i-set-an-alternative-i2c-address) after following steps 5 and 6.

----------

## 5. Install Software Packages and API

The Zymbit install process uses curl which is not included with Tegra (Ubuntu 18.04) by default. 
Install curl: sudo apt install curl

For a bare Raspbian system, first login to your Pi.

Then download and install the necessary Zymbit services onto your Pi. 
`curl -G https://s3.amazonaws.com/zk-sw-repo/install_zk_sw.sh | sudo bash`
(grab a cup of coffee because this will take between 4 and 20 minutes).

----------
## 6. Developer Mode (temporary binding)
When the software installation has completed, reboot. After rebooting, the Pi/ Jetson will temporarily bind the HSM to itself. Once bound, the blue LED should blink once every 3 seconds.

<img src="HSM4-LED-every-3-seconds.gif" alt="HSM4-LED-every-3-seconds" width="25%">

Your HSM is now in Developer Mode. The binding is temporary and the HSM can be moved to another host device and the binding process repeated. Now is the time to prototype. Do all development work with the HSM in this mode. You can safely test the self-destruct features here. A self-destruct in this mode will stop all HSM functionality until the host is rebooted. Only in production mode will the HSM actually self-destruct.

Before moving on to Production mode, ensure your application is running correctly. Explore our HSM resources for help: 

* [Perimeter Detect](https://docs.zymbit.com/tutorials/perimeter-detect/hsm6)
* [Encrypting your root file system](https://docs.zymbit.com/tutorials/encrypt-rfs/hsm6)
* [Encrypting & decrypting sensor data on disk](https://docs.zymbit.com/tutorials/sensor-data/)
* [Using the Real Time Clock](https://docs.zymbit.com/reference/real-time-clock/)
* [Zymbit APIs](https://docs.zymbit.com/quickstart/api/).

If you have any questions, feel free to create a new post here in the Community and we will get back to you.


To test some of the API and see it's functionality, you can also run these pre-installed scripts: 

`python3 /usr/local/share/zymkey/examples/zk_app_utils_test.py`

`python3 /usr/local/share/zymkey/examples/zk_crypto_test.py`

----------
## 7. Production Mode (permanent binding)

When you are ready to deploy your system into the field we recommend that you permanently bind your HSM to a specific host device and SD card.

##### **WARNING: THIS BINDING PROCESS IS PERMANENT AND CANNOT BE REVERSED. PAY ATTENTION TO THE FOLLOWING:**
* Your specific HSM will be locked to the specific host device and it is impossible to move or bind your HSM to another host. There are no factory resets, masterkeys or other forms of recovery. 

* If you are using the perimeter_detect features, the sequence in which you arm, disarm is very important in production mode. Be sure to follow the process steps below.


* Once you have locked your HSM into production mode, Zymbit cannot guarantee its operation if you subsequently do a major distribution upgrade (e.g. Raspbian Jessie to Stretch). [Contact Zymbit for more information.](https://www.zymbit.com/contact-us/)

* If you decide that you are not ready for permanent binding then leave it in developer mode, but beware this makes it easier for a bad actor to replace the host with rogue hardware.

##### **Moving from Developer Mode to Production Mode**
**Pre-binding Checklist**
Make sure this is done before continuing
1.    Install the battery onto HAT and install HSM onto HAT
2.    Place HAT onto the host device (with power down on the host)
3.    Turn on the host (LED: 5 blinks per second)
4.    Configure the I2C bus
5.    Install HSM interface software package (LED: 1 blink every 3 seconds)
6.    Set Perimeter Event Actions to “none” or “notify only” (It is "none" by default)
7.    Create your LUKS encrypted volume (If encrypting SD card)
8.    Install your applications into your encrypted volume (If encrypting SD card)
9.    Confirm your system and applications work fully as you intend

With the Zymkey, a physical tab was cut to go into production mode. In the HSM models, to go into production mode it only requires a function call followed by a reboot.

The API function lock binding puts the HSM into production mode. Below are three scripts which check the current binding info, lock the HSM binding, then check the current binding info again. Remove the comments around the lock binding function to move to production mode.

<details>

<summary>C - zkLockBinding</summary>
<br>

```
void check_code(int code, char* location){
  if (code < 0)
  {
    fprintf(stderr, "FAILURE: %s - %s\n", location, strerror(code));
  }
  else if (code >= 0)
  {
    fprintf(stdout, "SUCCESS: %s - %d\n", location, code);
  }
}

void HSM_soft_bind(zkCTX zk_ctx)
{
  bool binding_is_locked = false;
  bool is_bound = false;
  int ret = zkGetCurrentBindingInfo(zk_ctx, &binding_is_locked, &is_bound);
  check_code(ret, "zkGetCurrentBindingInfo");
  printf("Binding is locked: ");
  printf(binding_is_locked ? "true" : "false");
  printf("\n");
  printf("HSM is bound: ");
  printf(is_bound ? "true" : "false");
  printf("\n\n");

  //ret = zkLockBinding(zk_ctx);
  //if(binding_is_locked && is_bound)
  //{
  //  check_code(ret, "zkLockBinding - Already Bound");
  //}
  //else
  //{
  //  check_code(ret, "zkLockBinding");
  //}
  //printf("\n");

  ret = zkGetCurrentBindingInfo(zk_ctx, &binding_is_locked, &is_bound);
  check_code(ret, "zkGetCurrentBindingInfo");
  printf("Binding is locked: ");
  printf(binding_is_locked ? "true" : "false");
  printf("\n");
  printf("HSM is bound: ");
  printf(is_bound ? "true" : "false");
  printf("\n\n");
}

int main()
{
  zkCTX zk_ctx;
  int status = zkOpen(&zk_ctx);
  check_code(status, "zkOpen");
  printf("\n\n");

  HSM_soft_bind(zk_ctx);

  status = zkClose(zk_ctx);
  check_code(status, "zkClose");
  printf("\n");

  return 0;
}
```
</details>


<details>
<summary>C++ - lockBinding</summary>
<br>

```
#include <stdio.h>
#include <zkAppUtilsClass.h>

using namespace std;
using namespace zkAppUtils;

void HSM_soft_bind(zkClass* zk_inst)
{
  bool binding_is_locked = false;
  bool is_bound = false;
  zk_inst->getCurrentBindingInfo(binding_is_locked, is_bound);
  printf("Binding is locked: ");
  printf(binding_is_locked ? "true" : "false");
  printf("\n");
  printf("HSM is bound: ");
  printf(is_bound ? "true" : "false");
  printf("\n");

  //zk_inst->lockBinding();
  //printf("lockBinding successful\n");

  zk_inst->getCurrentBindingInfo(binding_is_locked, is_bound);
  printf("Binding is locked: ");
  printf(binding_is_locked ? "true" : "false");
  printf("\n");
  printf("HSM is bound: ");
  printf(is_bound ? "true" : "false");
  printf("\n");
}

int main()
{
  zkClass* zk_inst;
  zk_inst = new zkClass();
 
  HSM_soft_bind(zk_inst);

  delete zk_inst;
  return 0;
}
```
</details>

<details>

<summary>Python - lock_binding</summary>
<br>

```
import zymkey
tup = zymkey.client.get_current_binding_info()
print("HSM is bound: " + str(tup[1]))
print("Binding is locked: " + str(tup[0]))

#zymkey.client.lock_binding()

tup = zymkey.client.get_current_binding_info()
print("HSM is bound: " + str(tup[1]))
print("Binding is locked: " + str(tup[0]))
```
</details>


Once you have successfully moved to Production Mode and rebooted your system, the LED blink pattern will change to **3 rapid blinks once every 3 seconds** to indicate that HSM has bound to the host in production mode.

<img src="HSM4-LED-3times-every-3-seconds.gif" alt="HSM4-LED-3times-every-3-seconds" width="25%">

----
##### Prime perimeter detect (optional)
After bind locking the HSM, if using the perimeter detect features, prime your perimeter detect using the API.

1.    Close your perimeter circuit(s) (enclosure lid)
2.    Clear Perimeter Detect Events
3.    Get Perimeter Detect Info to confirm prior events are cleared and the perimeter is closed.
4.    If the Perimeter Detect Event returns clear, then you can ‘arm your system’ as you require by setting Set Perimeter Event Actions to “none”, “notify” or “selfdestruct” (You can only do this once!).
5.  **Your system is now armed.**

## <span class="markdown-h2 include-toc">Additional Resources</span>

<h3 id="troubleshooting">Troubleshooting</h3>
<ul>
<li><a href="https://docs.zymbit.com/quickstart/faq/hsm6/#troubleshooting">HSM6 Troubleshooting FAQ</a></li>
<li><a href="https://community.zymbit.com/">Community Forum</a></li>
</ul>

<h3 id="perimeter-detect">Perimeter Detect</h3>
<p>Refer to <a href="https://docs.zymbit.com/tutorials/perimeter-detect/hsm6">Using Perimeter Detect</a></p>

<h3 id="api-documentation">API Documentation</h3>
<p>API&#39;s are available for Python, C, C++
<a href="https://docs.zymbit.com/quickstart/api">Go to API Documents &gt;</a>  </p>

<h3 id="application-examples">Application Examples</h3>
<p>The quickest way to get started is to see the various methods at work by running these scripts:
<code>python /usr/local/share/zymkey/examples/zk_app_utils_test.py</code>
<code>python /usr/local/share/zymkey/examples/zk_crypto_test.py</code></p>
<p>More Resources:</p>
<ul>
<li><a href="https://community.zymbit.com/">Community Forum</a></li>
<li><a href="https://docs.zymbit.com/tutorials/encrypt-rfs/hsm6">LUKS filesystem encryption</a></li>
<li><a href="https://docs.zymbit.com/tutorials/sensor-data/">Encrypting &amp; decrypting sensor data on disk</a></li>
<li><a href="https://docs.zymbit.com/reference/real-time-clock/">Real Time Clock</a></li>
</ul>

