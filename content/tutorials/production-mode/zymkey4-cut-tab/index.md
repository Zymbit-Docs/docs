---
title: "ZYMKEY4: Enable Production Mode - cut tab instructions"
linkTitle: "ZYMKEY4 Cut Tab"
description: "Enabling Production Mode - ZYMKEY4 cut tab instructions"
date: ""
lastmod: "2025-10-15"
draft: false
images: []
weight: 1000
toc: false
---

{{< callout destructive >}}
THE BINDING PROCESS IS PERMANENT AND CANNOT BE REVERSED. PAY ATTENTION TO THE FOLLOWING:

* Your specific ZYMKEY4 will be **permanently** locked to the specific host device.
* It will be impossible to move or bind your ZYMKEY4 to another device. There are no factory resets, masterkeys, or other forms of recovery.
* If you are using the *Perimeter Detect* features, then the sequence in which you arm and disarm this feature is very important. Be sure to carefully follow the process steps below.
* Once you have locked your ZYMKEY4 into production mode, Zymbit cannot guarantee its operation if you subsequently do a major distribution upgrade (e.g. Raspbian Jessie to Stretch). [Contact Zymbit for more information.](https://www.zymbit.com/contact-us/)

{{< /callout >}}

When you have completed your development work with the ZYMKEY4 and are ready to deploy your system into the field, we recommend that you permanently bind your ZYMKEY4 to a specific host device and SD card by putting the ZYMKEY4 into Production Mode. The common steps for all Zymbit products can be found here: [Production Mode](/tutorials/production-mode).  For the ZYMKEY4, Production Mode involves physically cutting the tab on the ZYMKEY4, as outlined below.


{{< callout destructive >}}
*DO NOT* cut the lock tab yet. Make sure you have completed the [common steps](/tutorials/production-mode) before proceeding here. 
{{< /callout >}}

Before proceeding, shut your host board down and disconnect it from power. Then, without removing the ZYMKEY4's battery (if installed), remove the ZYMKEY4 from the host SBC.

### Cut the lock tab

{{< callout warning >}}
This procedure can be performed while the ZYMKEY4 is connected to the host SBC, but the host **must be disconnected from power**.

Do not proceed without completing the steps outlined above, including setting the `Perimeter Event Actions` to `none` or `notify`.
{{< /callout >}}

Follow the procedure below carefully to move your ZYMKEY4 into production mode.

{{< card header="**1. Use sharp diagonal cutter pliers**" >}}
![ZYMKEY4 Cut Tab 1](ZK-cut-tab-1.png)
{{< /card >}}

{{< card header="**2. Cut the tab**" >}}
Align the pliers with the guide lines on the Cut-2-Lock tab, and carefully cut the tab.
![ZYMKEY4 Cut Tab 2](ZK-cut-tab-2.png)
{{< /card >}}

{{< card header="**3. Finish the cut**" >}}
The resulting cut should leave the edge of the ZYMKEY4 motherboard flush. If portions of the tab remain attached to the board, you can remove them with the angle cutter pliers.
![ZYMKEY4 Cut Tab 3](ZK-cut-tab-3.png)
{{< /card >}}

### Finalize your device for deployment

After cutting the lock tab, reinstall the ZYMKEY4 the host SBC, reconnect it to power, and boot into the host. The blink pattern on the ZYMKEY4 will change to 3 rapid blinks once every 3 seconds to indicate that ZYMKEY4 has bound to the host in production mode.

You can now return to the guide for [enabling Production Mode](/tutorials/production-mode).


