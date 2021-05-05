---
title: Python API Documentation
description: Python interface module to Zymkey Application Utilities Library.
lastmod:
draft: false
images: []
type: docs
api_docs: true
layout: single
weight: 0
---

<div class="api-docs">
    <h2>Introduction</h2>
    <p>Python interface module to Zymkey Application Utilities Library.</p>
    <p>This file contains a Python class which interfaces to the the Zymkey Application Utilities library. This class facilitates writing user space applications which use Zymkey to perform cryptographic operations, such as:</p>
    <ol>
        <li>Signing of payloads using ECDSA.</li>
        <li>Verification of payloads that were signed using Zymkey.</li>
        <li>Exporting the public key that matches Zymkey&#8217;s private key.</li>
        <li>&#8220;Locking&#8221; and &#8220;unlocking&#8221; data objects.</li>
        <li>Generating random data.</li>
    </ol>
    <p>Additionally, there are methods for changing the i2c address (i2c units only), setting tap sensitivity, and controlling the LED.</p>
</div>
<div class="api-docs">
    <h2>Classes</h2>
    <div class="class">
        <h3 class="signature">
            <span class="annotation">class</span>
            <span class="addname">zymkey.</span>
            <span class="name">Zymkey</span>
        </h3>
        <div class="body">
            <p>The Zymkey class definition.</p>
            <p>This class provides access to the Zymkey within Python.</p>
            <div class="attribute">
                <h4 class="signature">
                    <span class="name">EPHEMERAL_KEY_SLOT</span>
                    <span class="annotation"> = -1</span>
                </h4>
                <div class="body">
                    </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">__init__</span>
                    <span class="param-list"></span>
                </h4>
                <div class="body">
                    <div class="description"></div>
                    <p>The class initialization opens and stores an instance of a Zymkey context.</p>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">__del__</span>
                    <span class="param-list"></span>
                </h4>
                <div class="body">
                    <div class="description"></div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">led_on</span>
                    <span class="param-list"></span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Turn the LED on.</p>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">led_off</span>
                    <span class="param-list"></span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Turn the LED off.</p>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">led_flash</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">on_ms</span>
                        </span>
                        <span class="param">
                            <span class="name">off_ms</span>
                            <span class="default-val">0</span>
                        </span>
                        <span class="param">
                            <span class="name">num_flashes</span>
                            <span class="default-val">0</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Flash the LED.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">on_ms</span>
                                <span class="type">int</span>
                                <span class="description">The amount of time in milliseconds that the LED will be on for.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">off_ms</span>
                                <span class="type">int</span>
                                <span class="description">The amount of time in milliseconds that the LED will be off for. If
                                                this parameter is set to 0 (default), the off time is the same as
                                                the on time.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">num_flashes</span>
                                <span class="type">int</span>
                                <span class="description">The number of on/off cycles to execute. If this parameter is set
                                                to 0 (default), the LED flashes indefinitely.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_random</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">num_bytes</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Get some random bytes.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">num_bytes</span>
                                <span class="type">int</span>
                                <span class="description">The number of random bytes to get.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">bytearray</span>
                        <span class="return_value">An array of bytes returned by the random number generator.</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">create_random_file</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">file_path</span>
                        </span>
                        <span class="param">
                            <span class="name">num_bytes</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Deposit random data in a file.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">file_path</span>
                                <span class="type">str</span>
                                <span class="description">The absolute path name for the destination file.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">num_bytes</span>
                                <span class="type">int</span>
                                <span class="description">The number of random bytes to get.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">lock</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">src</span>
                        </span>
                        <span class="param">
                            <span class="name">dst</span>
                            <span class="default-val">None</span>
                        </span>
                        <span class="param">
                            <span class="name">encryption_key</span>
                            <span class="default-val">"zymkey"</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Lock up source (plaintext) data.</p>
                        <p>This methods encrupts and signs a block of data.</p>
                        <p>The Zymkey has two keys that can be used for locking/unlocking operations, designated as &#8220;shared&#8221; and &#8220;one-way&#8221;:</p>
                        <ol>
                            <li>The one-way key is meant to lock up data only on the local host computer. Data encrypted using this key cannot be exported and deciphered anywhere else.</li>
                            <li>The shared key is meant for publishing data to other sources that have the capability to generate the shared key, such as the Zymbit cloud server.</li>
                        </ol>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">src</span>
                                <span class="type">Union[str, bytes]</span>
                                <span class="description">
                                    <p>The source (plaintext) data to lock.</p>
                                    <p>If a  <span classes="title-reference">str</span> is passed to this method, the value is assumed to be
                                                    the absolute path to the location of the source file. If <span classes="title-reference">bytes</span>
                                                    or <span classes="title-reference">bytesarray</span> is passed, it is assumed to contain binary data. </p>
                                </span>
                            </li>
                            <li class="param-item">
                                <span class="name">dst</span>
                                <span class="type">Optional[str]</span>
                                <span class="description">
                                    <p>The destination (ciphertext) of the locked data.</p>
                                    <p>If a  <span classes="title-reference">str</span> is passed to this method, the value is assumed to be
                                                    the absolute path to the location of the file where the destination
                                                    data is meant to be written. Otherwise, if <span classes="title-reference">None</span> is passed to the
                                                    method (the default), the locked data is returned from the method
                                                    as a bytearray. </p>
                                </span>
                            </li>
                            <li class="param-item">
                                <span class="name">encryption_key</span>
                                <span class="type">str</span>
                                <span class="description">This specifies which key will be used to lock the data. A value of
                                                &#8220;zymbit&#8221; (default) specifies that the Zymkey will use the one-way
                                                key. A value of &#8220;cloud&#8221; specifies that the shared key is used.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">bytearray or None</span>
                        <span class="return_value">The locked data is returned as a bytearray if no destination is
                                        specified when this method is called. Otherwise, <p>
                                <span classes="title-reference">None</span> is returned. </p>
                        </span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">unlock</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">src</span>
                        </span>
                        <span class="param">
                            <span class="name">dst</span>
                            <span class="default-val">None</span>
                        </span>
                        <span class="param">
                            <span class="name">encryption_key</span>
                            <span class="default-val">"zymkey"</span>
                        </span>
                        <span class="param">
                            <span class="name">raise_exception</span>
                            <span class="default-val">True</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Unlock source (ciphertext) data.</p>
                        <p>This method verifies a locked object signature and decrypts the associated ciphertext data.</p>
                        <p>The Zymkey has two keys that can be used for locking/unlocking operations, designated as &#8220;shared&#8221; and &#8220;one-way&#8221;:</p>
                        <ol>
                            <li>The one-way key is meant to lock up data only on the local host computer. Data encrypted using this key cannot be exported and deciphered anywhere else.</li>
                            <li>The shared key is meant for publishing data to other sources that have the capability to generate the shared key, such as the Zymbit cloud server.</li>
                        </ol>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">src</span>
                                <span class="type">Union[str, bytes]</span>
                                <span class="description">
                                    <p>The source (ciphertext) data to verify and decrypt.</p>
                                    <p>If a  <span classes="title-reference">str</span> is passed to this method, the value is assumed to be
                                                    the absolute path to the location of the source file. If <span classes="title-reference">bytes</span>
                                                    or <span classes="title-reference">bytesarray</span> is passed, it is assumed to contain binary data. </p>
                                </span>
                            </li>
                            <li class="param-item">
                                <span class="name">dst</span>
                                <span class="type">Optional[str]</span>
                                <span class="description">
                                    <p>The destination of the decrypted data (plaintext).</p>
                                    <p>If a  <span classes="title-reference">str</span> is passed to this method, the value is assumed to be
                                                    the absolute path to the location of the file where the destination
                                                    data is meant to be written. Otherwise, if <span classes="title-reference">None</span> is passed to the
                                                    method (the default), the locked data is returned from the method
                                                    as a bytearray. </p>
                                </span>
                            </li>
                            <li class="param-item">
                                <span class="name">encryption_key</span>
                                <span class="type">str</span>
                                <span class="description">This specifies which key will be used to lock the data. A value of
                                                &#8220;zymbit&#8221; (default) specifies that the Zymkey will use the one-way
                                                key. A value of &#8220;cloud&#8221; specifies that the shared key is used.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">raise_exception</span>
                                <span class="type">bool</span>
                                <span class="description">Specifies if an exception should be raised if the signature verification
                                                of the locked object fails.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">bytearray or None</span>
                        <span class="return_value">The locked data is returned as a bytearray if no destination is
                                        specified when this method is called. Otherwise, <p>
                                <span classes="title-reference">None</span> is returned. </p>
                        </span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">sign</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">src</span>
                        </span>
                        <span class="param">
                            <span class="name">slot</span>
                            <span class="default-val">0</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Generate a signature using the Zymkey&#8217;s ECDSA private key.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">src</span>
                                <span class="type">str</span>
                                <span class="description">The SHA256 digest of the data that will be used to generate the signature.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">slot</span>
                                <span class="type">int</span>
                                <span class="description">The key slot used for signing.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">bytearray</span>
                        <span class="return_value">A bytearray of the signature.</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">sign_digest</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">sha256</span>
                        </span>
                        <span class="param">
                            <span class="name">slot</span>
                            <span class="default-val">0</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Generate a signature using the Zymkey&#8217;s ECDSA private key.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">sha256</span>
                                <span class="type">_hashlib.HASH</span>
                                <span class="description">A hashlib.sha256 instance representing the digest to be signed.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">slot</span>
                                <span class="type">int</span>
                                <span class="description">This parameter specifies the key slot used for signing.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">bytearray</span>
                        <span class="return_value">The signature of the SHA-256 digest passed to this method.</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">verify</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">src</span>
                        </span>
                        <span class="param">
                            <span class="name">sig</span>
                        </span>
                        <span class="param">
                            <span class="name">raise_exception</span>
                            <span class="default-val">True</span>
                        </span>
                        <span class="param">
                            <span class="name">pubkey_slot</span>
                            <span class="default-val">0</span>
                        </span>
                        <span class="param">
                            <span class="name">foreign</span>
                            <span class="default-val">False</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Verify data against a signature.</p>
                        <p>The public key is not specified in the parameter list to ensure that the public key that matches the Zymkey&#8217;s ECDSA private key is used.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">src</span>
                                <span class="type">TYPE</span>
                                <span class="description">The buffer to verify.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">sig</span>
                                <span class="type">TYPE</span>
                                <span class="description">The signature to verify against.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">raise_exception</span>
                                <span class="type">bool</span>
                                <span class="description">By default, when verification fails a <span classes="title-reference">VerificationError</span> will be
                                                raised, unless this is set to <span classes="title-reference">False</span>. </span>
                            </li>
                            <li class="param-item">
                                <span class="name">pubkey_slot</span>
                                <span class="type">int</span>
                                <span class="description">The key slot to use to verify the signature against. Defaults to the
                                                first key slot.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">foreign</span>
                                <span class="type">bool</span>
                                <span class="description">If false, the normal key store is referenced. Otherwise, the foreign
                                                public key store is referenced.<strong>Note:</strong> This parameter is only applicable for model &gt;= HSM6. </span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">bool</span>
                        <span class="return_value">Returns <p>
                                <span classes="title-reference">True</span> for a good verification or <span classes="title-reference">False</span> for a bad
                                        verification when the <span classes="title-reference">raise_exception</span> parameters is <span classes="title-reference">False</span>. </p>
                        </span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">verify_digest</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">sha256</span>
                        </span>
                        <span class="param">
                            <span class="name">sig</span>
                        </span>
                        <span class="param">
                            <span class="name">raise_exception</span>
                            <span class="default-val">True</span>
                        </span>
                        <span class="param">
                            <span class="name">pubkey_slot</span>
                            <span class="default-val">0</span>
                        </span>
                        <span class="param">
                            <span class="name">foreign</span>
                            <span class="default-val">False</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Verify a signature using the Zymkey&#8217;s ECDSA public key.</p>
                        <p>The public key is not specified in the parameter list to ensure that the public key that matches the Zymkey&#8217;s ECDSA private key is used.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">sha256</span>
                                <span class="type">TYPE</span>
                                <span class="description">A hashlib.sha256 instance that will be used to generate the signature.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">sig</span>
                                <span class="type">TYPE</span>
                                <span class="description">The signature to verify.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">raise_exception</span>
                                <span class="type">bool</span>
                                <span class="description">By default, when verification fails, a <span classes="title-reference">VerificationError</span> will be
                                                raised, unless this is set to <span classes="title-reference">False</span>. </span>
                            </li>
                            <li class="param-item">
                                <span class="name">pubkey_slot</span>
                                <span class="type">int</span>
                                <span class="description">The key slot to use to verify the signature against. Defaults to
                                                the first key slot.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">foreign</span>
                                <span class="type">bool</span>
                                <span class="description">If false, the normal key store is referenced. Otherwise, the foreign
                                                public key store is referenced.<strong>Note:</strong> This parameter is only applicable for model &gt;= HSM6. </span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">bool</span>
                        <span class="return_value">Returns <p>
                                <span classes="title-reference">True</span> for a good verification or <span classes="title-reference">False</span> for a bad
                                        verification when <span classes="title-reference">raise_exception</span> is <span classes="title-reference">False</span>. </p>
                        </span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">ecdh</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">local_slot</span>
                        </span>
                        <span class="param">
                            <span class="name">peer_pubkey</span>
                        </span>
                        <span class="param">
                            <span class="name">kdf_func_type</span>
                            <span class="default-val">"none"</span>
                        </span>
                        <span class="param">
                            <span class="name">salt</span>
                            <span class="default-val">[]</span>
                        </span>
                        <span class="param">
                            <span class="name">info</span>
                            <span class="default-val">[]</span>
                        </span>
                        <span class="param">
                            <span class="name">num_iterations</span>
                            <span class="default-val">1</span>
                        </span>
                        <span class="param">
                            <span class="name">peer_pubkey_slot_is_foreign</span>
                            <span class="default-val">True</span>
                        </span>
                        <span class="param">
                            <span class="name">derived_key_size</span>
                            <span class="default-val">32</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Derive a key or a pre-master secret from an ECDH operation. (model >= HSM6).</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">local_slot</span>
                                <span class="type">int</span>
                                <span class="description">The local key slot to use.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">peer_pubkey</span>
                                <span class="type">Union[List[bytes], int]</span>
                                <span class="description">The public key of the peer used to generate the pre-master secret
                                                against the private key located in <span classes="title-reference">local_slot</span>. This parameter can
                                                be a list of <span classes="title-reference">bytes</span> if the key is provided explicitly or an <span classes="title-reference">int</span>
                                                if it refers to a key slot. </span>
                            </li>
                            <li class="param-item">
                                <span class="name">kdf_func_type</span>
                                <span class="type">str</span>
                                <span class="description">
                                    <p>Specifies the KDF (Key Derivation Function) to use for the returned derived key. Valid values are:</p>
                                    <ul>
                                        <li>
                                            <span classes="title-reference">&#8220;none&#8221;</span>: just return the pre-master secret. NOTE: The raw pre-master
                                                            secret should not be used as a derived key should be put through a
                                                            suitable KDF. Use &#8220;none&#8221; when it is desired to use a different KDF
                                                            than what is offered by this method. </li>
                                        <li>
                                            <span classes="title-reference">&#8220;rfc5869-sha256&#8221;</span>: RFC5869 with SHA256 </li>
                                        <li>
                                            <span classes="title-reference">&#8220;rfc5869-sha512&#8221;</span>: RFC5869 with SHA512 </li>
                                        <li>
                                            <span classes="title-reference">&#8220;pbkdf2-sha256&#8221;</span>: PBKDF2 with SHA256 </li>
                                        <li>
                                            <span classes="title-reference">&#8220;pbkdf2-sha512&#8221;</span>: PBKDF2 with SHA512 </li>
                                    </ul>
                                </span>
                            </li>
                            <li class="param-item">
                                <span class="name">salt</span>
                                <span class="type">Optional[List[bytes]]</span>
                                <span class="description">A unique identifier for KDF. Ignored for <span classes="title-reference">kdf_func_type=&#8217;none&#8217;</span>. </span>
                            </li>
                            <li class="param-item">
                                <span class="name">info</span>
                                <span class="type">Optional[List[bytes]]</span>
                                <span class="description">A unique field for rfc5869. Ignore for other KDF types.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">num_iterations</span>
                                <span class="type">int</span>
                                <span class="description">The number of iterations that the KDF should complete.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">peer_pubkey_slot_is_foreign</span>
                                <span class="type">bool</span>
                                <span class="description">TODO_DESCRIPTION</span>
                            </li>
                            <li class="param-item">
                                <span class="name">derived_key_size</span>
                                <span class="type">bool</span>
                                <span class="description">TODO_DESCRIPTION</span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">bytearray</span>
                        <span class="return_value">The computed signature.</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">create_ecdsa_public_key_file</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">filename</span>
                        </span>
                        <span class="param">
                            <span class="name">slot</span>
                            <span class="default-val">0</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Create a file with the PEM-formatted ECDSA public key.</p>
                        <p>
                            <strong>[DEPRECATED]:</strong> Use <span classes="title-reference">create_public_key_file</span> instead. </p>
                        <p>This method is useful for generating a Certificate Signing Request.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">filename</span>
                                <span class="type">str</span>
                                <span class="description">The absolute file path where the public key will be stored in PEM format.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">slot</span>
                                <span class="type">int</span>
                                <span class="description">The key slot for the public key.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">create_public_key_file</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">filename</span>
                        </span>
                        <span class="param">
                            <span class="name">slot</span>
                            <span class="default-val">0</span>
                        </span>
                        <span class="param">
                            <span class="name">foreign</span>
                            <span class="default-val">False</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Create a file with the PEM-formatted public key.</p>
                        <p>This method is useful for generating a Certificate Signing Request.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">filename</span>
                                <span class="type">str</span>
                                <span class="description">The absolute file path where the public key will be stored in PEM format.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">slot</span>
                                <span class="type">int</span>
                                <span class="description">The key slot for the public key.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">foreign</span>
                                <span class="type">bool</span>
                                <span class="description">If <span classes="title-reference">True</span>, designates the pubkey slot to come from the foreign keystore (model &gt;= HSM6). </span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_ecdsa_public_key</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">slot</span>
                            <span class="default-val">0</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Retrieves the ECDSA public key as a binary bytearray.</p>
                        <p>
                            <strong>[DEPRECATED]:</strong> Use <span classes="title-reference">get_public_key</span> instead. </p>
                        <p>This method is used to retrieve the public key in binary form.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">slot</span>
                                <span class="type">int</span>
                                <span class="description">The key slot for the public key.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">bytearray</span>
                        <span class="return_value">The public key in binary form.</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_public_key</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">slot</span>
                            <span class="default-val">0</span>
                        </span>
                        <span class="param">
                            <span class="name">foreign</span>
                            <span class="default-val">False</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Retrieves a public key as a binary bytearray.</p>
                        <p>This method is used to retrieve the public key in binary form.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">slot</span>
                                <span class="type">int</span>
                                <span class="description">The key slot for the public key. Zymkey and HSM4 have slots 0, 1, and 2.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">foreign</span>
                                <span class="type">bool</span>
                                <span class="description">If <span classes="title-reference">True</span>, designates the pubkey slot to come from the foreign keystore (model &gt;= HSM6). </span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">bytearray</span>
                        <span class="return_value">The public key in binary form.</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_slot_alloc_list</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">foreign</span>
                            <span class="default-val">False</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Get a list of the allocated slots in the key store (model &gt;= HSM6).</p>
                        <p>This method gets a list of the allocated slots in the key store.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">foreign</span>
                                <span class="type">bool</span>
                                <span class="description">If <span classes="title-reference">True</span>, designates the pubkey slot to come from the foreign keystore (model &gt;= HSM6). </span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">Tuple[list, int]</span>
                        <span class="return_value">The allocation list and the maximum number of keys</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">store_foreign_public_key</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">key_type</span>
                        </span>
                        <span class="param">
                            <span class="name">pubkey</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Stores a foreign public key on the Zymkey foreign keyring (model &gt;= HSM6).</p>
                        <p>This method stores a foreign public key onto the Zymkey foreign public keyring.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">key_type</span>
                                <span class="type">TYPE</span>
                                <span class="description">The EC curve type that should be associated with the public key.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">pubkey</span>
                                <span class="type">TYPE</span>
                                <span class="description">The public key binary data.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">int</span>
                        <span class="return_value">The slot allocated to the key, or less than one for failure.</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">disable_public_key_export</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">slot</span>
                            <span class="default-val">0</span>
                        </span>
                        <span class="param">
                            <span class="name">foreign</span>
                            <span class="default-val">False</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Disable exporting of a public key at a given slot (model &gt;= HSM6).</p>
                        <p>This method permanently disables exporting a public key from a given slot.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">slot</span>
                                <span class="type"></span>
                                <span class="description">This parameter specifies the key slot for the public key.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">foreign</span>
                                <span class="type"></span>
                                <span class="description">If true, the slot refers to the foreign public keyring.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">gen_key_pair</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">key_type</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Generate a new key pair (model &gt;= HSM6).</p>
                        <p>This method generates a new key pair of the specified type.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">key_type</span>
                                <span class="type"></span>
                                <span class="description">This parameter indicates the EC curve type that should be associated with the new key pair.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">TYPE</span>
                        <span class="return_value">the slot allocated to the key or less than one for failure.</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">gen_ephemeral_key_pair</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">key_type</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Generate a new ephemeral key pair (model &gt;= HSM6).</p>
                        <p>This method generates a new ephemeral key pair of the specified type, overwriting the previous ephemeral key pair.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">key_type</span>
                                <span class="type"></span>
                                <span class="description">This parameter indicates the EC curve type that should be associated with the new key pair.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">remove_key</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">slot</span>
                        </span>
                        <span class="param">
                            <span class="name">foreign</span>
                            <span class="default-val">False</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Remove a key at the designated slot (model &gt;= HSM6).</p>
                        <p>This method removes a key at the designated slot in either the standard key store or the foreign public keyring.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">slot</span>
                                <span class="type"></span>
                                <span class="description">This parameter specifies the key slot for the key.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">foreign</span>
                                <span class="type"></span>
                                <span class="description">If true, a public key in the foreign keyring will be deleted.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">invalidate_ephemeral_key</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">slot</span>
                        </span>
                        <span class="param">
                            <span class="name">foreign</span>
                            <span class="default-val">False</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Invalidate the ephemeral key (model &gt;= HSM6).</p>
                        <p>This method invalidates the ephemeral key, effectively removing it from service until a new key is generated.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">slot</span>
                                <span class="type">int</span>
                                <span class="description">The key slot for the key.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">foreign</span>
                                <span class="type">bool</span>
                                <span class="description">If true, a public key in the foreign keyring will be deleted.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">int</span>
                        <span class="return_value">TODO</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">gen_wallet_master_seed</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">key_type</span>
                        </span>
                        <span class="param">
                            <span class="name">master_gen_key</span>
                        </span>
                        <span class="param">
                            <span class="name">wallet_name</span>
                        </span>
                        <span class="param">
                            <span class="name">bip39</span>
                            <span class="default-val">False</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Generates a new master seed for creating a new BIP32 wallet (model &gt;= HSM6).</p>
                        <p>This method generates a new master seed for creating a new BIP32 wallet.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">key_type</span>
                                <span class="type"></span>
                                <span class="description">This parameter indicates the EC curve type that should be associated with the new key pair.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">master_gen_key</span>
                                <span class="type"></span>
                                <span class="description">The master generator key (bytearray) used in the derivation of the child key.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">wallet_name</span>
                                <span class="type"></span>
                                <span class="description">The name of the wallet (string) that this master seed is attached to.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">bip39</span>
                                <span class="type"></span>
                                <span class="description">If true, generate the seed per BIP39 and return the mnemonic string.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">TYPE</span>
                        <span class="return_value">a tuple with the slot and the BIP39 mnemonic if specified</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">gen_wallet_child_key</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">parent_key_slot</span>
                        </span>
                        <span class="param">
                            <span class="name">index</span>
                        </span>
                        <span class="param">
                            <span class="name">hardened</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Generates a child key based on a parent key that is in a wallet (model &gt;= HSM6).</p>
                        <p>This method generates a child key based on a parent key that is in a wallet.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">parent_key_slot</span>
                                <span class="type"></span>
                                <span class="description">This parameter specifies the parent key slot. This key must already be part of a wallet.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">index</span>
                                <span class="type"></span>
                                <span class="description">This parameter represents the index for the child key derivation which becomes part of the node address.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">hardened</span>
                                <span class="type"></span>
                                <span class="description">If true, the key is a hardened key.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">TYPE</span>
                        <span class="return_value">the allocated slot on success</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">restore_wallet_master_seed_from_bip39_mnemonic</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">key_type</span>
                        </span>
                        <span class="param">
                            <span class="name">master_gen_key</span>
                        </span>
                        <span class="param">
                            <span class="name">wallet_name</span>
                        </span>
                        <span class="param">
                            <span class="name">bip39_mnemonic</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Restore a wallet&#8217;s master seed based on a BIP39 mnemonic string (model &gt;= HSM6).</p>
                        <p>This method restores a wallet&#8217;s master seed based on a BIP39 mnemonic string and a master generator key. This method can be used in the process of wallet duplication.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">key_type</span>
                                <span class="type"></span>
                                <span class="description">This parameter indicates the EC curve type that should be associated with the new key pair.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">master_gen_key</span>
                                <span class="type"></span>
                                <span class="description">The master generator key used in the derivation of the child key.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">bip39_mnemonic</span>
                                <span class="type"></span>
                                <span class="description">The BIP39 mnemonic string.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">TYPE</span>
                        <span class="return_value">the allocated slot on success</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_wallet_node_addr</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">slot</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Get a wallet node address from a key slot (model &gt;= HSM6).</p>
                        <p>This method gets a wallet entry&#8217;s node address from its key slot assignment. The wallet name and master seed slot are also returned.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">slot</span>
                                <span class="type"></span>
                                <span class="description">The key slot assignment.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">TYPE</span>
                        <span class="return_value">the node address, wallet name and master seed key slot.</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_wallet_key_slot</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">node_addr</span>
                        </span>
                        <span class="param">
                            <span class="name">wallet_name</span>
                            <span class="default-val">None</span>
                        </span>
                        <span class="param">
                            <span class="name">master_seed_slot</span>
                            <span class="default-val">None</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Look up a wallet key slot number from a node address (model &gt;= HSM6).</p>
                        <p>This method gets a wallet key slot number from its node address and wallet name or master seed key slot. Either the wallet name or the master seed slot must be present.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">node_addr</span>
                                <span class="type"></span>
                                <span class="description">The desired node address to look up</span>
                            </li>
                            <li class="param-item">
                                <span class="name">wallet_name</span>
                                <span class="type"></span>
                                <span class="description">The name of the wallet that the node address belongs to. Either this parameter or master_seed_slot must be specified or this function will fail.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">master_seed_slot</span>
                                <span class="type"></span>
                                <span class="description">The master seed slot that the node address belongs to. Either this parameter or wallet_name must be specified or this function will fail.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">TYPE</span>
                        <span class="return_value">the key slot.</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">set_i2c_address</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">address</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Set the i2c address of the Zymkey.</p>
                        <p>
                            <strong>Note:</strong> This is only applicable to versions of the Zymkey with i2c. </p>
                        <p>This method should be called if the i2c address of the Zymkey is shared with another i2c device on the same i2c bus. The default i2c address for Zymkey units is 0x30. Currently, the address may be set in the ranges of 0x30 - 0x37 and 0x60 - 0x67.</p>
                        <p>After successful completion of this command, the Zymkey will reboot itself.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">address</span>
                                <span class="type">int</span>
                                <span class="description">The i2c address that the Zymkey will set itself to.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">set_tap_sensitivity</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">axis</span>
                            <span class="default-val">"all"</span>
                        </span>
                        <span class="param">
                            <span class="name">pct</span>
                            <span class="default-val">50.0</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Set the sensitivity of tap operations.</p>
                        <p>This method permits setting the sensitivity of the tap detection feature. Each axis may be individually configured or all at once.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">axis</span>
                                <span class="type"></span>
                                <span class="description">The axis to configure. Valid values include:<ol>
                                        <li>&#8217;all&#8217;: Configure all axes with the specified sensitivity value.</li>
                                        <li>&#8217;x&#8217; or &#8220;X&#8221;: Configure only the x-axis.</li>
                                        <li>&#8217;y&#8217; or &#8220;Y&#8221;: Configure only the y-axis.</li>
                                        <li>&#8217;z&#8217; or &#8220;Z&#8221;: Configure only the z-axis.</li>
                                    </ol>
                                </span>
                            </li>
                            <li class="param-item">
                                <span class="name">pct</span>
                                <span class="type"></span>
                                <span class="description">The sensitivity expressed as percentage.<ol>
                                        <li>0% = Shut down: Tap detection should not occur along the axis.</li>
                                        <li>100% = Maximum sensitivity.</li>
                                    </ol>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">wait_for_tap</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">timeout_ms</span>
                            <span class="default-val">- 1</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Wait for tap event.</p>
                        <p>This function is called in order to wait for a tap event to occur. This function blocks the calling thread unless called with a timeout of zero.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">timeout_ms</span>
                                <span class="type"></span>
                                <span class="description">The maximum amount of time in milliseconds to wait for a tap event to arrive.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="class">
                <h4 class="signature">
                    <span class="annotation">class </span>
                    <span class="name">ZymkeyAccelAxisData</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">g_force</span>
                        </span>
                        <span class="param">
                            <span class="name">tap_dir</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="method">
                        <h5 class="signature">
                            <span class="name">__init__</span>
                            <span class="param-list">
                                <span class="param">
                                    <span class="name">g_force</span>
                                </span>
                                <span class="param">
                                    <span class="name">tap_dir</span>
                                </span>
                            </span>
                        </h5>
                        <div class="body">
                            <div class="description"></div>
                            <p>Initialize self.  See help(type(self)) for accurate signature.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_accelerometer_data</span>
                    <span class="param-list"></span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Get current accelerometer data and tap info.</p>
                        <p>This function gets the most recent accelerometer data in units of g forces plus the tap direction per axis.</p>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_value">
                            <ul>
                                <li>
                                    <em>An array of accelerometer readings in units of g-force.</em>
                                </li>
                                <li>
                                    <em>array index 0 = x axis</em> &#8211; 1 = y axis
                                                    2 = z axis </li>
                                <li>
                                    <em>A value of -1 indicates that the tap event was detected in a</em>
                                </li>
                                <li>
                                    <em>negative direction for the axis, +1 for a positive direction</em>
                                </li>
                                <li>
                                    <em>and 0 for stationary.</em>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_time</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">precise</span>
                            <span class="default-val">False</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Get current GMT time.</p>
                        <p>This function is called to get the time directly from a Zymkey&#8217;s Real Time Clock (RTC).</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">precise</span>
                                <span class="type"></span>
                                <span class="description">If true, this API returns the time after the next second falls. This means that the caller could be blocked up to one second. If False, the API returns immediately with the current time reading.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">lock_binding</span>
                    <span class="param-list"></span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Set soft binding lock.</p>
                        <p>This function locks the binding for a specific HSM. This API is only valid for HSM series products.</p>
                    </div>
                    <div class="exceptions">
                        <h5>Exceptions</h5>
                        <ul>
                            <li class="exc-item">
                                <span class="name">AssertionError</span>
                                <span class="description">If <span classes="title-reference">ret</span> is a bad return code from the Zymkey library function. </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_current_binding_info</span>
                    <span class="param-list"></span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Get current binding info.</p>
                        <p>This function gets the current binding lock state as well as the current binding state. This API is only valid for devices in the HSM family.</p>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_value">
                            <ul>
                                <li>
                                    <em>binding_is_locked</em> &#8211; Binary value which expresses the current binding lock state. </li>
                                <li>
                                    <em>is_bound</em> &#8211; Binary value which expresses the current bind state. </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">set_perimeter_event_actions</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">channel</span>
                        </span>
                        <span class="param">
                            <span class="name">action_notify</span>
                            <span class="default-val">True</span>
                        </span>
                        <span class="param">
                            <span class="name">action_self_destruct</span>
                            <span class="default-val">False</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Set perimeter breach action.</p>
                        <p>This function specifies the action to take when a perimeter breach event occurs. The possible actions are any combination of:</p>
                        <blockquote>
                            <ul>
                                <li>Notify host.</li>
                                <li>Zymkey self-destruct.</li>
                            </ul>
                        </blockquote>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">channel</span>
                                <span class="type"></span>
                                <span class="description">The channel (0 or 1) that the action flags will be applied to</span>
                            </li>
                            <li class="param-item">
                                <span class="name">action_notify</span>
                                <span class="type"></span>
                                <span class="description">Set a perimeter breach to notify. (default = True)</span>
                            </li>
                            <li class="param-item">
                                <span class="name">action_self_destruct</span>
                                <span class="type"></span>
                                <span class="description">Set a perimeter breach to self destruct. (default = False)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">set_digital_perimeter_lp_period</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">lp_period</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Set the digital perimeter detect low power period (model &gt;= HSM6).</p>
                        <p>This function sets the digital perimeter detect low power period (microseconds).</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">lp_period</span>
                                <span class="type"></span>
                                <span class="description">The perimeter detect low power period in microseconds.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">set_digital_perimeter_lp_max_bits</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">max_num_bits</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Set the low power max number of bits (model &gt;= HSM6).</p>
                        <p>This function sets the digital perimeter detect low power max number of bits.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">max_num_bits</span>
                                <span class="type"></span>
                                <span class="description">The perimeter detect low power max number of bits</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">set_digital_perimeter_delays</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">min_delay_ns</span>
                        </span>
                        <span class="param">
                            <span class="name">max_delay_ns</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Set the digital perimeter detect delays (model &gt;= HSM6).</p>
                        <p>This function sets the digital perimeter detect delay values.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">min_delay_ns</span>
                                <span class="type"></span>
                                <span class="description">The minimum delay in nanoseconds.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">max_delay_ns</span>
                                <span class="type"></span>
                                <span class="description">The maximum delay in nanoseconds.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">wait_for_perimeter_event</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">timeout_ms</span>
                            <span class="default-val">- 1</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Wait for a perimeter breach event to be detected.</p>
                        <p>This function is called in order to wait for a perimeter breach event to occur. This function blocks the calling thread unless called with a timeout of zero.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">timeout_ms</span>
                                <span class="type"></span>
                                <span class="description">(input) The maximum amount of time in milliseconds to wait for a perimeter breach event to arrive.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_perimeter_detect_info</span>
                    <span class="param-list"></span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Get current perimeter detect info.</p>
                        <p>This function gets the timestamp of the first perimeter detect event for the given channel. The index corresponds to the channel specified in set_perimeter_event_actions.</p>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">TYPE</span>
                        <span class="return_value">The array of timestamps for each channel for the first detected event in epoch seconds</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">clear_perimeter_detect_info</span>
                    <span class="param-list"></span>
                </h4>
                <div class="body">
                    <div class="description"></div>
                    <p>Clear perimeter detect info.</p>
                    <p>This function clears all perimeter detect info and rearms all perimeter detect channels.</p>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_cpu_temp</span>
                    <span class="param-list"></span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Get current CPU temperature (model &gt;= HSM6).</p>
                        <p>This function gets the current HSM CPU temperature.</p>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">TYPE</span>
                        <span class="return_value">The CPU temperature in celsius as a float</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_rtc_drift</span>
                    <span class="param-list"></span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Get RTC drift (model &gt;= HSM6).</p>
                        <p>This function gets the current RTC drift.</p>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">TYPE</span>
                        <span class="return_value">The RTC drift as a float</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_batt_volt</span>
                    <span class="param-list"></span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Get current battery voltage (model &gt;= HSM6).</p>
                        <p>This function gets the current battery voltage.</p>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">TYPE</span>
                        <span class="return_value">The battery voltage as a float</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_model_number</span>
                    <span class="param-list"></span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Get Zymkey model number.</p>
                        <p>This function gets the Zymkey model number.</p>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">TYPE</span>
                        <span class="return_value">The model number as a string.</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_firmware_version</span>
                    <span class="param-list"></span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Get Zymkey firmware version.</p>
                        <p>This function gets the Zymkey firmware version.</p>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">TYPE</span>
                        <span class="return_value">The firmware version as a string.</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">get_serial_number</span>
                    <span class="param-list"></span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Get Zymkey serial number.</p>
                        <p>This function gets the Zymkey serial number.</p>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">TYPE</span>
                        <span class="return_value">The serial number as a string.</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">set_battery_voltage_action</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">sleep</span>
                            <span class="default-val">False</span>
                        </span>
                        <span class="param">
                            <span class="name">self_destruct</span>
                            <span class="default-val">False</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Set battery voltage action. (model &gt;= HSM6).</p>
                        <p>This function specifies the action to take when the battery voltage falls below the threshold set by set_battery_voltage_threshold. If this function is never called, do nothing is default. There are three actions:</p>
                        <blockquote>
                            <ul>
                                <li>Do nothing.</li>
                                <li>Go to sleep until battery is replaced.</li>
                                <li>Self-destruct.</li>
                            </ul>
                        </blockquote>
                        <p>With sleep and self_destruct set to False, it removes a previously set sleep or self_destruct action.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">sleep</span>
                                <span class="type"></span>
                                <span class="description">Set the sleep action.</span>
                            </li>
                            <li class="param-item">
                                <span class="name">self_destruct</span>
                                <span class="type"></span>
                                <span class="description">Set the self_destruct action.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">set_battery_voltage_threshold</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">threshold</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Sets the battery voltage threshold. (model &gt;= HSM6).</p>
                        <p>This function sets the threshold at which if the battery voltage falls bellow, the action set by set_battery_voltage_action will be carried out. The recommended threshold is 2.3V. If this function isn&#8217;t called 2.5V is assumed by default.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">threshold</span>
                                <span class="type"></span>
                                <span class="description">The threshold in Volts.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">set_cpu_temp_action</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">self_destruct</span>
                            <span class="default-val">False</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Set HSM CPU temperature threshold action. (model &gt;= HSM6).</p>
                        <p>This function specifies the action to take when the HSM CPU temperature falls below the threshold set by set_cpu_low_temp_threshold, or rises above the threshold set by set_cpu_high_temp_threshold. There are two actions to apply:</p>
                        <blockquote>
                            <ul>
                                <li>Do nothing.</li>
                                <li>Self-destruct.</li>
                            </ul>
                        </blockquote>
                        <p>To remove a previously set self-destruct action, call this function with self_destruct=False.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">self_destruct</span>
                                <span class="type"></span>
                                <span class="description">Set the self_destruct action.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="returns">
                        <h5>Returns</h5>
                        <span class="return_type">TYPE</span>
                        <span class="return_value">0 for success, less than 0 for failure.</span>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">set_cpu_low_temp_threshold</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">threshold</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Sets the HSM CPU low temperature threshold. (model &gt;= HSM6).</p>
                        <p>This function sets the threshold at which if the on-board HSM CPU&#8217;s tempreature falls below, the action set by set_cpu_temp_action will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold above the CPU&#8217;s ambient temperature. The recommended setting is no more than 20C. If this function is never called, -10 degrees celsius is assumed.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">threshold</span>
                                <span class="type"></span>
                                <span class="description">The threshold in celsius.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <h4 class="signature">
                    <span class="name">set_cpu_high_temp_threshold</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="name">threshold</span>
                        </span>
                    </span>
                </h4>
                <div class="body">
                    <div class="description">
                        <p>Sets the HSM CPU high temperature threshold. (model &gt;= HSM6).</p>
                        <p>This function sets the threshold at which if the on-board HSM CPU&#8217;s tempreature rises above, the action set by set_cpu_temp_action will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold below the CPU&#8217;s ambient temperature. The recommended setting is no less than 40C. If this function is never called, 65 degrees celsius is assumed.</p>
                    </div>
                    <div class="parameters">
                        <h5>Parameters</h5>
                        <ul>
                            <li class="param-item">
                                <span class="name">threshold</span>
                                <span class="type"></span>
                                <span class="description">The threshold in celsius.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
