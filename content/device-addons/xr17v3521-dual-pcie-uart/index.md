---
title: "Driver Installation/Configuration for M.2 Exar Corp. XR17V3521 Dual PCIe UART on Zymbit Secure Edge Node."
linkTitle: "MaxLinear XR17V3521 Dual PCIe UART"
icon: ""
description: ""
aliases:
    - /quickstart/addons/xr17v3521-pcie-serial
date: ""
lastmod: ""
draft: false
weight: 10
images: []
# headless: true
# layout: "single"
---

This page outlines the steps required to get PCIe DB9 serial ports up and running on the Zymbit Secure Edge Node (SEN). This device uses Max Linear's (formerly Exar Corp.) xr17v35x family of chipsets. The process has been tested and validated for the 6.6.31 Raspberry Pi kernel that ships with Debian Bookworm paired with an IOCrest SI-ADA15069 M.2 adapter card.

## Building.

The IOCrest unit ships with a CD containing working driver code for pre-6.x kernels, located in the `EXAR` directory on the disc. For convenience, a link to the driver package is also provided [here](https://zymbit-addons.s3.amazonaws.com/xr17_linux_driver_v2.6.zip). For kernel 6.0 and later, a patch file is provided below.

1. Install the required build tools. On Debian-based systems:
```
sudo apt install build-essential linux-headers patch
```

2. Obtain and extract the `xr17_linux_driver_v2.6.zip`.

3. Edit the `Makefile` and change `SUBDIRS` to `M` in line 13.

- If installing on a 6.0 or newer kernel, apply [this patch](https://zymbit-addons.s3.amazonaws.com/xr17v23x.patch) to `xr17v35x.c`.

4. Follow the steps in the driver package's `readme` section 3.2A to unbind the serial ports from the generic driver.

5. Build the module by running `make`.

6. Load the driver into the kernel:

```
insmod ./xr17v35x.ko
```

The serial ports should now be listed as `/dev/ttyXR*`.

## Installation.

You may wish to install the driver module so that it is automatically loaded on boot. This section outlines the process required to do so.

{{% callout notice %}}
Linux kernel modules are bound to the specific kernel version against which they are built. If the device had previously been working but no longer does after a recent system upgrade, it's likely that a new kernel was installed and the driver was not recompiled. To remedy this, follow the steps in this guide while running the newly installed kernel.
{{% /callout %}}

1. Install `xr17v35x.ko` into `/lib/modules`:

- OPTIONAL: to compress the `xr17v35x.ko` module, run `sudo <compression-program> /lib/modules/$(uname -r)/kernel/drivers/char/xr17v35x.ko` after `make install` and before running `depmod`, where `<compression-program>` is `xz`, `gzip`, etc.

```
cd <path-to-xr17-lnx2.6.32-and-newer-pak_ver2.6>
sudo make install
sudo depmod -a
```

2. Create a file with the following contents called `00-xrserial.rules` in `/etc/udev/rules.d` to ensure device works across reboots. This will unbind the PCIe device from linux's generic PCI serial driver and then reload the vendor-specific driver module.

- If more than one PCIe serial device is present and the below rule doesn't work, try adding `KERNEL==<path>, ` to the beginning of the line below, where `<path>` is the value used in step 3.2.A of the driver package's `readme`.

```
# MaxLinear PCIe dual DB-9 serial port
SUBSYSTEM=="pci", ATTR{class}=="0x070002", ATTR{vendor}=="0x13a8", ATTR{device}=="0x0352", ATTR{revision}=="0x03", \
        ATTR{driver_override}="xrserial", \
        RUN+="/bin/sh -c 'echo $kernel > /sys/$devpath/driver/unbind'", \
        RUN+="/sbin/modprobe -r xr17v35x", \
        RUN+="/sbin/modprobe xr17v35x"
```


<!-- ## Verifying.

To quickly verify that both ports are working as intended, we will establish a connection between the two. This can be done using a female-female DB9 serial cable or by connecting the GND, TXD, and RXD pins on both connectors with jumper wires (note that TXD and RXD connections should be swapped). Next, configure a serial monitor (such as `minicom`) to open `/dev/ttyXR0` and `/tty/XR1`. Type some characters why am I writing this part it's way too straightforward to need help figuring out -->