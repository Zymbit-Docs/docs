---
title: "SCM FAQ and Troubleshooting"
linkTitle: "SCM" 
lastmod: "2025-10-15"
draft: false
images: []
weight: 15
toc: true
---

-----



### Updated Release 10/10/2023 (RC-23.01 Zymbit Driver Package unchanged)

Updated the SCM release to support the Rev B release of the SCM hardware.

Summary of changes:

#### Pre-loaded OS options
* Raspberry PI OS Lite 64-bit (Bookworm) - FACTORY CONFIGURED (NO CHANGE)
* Raspberry PI OS Lite 64-bit (Bullseye) - OPTIONAL, FACTORY CONFIGURED (NO CHANGE)
* Ubuntu Server 22.04 64-bit (Jammy) - OPTIONAL, FACTORY CONFIGURED (NO CHANGE)
* Root partition now 50% of available eMMC space (encrypted). Message included on login as a reminder, along with steps to expand the root partition to 100% of space (encrypted)

#### SCM Hardware changes

* FW 01.02.02release - Supports SCM Rev B.
* SCM Rev B has different boot timing as compared to Rev A. This has to do with additional checks and with new requirements related to Zymbit bootware(tm). Average boots times are similar, however, some boot times may be longer by approximately 50 seconds. This is normal behavior for SCM Rev B units.
* SCM Rev. B has one new 40-pin connector and a different connector for tamper detect and battery backer. Please see the ECN for complete details. The new tamper/battery connector improves physical security of the SCM, improves compatibility with generic CM4 boards, and provides additional features. The new 40-pin expansion connector provides access to additional USB ports as well as additional security and integration features in future versions of the SCM.

#### Known Issues

{{% callout notice %}}

#### Issue Number #159 - Major
Affects SCM, Firmware version: 01.02.02release (not in earlier firmware releases)

On B1 versions of the SCM with firmware version 01.02.02release, generated key pairs created with `gen_key_pair()` are removed during reboot.

You can determine the version with:

`python3 -c "import zymkey; print(zymkey.client.get_firmware_version())"`

#### Details and Workaround:

`gen_key_pair(key_type)` creates key pairs for slots 16 and up, but a reboot removes the key slots. Keys generated using the BIP32 wallet with `gen_wallet_master_seed()`/`gen_wallet_child_key()` keys are not removed on reboot. The BIP32 wallet keys can be used as a workaround for B1 units.

For example,

Instead of:

`key_slot = gen_key_pair("secp256k1")`

Use:

`seed = zymkey.client.gen_wallet_master_seed("secp256k1", "", "wallet_name")`

`key_slot = zymkey.client.gen_wallet_child_key(seed, 0, False)`

From this point on you can use the `key_slot` in the same manner to `get_public_key(key_slot)` or `remove_key(key_slot)`

#### Notes:

* The problem does not affect the use of slots 0 through 15.
* The problem does not affect public keys stored in the Foreign key store.
* BIP32 wallets are hierarchical key stores, meaning removing the wallet master seed will remove all the keys in that wallet; removing a parent will remove all child slots of the parent. See BIP32 for more information.
* BIP32 wallets can be recovered if you setup a recovery method using either BIP39 mnemonics, or SLIP39 Shamir's Secret Sharing of mnemonics. Zymbit supports both methods.
* Your particular application of keys may lend itself to different key hierarchy strategies - you could put one key in each wallet and create many wallets or put many keys in one wallet. For details on wallets, you can see https://docs.zymbit.com/tutorials/digital-wallet/
* If you are creating multiple wallets, each wallet must have a unique name.
 
This only affects SCMs with firmware 01.02.02release. This does not affect the HSM6.

{{% /callout %}}

* Zymbit IO board: Subject to rebooting during high USB in rush current. See [Engineering Note 20230721](/reference/engineering-notes/Zymbit-Engineering-Note-20230721-SCM-Motherboard-USB.pdf).
* Zymbit IO board: The ID EEPROM I2C pins are not connected. To use this feature with the Zymbit IO board, you will need two green wires to pins 27 and 28. [Contact Support](mailto:support@zymbit.com) for more information.

-----

### Zymbit Host Side Code:
 - libzk 1.1-22
 - libzymkeyssl 1.0-10
 - zkapputilslib 1.1-25
 - zkbootrtc 1.1-15
 - zkifc 1.2-35
 - zkpkcs11 1.0-3
 - zksaapps 1.0-16
 - zku 1.0.33

-----

#### Modifications from Standard Raspberry PI OS Lite

The SCM ships with a pre-installed version of Raspberry PI OS Lite (bookworm 64bit) with a more secure configuration.

{{< callout notice >}}
The pre-installed image is encrypted and cannot be replaced via `rpiboot` in the field. Please contact support@zymbit.com if you require a different image.
{{< /callout >}}

The table below summarizes changes made to the standard image.

| Default | As Shipped |
|------------------|--------------------------|
| SSH optionally enabled |SSH with password allowed |
| Hostname is `raspberrypi` | Hostname changed to `zymbit-dev` |
| Default user of `pi` | Default user is `zymbit`. Password `zymbit` |

-----
### LED Reference

Common LED patterns:

* Once every 3 seconds
   * This indicates that your SCM is working and running.

* Three rapid blinks every 3 seconds
   * This indicates the SCM is in Production Mode and is working and running.

* Constant rapid blinking (waiting for host to connect)
   * This indicates that your SCM is operational but has not bound to the host. If the SCM continues to blink this pattern, it could mean that there is a problem with the host Pi or that the SCM is not seen by the Pi.

* Rapid blinking then LED off permanently
   * This indicates the SCM is in Production Mode but cannot bind with the CM4.  In Production Mode the binding with a particular Pi becomes permanent. Can indicate an improper salt file, sometimes due to a major OS upgrade.  

The SCM has the following fatal LED structure.

- Preamble: 10 very rapid flashes
- Off for 1 second
- Main code: a number of 0.5 second flashes which define the main code
- Off for 1 second
- Optional subcode: a number of 0.5 second flashes which define the subcode

The fatal LED sequence is repeated 3 times, after which the SCM reboots.

| Main Code | Sub Code | Description |
| ------ | ------ | ------ |
| 4 | 2 | Supervised Boot failure: At least one Supervised Boot file failed signature check. |
| 5 | None | ATECC Serial number mismatch. Usually the result of the keys being erased due to a tamper breach with self-destruct policy. |
| 6 | None | Digest of keys area of SCM flash have failed. Could be caused by a tamper breach or a hardware failure. Also the result of Battery Voltage Threshold self_destruct action.|
| 6 | subcode | Tamper detect event in self destruct mode while in developer mode. Subcode represents aggregate of all channels witnessed. |
| 8 | None | SCM unable to send response back to host. Can be caused by overutilized host CPU which causes heartbeats to not be sent to SCM. |
| 20 | 1 | Temperature below low boundary in self destruct mode in developer mode. |
| 20 | 2 | Temperature above high boundary in self destruct mode in developer mode. |
| 22 | 9 | Supervised Boot failure: True failure in Supervised Boot process. |


