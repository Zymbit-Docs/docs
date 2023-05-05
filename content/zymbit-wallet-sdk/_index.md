---
title: "Zymbit Wallet SDK"
linkTitle: "Zymbit Wallet SDK"
icon: ""
description: ""
aliases:
    - /quickstart/zymbit-wallet-sdk/
date: ""
lastmod: ""
draft: false
weight: 10
images: []
# headless: true
# layout: "single"
---

## Overview

Blockchain accounts, signatures, and transactions have an additional layer of complexity over traditional cryptographic keys and signatures. The Zymbit Wallet SDK aims to abstract away this complexity, enabling you to create and manage multiple blockchain wallets and seamlessly integrate with various blockchains without having to deal with their technical intricacies.

**NOTE:** Only available on the [HSM6](https://www.zymbit.com/hsm6/), [SCM](https://www.zymbit.com/scm/), and [SEN](https://www.zymbit.com/secure-compute-node/)


## Architecture

The Zymbit Wallet SDK is the package which contains our libraries which support Blockchain account creation, management, and use. Zymbit Wallet SDK consists of modular components which can work independently or together, depending on your use case, to create a seamless interface between Zymbit's [HD hardware wallet](https://www.zymbit.com/hd-hardware-wallet/) and blockchains. More details can be found in the documentation.

## Additional Resources

If you are a developer interested in creating your own custom implementations of Accounts and/or Keyrings to work with `ZymbitKeyringManager`, we encourage you to explore [our Github repository](https://github.com/Zymbit-Wallet/Zymbit-Wallet-Python-SDK). By extending the Account and Keyring [Abstract Base Classes (ABCs)](https://docs.python.org/3/library/abc.html), you can implement the required methods and any additional functionality as needed. The elliptic curves we support (secp256k1, secp256r1, and ed25519) are used by many major blockchains, including Bitcoin, Ethereum, Cardano, Solana, and Polkadot. Developing your own keyrings can be incredibly beneficial for a wide range of applications, such as key management or on-chain interactions like sending transactions or interacting with smart contracts.



