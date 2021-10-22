---
title: Enabling Production Mode
description: ""
date: ""
lastmod: ""
draft: false
images: []
weight: 1000
toc: true
---

{{< callout destructive >}}
THE BINDING PROCESS IS PERMANENT AND CANNOT BE REVERSED. PAY ATTENTION TO THE FOLLOWING:

* Your specific Zymkey will be **permanently** locked to the specific host device.
* It will be impossible to move or bind your Zymkey to another device. There are no factory resets, masterkeys, or other forms of recovery.
* If you are using the *Perimeter Detect* features, then the sequence in which you arm and disarm this feature is very important. Be sure to carefully follow the process steps below.
* Once you have locked your Zymkey into production mode, zymbit cannot guarantee its operation if you subsequently do a major distribution upgrade (e.g. Raspbian Jessie to Stretch).** [Contact Zymbit for more information.](https://www.zymbit.com/contact-us/)
* If you decide that you are not ready for permanent binding then leave it in developer mode, but beware this makes it easier for a bad actor to replace the host with a rogue hardware.

{{< /callout >}}

When you have completed your devlopment work with the Zymkey4 and are ready to deploy your system into the field, we recommend that you permanently bind your Zymkey to a specific host device and SD card.

{{< resource_link "reference/binding" >}}
Zymkey generates a unique Device ID by measuring certain attributes of the specific host and the Zymkey itself to permanently associate the two devices.
{{< /resource_link >}}

---
ORIGINAL CONTENT:

When you have completed all your development work and you are ready to deploy your system into the field we recommend that you permanently bind your Zymkey to a &#39;specific host device and SD card &#39;.

**WARNING: THIS BINDING PROCESS IS PERMANENT AND CANNOT BE REVERSED. PAY ATTENTION TO  THE FOLLOWING:**

* Your specific Zymkey will be locked to the specific host device and it is impossible to move or bind your Zymkey to another device. There are no factory resets, masterkeys or other forms of recovery.
* If you are using the perimeter_detect features, then the sequence in which you arm, disarm is very important. Be sure to follow the process steps below.
* Once you have locked your Zymkey into production mode, zymbit cannot guarantee its operation if you subsequently do a major distribution upgrade (e.g. Raspbian Jessie to Stretch).** [Contact Zymbit for more information.](https://www.zymbit.com/contact-us/)
* If you decide that you are not ready for permanent binding then leave it in developer mode, but beware this makes it easier for a bad actor to replace the host with a rogue hardware.

### **Moving from Developer Mode to Production Mode** {#-moving-from-developer-mode-to-production-mode-}

#### With Zymkey in Developer Mode (Lock Tab in Place) {#with-zymkey-in-developer-mode-lock-tab-in-place-}

Do not cut the Lock Tab yet!

* Install the battery on Zymkey.
* Place Zymkey onto the GPIO header (with power down on the device).
* Turn on the SBC.
* Install and bind the Zymkey and SBC.
* Set Perimeter Event Actions to “none” or “notify only”.
* Create your LUKS encrypted volume.
* Install your applications into your encrypted volume.
* Confirm your system and applications work fully as you intend.

#### When you are ready to move Zymkey to Production Mode, {#when-you-are-ready-to-move-zymkey-to-production-mode-}

Do not cut the Lock Tab yet!

* Turn off the power to the SBC..
* Do not remove the battery..
* Remove the Zymkey from the SBC.
* Now Cut the Lock Tab.
* Replace the Zymkey onto the SBC and turn on power to the SBC.
* Close your perimeter circuit(s) (enclosure lid).
* Clear Perimeter Detect Events.
* Get Perimeter Detect Info to confirm prior events are cleared and the perimeter is closed..
* If the Perimeter Detect Event returns clear, then you can ‘arm your system’ as you require by setting  Set Perimeter Event Actions to “none”, “notify” or “selfdestruct”.
* **Your system is now armed.**.

### Manual Cut-2-Lock {#manual-cut-2-lock}

**IMPORTANT:** first power down your device and Zymkey. Removing the Cut-2-Lock tab can be done in situ, or by removing the Zymkey from the SBC. ***Also insure that your perimeter detect actions are not set to self-destruct mode.*** Follow the steps outlined above, and refer to the programming api documents for more information on the operation of Perimeter Detect Events.

#### Cut using sharp diagonal cutter pliers {#cut-using-sharp-diagonal-cutter-pliers}

![Zymkey Cut Tab 1](ZK-cut-tab-1.png)


---

#### Cut along guide notches {#cut-along-guide-notches}

![Zymkey Cut Tab 2](ZK-cut-tab-2.png)


---

#### Finished cut should be flush to edge. {#finished-cut-should-be-flush-to-edge-}

![Zymkey Cut Tab 3](ZK-cut-tab-3.png)


#### Once you have successfully cut the lock tab and have rebooted your system, the blink pattern will change to 3 rapid blinks once every 3 seconds to indicate that Zymkey has bound to the host in production mode. {#once-you-have-successfully-cut-the-lock-tab-and-have-rebooted-your-system-the-blink-pattern-will-change-to-3-rapid-blinks-once-every-3-seconds-to-indicate-that-zymkey-has-bound-to-the-host-in-production-mode-}
