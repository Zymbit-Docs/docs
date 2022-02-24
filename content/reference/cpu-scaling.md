---
title : "CPU Scaling Governor"
description: ""
date: ""
lastmod: "2-23-2022"
draft: false
images: []
type: "docs"
layout: "single"
weight: 55
toc: true
---

### Issue: Cpu Scaling Governor

#### Issue Description:

We have seen some issues with the scaling cpu governor on the Raspberry PI interfere with the i2c bus. This sometimes causes the ZYMKEY to be put into a odd state or return failures from operations that get optimized out by the governor.

#### Workaround Solution We Recommend:

The PI sets the **scaling governor** to be `ondemand` by default. We recommend switching this mode to `performance` to get the best out of the ZYMKEY.

> Note: this will drain more battery power when switched to `performance`!

#### Set to `performance` for current boot, but not persistent on reboot:

 1. Run as root:  
    `sudo su`  
    `echo performance > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor`  

#### Set `performance` to be persistent on reboot with a systemd service:

 1. Create a .service file in /etc/systemd/system/. You can name it whatever you wish. We will use `cpu-governor.service`.
 2. **Write this code to `/etc/systemd/system/cpu-governor.service` file:**

```
[Unit]

Description=Set scaling governor to performance

After=multi-user.target

Before=zkbootrtc.service

[Service]

Type=oneshot

ExecStart=/bin/sh -c "echo performance > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor"

[Install]

WantedBy=multi-user.target
```

 3. Enable the service:  `sudo systemctl enable cpu-governor`
 4. Start the service: `sudo systemctl start cpu-governor`
 
