---
title: "Driver Installation/Configuration for M.2 Intel I225 Ethernet Controllers on Zymbit Secure Edge Node."
linkTitle: "Intel I225 2.5G PCIe Ethernet"
icon: ""
description: ""
aliases:
    - /quickstart/addons/i225-ethernet
date: ""
lastmod: ""
draft: false
weight: 10
images: []
# headless: true
# layout: "single"
---

This page outlines the steps required to get PCIe ethernet chips using the Intel I225-V controller up and running on the Zymbit Secure Edge Node (SEN). These controllers use the in-tree `igc` Linux driver, which is not included by default as part of the Raspberry Pi Foundation's official kernel packages. The process has been tested and validated for the 6.1.93 Raspberry Pi kernel paired with an IOCrest SY-PEX24075 M.2 adapter card, though most any sub-7 watt M.2 card using the I225-V controller should theoretically work (mileage may vary).

## Installation.

There are two options for installation: [using prebuilt `.deb` packages](#option-1-install-from-prebuilt-debian-packages), which target kernel 6.1.93, or [building and installing from source](#option-2-build-and-install-from-source).

### Option 1: Install from Prebuilt Debian Packages.

This option will install a prebuilt kernel 6.1.93 package, including the necessary `igc` module, and will work on any existing Debian-based SEN. As part of the installation process, the system's initramfs (if one is present) will be regenerated, allowing the use of LUKS-encrypted root filesystems to continue working.

{{% callout notice %}}
On some newer systems (Debian Bookworm and later), the kernel image and config.txt files may instead be located in the `/boot/firmware` directory; check the mount point of the first partition on your SD card/eMMC to determine whether this is the case. The prebuilt 6.1.93 kernel package will always install to `/boot`, so depending on your exact setup, you may have to either remount `/dev/mmcblk0p1` at `/boot` before running `dpkg`, or else move the installed files from `/boot` into `/boot/firmware` after the installation is complete.
{{% /callout %}}


1. [Download the prebuilt packages](https://zymbit-addons.s3.amazonaws.com/linux-igc-6.1.93-v8%2B.tar.xz), then copy the `linux-image-*_arm64.deb`, `linux-libc-dev_*_arm64.deb`, and (optionally) `linux-headers-*_arm64.deb` files onto the target system.

    - The `linux-headers` package is required if you plan on doing any out-of-tree kernel module-related development. Otherwise, it is not required for the system to properly run.

2. As root, install the packages using `dpkg`:
```
dpkg -i *.deb
```

3. Edit `/boot/config.txt` to boot from the newly installed kernel image. The prebuilt packages will install the kernel at `/boot/vmlinuz-6.1.93-v8+`. You must either manually copy/rename this file to `/boot/kernel8.img`, or edit `/boot/config.txt` to change (or add, if it's missing) the line `kernel=vmlinuz-6.1.93-v8+`, otherwise the system will not boot the correct kernel image.

### Option 2: Build and Install from Source.

This option is much more flexible than the alternative and allows working with custom kernels, but requires a suitable Linux kernel build environment. You will need to build the entire kernel in order to obtain the `System.map` and other files required for depmod, as well as to ensure the `igc` module version matches that of the core kernel.

It is highly recommended that you compile the kernel on a non-Pi workstation. The CM4 is capable of building it's own Linux kernel, but doing so will take upwards of 1-2 hours on the Cortex-A72 CPU and require several GiB of disk space. If building on a non-aarch64 host, ensure you have an `aarch64` cross toolchain installed on the build machine; you can install one from `apt`, `dnf`, or `pacman` on most x86_64 Linux distributions, or [download a prebuilt tarball directly from ARM](https://developer.arm.com/downloads/-/arm-gnu-toolchain-downloads). Either of the bare-metal or GNU/Linux targets will work. Also, be sure to install your distribution's required Linux build dependencies; consult your distro's documentation for specifics.

1. Obtain RPi Linux sources and checkout the appropriate commit for kernel 6.1.93:
    
    - As of this writing, the desired commit is at the HEAD of the `rpi-6.1.y` branch. Adding a `--depth 1` argument to the clone command will therefore yield the correct commit HEAD and save significant time, but this will change should more commits be added to this branch in the future.
  
    - If you wish to clone the entire source tree and history, the `gix` command will do to so much faster than `git` (it can be installed with `cargo install gitoxide`), though note that `gix` does not support the `--branch` option.

```
git clone --branch rpi-6.1.y https://github.com/raspberrypi/linux.git
git checkout fbd8b3facb36ce888b1cdcf5f45a78475a8208f2 
```

2. Create a KBuild `.config` file to target the SEN's Pi CM4. If building on an aarch64 host with a native toolchain, omit the `ARCH` and `CROSS_COMPILE` flags from the below command.

    - `$TOOLCHAIN_PREFIX` should be the prefix of your cross toolchain, such that invoking `${TOOLCHAIN_PREFIX}gcc` from the command line will launch the cross GCC.

    - The kernel build system will respect the `$ARCH` and `$CROSS_COMPILE` environment variables, if you don't wish to specify them on the `make` command line.

```
make ARCH=arm64 CROSS_COMPILE=$TOOLCHAIN_PREFIX bcm2711_defconfig
```

3. Modify the generated `.config` file to add support for the `igc` driver module (`CONFIG_IGC`).

    - Alternatively, the option can be found within the KConfig interactive interface under `Device Drivers` > `Network device support` > `Ethernet driver support` > `Intel devices` > `Intel(R) Ethernet Controller I225-LM/I225-V support`.

```
scripts/config --module CONFIG_IGC
```

4. Build the kernel and modules.

    - To create `.deb` packages containing the kernel, modules, headers, and libc, you can instead specify the `bindeb-pkg` target to `make`. This requires either building on a Debian-based host, or installing the necessary Debian package development tools onto your system. The kernel `.deb` files themselves will be output into your current **parent** directory. You can then install them onto the target system by following the above steps for [Option 1: Install from Prebuilt Debian Packages](#option-1-install-from-prebuilt-debian-packages).
  
    - If building directly on the target SEN system, you can invoke `make modules_install install` after the build is completed to install the kernel & modules into their appropriate locations.

    - It is also possible to package the kernel into a binary tarball, RPM, or snap. Run `make help` for more details.

```
make ARCH=arm64 CROSS_COMPILE=$TOOLCHAIN_PREFIX -j$(nproc)
```

## Performance Information.

The M.2 slot on the SEN Devkit board is a PCIe Gen. 2 x1 bus, which has a bandwidth cap of 4 Gib/s---enough to support the SY-PEX24075 card's maximum link speed of 2.5Gib/s. Note, however, that it is not quite enough to achieve maximum bandwidth for simultaneous send/receive operations. In such cases, the driver will prioritize Rx bandwidth (as it should), and allocate whatever remains to Tx. Performance metrics from `iperf3` are shown below. The SEN was connected via a LAN cable directly to the 2.5G ethernet port on a Linux PC and two `iperf3` client-server sessions were established, one for each direction of communication.
e

ON PC:
```
$ iperf3 --udp 5001 --client <SEN IP Address> --bitrate 2.5g --time n --length 65507
...
[  5] 84674.00-84675.00 sec   270 MBytes  2.27 Gbits/sec  4326
[  5] 84675.00-84676.00 sec   280 MBytes  2.34 Gbits/sec  4474
[  5] 84676.00-84677.00 sec   281 MBytes  2.36 Gbits/sec  4505
[  5] 84677.00-84678.00 sec   280 MBytes  2.35 Gbits/sec  4475
[  5] 84678.00-84679.00 sec   271 MBytes  2.27 Gbits/sec  4330
[  5] 84679.00-84680.00 sec   278 MBytes  2.33 Gbits/sec  4455
[  5] 84680.00-84681.00 sec   280 MBytes  2.35 Gbits/sec  4484
[  5] 84681.00-84682.00 sec   281 MBytes  2.36 Gbits/sec  4501
[  5] 84682.00-84683.00 sec   275 MBytes  2.31 Gbits/sec  4399
[  5] 84683.00-84684.00 sec   270 MBytes  2.27 Gbits/sec  4324
[  5] 84684.00-84685.00 sec   282 MBytes  2.36 Gbits/sec  4513
[  5] 84685.00-84686.00 sec   282 MBytes  2.37 Gbits/sec  4514
[  5] 84686.00-84687.00 sec   271 MBytes  2.27 Gbits/sec  4334
[  5] 84687.00-84688.00 sec   271 MBytes  2.27 Gbits/sec  4338
[  5] 84688.00-84689.00 sec   282 MBytes  2.36 Gbits/sec  4507
[  5] 84689.00-84690.00 sec   282 MBytes  2.37 Gbits/sec  4515
[  5] 84690.00-84691.00 sec   276 MBytes  2.32 Gbits/sec  4418
...
```

ON SEN:
```
$ iperf3 --udp 5001 --client <PC IP Address> --bitrate 2.5g --time n --length 65507
...
[  5] 84674.00-84675.00 sec   259 MBytes  2.17 Gbits/sec  4149  
[  5] 84675.00-84676.00 sec   253 MBytes  2.13 Gbits/sec  4056  
[  5] 84676.00-84677.00 sec   233 MBytes  1.95 Gbits/sec  3729  
[  5] 84677.00-84678.00 sec   148 MBytes  1.24 Gbits/sec  2368  
[  5] 84678.00-84679.00 sec   141 MBytes  1.19 Gbits/sec  2264  
[  5] 84679.00-84680.00 sec   229 MBytes  1.92 Gbits/sec  3672  
[  5] 84680.00-84681.00 sec   249 MBytes  2.09 Gbits/sec  3989  
[  5] 84681.00-84682.00 sec   141 MBytes  1.18 Gbits/sec  2250  
[  5] 84682.00-84683.00 sec   163 MBytes  1.37 Gbits/sec  2613  
[  5] 84683.00-84684.00 sec   151 MBytes  1.27 Gbits/sec  2418  
[  5] 84684.00-84685.00 sec   264 MBytes  2.21 Gbits/sec  4226  
[  5] 84685.00-84686.00 sec   204 MBytes  1.71 Gbits/sec  3261  
[  5] 84686.00-84687.00 sec   140 MBytes  1.18 Gbits/sec  2245  
[  5] 84687.00-84688.00 sec   192 MBytes  1.61 Gbits/sec  3067  
[  5] 84688.00-84689.00 sec   265 MBytes  2.22 Gbits/sec  4238  
[  5] 84689.00-84690.00 sec   196 MBytes  1.64 Gbits/sec  3137  
[  5] 84690.00-84691.00 sec   146 MBytes  1.23 Gbits/sec  2341  
...
```
