---
title: Python API Documentation
description: This is the official documentation for the official zkapputils Python API library.
date: '2021-03-26T19:41:21'
lastmod: '2021-03-26T19:41:21'
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

## class zymkey.Zymkey()

The Zymkey class definition.

This class provides access to the Zymkey within Python.

#### led_on() Turn the LED on

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### Return type

* `None`

### led_off()

Turn the LED off.

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### Return type

* `None`

### led_flash(on_ms, off_ms=0, num_flashes=0)

Flash the LED.

#### Parameters

* `on_ms` (`int`) – The amount of time in milliseconds that the LED will be on for.

* `off_ms` (`int`) – The amount of time in milliseconds that the LED will be off for. If this parameter is set to 0 (default), the off time is the same as the on time.

* `num_flashes` (`int`) – The number of on/off cycles to execute. If this parameter is set to 0 (default), the LED flashes indefinitely.

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### Return type

* `None`

### get_random(num_bytes)

Get some random bytes.

#### Parameters

#### Returns

* An array of bytes returned by the random number generator.

#### Return type

* bytearray

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### create_random_file(file_path, num_bytes)

Deposit random data in a file.

#### Parameters

* `file_path` (`str`) – The absolute path name for the destination file.

* `num_bytes` (`int`) – The number of random bytes to get.

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### Return type

* `None`

### lock(src, dst=None, encryption_key='zymkey')

Lock up source (plaintext) data.

This methods encrupts and signs a block of data.

The Zymkey has two keys that can be used for locking/unlocking operations, designated as ‘shared’ and ‘one-way’:

1. The one-way key is meant to lock up data only on the local host computer. Data encrypted using this key cannot be exported and deciphered anywhere else.

2. The shared key is meant for publishing data to other sources that have the capability to generate the shared key, such as the Zymbit cloud server.

#### Parameters

* `src` (`Union`[`str`, `bytes`]) – The source (plaintext) data to lock.

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the source file. If bytes or bytesarray is passed, it is assumed to contain binary data.

* `dst` (`Optional`[`str`]) – The destination (ciphertext) of the locked data.

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the file where the destination data is meant to be written. Otherwise, if None is passed to the method (the default), the locked data is returned from the method as a bytearray.

* `encryption_key` (`str`) – This specifies which key will be used to lock the data. A value of ‘zymbit’ (default) specifies that the Zymkey will use the one-way key. A value of ‘cloud’ specifies that the shared key is used.

#### Returns

* The locked data is returned as a bytearray if no destination is specified when this method is called. Otherwise, None is returned.

#### Return type

* bytearray or None

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### unlock(src, dst=None, encryption_key='zymkey', raise_exception=True)

Unlock source (ciphertext) data.

This method verifies a locked object signature and decrypts the associated ciphertext data.

The Zymkey has two keys that can be used for locking/unlocking operations, designated as ‘shared’ and ‘one-way’:

1. The one-way key is meant to lock up data only on the local host computer. Data encrypted using this key cannot be exported and deciphered anywhere else.

2. The shared key is meant for publishing data to other sources that have the capability to generate the shared key, such as the Zymbit cloud server.

#### Parameters

* `src` (`Union`[`str`, `bytes`]) – The source (ciphertext) data to verify and decrypt.

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the source file. If bytes or bytesarray is passed, it is assumed to contain binary data.

* `dst` (`Optional`[`str`]) – The destination of the decrypted data (plaintext).

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the file where the destination data is meant to be written. Otherwise, if None is passed to the method (the default), the locked data is returned from the method as a bytearray.

* `encryption_key` (`str`) – This specifies which key will be used to lock the data. A value of ‘zymbit’ (default) specifies that the Zymkey will use the one-way key. A value of ‘cloud’ specifies that the shared key is used.

* `raise_exception` (`bool`) – Specifies if an exception should be raised if the signature verification of the locked object fails.

#### Returns

* The locked data is returned as a bytearray if no destination is specified when this method is called. Otherwise, None is returned.

#### Return type

* bytearray or None

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### sign(src, slot=0)

Generate a signature using the Zymkey’s ECDSA private key.

#### Parameters

* `src` (`str`) – The SHA256 digest of the data that will be used to generate the signature.

* `slot` (`int`) – The key slot used for signing.

#### Returns

* A bytearray of the signature.

#### Return type

* bytearray

### sign_digest(sha256, slot=0)

Generate a signature using the Zymkey’s ECDSA private key.

#### Parameters

* `sha256` (*_hashlib.HASH*) – A hashlib.sha256 instance representing the digest to be signed.

* `slot` (*int*) – This parameter specifies the key slot used for signing.

#### Returns

* The signature of the SHA-256 digest passed to this method.

#### Return type

* bytearray

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### verify(src, sig, raise_exception=True, pubkey_slot=0, foreign=False)

Verify data against a signature.

The public key is not specified in the parameter list to ensure that the public key that matches the Zymkey’s ECDSA private key is used.

#### Parameters

* `src` (*TYPE*) – The buffer to verify.

* `sig` (*TYPE*) – The signature to verify against.

* `raise_exception` (*bool*) – By default, when verification fails a VerificationError will be raised, unless this is set to False.

* `pubkey_slot` (*int*) – The key slot to use to verify the signature against. Defaults to the first key slot.

* `foreign` (*bool*) – If false, the normal key store is referenced. Otherwise, the foreign public key store is referenced. **Note:** This parameter is only applicable for model >= HSM6.

#### Returns

* Returns True for a good verification or False for a bad verification when the raise_exception parameters is False.

#### Return type

* bool

### verify_digest(sha256, sig, raise_exception=True, pubkey_slot=0, foreign=False)

Verify a signature using the Zymkey’s ECDSA public key.

The public key is not specified in the parameter list to ensure that the public key that matches the Zymkey’s ECDSA private key is used.

#### Parameters

* `sha256` (*TYPE*) – A hashlib.sha256 instance that will be used to generate the signature.

* `sig` (*TYPE*) – The signature to verify.

* `raise_exception` (*bool*) – By default, when verification fails, a VerificationError will be raised, unless this is set to False.

* `pubkey_slot` (*int*) – The key slot to use to verify the signature against. Defaults to the first key slot.

* `foreign` (*bool*) – If false, the normal key store is referenced. Otherwise, the foreign public key store is referenced. **Note:** This parameter is only applicable for model >= HSM6.

#### Returns

* Returns True for a good verification or False for a bad verification when raise_exception is False.

#### Return type

* bool

### ecdh(local_slot, peer_pubkey, kdf_func_type='none', salt=[], info=[], num_iterations=1, peer_pubkey_slot_is_foreign=True, derived_key_size=32)

Derive a key or a pre-master secret from an ECDH operation.

#### Parameters

* `local_slot` (*int*) – The local key slot to use.

* `peer_pubkey` (<em>Union[**List**[**bytes**]**, **int**]</em>) – The public key of the peer used to generate the pre-master secret against the private key located in local_slot. This parameter can be a list of bytes if the key is provided explicitly or an int if it refers to a key slot.

* `kdf_func_type` (*str*) – Specifies the KDF (Key Derivation Function) to use for the returned derived key. Valid values are:

    * ”none”: just return the pre-master secret. NOTE: The raw pre-master secret should not be used as a derived key should be put through a suitable KDF. Use ‘none’ when it is desired to use a different KDF than what is offered by this method.

    * ”rfc5869-sha256”: RFC5869 with SHA256

    * ”rfc5869-sha512”: RFC5869 with SHA512

    * ”pbkdf2-sha256”: PBKDF2 with SHA256

    * ”pbkdf2-sha512”: PBKDF2 with SHA512

* `salt` (<em>Optional[**List**[**bytes**]**]</em>) – A unique identifier for KDF. Ignored for kdf_func_type=’none’.

* `info` (<em>Optional[**List**[**bytes**]**]</em>) – A unique field for rfc5869. Ignore for other KDF types.

* `num_iterations` (*int*) – The number of iterations that the KDF should complete.

* `peer_pubkey_slot_is_foreign` (*bool*) – TODO_DESCRIPTION

* `derived_key_size` (*bool*) – TODO_DESCRIPTION

#### Returns

* The computed signature.

#### Return type

* bytearray

### create_ecdsa_public_key_file(filename, slot=0)

Create a file with the PEM-formatted ECDSA public key.

**[DEPRECATED]:** Use create_public_key_file instead.

This method is useful for generating a Certificate Signing Request.

#### Parameters

* `filename` (*str*) – The absolute file path where the public key will be stored in PEM format.

* `slot` (*int*) – The key slot for the public key.

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### Return type

* `None`

### create_public_key_file(filename, slot=0, foreign=False)

Create a file with the PEM-formatted public key.

This method is useful for generating a Certificate Signing Request.

#### Parameters

* `filename` (*str*) – The absolute file path where the public key will be stored in PEM format.

* `slot` (*int*) – The key slot for the public key.

* `foreign` (*bool*) – If True, designates the pubkey slot to come from the foreign keystore (model >= HSM6).

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### Return type

* `None`

### get_ecdsa_public_key(slot=0)

Retrieves the ECDSA public key as a binary bytearray.

**[DEPRECATED]:** Use get_public_key instead.

This method is used to retrieve the public key in binary form.

#### Parameters

#### Returns

* The public key in binary form.

#### Return type

* bytearray

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### get_public_key(slot=0, foreign=False)

Retrieves a public key as a binary bytearray.

This method is used to retrieve the public key in binary form.

#### Parameters

* `slot` (*int*) – The key slot for the public key. Zymkey and HSM4 have slots 0, 1, and 2.

* `foreign` (*bool*) – If True, designates the pubkey slot to come from the foreign keystore (model >= HSM6).

#### Returns

* The public key in binary form.

#### Return type

* bytearray

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### get_slot_alloc_list(foreign=False)

Get a list of the allocated slots in the key store (model >= HSM6).

This method gets a list of the allocated slots in the key store.

#### Parameters

#### Returns

* The allocation list and the maximum number of keys

#### Return type

* Tuple[list, int]

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### store_foreign_public_key(key_type, pubkey)

Stores a foreign public key on the Zymkey foreign keyring (model >= HSM6).

This method stores a foreign public key onto the Zymkey foreign public keyring.

#### Parameters

* `key_type` (*TYPE*) – The EC curve type that should be associated with the public key.

* `pubkey` (*TYPE*) – The public key binary data.

#### Returns

* The slot allocated to the key, or less than one for failure.

#### Return type

* int

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### disable_public_key_export(slot=0, foreign=False)

Disable exporting of a public key at a given slot (model >= HSM6).

This method permanently disables exporting a public key from a given slot.

#### Parameters

* `slot` – This parameter specifies the key slot for the public key.

* `foreign` – If true, the slot refers to the foreign public keyring.

### gen_key_pair(key_type)

Generate a new key pair (model >= HSM6).

This method generates a new key pair of the specified type.

#### Parameters

#### Returns

* the slot allocated to the key or less than one for failure.

#### Return type

* TYPE

### gen_ephemeral_key_pair(key_type)

Generate a new ephemeral key pair (model >= HSM6).

This method generates a new ephemeral key pair of the specified type, overwriting the previous ephemeral key pair.

#### Parameters

### remove_key(slot, foreign=False)

Remove a key at the designated slot (model >= HSM6).

This method removes a key at the designated slot in either the standard key store or the foreign public keyring.

#### Parameters

* `slot` – This parameter specifies the key slot for the key.

* `foreign` – If true, a public key in the foreign keyring will be deleted.

### invalidate_ephemeral_key(slot, foreign=False)

Invalidate the ephemeral key (model >= HSM6).

This method invalidates the ephemeral key, effectively removing it from service until a new key is generated.

#### Parameters

* `slot` (*int*) – The key slot for the key.

* `foreign` (*bool*) – If true, a public key in the foreign keyring will be deleted.

#### Returns

* TODO

#### Return type

* int

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### gen_wallet_master_seed(key_type, master_gen_key, wallet_name, bip39=False)

Generates a new master seed for creating a new BIP32 wallet (model >= HSM6).

This method generates a new master seed for creating a new BIP32 wallet.

#### Parameters

* `key_type` – This parameter indicates the EC curve type that should be associated with the new key pair.

* `master_gen_key` – The master generator key (bytearray) used in the derivation of the child key.

* `wallet_name` – The name of the wallet (string) that this master seed is attached to.

* `bip39` – If true, generate the seed per BIP39 and return the mnemonic string.

#### Returns

* a tuple with the slot and the BIP39 mnemonic if specified

#### Return type

* TYPE

### gen_wallet_child_key(parent_key_slot, index, hardened)

Generates a child key based on a parent key that is in a wallet (model >= HSM6).

This method generates a child key based on a parent key that is in a wallet.

#### Parameters

* `parent_key_slot` – This parameter specifies the parent key slot. This key must already be part of a wallet.

* `index` – This parameter represents the index for the child key derivation which becomes part of the node address.

* `hardened` – If true, the key is a hardened key.

#### Returns

* the allocated slot on success

#### Return type

* TYPE

### restore_wallet_master_seed_from_bip39_mnemonic(key_type, master_gen_key, wallet_name, bip39_mnemonic)

Restore a wallet’s master seed based on a BIP39 mnemonic string (model >= HSM6).

This method restores a wallet’s master seed based on a BIP39 mnemonic string and a master generator key. This method can be used in the process of wallet duplication.

#### Parameters

* `key_type` – This parameter indicates the EC curve type that should be associated with the new key pair.

* `master_gen_key` – The master generator key used in the derivation of the child key.

* `bip39_mnemonic` – The BIP39 mnemonic string.

#### Returns

* the allocated slot on success

#### Return type

* TYPE

### get_wallet_node_addr(slot)

Get a wallet node address from a key slot (model >= HSM6)

This method gets a wallet entry’s node address from its key slot assignment. The wallet name and master seed slot are also returned.

#### Parameters

#### Returns

* the node address, wallet name and master seed key slot.

#### Return type

* TYPE

### get_wallet_key_slot(node_addr, wallet_name=None, master_seed_slot=None)

Look up a wallet key slot number from a node address (model >= HSM6)

This method gets a wallet key slot number from its node address and wallet name or master seed key slot. Either the wallet name or the master seed slot must be present.

#### Parameters

* `node_addr` – The desired node address to look up

* `wallet_name` – The name of the wallet that the node address belongs to. Either this parameter or master_seed_slot must be specified or this function will fail.

* `master_seed_slot` – The master seed slot that the node address belongs to. Either this parameter or wallet_name must be specified or this function will fail.

#### Returns

* the key slot.

#### Return type

* TYPE

### set_i2c_address(address)

Set the i2c address of the Zymkey.

**Note:** This is only applicable to versions of the Zymkey with i2c.

This method should be called if the i2c address of the Zymkey is shared with another i2c device on the same i2c bus. The default i2c address for Zymkey units is 0x30. Currently, the address may be set in the ranges of 0x30 - 0x37 and 0x60 - 0x67.

After successful completion of this command, the Zymkey will reboot itself.

#### Parameters

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### Return type

* `None`

### set_tap_sensitivity(axis='all', pct=50.0)

Set the sensitivity of tap operations.

This method permits setting the sensitivity of the tap detection feature. Each axis may be individually configured or all at once.

#### Parameters

* `axis` – The axis to configure. Valid values include:

        1. ’all’: Configure all axes with the specified sensitivity value.

        2. ’x’ or ‘X’: Configure only the x-axis

        3. ’y’ or ‘Y’: Configure only the y-axis

        4. ’z’ or ‘Z’: Configure only the z-axis

* `pct` – The sensitivity expressed as percentage.

        1. 0% = Shut down: Tap detection should not occur along the axis.

        2. 100% = Maximum sensitivity.

### wait_for_tap(timeout_ms=- 1)

Wait for tap event

This function is called in order to wait for a tap event to occur. This function blocks the calling thread unless called with a timeout of zero.

#### Parameters

### get_accelerometer_data()

Get current accelerometer data and tap info.

This function gets the most recent accelerometer data in units of g forces plus the tap direction per axis.

#### Returns

* * *An array of accelerometer readings in units of g-force.*

  * *array index 0 = x axis* – 1 = y axis 2 = z axis

  * *A value of -1 indicates that the tap event was detected in a*

  * *negative direction for the axis, +1 for a positive direction*

  * *and 0 for stationary.*

### get_time(precise=False)

Get current GMT time

This function is called to get the time directly from a Zymkey’s Real Time Clock (RTC)

#### Parameters

### lock_binding()

Set soft binding lock.

This function locks the binding for a specific HSM. This API is only valid for HSM series products.

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### get_current_binding_info()

Get current binding info.

This function gets the current binding lock state as well as the current binding state. This API is only valid for devices in the HSM family.

#### Returns

* * *binding_is_locked* – Binary value which expresses the current binding lock state.

  * *is_bound* – Binary value which expresses the current bind state.

### set_perimeter_event_actions(channel, action_notify=True, action_self_destruct=False)

Set perimeter breach action

This function specifies the action to take when a perimeter breach event occurs. The possible actions are any combination of:

> > * Notify host

> * Zymkey self-destruct

#### Parameters

* `channel` – The channel (0 or 1) that the action flags will be applied to

* `action_notify` – Set a perimeter breach to notify. (default = True)

* `action_self_destruct` – Set a perimeter breach to self destruct. (default = False)

### set_digital_perimeter_lp_period(lp_period)

Set the digital perimeter detect low power period (model >= HSM6).

This function sets the digital perimeter detect low power period (microseconds).

#### Parameters

### set_digital_perimeter_lp_max_bits(max_num_bits)

Set the low power max number of bits (model >= HSM6).

This function sets the digital perimeter detect low power max number of bits

#### Parameters

### set_digital_perimeter_delays(min_delay_ns, max_delay_ns)

Set the digital perimeter detect delays (model >= HSM6).

This function sets the digital perimeter detect delay values.

#### Parameters

* `min_delay_ns` – The minimum delay in nanoseconds.

* `max_delay_ns` – The maximum delay in nanoseconds.

### wait_for_perimeter_event(timeout_ms=- 1)

Wait for a perimeter breach event to be detected

This function is called in order to wait for a perimeter breach event to occur. This function blocks the calling thread unless called with a timeout of zero.

#### Parameters

### get_perimeter_detect_info()

Get current perimeter detect info.

This function gets the timestamp of the first perimeter detect event for the given channel. The index corresponds to the channel specified in set_perimeter_event_actions.

#### Returns

* The array of timestamps for each channel for the first detected event in epoch seconds

#### Return type

* TYPE

### clear_perimeter_detect_info()

Clear perimeter detect info.

This function clears all perimeter detect info and rearms all perimeter detect channels

#### get_cpu_temp() Get current CPU temperature (model >= HSM6)

This function gets the current HSM CPU temperature.

#### Returns

* The CPU temperature in celsius as a float

#### Return type

* TYPE

### get_rtc_drift()

Get RTC drift (model >= HSM6).

This function gets the current RTC drift.

#### Returns

* The RTC drift as a float

#### Return type

* TYPE

### get_batt_volt()

Get current battery voltage (model >= HSM6).

This function gets the current battery voltage.

#### Returns

* The battery voltage as a float

#### Return type

* TYPE

### get_model_number()

Get Zymkey model number

This function gets the Zymkey model number.

#### Returns

* The model number as a string.

#### Return type

* TYPE

### get_firmware_version()

Get Zymkey firmware version

This function gets the Zymkey firmware version.

#### Returns

* The firmware version as a string.

#### Return type

* TYPE

### get_serial_number()

Get Zymkey serial number

This function gets the Zymkey serial number.

#### Returns

* The serial number as a string.

#### Return type

* TYPE

### set_battery_voltage_action(sleep=False, self_destruct=False)

Set battery voltage action. (model >= HSM6)

This function specifies the action to take when the battery voltage falls below the threshold set by set_battery_voltage_threshold. If this function is never called, do nothing is default. There are three actions:

> > * Do nothing

> * Go to sleep until battery is replaced

> * Self-destruct

With sleep and self_destruct set to False, it removes a previously set sleep or self_destruct action.

#### Parameters

* `sleep` – Set the sleep action.

* `self_destruct` – Set the self_destruct action.

### set_battery_voltage_threshold(threshold)

Sets the battery voltage threshold. (model >= HSM6)

This function sets the threshold at which if the battery voltage falls bellow, the action set by set_battery_voltage_action will be carried out. The recommended threshold is 2.3V. If this function isn’t called 2.5V is assumed by default.

#### Parameters

### set_cpu_temp_action(self_destruct=False)

Set HSM CPU temperature threshold action. (model >= HSM6)

This function specifies the action to take when the HSM CPU temperature falls below the threshold set by set_cpu_low_temp_threshold, or rises above the threshold set by set_cpu_high_temp_threshold. There are two actions to apply:

> > * Do nothing

> * Self-destruct

To remove a previously set self-destruct action, call this function with self_destruct=False.

#### Parameters

#### Returns

* 0 for success, less than 0 for failure.

#### Return type

* TYPE

### set_cpu_low_temp_threshold(threshold)

Sets the HSM CPU low temperature threshold. (model >= HSM6)

This function sets the threshold at which if the on-board HSM CPU’s tempreature falls below, the action set by set_cpu_temp_action will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold above the CPU’s ambient temperature. The recommended setting is no more than 20C. If this function is never called, -10 degrees celsius is assumed.

#### Parameters

### set_cpu_high_temp_threshold(threshold)

Sets the HSM CPU high temperature threshold. (model >= HSM6)

This function sets the threshold at which if the on-board HSM CPU’s tempreature rises above, the action set by set_cpu_temp_action will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold below the CPU’s ambient temperature. The recommended setting is no less than 40C. If this function is never called, 65 degrees celsius is assumed.

#### Parameters

# Undocumented Members

This section of the demo contains all members within the zymkey module, including members that have not yet been documented.

## class zymkey.Zymkey()

The Zymkey class definition.

This class provides access to the Zymkey within Python.

#### EPHEMERAL_KEY_SLOT( = -1)

#### led_on() Turn the LED on

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### Return type

* `None`

### led_off()

Turn the LED off.

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### Return type

* `None`

### led_flash(on_ms, off_ms=0, num_flashes=0)

Flash the LED.

#### Parameters

* `on_ms` (`int`) – The amount of time in milliseconds that the LED will be on for.

* `off_ms` (`int`) – The amount of time in milliseconds that the LED will be off for. If this parameter is set to 0 (default), the off time is the same as the on time.

* `num_flashes` (`int`) – The number of on/off cycles to execute. If this parameter is set to 0 (default), the LED flashes indefinitely.

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### Return type

* `None`

### get_random(num_bytes)

Get some random bytes.

#### Parameters

#### Returns

* An array of bytes returned by the random number generator.

#### Return type

* bytearray

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### create_random_file(file_path, num_bytes)

Deposit random data in a file.

#### Parameters

* `file_path` (`str`) – The absolute path name for the destination file.

* `num_bytes` (`int`) – The number of random bytes to get.

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### Return type

* `None`

### lock(src, dst=None, encryption_key='zymkey')

Lock up source (plaintext) data.

This methods encrupts and signs a block of data.

The Zymkey has two keys that can be used for locking/unlocking operations, designated as ‘shared’ and ‘one-way’:

1. The one-way key is meant to lock up data only on the local host computer. Data encrypted using this key cannot be exported and deciphered anywhere else.

2. The shared key is meant for publishing data to other sources that have the capability to generate the shared key, such as the Zymbit cloud server.

#### Parameters

* `src` (`Union`[`str`, `bytes`]) – The source (plaintext) data to lock.

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the source file. If bytes or bytesarray is passed, it is assumed to contain binary data.

* `dst` (`Optional`[`str`]) – The destination (ciphertext) of the locked data.

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the file where the destination data is meant to be written. Otherwise, if None is passed to the method (the default), the locked data is returned from the method as a bytearray.

* `encryption_key` (`str`) – This specifies which key will be used to lock the data. A value of ‘zymbit’ (default) specifies that the Zymkey will use the one-way key. A value of ‘cloud’ specifies that the shared key is used.

#### Returns

* The locked data is returned as a bytearray if no destination is specified when this method is called. Otherwise, None is returned.

#### Return type

* bytearray or None

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### unlock(src, dst=None, encryption_key='zymkey', raise_exception=True)

Unlock source (ciphertext) data.

This method verifies a locked object signature and decrypts the associated ciphertext data.

The Zymkey has two keys that can be used for locking/unlocking operations, designated as ‘shared’ and ‘one-way’:

1. The one-way key is meant to lock up data only on the local host computer. Data encrypted using this key cannot be exported and deciphered anywhere else.

2. The shared key is meant for publishing data to other sources that have the capability to generate the shared key, such as the Zymbit cloud server.

#### Parameters

* `src` (`Union`[`str`, `bytes`]) – The source (ciphertext) data to verify and decrypt.

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the source file. If bytes or bytesarray is passed, it is assumed to contain binary data.

* `dst` (`Optional`[`str`]) – The destination of the decrypted data (plaintext).

    If a str is passed to this method, the value is assumed to be the absolute path to the location of the file where the destination data is meant to be written. Otherwise, if None is passed to the method (the default), the locked data is returned from the method as a bytearray.

* `encryption_key` (`str`) – This specifies which key will be used to lock the data. A value of ‘zymbit’ (default) specifies that the Zymkey will use the one-way key. A value of ‘cloud’ specifies that the shared key is used.

* `raise_exception` (`bool`) – Specifies if an exception should be raised if the signature verification of the locked object fails.

#### Returns

* The locked data is returned as a bytearray if no destination is specified when this method is called. Otherwise, None is returned.

#### Return type

* bytearray or None

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### sign(src, slot=0)

Generate a signature using the Zymkey’s ECDSA private key.

#### Parameters

* `src` (`str`) – The SHA256 digest of the data that will be used to generate the signature.

* `slot` (`int`) – The key slot used for signing.

#### Returns

* A bytearray of the signature.

#### Return type

* bytearray

### sign_digest(sha256, slot=0)

Generate a signature using the Zymkey’s ECDSA private key.

#### Parameters

* `sha256` (*_hashlib.HASH*) – A hashlib.sha256 instance representing the digest to be signed.

* `slot` (*int*) – This parameter specifies the key slot used for signing.

#### Returns

* The signature of the SHA-256 digest passed to this method.

#### Return type

* bytearray

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### verify(src, sig, raise_exception=True, pubkey_slot=0, foreign=False)

Verify data against a signature.

The public key is not specified in the parameter list to ensure that the public key that matches the Zymkey’s ECDSA private key is used.

#### Parameters

* `src` (*TYPE*) – The buffer to verify.

* `sig` (*TYPE*) – The signature to verify against.

* `raise_exception` (*bool*) – By default, when verification fails a VerificationError will be raised, unless this is set to False.

* `pubkey_slot` (*int*) – The key slot to use to verify the signature against. Defaults to the first key slot.

* `foreign` (*bool*) – If false, the normal key store is referenced. Otherwise, the foreign public key store is referenced. **Note:** This parameter is only applicable for model >= HSM6.

#### Returns

* Returns True for a good verification or False for a bad verification when the raise_exception parameters is False.

#### Return type

* bool

### verify_digest(sha256, sig, raise_exception=True, pubkey_slot=0, foreign=False)

Verify a signature using the Zymkey’s ECDSA public key.

The public key is not specified in the parameter list to ensure that the public key that matches the Zymkey’s ECDSA private key is used.

#### Parameters

* `sha256` (*TYPE*) – A hashlib.sha256 instance that will be used to generate the signature.

* `sig` (*TYPE*) – The signature to verify.

* `raise_exception` (*bool*) – By default, when verification fails, a VerificationError will be raised, unless this is set to False.

* `pubkey_slot` (*int*) – The key slot to use to verify the signature against. Defaults to the first key slot.

* `foreign` (*bool*) – If false, the normal key store is referenced. Otherwise, the foreign public key store is referenced. **Note:** This parameter is only applicable for model >= HSM6.

#### Returns

* Returns True for a good verification or False for a bad verification when raise_exception is False.

#### Return type

* bool

### ecdh(local_slot, peer_pubkey, kdf_func_type='none', salt=[], info=[], num_iterations=1, peer_pubkey_slot_is_foreign=True, derived_key_size=32)

Derive a key or a pre-master secret from an ECDH operation.

#### Parameters

* `local_slot` (*int*) – The local key slot to use.

* `peer_pubkey` (<em>Union[**List**[**bytes**]**, **int**]</em>) – The public key of the peer used to generate the pre-master secret against the private key located in local_slot. This parameter can be a list of bytes if the key is provided explicitly or an int if it refers to a key slot.

* `kdf_func_type` (*str*) – Specifies the KDF (Key Derivation Function) to use for the returned derived key. Valid values are:

    * ”none”: just return the pre-master secret. NOTE: The raw pre-master secret should not be used as a derived key should be put through a suitable KDF. Use ‘none’ when it is desired to use a different KDF than what is offered by this method.

    * ”rfc5869-sha256”: RFC5869 with SHA256

    * ”rfc5869-sha512”: RFC5869 with SHA512

    * ”pbkdf2-sha256”: PBKDF2 with SHA256

    * ”pbkdf2-sha512”: PBKDF2 with SHA512

* `salt` (<em>Optional[**List**[**bytes**]**]</em>) – A unique identifier for KDF. Ignored for kdf_func_type=’none’.

* `info` (<em>Optional[**List**[**bytes**]**]</em>) – A unique field for rfc5869. Ignore for other KDF types.

* `num_iterations` (*int*) – The number of iterations that the KDF should complete.

* `peer_pubkey_slot_is_foreign` (*bool*) – TODO_DESCRIPTION

* `derived_key_size` (*bool*) – TODO_DESCRIPTION

#### Returns

* The computed signature.

#### Return type

* bytearray

### create_ecdsa_public_key_file(filename, slot=0)

Create a file with the PEM-formatted ECDSA public key.

**[DEPRECATED]:** Use create_public_key_file instead.

This method is useful for generating a Certificate Signing Request.

#### Parameters

* `filename` (*str*) – The absolute file path where the public key will be stored in PEM format.

* `slot` (*int*) – The key slot for the public key.

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### Return type

* `None`

### create_public_key_file(filename, slot=0, foreign=False)

Create a file with the PEM-formatted public key.

This method is useful for generating a Certificate Signing Request.

#### Parameters

* `filename` (*str*) – The absolute file path where the public key will be stored in PEM format.

* `slot` (*int*) – The key slot for the public key.

* `foreign` (*bool*) – If True, designates the pubkey slot to come from the foreign keystore (model >= HSM6).

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### Return type

* `None`

### get_ecdsa_public_key(slot=0)

Retrieves the ECDSA public key as a binary bytearray.

**[DEPRECATED]:** Use get_public_key instead.

This method is used to retrieve the public key in binary form.

#### Parameters

#### Returns

* The public key in binary form.

#### Return type

* bytearray

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### get_public_key(slot=0, foreign=False)

Retrieves a public key as a binary bytearray.

This method is used to retrieve the public key in binary form.

#### Parameters

* `slot` (*int*) – The key slot for the public key. Zymkey and HSM4 have slots 0, 1, and 2.

* `foreign` (*bool*) – If True, designates the pubkey slot to come from the foreign keystore (model >= HSM6).

#### Returns

* The public key in binary form.

#### Return type

* bytearray

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### get_slot_alloc_list(foreign=False)

Get a list of the allocated slots in the key store (model >= HSM6).

This method gets a list of the allocated slots in the key store.

#### Parameters

#### Returns

* The allocation list and the maximum number of keys

#### Return type

* Tuple[list, int]

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### store_foreign_public_key(key_type, pubkey)

Stores a foreign public key on the Zymkey foreign keyring (model >= HSM6).

This method stores a foreign public key onto the Zymkey foreign public keyring.

#### Parameters

* `key_type` (*TYPE*) – The EC curve type that should be associated with the public key.

* `pubkey` (*TYPE*) – The public key binary data.

#### Returns

* The slot allocated to the key, or less than one for failure.

#### Return type

* int

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### disable_public_key_export(slot=0, foreign=False)

Disable exporting of a public key at a given slot (model >= HSM6).

This method permanently disables exporting a public key from a given slot.

#### Parameters

* `slot` – This parameter specifies the key slot for the public key.

* `foreign` – If true, the slot refers to the foreign public keyring.

### gen_key_pair(key_type)

Generate a new key pair (model >= HSM6).

This method generates a new key pair of the specified type.

#### Parameters

#### Returns

* the slot allocated to the key or less than one for failure.

#### Return type

* TYPE

### gen_ephemeral_key_pair(key_type)

Generate a new ephemeral key pair (model >= HSM6).

This method generates a new ephemeral key pair of the specified type, overwriting the previous ephemeral key pair.

#### Parameters

### remove_key(slot, foreign=False)

Remove a key at the designated slot (model >= HSM6).

This method removes a key at the designated slot in either the standard key store or the foreign public keyring.

#### Parameters

* `slot` – This parameter specifies the key slot for the key.

* `foreign` – If true, a public key in the foreign keyring will be deleted.

### invalidate_ephemeral_key(slot, foreign=False)

Invalidate the ephemeral key (model >= HSM6).

This method invalidates the ephemeral key, effectively removing it from service until a new key is generated.

#### Parameters

* `slot` (*int*) – The key slot for the key.

* `foreign` (*bool*) – If true, a public key in the foreign keyring will be deleted.

#### Returns

* TODO

#### Return type

* int

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### gen_wallet_master_seed(key_type, master_gen_key, wallet_name, bip39=False)

Generates a new master seed for creating a new BIP32 wallet (model >= HSM6).

This method generates a new master seed for creating a new BIP32 wallet.

#### Parameters

* `key_type` – This parameter indicates the EC curve type that should be associated with the new key pair.

* `master_gen_key` – The master generator key (bytearray) used in the derivation of the child key.

* `wallet_name` – The name of the wallet (string) that this master seed is attached to.

* `bip39` – If true, generate the seed per BIP39 and return the mnemonic string.

#### Returns

* a tuple with the slot and the BIP39 mnemonic if specified

#### Return type

* TYPE

### gen_wallet_child_key(parent_key_slot, index, hardened)

Generates a child key based on a parent key that is in a wallet (model >= HSM6).

This method generates a child key based on a parent key that is in a wallet.

#### Parameters

* `parent_key_slot` – This parameter specifies the parent key slot. This key must already be part of a wallet.

* `index` – This parameter represents the index for the child key derivation which becomes part of the node address.

* `hardened` – If true, the key is a hardened key.

#### Returns

* the allocated slot on success

#### Return type

* TYPE

### restore_wallet_master_seed_from_bip39_mnemonic(key_type, master_gen_key, wallet_name, bip39_mnemonic)

Restore a wallet’s master seed based on a BIP39 mnemonic string (model >= HSM6).

This method restores a wallet’s master seed based on a BIP39 mnemonic string and a master generator key. This method can be used in the process of wallet duplication.

#### Parameters

* `key_type` – This parameter indicates the EC curve type that should be associated with the new key pair.

* `master_gen_key` – The master generator key used in the derivation of the child key.

* `bip39_mnemonic` – The BIP39 mnemonic string.

#### Returns

* the allocated slot on success

#### Return type

* TYPE

### get_wallet_node_addr(slot)

Get a wallet node address from a key slot (model >= HSM6)

This method gets a wallet entry’s node address from its key slot assignment. The wallet name and master seed slot are also returned.

#### Parameters

#### Returns

* the node address, wallet name and master seed key slot.

#### Return type

* TYPE

### get_wallet_key_slot(node_addr, wallet_name=None, master_seed_slot=None)

Look up a wallet key slot number from a node address (model >= HSM6)

This method gets a wallet key slot number from its node address and wallet name or master seed key slot. Either the wallet name or the master seed slot must be present.

#### Parameters

* `node_addr` – The desired node address to look up

* `wallet_name` – The name of the wallet that the node address belongs to. Either this parameter or master_seed_slot must be specified or this function will fail.

* `master_seed_slot` – The master seed slot that the node address belongs to. Either this parameter or wallet_name must be specified or this function will fail.

#### Returns

* the key slot.

#### Return type

* TYPE

### set_i2c_address(address)

Set the i2c address of the Zymkey.

**Note:** This is only applicable to versions of the Zymkey with i2c.

This method should be called if the i2c address of the Zymkey is shared with another i2c device on the same i2c bus. The default i2c address for Zymkey units is 0x30. Currently, the address may be set in the ranges of 0x30 - 0x37 and 0x60 - 0x67.

After successful completion of this command, the Zymkey will reboot itself.

#### Parameters

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

#### Return type

* `None`

### set_tap_sensitivity(axis='all', pct=50.0)

Set the sensitivity of tap operations.

This method permits setting the sensitivity of the tap detection feature. Each axis may be individually configured or all at once.

#### Parameters

* `axis` – The axis to configure. Valid values include:

        1. ’all’: Configure all axes with the specified sensitivity value.

        2. ’x’ or ‘X’: Configure only the x-axis

        3. ’y’ or ‘Y’: Configure only the y-axis

        4. ’z’ or ‘Z’: Configure only the z-axis

* `pct` – The sensitivity expressed as percentage.

        1. 0% = Shut down: Tap detection should not occur along the axis.

        2. 100% = Maximum sensitivity.

### wait_for_tap(timeout_ms=- 1)

Wait for tap event

This function is called in order to wait for a tap event to occur. This function blocks the calling thread unless called with a timeout of zero.

#### Parameters

## class ZymkeyAccelAxisData(g_force, tap_dir)



#### get_accelerometer_data() Get current accelerometer data and tap info

This function gets the most recent accelerometer data in units of g forces plus the tap direction per axis.

#### Returns

* * *An array of accelerometer readings in units of g-force.*

  * *array index 0 = x axis* – 1 = y axis 2 = z axis

  * *A value of -1 indicates that the tap event was detected in a*

  * *negative direction for the axis, +1 for a positive direction*

  * *and 0 for stationary.*

### get_time(precise=False)

Get current GMT time

This function is called to get the time directly from a Zymkey’s Real Time Clock (RTC)

#### Parameters

### lock_binding()

Set soft binding lock.

This function locks the binding for a specific HSM. This API is only valid for HSM series products.

#### Raises

* **AssertionError** – If ret is a bad return code from the Zymkey library function.

### get_current_binding_info()

Get current binding info.

This function gets the current binding lock state as well as the current binding state. This API is only valid for devices in the HSM family.

#### Returns

* * *binding_is_locked* – Binary value which expresses the current binding lock state.

  * *is_bound* – Binary value which expresses the current bind state.

### set_perimeter_event_actions(channel, action_notify=True, action_self_destruct=False)

Set perimeter breach action

This function specifies the action to take when a perimeter breach event occurs. The possible actions are any combination of:

> > * Notify host

> * Zymkey self-destruct

#### Parameters

* `channel` – The channel (0 or 1) that the action flags will be applied to

* `action_notify` – Set a perimeter breach to notify. (default = True)

* `action_self_destruct` – Set a perimeter breach to self destruct. (default = False)

### set_digital_perimeter_lp_period(lp_period)

Set the digital perimeter detect low power period (model >= HSM6).

This function sets the digital perimeter detect low power period (microseconds).

#### Parameters

### set_digital_perimeter_lp_max_bits(max_num_bits)

Set the low power max number of bits (model >= HSM6).

This function sets the digital perimeter detect low power max number of bits

#### Parameters

### set_digital_perimeter_delays(min_delay_ns, max_delay_ns)

Set the digital perimeter detect delays (model >= HSM6).

This function sets the digital perimeter detect delay values.

#### Parameters

* `min_delay_ns` – The minimum delay in nanoseconds.

* `max_delay_ns` – The maximum delay in nanoseconds.

### wait_for_perimeter_event(timeout_ms=- 1)

Wait for a perimeter breach event to be detected

This function is called in order to wait for a perimeter breach event to occur. This function blocks the calling thread unless called with a timeout of zero.

#### Parameters

### get_perimeter_detect_info()

Get current perimeter detect info.

This function gets the timestamp of the first perimeter detect event for the given channel. The index corresponds to the channel specified in set_perimeter_event_actions.

#### Returns

* The array of timestamps for each channel for the first detected event in epoch seconds

#### Return type

* TYPE

### clear_perimeter_detect_info()

Clear perimeter detect info.

This function clears all perimeter detect info and rearms all perimeter detect channels

#### get_cpu_temp() Get current CPU temperature (model >= HSM6)

This function gets the current HSM CPU temperature.

#### Returns

* The CPU temperature in celsius as a float

#### Return type

* TYPE

### get_rtc_drift()

Get RTC drift (model >= HSM6).

This function gets the current RTC drift.

#### Returns

* The RTC drift as a float

#### Return type

* TYPE

### get_batt_volt()

Get current battery voltage (model >= HSM6).

This function gets the current battery voltage.

#### Returns

* The battery voltage as a float

#### Return type

* TYPE

### get_model_number()

Get Zymkey model number

This function gets the Zymkey model number.

#### Returns

* The model number as a string.

#### Return type

* TYPE

### get_firmware_version()

Get Zymkey firmware version

This function gets the Zymkey firmware version.

#### Returns

* The firmware version as a string.

#### Return type

* TYPE

### get_serial_number()

Get Zymkey serial number

This function gets the Zymkey serial number.

#### Returns

* The serial number as a string.

#### Return type

* TYPE

### set_battery_voltage_action(sleep=False, self_destruct=False)

Set battery voltage action. (model >= HSM6)

This function specifies the action to take when the battery voltage falls below the threshold set by set_battery_voltage_threshold. If this function is never called, do nothing is default. There are three actions:

> > * Do nothing

> * Go to sleep until battery is replaced

> * Self-destruct

With sleep and self_destruct set to False, it removes a previously set sleep or self_destruct action.

#### Parameters

* `sleep` – Set the sleep action.

* `self_destruct` – Set the self_destruct action.

### set_battery_voltage_threshold(threshold)

Sets the battery voltage threshold. (model >= HSM6)

This function sets the threshold at which if the battery voltage falls bellow, the action set by set_battery_voltage_action will be carried out. The recommended threshold is 2.3V. If this function isn’t called 2.5V is assumed by default.

#### Parameters

### set_cpu_temp_action(self_destruct=False)

Set HSM CPU temperature threshold action. (model >= HSM6)

This function specifies the action to take when the HSM CPU temperature falls below the threshold set by set_cpu_low_temp_threshold, or rises above the threshold set by set_cpu_high_temp_threshold. There are two actions to apply:

> > * Do nothing

> * Self-destruct

To remove a previously set self-destruct action, call this function with self_destruct=False.

#### Parameters

#### Returns

* 0 for success, less than 0 for failure.

#### Return type

* TYPE

### set_cpu_low_temp_threshold(threshold)

Sets the HSM CPU low temperature threshold. (model >= HSM6)

This function sets the threshold at which if the on-board HSM CPU’s tempreature falls below, the action set by set_cpu_temp_action will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold above the CPU’s ambient temperature. The recommended setting is no more than 20C. If this function is never called, -10 degrees celsius is assumed.

#### Parameters

### set_cpu_high_temp_threshold(threshold)

Sets the HSM CPU high temperature threshold. (model >= HSM6)

This function sets the threshold at which if the on-board HSM CPU’s tempreature rises above, the action set by set_cpu_temp_action will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold below the CPU’s ambient temperature. The recommended setting is no less than 40C. If this function is never called, 65 degrees celsius is assumed.

