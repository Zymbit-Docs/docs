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

## Examples

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

Example Output:

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

print(keyring)
```

Example Output:

```
(Path: m/44'/60'/0'/0/12, Address: 0x092aa5e156F4FE5b3944B8A2421E45a23B8d1B00, Slot: 34)

[(Path: m/44'/60'/0'/0/13, Address: 0xA4cfAD05453e3FBB98EFD9A68f71E71B331d9e8A, Slot: 35), (Path: m/44'/60'/0'/0/14, Address: 0xd1B6206a83401dc042c04C9A751a7eB65645f144, Slot: 36)]

[(Path: m/44'/60'/0'/0/15, Address: 0xaDAC0304B9A471838a4e704d05C90Df36ad587C6, Slot: 37), (Path: m/44'/60'/0'/0/26, Address: 0x2fb995cd644992a9a838fe18Db818c83BdE719FD, Slot: 38)]

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
                (Path: m/44'/60'/0'/0/12, Address: 0x092aa5e156F4FE5b3944B8A2421E45a23B8d1B00, Slot: 34)
                (Path: m/44'/60'/0'/0/13, Address: 0xA4cfAD05453e3FBB98EFD9A68f71E71B331d9e8A, Slot: 35)
                (Path: m/44'/60'/0'/0/14, Address: 0xd1B6206a83401dc042c04C9A751a7eB65645f144, Slot: 36)
                (Path: m/44'/60'/0'/0/15, Address: 0xaDAC0304B9A471838a4e704d05C90Df36ad587C6, Slot: 37)
                (Path: m/44'/60'/0'/0/26, Address: 0x2fb995cd644992a9a838fe18Db818c83BdE719FD, Slot: 38)
        ]
)
```