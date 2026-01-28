---
title: "SLIP39 and Shamir's Wallet Recovery Example"
linkTitle: "SLIP39 and Shamir's"
description: ""
date: "2022-02-04"
lastmod: "2025-10-15"
draft: false
weight: 60
images: []
toc: true
---

Updated: 2022-02-14


## What is SLIP39 and Shamir's Backup?

An algorithm created by Adi Shamir coined Shamir's Secret Sharing, provides a new way of backing up and recovering our private keys. This algorithm was proposed by SatoshiLabs to be accepted as new backup method for wallet keys and thus named **SLIP39**.

## Why use SLIP39 recovery?

If you are familiar with current wallets like MetaMask and Ledger, then you will notice that most of these wallets implement a backup strategy using BIP39. BIP39 is a 12 or 24 word unique sentence that can recreate private keys backed by this strategy . But this is only one shard, and puts responsibility on the owner to keep this one shard from falling into the wrong hands.

SLIP39 allows the owner to backup their wallets with multiple shards using a committee-like approach. For example, we can generate 10 shards and require that 6 of these shards need to be present to recover a wallet. If the owner loses one shard to a thief then it becomes less of a concern as the thief would still need 5 other shards to get into the wallet. Furthermore the owner can store these 10 shards however he wants: give a shard to a friend, store a shard in safe, bury a shard in the backyard, etc.

### Maximum number of shards?

SLIP39 generates groups and each of these groups can contain its own system of member shards.

* HSM6 supports up to 14 groups \* 14 members per group = 196 shards total
* SCM supports up to 16 groups \* 16 members per group = 256 shards total 

#### Useful Resources:

* [SLIP39](https://github.com/satoshilabs/slips/blob/master/slip-0039.md)

### Prerequisites

* Zymbit Modules that support this feature:
    * [HSM6](https://www.zymbit.com/hsm6/)
    * [SCM](https://www.zymbit.com/secure-compute-platform/) 

* Follow the [Installation and Getting Started section for your HSM](/hardware/modules/) first.

* All code snippets written in this article are written using python3. For more Zymbit API documentation (Python/C/C++) visit: [API Documentation](../../../api/)


## Generating a master seed with SLIP39 recovery

The next steps cover how to create a master seed and setup for recovery of the seed with SLIP39. The example python code is provided in its entirety at the end of the explaination of each portion of the code.

### Opening a master seed SLIP39 generating session

Create the recovery strategy. The recovery strategy will detail the number of groups to track (`group_count`) and number of groups needed to recover the master seed (`group_threshold`).

`iteration_exponent` dictates how many hashes are done at cryptographic layer (takes integer 0-5). The higher this number is, the longer (exponentially) the module will take to churn out a shard.

`variant` is only for curve "ed25519", we support the "cardano" variant for ed25519. Otherwise is empty string.
| Supported Curves | Other supported variants |
|------------------|--------------------------|
| Nistp256/Secp256r1 | None |
| Secp256k1 | None |
| Ed25519 | Cardano |

`passphrase` is the password for generating/recovering the master generator key.

```python
use_SLIP39_recovery = zymkey.RecoveryStrategySLIP39(group_count = 3, group_threshold = 2, iteration_exponent = 0, variant = "", passphrase = "")
```

Next, start the shard generating SLIP39 session.

```python
# The master seed will not be generated until all groups are created. So the slot will not be returned until all shards are generated.
# Opens a SLIP39 session successfully on return code 0
print("Starting SLIP39 shard generating session...")
return_code = zymkey.client.gen_wallet_master_seed("secp256k1", "", "MyExampleWallet", use_SLIP39_recovery)
print("Done! Return Code:%i" % (return_code))
```

A return code of 0 means we successfully started an active SLIP39 session.

{{< callout warning >}}
While a SLIP39 session is active for both generation or recovery, other wallet generation functions are locked up. This means we can't generate other keys while a SLIP39 session. If anything ever goes wrong in the SLIP39 process, we can cancel an active SLIP39 session at any time.

```python
# cancel an active SLIP39 session (Generation/Recovery)
zymkey.client.cancel_SLIP39_session()
```
{{< /callout >}}

### Setting up our Groups and their member shards

Groups can also contain their own member shard system. We will need to set this configuration for each group we work on with `set_gen_SLIP39_group_info`.  The `group_index` is the group id we will be working on. So if we asked for 3 groups in our recovery strategy, then the group indexes for these 3 groups are \[0,1,2\].

The `member_count` is the number of shards in the group.

The `member_threshold` is the number of member shards we required to reconstruct the group.

`add_gen_SLIP39_member_pwd(string passphrase)` will return a -1 and 33 word mnemonic sentence (shard). If we specified a member_count of three, then we will need to call this function 3 times to generate our 3 member shards. By default the function doesn't attach a password to any of these shards. This function will return a -1 until all groups/members are generated.

For now, the first group will have 3 shards with a threshold of 2 shards required for reconstruction. These shards will also not have passwords attached to them.

```python
# First Group has been divided into three members. Will require two of these three members to reconstruct this group.
# This group will have no passwords attached to the members
# add_gen_SLIP39_member_pwd() will return a [-1, mnemonic_sentence]. -1 symbolizing that all shards haven't been generated yet.
print("\nSet our first example group configuration..")
zymkey.client.set_gen_SLIP39_group_info(group_index = 0, member_count = 3, member_threshold = 2)
print("Generating 3 Shards for Group 0 (Shards required for recovering the group: 2)...")
group_0_shard_list = []
for i in range(3):
    ret, mnemonic_shard = zymkey.client.add_gen_SLIP39_member_pwd()
    group_0_shard_list.append(mnemonic_shard)
    print("Shard #%i , Mnemonic sentence:\n%s" % (i+1, group_0_shard_list[i]))
```

For the second group, generate three total shards again, but this time with a threshold of 3 shards (all are required for reconstruction). These shards will have passwords attached to them this time.

```python
# Second Group has been divided into three members. Will require all three members to reconstruct this group.
# This group will have passwords attached to the members
print("\nSet our second example group configuration..")
zymkey.client.set_gen_SLIP39_group_info(group_index = 1, member_count = 3, member_threshold = 3)
print("Done!")
print("Generating 3 Shards for Group 1 (Shards required for recovering the group: 3)...")
group_1_shard_dict = {}
group_1_pwd_list = ["p@ssw0rd", "T3st", "h3LlO"]
for i in range(3):
    ret, mnemonic_shard = zymkey.client.add_gen_SLIP39_member_pwd(group_1_pwd_list[i])
    group_1_shard_dict[group_1_pwd_list[i]] = mnemonic_shard
    print("Shard #%i , Mnemonic sentence(Password: %s):\n%s" % (i+1, group_1_pwd_list[i], group_1_shard_dict[group_1_pwd_list[i]]))
```

For the third group we will have only one shard. To show that we do not have to always shard up our groups into multiple shards. Since this is the last group in the SLIP39 session, the master seed key's slot number will be returned on the last shard generated by add_gen_SLIP39_member_pwd() instead of -1.

{{< callout warning >}}
Although this shard may look like a BIP39 mnemonic sentence. They are NOT interchangeable.
{{< /callout >}}

```python
# Third Group has been divided into just one member (THIS IS NOT RECOMMENDED LEAST SECURE). Will require the only member to reconstruct this group.
# This group will have no passwords attached to the members
# This shard is not the same as a BIP39 shard!
# Since this is the last group, on the very last shard the add_gen_SLIP39_member_pwd() will return the master seed slot it was generated in, instead of -1.
print("\nSet our third example group configuration..")
zymkey.client.set_gen_SLIP39_group_info(group_index = 2, member_count = 1, member_threshold = 1)
print("Done!")
print("Generating 1 Shards for Group 2 (Shards required for recovering the group: 1)...")
master_seed_slot, last_shard = zymkey.client.add_gen_SLIP39_member_pwd()
print("Shard #%i , Mnemonic sentence:\n%s" % (1, last_shard))
```
A master seed key pair has been generated with a SLIP39 backup strategy. For security, the master seed public key cannot be exported, but a child key can be generated and its public key can be exported.

```python
print("\nMaster Seed Slot: %i" % (master_seed_slot))
child_slot = zymkey.client.gen_wallet_child_key(master_seed_slot, 0 , False)
child_pub_key = zymkey.client.get_public_key(child_slot)
print("Child Public Key: %s" % (child_pub_key))
```

Next, recover this key pair with the SLIP39 shards just generated. Compare the children public keys to see if the correct master key pair was recovered.

## Recovering our master key with SLIP39 shards

Delete the original master seed key pair. This will also delete any children keys generated from the master seed key pair.

```python
# Lets Remove that key we just generated and recover it.
# Note! removing the master key will remove its children keys as well.
print("\nRemoving Master Key....")
zymkey.client.remove_key(master_seed_slot)
print("Done!")
```

### Opening a recovery SLIP39 session

Start the SLIP39 recovery session. This must take in the same curve type, master key passphrase, wallet name, and recovery strategy. This session will return a -1, but this is not an error. A -1 is returned throughout the session to be ambiguous on how far along the recovery process we are. If there truly was an error, restore_wallet_master_seed() will return an exception instead.

```python
# Per Above example we need to restore two of the three groups in order to get our master seed back
# Let's restore with group 0 and group 1

# Open a restore SLIP39 session, recovery_strategy will be the same as above
# Return code will be -1, but this is due to security reasons. To not let users know how far along the recovery process is.
# It will instead throw an exception if it fails.
print("\nStarting SLIP39 shard restoring session...")
return_code = zymkey.client.restore_wallet_master_seed("secp256k1", "", "MyExampleWallet", use_SLIP39_recovery)
print("Done! Return Code:%i" % (return_code))
```

Remember from the earlier example we created three groups and require only two of these groups to be reconstructed to recover our key.
* Group0 no passwords (3 members, threshold: 2)
* Group1 has passwords(3 members, threshold: 3)
* Group2 no password (1 member, threshold: 1)

Since we only require two groups to recover our master key, the total number shards needed can differ.

These three ways will all recover the master key.
| Group combination | member thresholds | Total shards needed |
|-------------------|-------------------|---------------------|
| Group0 + Group1 | 2 + 3 | 5 |
| Group1 + Group2 | 3 + 1 | 4 |
| Group2 + Group0 | 1 + 2 | 3 |

Now recover the master key using the group combination of Group0 + Group1. Shards are fed in one at a time and can be fed out of order as well. The module will auto reconstruct any groups as it gets more shards fed in. The module will return -1 until it successfully recreates all groups needed to generate the master key. If an incorrect shard is fed in, then it will still return -1. Remember we can always call `cancel_SLIP39_session` to stop our active SLIP39 session, if an incorrect shard is fed in.

```python
# Feed in the shards. The shards will be fed in one at a time, and can be fed in any order.
# This function will keep returning -1, for security. To not let users know how far along the recovery process is.
# The function will return the real slot number once all groups are reconstructed.
# For this example we need to feed in a total of: group_0_threshold (2) + group_1_threshold (3) = 5 shards.

# Feed group 0 shards, and for fun out of order.
print("\nFeeding Group 0 Shard#3 and Shard#1...")
zymkey.client.add_restore_SLIP39_mnemonic(mnemonic_sentence = group_0_shard_list[2])
zymkey.client.add_restore_SLIP39_mnemonic(mnemonic_sentence = group_0_shard_list[0])
print("Done!")

# group1 shards have passwords attached to them. So we need to feed in the correct passwords for these shards.
print("\nFeeding Group 1 Shards with their passwords...")
zymkey.client.add_restore_SLIP39_mnemonic(mnemonic_sentence = group_1_shard_dict.get(group_1_pwd_list[0]), passphrase = group_1_pwd_list[0])
zymkey.client.add_restore_SLIP39_mnemonic(mnemonic_sentence = group_1_shard_dict.get(group_1_pwd_list[2]), passphrase = group_1_pwd_list[2])
# Notice the last shard required for full master seed reconstruction will return the slot number instead of -1
master_seed_slot = zymkey.client.add_restore_SLIP39_mnemonic(mnemonic_sentence = group_1_shard_dict.get(group_1_pwd_list[1]), passphrase = group_1_pwd_list[1])
print("Done!")
```

The master key should now be sucessfully recovered. Verify that the master key is correctly recovered.

```python
# Check the public key and make sure its the same.
# Checking if master_seed_pub_key = zymkey.client.get_public_key(master_seed_slot)
print("\nMaster Seed Slot: %i" % (master_seed_slot))
child_slot = zymkey.client.gen_wallet_child_key(master_seed_slot, 0 , False)
child_pub_key = zymkey.client.get_public_key(child_slot)
print("Child Public Key: %s" % (child_pub_key))
# Cleanup
print("\nRemoving Master Key....")
zymkey.client.remove_key(master_seed_slot)
print("Done!")
```

The public key from the children key should match the public key we got before, proving the master key recovered matched the original master key.


## Full Code Example

```python
#!/usr/bin/python3

import zymkey

wallet_name = "MyExampleWallet"
# --------------------------------------Create a master seed using shamir's backup-----------------------------------------------------------------------
# Use the SLIP39 recovery strategy to tell zymkey to open a SLIP39 shard generating session.
# The recovery strategy will detail the number of Groups to track (group_count) and number of groups needed to recover the master seed (group_threshold)
# iteration_exponent dictates how many hashes are done at cryptographic layer.
# The master seed will not be generated until all groups are created. So the slot will not be returned until all shards are generated.
# Opens a SLIP39 session successfully on return code 0
use_SLIP39_recovery = zymkey.RecoveryStrategySLIP39(group_count = 3, group_threshold = 2, iteration_exponent = 0, variant = "", passphrase = "")
print("Starting SLIP39 shard generating session...")
return_code = zymkey.client.gen_wallet_master_seed("secp256k1", "", wallet_name, use_SLIP39_recovery)
print("Done! Return Code:%i" % (return_code))

# First Group has been divided into three members. Will require two of these three members to reconstruct this group.
# This group will have no passwords attached to the members
# add_gen_SLIP39_member_pwd() will return a [-1, mnemonic_sentence]. -1 symbolizing that all shards haven't been generated yet.
print("\nSet our first example group configuration..")
zymkey.client.set_gen_SLIP39_group_info(group_index = 0, member_count = 3, member_threshold = 2)
print("Generating 3 Shards for Group 0 (Shards required for recovering the group: 2)...")
group_0_shard_list = []
for i in range(3):
    ret, mnemonic_shard = zymkey.client.add_gen_SLIP39_member_pwd()
    group_0_shard_list.append(mnemonic_shard)
    print("Shard #%i , Mnemonic sentence:\n%s" % (i+1, group_0_shard_list[i]))

# Second Group has been divided into three members. Will require all three members to reconstruct this group.
# This group will have passwords attached to the members
print("\nSet our second example group configuration..")
zymkey.client.set_gen_SLIP39_group_info(group_index = 1, member_count = 3, member_threshold = 3)
print("Done!")
print("Generating 3 Shards for Group 1 (Shards required for recovering the group: 3)...")
group_1_shard_dict = {}
group_1_pwd_list = ["p@ssw0rd", "T3st", "h3LlO"]
for i in range(3):
    ret, mnemonic_shard = zymkey.client.add_gen_SLIP39_member_pwd(group_1_pwd_list[i])
    group_1_shard_dict[group_1_pwd_list[i]] = mnemonic_shard
    print("Shard #%i , Mnemonic sentence(Password: %s):\n%s" % (i+1, group_1_pwd_list[i], group_1_shard_dict[group_1_pwd_list[i]]))

# Third Group has been divided into just one member (THIS IS NOT RECOMMENDED LEAST SECURE). Will require the only member to reconstruct this group.
# This group will have no passwords attached to the members
# This shard is not the same as a BIP39 shard!
# Since this is the last group, on the very last shard the add_gen_SLIP39_member_pwd() will return the master seed slot it was generated in, instead of -1.
print("\nSet our third example group configuration..")
zymkey.client.set_gen_SLIP39_group_info(group_index = 2, member_count = 1, member_threshold = 1)
print("Done!")
print("Generating 1 Shards for Group 2 (Shards required for recovering the group: 1)...")
master_seed_slot, last_shard = zymkey.client.add_gen_SLIP39_member_pwd()
print("Shard #%i , Mnemonic sentence:\n%s" % (i+1, last_shard))

# master_seed_pub_key = zymkey.client.get_public_key(master_seed_slot)
print("\nMaster Seed Slot: %i" % (master_seed_slot))
child_slot = zymkey.client.gen_wallet_child_key(master_seed_slot, 0 , False)
child_pub_key = zymkey.client.get_public_key(child_slot)
print("Child Public Key: %s" % (child_pub_key))
# --------------------------------------------------------------------------------------------------------------------------------------------------------
# --------------------------------------Recover a master seed using shamir's backup-----------------------------------------------------------------------
# Let's Remove that key we just generated and recover it.
# Note! removing the master key will remove its children keys as well.
print("\nRemoving Master Key....")
zymkey.client.remove_key(master_seed_slot)
print("Done!")

# Per Above example we need to restore two of the three groups in order to get our master seed back
# Let's restore with group 0 and group 1

# Open a restore SLIP39 session, recovery_strategy will be the same as above
# Return code will be -1, but this is due to security reasons. To not let users know how far along the recovery process is.
# It will instead throw an exception if it fails.
print("\nStarting SLIP39 shard restoring session...")
return_code = zymkey.client.restore_wallet_master_seed("secp256k1", "", wallet_name, use_SLIP39_recovery)
print("Done! Return Code:%i" % (return_code))

# Now we will feed in our shards. These will be fed in one at a time, and can be fed in any order.
# This function will keep returning -1, for security. To not let users know how far along the recovery process is.
# Will return the real slot number once all groups are reconstructed.
# For this example we need to feed in a total of: group_0_threshold (2) + group_1_threshold (3) = 5 shards.

#Feed group 0 shards, and for fun out of order.
print("\nFeeding Group 0 Shard#3 and Shard#1...")
zymkey.client.add_restore_SLIP39_mnemonic(mnemonic_sentence = group_0_shard_list[2])
zymkey.client.add_restore_SLIP39_mnemonic(mnemonic_sentence = group_0_shard_list[0])
print("Done!")

# group1 shards have passwords attached to them. So we need to feed in the correct passwords for these shards.
print("\nFeeding Group 1 Shards with their passwords...")
zymkey.client.add_restore_SLIP39_mnemonic(mnemonic_sentence = group_1_shard_dict.get(group_1_pwd_list[0]), passphrase = group_1_pwd_list[0])
zymkey.client.add_restore_SLIP39_mnemonic(mnemonic_sentence = group_1_shard_dict.get(group_1_pwd_list[2]), passphrase = group_1_pwd_list[2])
# Notice the last shard required for full master seed reconstruction will return the slot number instead of -1
master_seed_slot = zymkey.client.add_restore_SLIP39_mnemonic(mnemonic_sentence = group_1_shard_dict.get(group_1_pwd_list[1]), passphrase = group_1_pwd_list[1])
print("Done!")

# Let's Check the public key and make sure its the same.
# master_seed_pub_key = zymkey.client.get_public_key(master_seed_slot)
print("\nMaster Seed Slot: %i" % (master_seed_slot))
child_slot = zymkey.client.gen_wallet_child_key(master_seed_slot, 0 , False)
child_pub_key = zymkey.client.get_public_key(child_slot)
print("Child Public Key: %s" % (child_pub_key))
print("\nRemoving Master Key....")
zymkey.client.remove_key(master_seed_slot)
print("Done!")
# -----------------------------------------------------------------------------------------------------------------------------------------------
```
