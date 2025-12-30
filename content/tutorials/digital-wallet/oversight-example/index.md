---
title: "Creating an Oversight (Read Only) Wallet"
linkTitle: "Oversight Wallet"
description: ""
date: "2022-02-22"
lastmod: "2025-10-15"
draft: false
weight: 80
images: []
toc: true
---

Updated: 2022-02-22


## What is an oversight wallet?

The zymbit oversight wallet is a read-only wallet. In the world of blockchain, accounts and the funds associated with them are public and able to be viewed. This is done by looking up the blockchain address associated with public keys. Read-only or receive-only wallets can't send funds/assets out of the account. To send funds an account must be able to sign a fund transaction with a private key. So the oversight wallet is a wallet that doesn't contain private keys, just the public key counterparts.

## Why use oversight wallet?

This can be useful for handing a copy of a wallet to a financial advisor or someone of a similar role. They would be able to track the history of that wallet, but wouldn't have any power in changing the wallet in any kind of way.

### Prerequisites

* Zymbit Modules that support this feature:
    * [HSM6](https://www.zymbit.com/hsm6/)
    * [SCM ](https://www.zymbit.com/secure-compute-platform/)

* Follow the [Installation and Getting Started section for your HSM](/hardware/modules/) first.

* All code snippets written in this article are written using Python3. For more Zymbit API documentation (Python/C/C++) visit: [API Documentation](../../../api)


### Creating an oversight wallet on the Zymbit module

---

First create an example BIP32 master seed wallet as a reference for our oversight wallet.

```python
# Create our BIP32 master seed
print("Create our normal wallet...")
master_seed_slot = zymkey.client.gen_wallet_master_seed(key_type = "secp256k1", master_gen_key = "", wallet_name = MyExampleWallet)
print("Done! Master seed slot:%i" % (master_seed_slot))
```

Next for this example, we create children keys and derive a wallet address "m/44/60/0/0'". An oversight wallet is created by referencing the public key and chain code of the last hardened node of a wallet address. So in this example, grab the public key and chain code from the slot of the " 0' " index.

```python
# Oversight wallet requires the public key and chain code of the last hardened node in a wallet address.
# So for this example will use m/44/60/0/0' where the 0' is the last hardened node for our oversight wallet to start from.
print("\nCreate a wallet derivation path m/44/60/0/0' ..")
child_slot = zymkey.client.gen_wallet_child_key(parent_key_slot = master_seed_slot, index = 44, hardened = False)
child_slot = zymkey.client.gen_wallet_child_key(parent_key_slot = child_slot, index = 60, hardened = False)
child_slot = zymkey.client.gen_wallet_child_key(parent_key_slot = child_slot, index = 0, hardened = False)
# Let's return the chain code of this hardened node to generate our oversight wallet later
child_slot, chain_code = zymkey.client.gen_wallet_child_key(parent_key_slot = child_slot, index = 0, hardened = True, return_chain_code = True)
hardened_node_pub_key = zymkey.client.get_public_key(child_slot)
print("Done! m/44/60/0/0' slot:%i" % (child_slot))
```

Now generate an oversight wallet from the public key and chain code:

```python
# Using the public key and chain code, create the oversight wallet.
# Note that the oversight wallet can exist at the same time as our BIP32 wallet, but needs a different wallet name, as wallet names are unique.
print("Create our oversight wallet...")
oversight_slot = zymkey.client.gen_oversight_wallet(key_type = "secp256k1", pub_key = hardened_node_pub_key, chain_code = chain_code, node_addr = "m/44/60/0/0'", wallet_name = "Oversight_wallet")
print("Done! oversight_slot slot:%i" % (oversight_slot))
```

The oversight wallet can generate child keys the same way as a normal BIP32 wallet. However this wallet contains no private keys, so no transaction will be able to be signed properly.

Also note that this oversight wallet starts from the " 0' " index of the previous wallet. It has no insight about the "m/44/60/0" key pairs that came before it.


# Full Code Example

```python
#!/usr/bin/python3

import zymkey

# -----------------------------Create a oversight wallet example-------------------------------------------------------------
wallet_name = "MyExampleWallet"
# Create our BIP32 master seed
print("Create our normal wallet...")
master_seed_slot = zymkey.client.gen_wallet_master_seed(key_type = "secp256k1", master_gen_key = "", wallet_name=wallet_name)
print("Done! Master seed slot:%i" % (master_seed_slot))

# Oversight wallet requires the public key and chain code of the last hardened node in a wallet address.
# So for this example will use m/44/60/0/0' where the 0' is the last hardened node for our oversight wallet to start from.
print("\nCreate a wallet derivation path m/44/60/0/0' ..")
child_slot = zymkey.client.gen_wallet_child_key(parent_key_slot = master_seed_slot, index = 44, hardened = False)
child_slot = zymkey.client.gen_wallet_child_key(parent_key_slot = child_slot, index = 60, hardened = False)
child_slot = zymkey.client.gen_wallet_child_key(parent_key_slot = child_slot, index = 0, hardened = False)
# Let's return the chain code of this hardened node to generate our oversight wallet later
child_slot, chain_code = zymkey.client.gen_wallet_child_key(parent_key_slot = child_slot, index = 0, hardened = True, return_chain_code = True)
hardened_node_pub_key = zymkey.client.get_public_key(child_slot)
print("Done! m/44/60/0/0' slot:%i" % (child_slot))

# Now that we have the public key and chain code, can create the oversight wallet.
# Note that the oversight wallet can exist at the same time as our BIP32 wallet. But needs a different wallet name, as wallet names are unique.
print("Create our oversight wallet...")
oversight_slot = zymkey.client.gen_oversight_wallet(key_type = "secp256k1", pub_key = hardened_node_pub_key, chain_code = chain_code, node_addr = "m/44/60/0/0'", wallet_name = "Oversight_wallet")
print("Done! oversight_slot slot:%i" % (oversight_slot))

# -----------------------------------------------------------------------------------------------------------------------------

