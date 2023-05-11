---
title: "Working with Zymbit's Wallet Python SDK"
linkTitle: "Zymbit Wallet Python SDK Tutorial"
description: ""
date: "2023-05-11"
lastmod: "2023-05-11"
draft: false
weight: 20
images: []
toc: true
---
Updated: 2023-05-11

## What is Zymbit's Wallet SDK?

Blockchain accounts, signatures, and transactions have an additional layer of complexity over traditional cryptographic keys and signatures. Our Wallet SDK aims to abstract away this complexity, enabling you to create and manage multiple blockchain wallets and seamlessly interact with smart contracts in your applicaitons without having to deal with their technical intricacies.

## Installation

```
pip install zymbitwalletsdk
```

## ETH Keyring Examples

### Creating an ETH Keyring 

If you have an existing wallet on your module, you can initialize an ETH Keyring using either the wallet name or its corresponding master slot. Here's how:

```
from zymbitwalletsdk import ZymbitEthKeyring

keyring = ZymbitEthKeyring(wallet_name = "MyExampleWallet")
print(keyring)
```

or

```
from zymbitwalletsdk import ZymbitEthKeyring

keyring = ZymbitEthKeyring(master_slot = 16)
print(keyring)
```

Output:

```
ZymbitEthKeyring(
        type = ETH
        base_path = m/44'/60'/0'/0
        wallet_name = MyExampleWallet
        master_slot = 16
        base_slot = 20
        accounts = [
                (Path: m/44'/60'/0'/0/0, Address: 0x93D458d6B14A02943A07708a24D8A9F142Fc5A00, Slot: 26)
                (Path: m/44'/60'/0'/0/1, Address: 0x9fB80f688e4a4f68cd94e0DD4263B03cA7CC52ff, Slot: 27)
                (Path: m/44'/60'/0'/0/2, Address: 0x29e9f7D65886c6c1e164AFd4823A477eB0F1F75a, Slot: 28)
        ]
)
```

### Adding Accounts

There are three methods you can use to add accounts. Here is how you use them:

```
from zymbitwalletsdk import ZymbitEthKeyring

keyring = ZymbitEthKeyring(master_slot=16)

print(keyring.add_account(index = 12))
print(keyring.add_accounts(n = 2))
print(keyring.add_accounts_list(index_list = [15, 26]))
print(keyring.get_accounts())
```

Output:

```
(Path: m/44'/60'/0'/0/12, Address: 0x092aa5e156F4FE5b3944B8A2421E45a23B8d1B00, Slot: 34)

[(Path: m/44'/60'/0'/0/13, Address: 0xA4cfAD05453e3FBB98EFD9A68f71E71B331d9e8A, Slot: 35), (Path: m/44'/60'/0'/0/14, Address: 0xd1B6206a83401dc042c04C9A751a7eB65645f144, Slot: 36)]

[(Path: m/44'/60'/0'/0/15, Address: 0xaDAC0304B9A471838a4e704d05C90Df36ad587C6, Slot: 37), (Path: m/44'/60'/0'/0/26, Address: 0x2fb995cd644992a9a838fe18Db818c83BdE719FD, Slot: 38)]

[(Path: m/44'/60'/0'/0/0, Address: 0x93D458d6B14A02943A07708a24D8A9F142Fc5A00, Slot: 26), (Path: m/44'/60'/0'/0/1, Address: 0x9fB80f688e4a4f68cd94e0DD4263B03cA7CC52ff, Slot: 27), (Path: m/44'/60'/0'/0/2, Address: 0x29e9f7D65886c6c1e164AFd4823A477eB0F1F75a, Slot: 28), (Path: m/44'/60'/0'/0/12, Address: 0x092aa5e156F4FE5b3944B8A2421E45a23B8d1B00, Slot: 34), (Path: m/44'/60'/0'/0/13, Address: 0xA4cfAD05453e3FBB98EFD9A68f71E71B331d9e8A, Slot: 35), (Path: m/44'/60'/0'/0/14, Address: 0xd1B6206a83401dc042c04C9A751a7eB65645f144, Slot: 36), (Path: m/44'/60'/0'/0/15, Address: 0xaDAC0304B9A471838a4e704d05C90Df36ad587C6, Slot: 37), (Path: m/44'/60'/0'/0/26, Address: 0x2fb995cd644992a9a838fe18Db818c83BdE719FD, Slot: 38)]
```

### Remove an Account

If you want to remove an account from a keyring, here is how to do it:

```
from zymbitwalletsdk import ZymbitEthKeyring, ZymbitKeyringManager, EthConnect

keyring = ZymbitEthKeyring(wallet_name = "MyExampleWallet")
accounts = keyring.get_accounts()
print(accounts)

account_to_remove = accounts[2]
keyring.remove_account(address = account_to_remove.address)

accounts = keyring.get_accounts()
print(accounts)
```

Output:

```
[(Path: m/44'/60'/0'/0/0, Address: 0x93D458d6B14A02943A07708a24D8A9F142Fc5A00, Slot: 26), (Path: m/44'/60'/0'/0/1, Address: 0x9fB80f688e4a4f68cd94e0DD4263B03cA7CC52ff, Slot: 27), (Path: m/44'/60'/0'/0/2, Address: 0x29e9f7D65886c6c1e164AFd4823A477eB0F1F75a, Slot: 28), (Path: m/44'/60'/0'/0/12, Address: 0x092aa5e156F4FE5b3944B8A2421E45a23B8d1B00, Slot: 34), (Path: m/44'/60'/0'/0/13, Address: 0xA4cfAD05453e3FBB98EFD9A68f71E71B331d9e8A, Slot: 35), (Path: m/44'/60'/0'/0/14, Address: 0xd1B6206a83401dc042c04C9A751a7eB65645f144, Slot: 36), (Path: m/44'/60'/0'/0/15, Address: 0xaDAC0304B9A471838a4e704d05C90Df36ad587C6, Slot: 37), (Path: m/44'/60'/0'/0/26, Address: 0x2fb995cd644992a9a838fe18Db818c83BdE719FD, Slot: 38)]

[(Path: m/44'/60'/0'/0/0, Address: 0x93D458d6B14A02943A07708a24D8A9F142Fc5A00, Slot: 26), (Path: m/44'/60'/0'/0/1, Address: 0x9fB80f688e4a4f68cd94e0DD4263B03cA7CC52ff, Slot: 27), (Path: m/44'/60'/0'/0/12, Address: 0x092aa5e156F4FE5b3944B8A2421E45a23B8d1B00, Slot: 34), (Path: m/44'/60'/0'/0/13, Address: 0xA4cfAD05453e3FBB98EFD9A68f71E71B331d9e8A, Slot: 35), (Path: m/44'/60'/0'/0/14, Address: 0xd1B6206a83401dc042c04C9A751a7eB65645f144, Slot: 36), (Path: m/44'/60'/0'/0/15, Address: 0xaDAC0304B9A471838a4e704d05C90Df36ad587C6, Slot: 37), (Path: m/44'/60'/0'/0/26, Address: 0x2fb995cd644992a9a838fe18Db818c83BdE719FD, Slot: 38)]
```

## Keyring Manager Examples

### Initialize the keyring manager to manage multiple keyrings

```
from zymbitwalletsdk import ZymbitEthKeyring, ZymbitKeyringManager

keyring1 = ZymbitEthKeyring(wallet_name = "MyExampleWallet")
keyring2 = ZymbitEthKeyring(wallet_name = "MyExampleWallet1")

keyring_manager = ZymbitKeyringManager(keyrings = [keyring1, keyring2])
print(keyring_manager.get_keyrings())
```

Output:

```
[ZymbitEthKeyring(
        type = ETH
        base_path = m/44'/60'/0'/0
        wallet_name = MyExampleWallet
        master_slot = 16
        base_slot = 20
        accounts = [
                (Path: m/44'/60'/0'/0/0, Address: 0x93D458d6B14A02943A07708a24D8A9F142Fc5A00, Slot: 26)
                (Path: m/44'/60'/0'/0/1, Address: 0x9fB80f688e4a4f68cd94e0DD4263B03cA7CC52ff, Slot: 27)
                (Path: m/44'/60'/0'/0/12, Address: 0x092aa5e156F4FE5b3944B8A2421E45a23B8d1B00, Slot: 34)
                (Path: m/44'/60'/0'/0/13, Address: 0xA4cfAD05453e3FBB98EFD9A68f71E71B331d9e8A, Slot: 35)
                (Path: m/44'/60'/0'/0/14, Address: 0xd1B6206a83401dc042c04C9A751a7eB65645f144, Slot: 36)
                (Path: m/44'/60'/0'/0/15, Address: 0xaDAC0304B9A471838a4e704d05C90Df36ad587C6, Slot: 37)
        ]
), ZymbitEthKeyring(
        type = ETH
        base_path = m/44'/60'/0'/0
        wallet_name = MyExampleWallet1
        master_slot = 21
        base_slot = 25
        accounts = [
                (Path: m/44'/60'/0'/0/0, Address: 0x2E57A173B2BB0a4946A8AA7fD99f373d4bf39820, Slot: 29)
                (Path: m/44'/60'/0'/0/1, Address: 0xD997aCb016Ea0BD1ABFE654737Bf11AA81F4D6b0, Slot: 30)
                (Path: m/44'/60'/0'/0/2, Address: 0xd067C0696d115f4FEF13d4B2f48291760d008288, Slot: 31)
                (Path: m/44'/60'/0'/0/3, Address: 0x3586115959ec349567E2605D47aD16bcEAbc2193, Slot: 32)
                (Path: m/44'/60'/0'/0/4, Address: 0x8E0ce12A484a5D206ce43d2e1c1CEb56E9943410, Slot: 33)
        ]
)]
```

### Create a wallet and corresponding ETH keyring

Create a wallet and its coressponding ETH keyring using the keyring manager. 

**NOTE:** Store the mnemonic phrase securely

```
from zymbitwalletsdk import ZymbitEthKeyring, ZymbitKeyringManager

keyring1 = ZymbitEthKeyring(wallet_name = "MyExampleWallet")
keyring2 = ZymbitEthKeyring(wallet_name = "MyExampleWallet1")

keyring_manager = ZymbitKeyringManager(keyrings = [keyring1, keyring2])

new_keyring = keyring_manager.create_keyring(ZymbitEthKeyring, "MyExampleWallet2")
print("Master slot and Mnemonic: ", new_keyring)
print(keyring_manager.get_keyrings())
```

Output:

```
Master slot and Mnemonic: (28, 'all damp fire farm glad vital rich material infant shove tuna exist penalty simple choose time magnet shiver phone that idea grain merry accident')

[ZymbitEthKeyring(
        type = ETH
        base_path = m/44'/60'/0'/0
        wallet_name = MyExampleWallet
        master_slot = 16
        base_slot = 20
        accounts = [
                (Path: m/44'/60'/0'/0/0, Address: 0x93D458d6B14A02943A07708a24D8A9F142Fc5A00, Slot: 26)
                (Path: m/44'/60'/0'/0/1, Address: 0x9fB80f688e4a4f68cd94e0DD4263B03cA7CC52ff, Slot: 27)
                (Path: m/44'/60'/0'/0/12, Address: 0x092aa5e156F4FE5b3944B8A2421E45a23B8d1B00, Slot: 34)
                (Path: m/44'/60'/0'/0/13, Address: 0xA4cfAD05453e3FBB98EFD9A68f71E71B331d9e8A, Slot: 35)
                (Path: m/44'/60'/0'/0/14, Address: 0xd1B6206a83401dc042c04C9A751a7eB65645f144, Slot: 36)
                (Path: m/44'/60'/0'/0/15, Address: 0xaDAC0304B9A471838a4e704d05C90Df36ad587C6, Slot: 37)
        ]
), ZymbitEthKeyring(
        type = ETH
        base_path = m/44'/60'/0'/0
        wallet_name = MyExampleWallet1
        master_slot = 21
        base_slot = 25
        accounts = [
                (Path: m/44'/60'/0'/0/0, Address: 0x2E57A173B2BB0a4946A8AA7fD99f373d4bf39820, Slot: 29)
                (Path: m/44'/60'/0'/0/1, Address: 0xD997aCb016Ea0BD1ABFE654737Bf11AA81F4D6b0, Slot: 30)
                (Path: m/44'/60'/0'/0/2, Address: 0xd067C0696d115f4FEF13d4B2f48291760d008288, Slot: 31)
                (Path: m/44'/60'/0'/0/3, Address: 0x3586115959ec349567E2605D47aD16bcEAbc2193, Slot: 32)
                (Path: m/44'/60'/0'/0/4, Address: 0x8E0ce12A484a5D206ce43d2e1c1CEb56E9943410, Slot: 33)
        ]
), ZymbitEthKeyring(
        type = ETH
        base_path = m/44'/60'/0'/0
        wallet_name = MyExampleWallet2
        master_slot = 28
        base_slot = 41
        accounts = [

        ]
)]
```

### Add a keyring

```
from zymbitwalletsdk import ZymbitEthKeyring, ZymbitKeyringManager

keyring1 = ZymbitEthKeyring(wallet_name = "MyExampleWallet")
keyring2 = ZymbitEthKeyring(wallet_name = "MyExampleWallet1")

keyring_manager = ZymbitKeyringManager(keyrings = [keyring1, keyring2])

keyring3 = ZymbitEthKeyring(wallet_name = "MyExampleWallet2")
keyring_manager.add_keyring(keyring3)

print(keyring_manager.get_keyrings())
```

Output:

```
[ZymbitEthKeyring(
        type = ETH
        base_path = m/44'/60'/0'/0
        wallet_name = MyExampleWallet
        master_slot = 16
        base_slot = 20
        accounts = [
                (Path: m/44'/60'/0'/0/0, Address: 0x93D458d6B14A02943A07708a24D8A9F142Fc5A00, Slot: 26)
                (Path: m/44'/60'/0'/0/1, Address: 0x9fB80f688e4a4f68cd94e0DD4263B03cA7CC52ff, Slot: 27)
                (Path: m/44'/60'/0'/0/12, Address: 0x092aa5e156F4FE5b3944B8A2421E45a23B8d1B00, Slot: 34)
                (Path: m/44'/60'/0'/0/13, Address: 0xA4cfAD05453e3FBB98EFD9A68f71E71B331d9e8A, Slot: 35)
                (Path: m/44'/60'/0'/0/14, Address: 0xd1B6206a83401dc042c04C9A751a7eB65645f144, Slot: 36)
                (Path: m/44'/60'/0'/0/15, Address: 0xaDAC0304B9A471838a4e704d05C90Df36ad587C6, Slot: 37)
        ]
), ZymbitEthKeyring(
        type = ETH
        base_path = m/44'/60'/0'/0
        wallet_name = MyExampleWallet1
        master_slot = 21
        base_slot = 25
        accounts = [
                (Path: m/44'/60'/0'/0/0, Address: 0x2E57A173B2BB0a4946A8AA7fD99f373d4bf39820, Slot: 29)
                (Path: m/44'/60'/0'/0/1, Address: 0xD997aCb016Ea0BD1ABFE654737Bf11AA81F4D6b0, Slot: 30)
                (Path: m/44'/60'/0'/0/2, Address: 0xd067C0696d115f4FEF13d4B2f48291760d008288, Slot: 31)
                (Path: m/44'/60'/0'/0/3, Address: 0x3586115959ec349567E2605D47aD16bcEAbc2193, Slot: 32)
                (Path: m/44'/60'/0'/0/4, Address: 0x8E0ce12A484a5D206ce43d2e1c1CEb56E9943410, Slot: 33)
        ]
), ZymbitEthKeyring(
        type = ETH
        base_path = m/44'/60'/0'/0
        wallet_name = MyExampleWallet2
        master_slot = 28
        base_slot = 41
        accounts = [

        ]
)]
```

### Get a keyring

```
from zymbitwalletsdk import ZymbitEthKeyring, ZymbitKeyringManager

keyring1 = ZymbitEthKeyring(wallet_name = "MyExampleWallet")
keyring2 = ZymbitEthKeyring(wallet_name = "MyExampleWallet1")
keyring3 = ZymbitEthKeyring(wallet_name = "MyExampleWallet2")

keyring_manager = ZymbitKeyringManager(keyrings = [keyring1, keyring2, keyring3])

print(keyring_manager.get_keyring(wallet_name = "MyExampleWallet1"))
```

Output:

```
ZymbitEthKeyring(
        type = ETH
        base_path = m/44'/60'/0'/0
        wallet_name = MyExampleWallet1
        master_slot = 21
        base_slot = 25
        accounts = [
                (Path: m/44'/60'/0'/0/0, Address: 0x2E57A173B2BB0a4946A8AA7fD99f373d4bf39820, Slot: 29)
                (Path: m/44'/60'/0'/0/1, Address: 0xD997aCb016Ea0BD1ABFE654737Bf11AA81F4D6b0, Slot: 30)
                (Path: m/44'/60'/0'/0/2, Address: 0xd067C0696d115f4FEF13d4B2f48291760d008288, Slot: 31)
                (Path: m/44'/60'/0'/0/3, Address: 0x3586115959ec349567E2605D47aD16bcEAbc2193, Slot: 32)
                (Path: m/44'/60'/0'/0/4, Address: 0x8E0ce12A484a5D206ce43d2e1c1CEb56E9943410, Slot: 33)
        ]
)
```

### Remove a keyring

Removing a keyring using the keyring manager removes the keys permanently from the module and the keyring manager instance. If the remove_master flag is set to True, it removes the master key from the device as well.

```
from zymbitwalletsdk import ZymbitEthKeyring, ZymbitKeyringManager

keyring1 = ZymbitEthKeyring(wallet_name = "MyExampleWallet")
keyring2 = ZymbitEthKeyring(wallet_name = "MyExampleWallet1")
keyring3 = ZymbitEthKeyring(wallet_name = "MyExampleWallet2")

keyring_manager = ZymbitKeyringManager(keyrings = [keyring1, keyring2, keyring3])
keyring_manager.remove_keyring(master_slot = keyring3.master_slot, remove_master=True)

print(keyring_manager.get_keyrings())
```

Output:

```
[ZymbitEthKeyring(
        type = ETH
        base_path = m/44'/60'/0'/0
        wallet_name = MyExampleWallet
        master_slot = 16
        base_slot = 20
        accounts = [
                (Path: m/44'/60'/0'/0/0, Address: 0x93D458d6B14A02943A07708a24D8A9F142Fc5A00, Slot: 26)
                (Path: m/44'/60'/0'/0/1, Address: 0x9fB80f688e4a4f68cd94e0DD4263B03cA7CC52ff, Slot: 27)
                (Path: m/44'/60'/0'/0/12, Address: 0x092aa5e156F4FE5b3944B8A2421E45a23B8d1B00, Slot: 34)
                (Path: m/44'/60'/0'/0/13, Address: 0xA4cfAD05453e3FBB98EFD9A68f71E71B331d9e8A, Slot: 35)
                (Path: m/44'/60'/0'/0/14, Address: 0xd1B6206a83401dc042c04C9A751a7eB65645f144, Slot: 36)
                (Path: m/44'/60'/0'/0/15, Address: 0xaDAC0304B9A471838a4e704d05C90Df36ad587C6, Slot: 37)
        ]
), ZymbitEthKeyring(
        type = ETH
        base_path = m/44'/60'/0'/0
        wallet_name = MyExampleWallet1
        master_slot = 21
        base_slot = 25
        accounts = [
                (Path: m/44'/60'/0'/0/0, Address: 0x2E57A173B2BB0a4946A8AA7fD99f373d4bf39820, Slot: 29)
                (Path: m/44'/60'/0'/0/1, Address: 0xD997aCb016Ea0BD1ABFE654737Bf11AA81F4D6b0, Slot: 30)
                (Path: m/44'/60'/0'/0/2, Address: 0xd067C0696d115f4FEF13d4B2f48291760d008288, Slot: 31)
                (Path: m/44'/60'/0'/0/3, Address: 0x3586115959ec349567E2605D47aD16bcEAbc2193, Slot: 32)
                (Path: m/44'/60'/0'/0/4, Address: 0x8E0ce12A484a5D206ce43d2e1c1CEb56E9943410, Slot: 33)
        ]
)]
```