---
title : "CPU Scaling Governor"
description: ""
date: ""
lastmod: ""
draft: false
images: []
type: "docs"
layout: "single"
weight: -690
toc: true
---

**Issue: Cpu Scaling Governor**

**Issue Description:**
We have seen some issues with the scaling cpu governor on the raspberry pi interfere with the i2c bus. This sometimes causes the zymkey to be put into a odd state or return failures from operations that get optimized out by the governor.

**Workaround Solution We Recommend!**
The raspberry pi sets the **scaling governor** to be "**ondemand**" by default. We recommend switching this mode to "**performance**" to get the best out of the zymkey.

**Be warned this will drain more battery power when switched to "performance"!**

**Set to performance but not persistent on reboot:**

1. Run as root: sudo su
2. echo performance > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor

**Set performance to be persistent on reboot with a systemd service:**

1. Create a .service file in /etc/systemd/system/
2. **Write this code to .service file:**

> [Unit]
>
> Description=Set scaling governor to performance
>
> After=multi-user.target
>
> Before=zkbootrtc.service
>
> [Service]
>
> Type=oneshot
>
> ExecStart=/bin/sh -c "echo performance > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor"
>
> [Install]
>
> WantedBy=multi-user.target

3. Enable the service:  sudo systemctl enable yourservice
4. Start the service: sudo systemctl start yourservice
