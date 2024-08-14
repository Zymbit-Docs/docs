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

## Installation.

The IOCrest unit ships with a CD containing working driver code for pre-6.x kernels, located in the `EXAR` directory on the disc. For convenience, a link to the driver is provided [here](TODO). For kernels 6.0 and later, a patch file is provided below.

1. Install the required build tools. On Debian-based systems:
```
sudo apt install build-essential linux-headers patch
```

2. Obtain and extract the `xr17_linux_driver_v2.6.zip`.

3. Edit the `Makefile` and change `SUBDIRS` to `M` in line 13.

- If installing on a 6.0 or newer kernel, apply [this patch](TODO) to `xr17v35x.c`.

4. Build the module by running `make`.

- To install into `/lib/modules`, run `make install` and then `depmod -a $(uname -r)`.

5. Follow the steps in the driver package's `readme` section 3.2A to unbind the serial ports from the generic driver.

6. Add the following lines to `/etc/rc.local` to ensure the device works across reboots:

- Note: if more than one PCIe serial device is present and the below script doesn't work, try setting `PCIE_PATH` to the value used in step 3.2.A of the driver package's `readme`.

```
DRIVER_PATH="/sys/bus/pci/drivers/$(lspci -vd 13a8:* | sed -n 's/\tKernel driver in use: //p')"
PCIE_PATH="$(find ${DRIVER_PATH} -name '0000*' -printf '%f')"
echo -n "$PCIE_PATH" > "${DRIVER_PATH}/unbind"
unset DRIVER_PATH PCIE_PATH
modprobe -r xr17v35x && modprobe xr17v35x
```

The serial ports should now be listed as `/dev/ttyXR*`.

<!-- ## Verifying.

To quickly verify that both ports are working as intended, we will establish a connection between the two. This can be done using a female-female DB9 serial cable or by connecting the GND, TXD, and RXD pins on both connectors with jumper wires (note that TXD and RXD connections should be swapped). Next, configure a serial monitor (such as `minicom`) to open `/dev/ttyXR0` and `/tty/XR1`. Type some characters why am I writing this part it's way too straightforward to need help figuring out -->