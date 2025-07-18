---
title: Zymbit Bootware Static Networking Configuration
linkTitle: "Configuring Static Networking"
description: Describes advanced networking configuration options
lastmod: "2025-07-15"
date: "2025-07-15"
draft: false
images: []
type: docs
layout: single
weight: 30
toc: true
---

-----

## Static Networking

Static networking options are included in Bootware release 1.3.2 and later. The network ipv4 address, the netmask, and gateway can be configured for eth0 and wlan0. One DNS entry is also configurable. Static configuration is optional. The default settings for both eth0 and wlan0 is to use dhcp to configure the network.  

Wi-Fi settings for access points are set via [zbcli update-config](../../zbcli/update-config)

### Available parameters

| Static IP Variables | Interface | Options | Description |
|---------------------|-----------|---------|-------------|
| is_eth0_static | eth0 | true\|false | Set to true to use static config for eth0 (default: false) |
| eth0_static_address | eth0 | <ip_address> | IP address of eth0 |
| eth0_static_netmask | eth0 | netmask | Netmask of eth0 (ex. 255.255.255.0) |
| eth0_static_gateway | eth0 | gateway | IP address of gateway for eth0 |
| is_wlan0_static | wlan0 | true\|false | Set to true to use static config for wlan0 (default: false) |
| wlan0_static_address | wlan0 | <ip_address> | IP address of wlan0 |
| wlan0_static_netmask | wlan0 | netmask | Netmask of wlan0 (ex. 255.255.255.0) |
| wlan0_static_gateway | wlan0 | gateway | IP address of gateway for wlan0 |
| static_dns | | dns_server | IP address of DNS server (not device specific) |

Values are set in userspace with the zbconfig utility, encrypted, and passed into zboot for use subsequent updates. 

### Example, to set static networking parameters for eth0 in zboot:

```bash
sudo zbconfig -set /boot/firmware/zb_config eth0_static_address=192.168.100.100
sudo zbconfig -set /boot/firmware/zb_config eth0_static_netmask=255.255.255.0
sudo zbconfig -set /boot/firmware/zb_config eth0_static_gateway=192.168.100.1
```

Enable the static config for eth0:

```bash
sudo zbconfig -set /boot/firmware/zb_config is_eth0_static=true
```


[zbcli update-config](../../zbcli/update-config)

[zbcli update](../../zbcli/update)
