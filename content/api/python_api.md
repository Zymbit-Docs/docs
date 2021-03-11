---
title: Python API Documentation
description: This is the official documentation for the official zkapputils Python API library.
date: '2021-03-11T23:41:21'
lastmod: '2021-03-11T23:41:21'
draft: false
images: []
type: docs
layout: single
weight: 0
toc: true
---

<!--

################################################################################

WARNING: DO NOT EDIT THIS PAGE MANUALLY!

################################################################################

This template should only be used for automatically-generated API documentation.

DO NOT edit the content of this page manually, as it will be overwritten
the next time the API documentation is automatically updated.

################################################################################

WARNING: DO NOT EDIT THIS PAGE MANUALLY!

################################################################################

//-->

Python interface module to Zymkey Application Utilities Library.

This file contains a Python class which interfaces to the the Zymkey Application Utilities library. This class facilitates writing user space applications which use Zymkey to perform cryptographic operations, such as:

1. Signing of payloads using ECDSA

2. Verification of payloads that were signed using Zymkey

3. Exporting the public key that matches Zymkey’s private key

4. “Locking” and “unlocking” data objects

5. Generating random data

Additionally, there are methods for changing the i2c address (i2c units only), setting tap sensitivity, and controlling the LED.

### class zymkey.Zymkey() The Zymkey class definition

This class provides access to the Zymkey within Python.

#### led_on() Turn the LED on

* **Raises**

    **AssertionError** – If ret is a bad return code from the Zymkey library function.

* **Return type**

    `None`

#### led_off() Turn the LED off

* **Raises**

    **AssertionError** – If ret is a bad return code from the Zymkey library function.

* **Return type**

    `None`

#### led_flash(on_ms, off_ms=0, num_flashes=0) Flash the LED

* **Parameters**

 - **on_ms** (`int`) – The amount of time in milliseconds that the LED will be on for.

    - **off_ms** (`int`) – The amount of time in milliseconds that the LED will be off for. If this parameter is set to 0 (default), the off time is the same as the on time.

    - **num_flashes** (`int`) – The number of on/off cycles to execute. If this parameter is set to 0 (default), the LED flashes indefinitely.

* **Raises**

    **AssertionError** – If ret is a bad return code from the Zymkey library function.

* **Return type**

    `None`

#### get_random(num_bytes) Get some random bytes

* **Parameters**

    **num_bytes** (`int`) – The number of random bytes to get.

* **Returns**

    An array of bytes returned by the random number generator.

* **Return type**

    bytearray

* **Raises**

    **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### create_random_file(file_path, num_bytes) Deposit random data in a file

* **Parameters**

 - **file_path** (`str`) – The absolute path name for the destination file.

    - **num_bytes** (`int`) – The number of random bytes to get.

* **Raises**

    **AssertionError** – If ret is a bad return code from the Zymkey library function.

* **Return type**

    `None`

#### lock(src, dst=None, encryption_key='zymkey') Lock up source (plaintext) data

This methods encrupts and signs a block of data.

The Zymkey has two keys that can be used for locking/unlocking operations, designated as ‘shared’ and ‘one-way’:

1. The one-way key is meant to lock up data only on the local host computer. Data encrypted using this key cannot be exported and deciphered anywhere else.

2. The shared key is meant for publishing data to other sources that have the capability to generate the shared key, such as the Zymbit cloud server.

* **Parameters**

 - **src** (`Union`[`str`, `bytes`]) – The source (plaintext) data to lock.

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the source file. If bytes or bytesarray is passed, it is assumed to contain binary data.

    - **dst** (`Optional`[`str`]) – The destination (ciphertext) of the locked data.

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the file where the destination data is meant to be written. Otherwise, if None is passed to the method (the default), the locked data is returned from the method as a bytearray.

    - **encryption_key** (`str`) – This specifies which key will be used to lock the data. A value of ‘zymbit’ (default) specifies that the Zymkey will use the one-way key. A value of ‘cloud’ specifies that the shared key is used.

* **Returns**

    The locked data is returned as a bytearray if no destination is specified when this method is called. Otherwise, None is returned.

* **Return type**

    bytearray or None

* **Raises**

    **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### unlock(src, dst=None, encryption_key='zymkey', raise_exception=True) Unlock source (ciphertext) data

This method verifies a locked object signature and decrypts the associated ciphertext data.

The Zymkey has two keys that can be used for locking/unlocking operations, designated as ‘shared’ and ‘one-way’:

1. The one-way key is meant to lock up data only on the local host computer. Data encrypted using this key cannot be exported and deciphered anywhere else.

2. The shared key is meant for publishing data to other sources that have the capability to generate the shared key, such as the Zymbit cloud server.

* **Parameters**

 - **src** (`Union`[`str`, `bytes`]) – The source (ciphertext) data to verify and decrypt.

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the source file. If bytes or bytesarray is passed, it is assumed to contain binary data.

    - **dst** (`Optional`[`str`]) – The destination of the decrypted data (plaintext).

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the file where the destination data is meant to be written. Otherwise, if None is passed to the method (the default), the locked data is returned from the method as a bytearray.

    - **encryption_key** (`str`) – This specifies which key will be used to lock the data. A value of ‘zymbit’ (default) specifies that the Zymkey will use the one-way key. A value of ‘cloud’ specifies that the shared key is used.

    - **raise_exception** (`bool`) – Specifies if an exception should be raised if the signature verification of the locked object fails.

* **Returns**

    The locked data is returned as a bytearray if no destination is specified when this method is called. Otherwise, None is returned.

* **Return type**

    bytearray or None

* **Raises**

    **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### sign(src, slot=0) Generate a signature using the Zymkey’s ECDSA private key

* **Parameters**

 - **src** (`str`) – The SHA256 digest of the data that will be used to generate the signature.

    - **slot** (`int`) – The key slot used for signing.

* **Returns**

    A bytearray of the signature.

* **Return type**

    bytearray

# Undocumented Members

This section of the demo contains all members within the zymkey module, including members that have not yet been documented.

### class zymkey.Zymkey() The Zymkey class definition

This class provides access to the Zymkey within Python.

#### EPHEMERAL_KEY_SLOT( = -1)

#### led_on() Turn the LED on

* **Raises**

    **AssertionError** – If ret is a bad return code from the Zymkey library function.

* **Return type**

    `None`

#### led_off() Turn the LED off

* **Raises**

    **AssertionError** – If ret is a bad return code from the Zymkey library function.

* **Return type**

    `None`

#### led_flash(on_ms, off_ms=0, num_flashes=0) Flash the LED

* **Parameters**

 - **on_ms** (`int`) – The amount of time in milliseconds that the LED will be on for.

    - **off_ms** (`int`) – The amount of time in milliseconds that the LED will be off for. If this parameter is set to 0 (default), the off time is the same as the on time.

    - **num_flashes** (`int`) – The number of on/off cycles to execute. If this parameter is set to 0 (default), the LED flashes indefinitely.

* **Raises**

    **AssertionError** – If ret is a bad return code from the Zymkey library function.

* **Return type**

    `None`

#### get_random(num_bytes) Get some random bytes

* **Parameters**

    **num_bytes** (`int`) – The number of random bytes to get.

* **Returns**

    An array of bytes returned by the random number generator.

* **Return type**

    bytearray

* **Raises**

    **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### create_random_file(file_path, num_bytes) Deposit random data in a file

* **Parameters**

 - **file_path** (`str`) – The absolute path name for the destination file.

    - **num_bytes** (`int`) – The number of random bytes to get.

* **Raises**

    **AssertionError** – If ret is a bad return code from the Zymkey library function.

* **Return type**

    `None`

#### lock(src, dst=None, encryption_key='zymkey') Lock up source (plaintext) data

This methods encrupts and signs a block of data.

The Zymkey has two keys that can be used for locking/unlocking operations, designated as ‘shared’ and ‘one-way’:

1. The one-way key is meant to lock up data only on the local host computer. Data encrypted using this key cannot be exported and deciphered anywhere else.

2. The shared key is meant for publishing data to other sources that have the capability to generate the shared key, such as the Zymbit cloud server.

* **Parameters**

 - **src** (`Union`[`str`, `bytes`]) – The source (plaintext) data to lock.

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the source file. If bytes or bytesarray is passed, it is assumed to contain binary data.

    - **dst** (`Optional`[`str`]) – The destination (ciphertext) of the locked data.

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the file where the destination data is meant to be written. Otherwise, if None is passed to the method (the default), the locked data is returned from the method as a bytearray.

    - **encryption_key** (`str`) – This specifies which key will be used to lock the data. A value of ‘zymbit’ (default) specifies that the Zymkey will use the one-way key. A value of ‘cloud’ specifies that the shared key is used.

* **Returns**

    The locked data is returned as a bytearray if no destination is specified when this method is called. Otherwise, None is returned.

* **Return type**

    bytearray or None

* **Raises**

    **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### unlock(src, dst=None, encryption_key='zymkey', raise_exception=True) Unlock source (ciphertext) data

This method verifies a locked object signature and decrypts the associated ciphertext data.

The Zymkey has two keys that can be used for locking/unlocking operations, designated as ‘shared’ and ‘one-way’:

1. The one-way key is meant to lock up data only on the local host computer. Data encrypted using this key cannot be exported and deciphered anywhere else.

2. The shared key is meant for publishing data to other sources that have the capability to generate the shared key, such as the Zymbit cloud server.

* **Parameters**

 - **src** (`Union`[`str`, `bytes`]) – The source (ciphertext) data to verify and decrypt.

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the source file. If bytes or bytesarray is passed, it is assumed to contain binary data.

    - **dst** (`Optional`[`str`]) – The destination of the decrypted data (plaintext).

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the file where the destination data is meant to be written. Otherwise, if None is passed to the method (the default), the locked data is returned from the method as a bytearray.

    - **encryption_key** (`str`) – This specifies which key will be used to lock the data. A value of ‘zymbit’ (default) specifies that the Zymkey will use the one-way key. A value of ‘cloud’ specifies that the shared key is used.

    - **raise_exception** (`bool`) – Specifies if an exception should be raised if the signature verification of the locked object fails.

* **Returns**

    The locked data is returned as a bytearray if no destination is specified when this method is called. Otherwise, None is returned.

* **Return type**

    bytearray or None

* **Raises**

    **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### sign(src, slot=0) Generate a signature using the Zymkey’s ECDSA private key

* **Parameters**

 - **src** (`str`) – The SHA256 digest of the data that will be used to generate the signature.

    - **slot** (`int`) – The key slot used for signing.

* **Returns**

    A bytearray of the signature.

* **Return type**

    bytearray

#### sign_digest(sha256, slot=0)

#### verify(src, sig, raise_exception=True, pubkey_slot=0, foreign=False)

#### verify_digest(sha256, sig, raise_exception=True, pubkey_slot=0, foreign=False)

#### ecdh(local_slot, peer_pubkey, kdf_func_type='none', salt=[], info=[], num_iterations=1, peer_pubkey_slot_is_foreign=True, derived_key_size=32)

#### create_ecdsa_public_key_file(filename, slot=0)

#### create_public_key_file(filename, slot=0, foreign=False)

#### get_ecdsa_public_key(slot=0)

#### get_public_key(slot=0, foreign=False)

#### get_slot_alloc_list(foreign=False)

#### store_foreign_public_key(key_type, pubkey)

#### disable_public_key_export(slot=0, foreign=False)

#### gen_key_pair(key_type)

#### gen_ephemeral_key_pair(key_type)

#### remove_key(slot, foreign=False)

#### invalidate_ephemeral_key(slot, foreign=False)

#### gen_wallet_master_seed(key_type, master_gen_key, wallet_name, bip39=False)

#### gen_wallet_child_key(parent_key_slot, index, hardened)

#### restore_wallet_master_seed_from_bip39_mnemonic(key_type, master_gen_key, wallet_name, bip39_mnemonic)

#### get_wallet_node_addr(slot)

#### get_wallet_key_slot(node_addr, wallet_name=None, master_seed_slot=None)

#### set_i2c_address(address)

#### set_tap_sensitivity(axis='all', pct=50.0)

#### wait_for_tap(timeout_ms=- 1)

#### class ZymkeyAccelAxisData(g_force, tap_dir)

#### get_accelerometer_data()

#### get_time(precise=False)

#### lock_binding()

#### get_current_binding_info()

#### set_perimeter_event_actions(channel, action_notify=True, action_self_destruct=False)

#### set_digital_perimeter_lp_period(lp_period)

#### set_digital_perimeter_lp_max_bits(max_num_bits)

#### set_digital_perimeter_delays(min_delay_ns, max_delay_ns)

#### wait_for_perimeter_event(timeout_ms=- 1)

#### get_perimeter_detect_info()

#### clear_perimeter_detect_info()

#### get_cpu_temp()

#### get_rtc_drift()

#### get_batt_volt()

#### get_model_number()

#### get_firmware_version()

