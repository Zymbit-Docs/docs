---
title: "Working with Zymbit's Wallet Python SDK"
linkTitle: "Zymbit Wallet Python SDK Tutorial"
description: ""
date: "2023-05-11"
lastmod: "2023-05-11"
draft: false
weight: 30
images: []
toc: true
---
Updated: 2023-05-11

## What is Zymbit's Wallet SDK?

Blockchain accounts, signatures, and transactions have an additional layer of complexity over traditional cryptographic keys and signatures. Our Wallet SDK aims to abstract away this complexity, enabling you to create and manage multiple blockchain wallets and seamlessly interact with smart contracts in your applicaitons without having to deal with their technical intricacies.

These examples are derived from the [documentation](https://docs.zymbit.com/zymbit-wallet-sdk/zymbit-wallet-sdk-py/).

## Installation

```bash
pip install zymbitwalletsdk
```

## ETH Keyring Examples

### Creating an ETH Keyring

If you have an existing wallet on your module, you can initialize an ETH Keyring using either the wallet name or its corresponding master slot. Here's how:

```python
from zymbitwalletsdk import ZymbitEthKeyring

keyring = ZymbitEthKeyring(wallet_name = "MyExampleWallet")
print(keyring)
```

or

```python
from zymbitwalletsdk import ZymbitEthKeyring

keyring = ZymbitEthKeyring(master_slot = 16)
print(keyring)
```

Output:

```bash
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

```python
from zymbitwalletsdk import ZymbitEthKeyring

keyring = ZymbitEthKeyring(master_slot=16)

print(keyring.add_account(index = 12))
print(keyring.add_accounts(n = 2))
print(keyring.add_accounts_list(index_list = [15, 26]))
print(keyring.get_accounts())
```

Output:

```bash
(Path: m/44'/60'/0'/0/12, Address: 0x092aa5e156F4FE5b3944B8A2421E45a23B8d1B00, Slot: 34)

[(Path: m/44'/60'/0'/0/13, Address: 0xA4cfAD05453e3FBB98EFD9A68f71E71B331d9e8A, Slot: 35), (Path: m/44'/60'/0'/0/14, Address: 0xd1B6206a83401dc042c04C9A751a7eB65645f144, Slot: 36)]

[(Path: m/44'/60'/0'/0/15, Address: 0xaDAC0304B9A471838a4e704d05C90Df36ad587C6, Slot: 37), (Path: m/44'/60'/0'/0/26, Address: 0x2fb995cd644992a9a838fe18Db818c83BdE719FD, Slot: 38)]

[(Path: m/44'/60'/0'/0/0, Address: 0x93D458d6B14A02943A07708a24D8A9F142Fc5A00, Slot: 26), (Path: m/44'/60'/0'/0/1, Address: 0x9fB80f688e4a4f68cd94e0DD4263B03cA7CC52ff, Slot: 27), (Path: m/44'/60'/0'/0/2, Address: 0x29e9f7D65886c6c1e164AFd4823A477eB0F1F75a, Slot: 28), (Path: m/44'/60'/0'/0/12, Address: 0x092aa5e156F4FE5b3944B8A2421E45a23B8d1B00, Slot: 34), (Path: m/44'/60'/0'/0/13, Address: 0xA4cfAD05453e3FBB98EFD9A68f71E71B331d9e8A, Slot: 35), (Path: m/44'/60'/0'/0/14, Address: 0xd1B6206a83401dc042c04C9A751a7eB65645f144, Slot: 36), (Path: m/44'/60'/0'/0/15, Address: 0xaDAC0304B9A471838a4e704d05C90Df36ad587C6, Slot: 37), (Path: m/44'/60'/0'/0/26, Address: 0x2fb995cd644992a9a838fe18Db818c83BdE719FD, Slot: 38)]
```

### Remove an Account

If you want to remove an account from a keyring, here is how to do it:

```python
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

```bash
[(Path: m/44'/60'/0'/0/0, Address: 0x93D458d6B14A02943A07708a24D8A9F142Fc5A00, Slot: 26), (Path: m/44'/60'/0'/0/1, Address: 0x9fB80f688e4a4f68cd94e0DD4263B03cA7CC52ff, Slot: 27), (Path: m/44'/60'/0'/0/2, Address: 0x29e9f7D65886c6c1e164AFd4823A477eB0F1F75a, Slot: 28), (Path: m/44'/60'/0'/0/12, Address: 0x092aa5e156F4FE5b3944B8A2421E45a23B8d1B00, Slot: 34), (Path: m/44'/60'/0'/0/13, Address: 0xA4cfAD05453e3FBB98EFD9A68f71E71B331d9e8A, Slot: 35), (Path: m/44'/60'/0'/0/14, Address: 0xd1B6206a83401dc042c04C9A751a7eB65645f144, Slot: 36), (Path: m/44'/60'/0'/0/15, Address: 0xaDAC0304B9A471838a4e704d05C90Df36ad587C6, Slot: 37), (Path: m/44'/60'/0'/0/26, Address: 0x2fb995cd644992a9a838fe18Db818c83BdE719FD, Slot: 38)]

[(Path: m/44'/60'/0'/0/0, Address: 0x93D458d6B14A02943A07708a24D8A9F142Fc5A00, Slot: 26), (Path: m/44'/60'/0'/0/1, Address: 0x9fB80f688e4a4f68cd94e0DD4263B03cA7CC52ff, Slot: 27), (Path: m/44'/60'/0'/0/12, Address: 0x092aa5e156F4FE5b3944B8A2421E45a23B8d1B00, Slot: 34), (Path: m/44'/60'/0'/0/13, Address: 0xA4cfAD05453e3FBB98EFD9A68f71E71B331d9e8A, Slot: 35), (Path: m/44'/60'/0'/0/14, Address: 0xd1B6206a83401dc042c04C9A751a7eB65645f144, Slot: 36), (Path: m/44'/60'/0'/0/15, Address: 0xaDAC0304B9A471838a4e704d05C90Df36ad587C6, Slot: 37), (Path: m/44'/60'/0'/0/26, Address: 0x2fb995cd644992a9a838fe18Db818c83BdE719FD, Slot: 38)]
```

## Keyring Manager Examples

### Initialize the keyring manager to manage multiple keyrings

```python
from zymbitwalletsdk import ZymbitEthKeyring, ZymbitKeyringManager

keyring1 = ZymbitEthKeyring(wallet_name = "MyExampleWallet")
keyring2 = ZymbitEthKeyring(wallet_name = "MyExampleWallet1")

keyring_manager = ZymbitKeyringManager(keyrings = [keyring1, keyring2])
print(keyring_manager.get_keyrings())
```

Output:

```bash
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

```python
from zymbitwalletsdk import ZymbitEthKeyring, ZymbitKeyringManager

keyring1 = ZymbitEthKeyring(wallet_name = "MyExampleWallet")
keyring2 = ZymbitEthKeyring(wallet_name = "MyExampleWallet1")

keyring_manager = ZymbitKeyringManager(keyrings = [keyring1, keyring2])

new_keyring = keyring_manager.create_keyring(ZymbitEthKeyring, "MyExampleWallet2")
print("Master slot and Mnemonic: ", new_keyring)
print(keyring_manager.get_keyrings())
```

Output:

```bash
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

```python
from zymbitwalletsdk import ZymbitEthKeyring, ZymbitKeyringManager

keyring1 = ZymbitEthKeyring(wallet_name = "MyExampleWallet")
keyring2 = ZymbitEthKeyring(wallet_name = "MyExampleWallet1")

keyring_manager = ZymbitKeyringManager(keyrings = [keyring1, keyring2])

keyring3 = ZymbitEthKeyring(wallet_name = "MyExampleWallet2")
keyring_manager.add_keyring(keyring3)

print(keyring_manager.get_keyrings())
```

Output:

```bash
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

```python
from zymbitwalletsdk import ZymbitEthKeyring, ZymbitKeyringManager

keyring1 = ZymbitEthKeyring(wallet_name = "MyExampleWallet")
keyring2 = ZymbitEthKeyring(wallet_name = "MyExampleWallet1")
keyring3 = ZymbitEthKeyring(wallet_name = "MyExampleWallet2")

keyring_manager = ZymbitKeyringManager(keyrings = [keyring1, keyring2, keyring3])

print(keyring_manager.get_keyring(wallet_name = "MyExampleWallet1"))
```

Output:

```bash
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

```python
from zymbitwalletsdk import ZymbitEthKeyring, ZymbitKeyringManager

keyring1 = ZymbitEthKeyring(wallet_name = "MyExampleWallet")
keyring2 = ZymbitEthKeyring(wallet_name = "MyExampleWallet1")
keyring3 = ZymbitEthKeyring(wallet_name = "MyExampleWallet2")

keyring_manager = ZymbitKeyringManager(keyrings = [keyring1, keyring2, keyring3])
keyring_manager.remove_keyring(master_slot = keyring3.master_slot, remove_master=True)

print(keyring_manager.get_keyrings())
```

Output:

```bash
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

## EthConnect Library Examples

For this tutorial, we use the Sepolia test network to test sending our transactions.

### Create and Broadcast an ETH Transaction (EIP-1559)

```python
from zymbitwalletsdk import ZymbitEthKeyring, ZymbitKeyringManager, EthConnect
from web3 import Web3
import binascii

web3 = Web3(Web3.HTTPProvider("YOUR ETH NODE'S HTTPS ENDPOINT"))

keyring = ZymbitEthKeyring(wallet_name = "MyExampleWallet1")
sending_account = keyring.get_accounts()[1]

chain_id = web3.eth.chain_id
nonce = web3.eth.get_transaction_count(sending_account.address)
value_in_wei = EthConnect.eth_to_wei(0.0001)
recipient_address = keyring.get_accounts()[0].address
gas_price = web3.eth.gas_price
gas_limit = 21000
transaction = EthConnect.create_transaction(chain_id = chain_id, nonce = nonce, value = value_in_wei, to = recipient_address, max_fee_per_gas = gas_price, gas = gas_limit)
print(transaction)

signed_transaction = EthConnect.sign_transaction(transaction, keyring, address = sending_account.address)
print(signed_transaction)

serialized_transaction = EthConnect.rlp_serialize_transaction(signed_transaction)
transaction_result_hash = web3.eth.send_raw_transaction(serialized_transaction)
print("Transaction broadcast hash:\n%s" % binascii.hexlify(transaction_result_hash).decode("utf-8"))
```

Output:

```bash
EthTransaction(chain_id=11155111, nonce=30, max_priority_fee_per_gas=1, max_fee_per_gas=1000000007, gas=21000, to=b'.W\xa1s\xb2\xbb\nIF\xa8\xaa\x7f\xd9\x9f7=K\xf3\x98 ', value=100000000000000, data=b'', access_list=())

SignedEthTransaction(chain_id=11155111, nonce=30, max_priority_fee_per_gas=1, max_fee_per_gas=1000000007, gas=21000, to=b'.W\xa1s\xb2\xbb\nIF\xa8\xaa\x7f\xd9\x9f7=K\xf3\x98 ', value=100000000000000, data=b'', access_list=(), y_parity=True, r=44987742661489270771188443846316967428376177535265140127433627783003713851105, s=54741034043774433582032940802071398050179513067469791027144539380885541407020)

Transaction broadcast hash:
4c2118a229b63ee096408233a19bea3d93340b44d141a397072093f98306d064
```

You can view the transaction details [here](https://sepolia.etherscan.io/tx/0x4c2118a229b63ee096408233a19bea3d93340b44d141a397072093f98306d064)

### Contract Transactions (EIP-1559)

For the deploying and executing contract examples, we will be using the following solidity contract:
```solidity
pragma solidity >=0.7.0 <0.9.0;

contract Counter {

    uint public counter;

    event IncrementedCounter (uint counter, address indexed sender);

    constructor(uint initial) {
        counter = initial;
    }

    function increment_counter() public {
        counter += 1;
        emit IncrementedCounter(counter, msg.sender);
    }
}
```

#### Create an ETH Deploy Contract Transaction

To deploy a contract, you need to save the contract ABI as a JSON file and the hex encoded bytecode as a txt file on your Pi's local file system. Once you have done that, you can deploy a contract like this:

```python
from zymbitwalletsdk import ZymbitEthKeyring, ZymbitKeyringManager, EthConnect
from web3 import Web3
import binascii

web3 = Web3(Web3.HTTPProvider("YOUR ETH NODE'S HTTPS ENDPOINT"))

keyring = ZymbitEthKeyring(wallet_name = "MyExampleWallet1")
sending_account = keyring.get_accounts()[1]

chain_id = web3.eth.chain_id
nonce = web3.eth.get_transaction_count(sending_account.address)
value_in_wei = EthConnect.eth_to_wei(1)
recipient = keyring.get_accounts()[0].address
gas_price = web3.eth.gas_price
gas_limit = 2100000
transaction = EthConnect.create_deploy_contract_transaction(chain_id = chain_id, nonce = nonce, contract_abi_path = './ABI.json', contract_bytecode_path = "./bytecode.txt", constructor_args = [0], max_fee_per_gas = gas_price, gas = gas_limit)
signed_transaction = EthConnect.sign_transaction(transaction, keyring, address = sending_account.address)

serialized_transaction = EthConnect.rlp_serialize_transaction(signed_transaction)
transaction_result_hash = web3.eth.send_raw_transaction(serialized_transaction)
print("Transaction broadcast hash:\n%s" % binascii.hexlify(transaction_result_hash).decode("utf-8"))
```

Output:

```bash
Transaction broadcast hash:
d8163f20bd3baf0f59ee23091eda5b0160147b7a4e4eeb3988306e3534a7e03d
```

You can view the transaction details [here](https://sepolia.etherscan.io/tx/0xd8163f20bd3baf0f59ee23091eda5b0160147b7a4e4eeb3988306e3534a7e03d)

#### Create an ETH Execute Contract Transaction

In this example, we are going to invoke the ```increment_counter``` function in our deployed contract. Here's how to do it:

```python
from zymbitwalletsdk import ZymbitEthKeyring, ZymbitKeyringManager, EthConnect
from web3 import Web3
import binascii

web3 = Web3(Web3.HTTPProvider("YOUR ETH NODE'S HTTPS ENDPOINT"))

keyring = ZymbitEthKeyring(wallet_name = "MyExampleWallet1")
sending_account = keyring.get_accounts()[1]

chain_id = web3.eth.chain_id
nonce = web3.eth.get_transaction_count(sending_account.address)
value_in_wei = EthConnect.eth_to_wei(1)
contract_address = "0xE575A1F131be23223ee59f00379FF13B913E9063" # The deployed contract's address on the Sepolia test network
gas_price = web3.eth.gas_price
gas_limit = 2100000
transaction = EthConnect.create_execute_contract_transaction(chain_id = chain_id, nonce = nonce, contract_abi_path = './ABI.json', contract_address = contract_address, function_name= "increment_counter", args = [], max_fee_per_gas = gas_price, gas = gas_limit)
signed_transaction = EthConnect.sign_transaction(transaction, keyring, address = sending_account.address)

serialized_transaction = EthConnect.rlp_serialize_transaction(signed_transaction)
transaction_result_hash = web3.eth.send_raw_transaction(serialized_transaction)
print("Transaction broadcast hash:\n%s" % binascii.hexlify(transaction_result_hash).decode("utf-8"))
```

Output:

```bash
Transaction broadcast hash:
ae5bc454c77405d6492e794a71fdb74342c8429091bc41967ba1f0ce3753c147
```

You can view the transaction details [here](https://sepolia.etherscan.io/tx/0xae5bc454c77405d6492e794a71fdb74342c8429091bc41967ba1f0ce3753c147)
