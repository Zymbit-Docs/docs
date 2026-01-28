---
title: "How to Verify Signatures against Public Key on AWS and Other Devices"
linkTitle: "Verify Signatures"
description: ""
date: ""
lastmod: "2025-10-15"
draft: false
images: []
toc: true
---

### Introduction

While all Zymbit modules make it trivial to verify data signed on the device with that module, verifying
the signature of data on other devices using the exportable public key requires a little more explanation.
Below is a simple code snippet to show how to verify the signature of data using Zymbit's Python API.

```python
#!/usr/bin/python3

import zymkey

# sign data
data = 'hello world!'
payload_sig = zymkey.client.sign(data)

# verify signature matches encrypted data
try:
    if zymkey.client.verify(data, payload_sig):
        print('Signature signed correctly by Zymbit module and matches payload.')
except Exception as e:
    print('Signature invalid. Data not signed by Zymbit module private key.')
```

Since the IoT environment is all about communication among many devices, we will demonstrate how to verify
a Zymbit module's ECDSA signature on other devices. We will do this using the public key corresponding to
the device's private key stored securely on the Zymbit module.

After showing how to do signature verification, we will demonstrate how this can be used in a practical
situation by collecting temperature data from a sensor and signing the data. We will then package the
data in JSON format - a standard format for data communication over the internet using strings.
This data will then be published to AWS IoT, where it will be routed via a Rule to a Lambda Function.
The Lambda Function will validate the data based on the public key.
From there you can route the data to any service you desire.

This post will demonstrate how to validate the signatures of all data sent to AWS before processing by
another service. All data published to AWS will be authenticated against a device certificate which
validates against the Zymbit module's private key without exporting said key. We will do this by making
HTTPS requests to AWS IoT using PyCurl. This serves as client authentication when connecting to AWS IoT.
All these examples will be done via Python using the Python-ECDSA library.

## Prerequisites

* Follow the [Installation and Getting Started section for your HSM](/hardware/modules/) first.
* If you wish to try Signature validation on AWS, you need a [valid device certificate](https://docs.zymbit.com/tutorials/aws-iot/tls/) attached to your AWS account.
* The device certificate needs to have a policy attached giving it permission to publish data.

### Simple Signature Validation against Zymkey Public Key

#### Installing Python-Ecdsa library

For the verification of ECDSA-NIST256 signatures, we will be using the
[Python-ECDSA library](https://github.com/warner/python-ecdsa). Using Pip, the library can be
installed simply by running the following command:

	sudo pip3 install ecdsa

#### Simple Signature Verification with Public Key

Below is a simple Python program demonstrating how to verify a Zymbit module signature with a
public key hosted on a device bound to that Zymbit module. The data passed to the ECDSA verifying
function is in bytearray format. The function is validating against the default signing hash
function Zymbit module uses, `sha256`, and returns a boolean indicating whether the signature
matches the public key and data. The public key for Zymkey is exported as bytearray using the
API function `get_public_key()`.

```python
#!/usr/bin/python3

import zymkey
import ecdsa
import hashlib

# Function to verify ECDSA signatures, all arguments must be in bytearray format.
# Validating against Zymkey signing's default hashing function, sha256 but this can be modified.
def verify_ecdsa_signature(data, sig, pub_key):
    vk = ecdsa.VerifyingKey.from_string(pub_key, ecdsa.NIST256p)
    return vk.verify(sig, data, hashfunc=hashlib.sha256)

if __name__ == "__main__":
    # exporting Zymkey public key as bytearray
    pub_key = zymkey.client.get_public_key(slot=0, foreign=False)

    data = 'hello world!'
    data_bytes = bytearray(data, 'utf-8')
    payload_sig = zymkey.client.sign(data)

    if verify_ecdsa_signature(data=data_bytes, sig=payload_sig, pub_key = pub_key):
        print('Signature matches data and public key pair.')
    else:
        print('Signature is invalid; it does not correspond to the public key.')
```

#### Signature Verification on Another Device

This next section will simulate signature verification on another device that receives
data in JSON format that has been signed with a Zymbit module. The public key is hard coded
into the program for the sake of a simple demonstration, but public key exchange between
devices is up to the discretion of the user.

The data payload and signature is passed in a JSON string in the format of a hex string.
Hex strings are simply representations of the underlying bytes in a human readable format.
The JSON data is represented below as the variable **received_payload**. For this example,
we are using **received_payload** data generated with the following example code on your
device with the Zymbit module.

**Export Public Key and Generate Example JSON Data for Validation**

```python
#!/usr/bin/python3

import json
import zymkey


if __name__ == "__main__":

    # Get public key to give to remote
    pub_key = zymkey.client.get_public_key()
    print("Public key:")
    print(pub_key.hex())

    # Create data then sign data
    data = 'hello world'
    data_bytes = bytearray(data, 'utf-8')
    signature = zymkey.client.sign(data)

    # Store data in a python dictionary that represents JSON. Data is originally in bytearray form
    # but will be converted to hex_string
    json_dictionary = {
        'data': data_bytes.hex(),
        'signature': signature.hex()
    }


    # Convert python dictionary to JSON string format
    received_payload = json.dumps(json_dictionary)
    print("\nJSON string:")
    print(received_payload)

```

**Python Code to Verify Signature with Data Generated above**
Either substitute in your `pub_key` and `JSON data` from the previous example or use as is.

```python
#!/usr/bin/python3

import json
import zymkey
import hashlib
import ecdsa

def verify_ecdsa_signature(data, sig, pub_key):
    vk = ecdsa.VerifyingKey.from_string(pub_key, ecdsa.NIST256p)
    return vk.verify(sig, data, hashfunc=hashlib.sha256)


if __name__ == "__main__":
    # Zymkey public key in hex string format. Converted to byte_array, public key storage/exchange up to user.
    pub_key = bytearray.fromhex('6cd0b8b14963f6712877eb50a3f5afa9c0e39483e560f58eb795e634df53f399ba370dbceb71ea87cba5e2fca4f23ef73b8e683a9946758829f76521e7a19e5a')

    '''
    The variable received_payload will be the JSON string sent over to this device from the Zymkey.
    It contains 1.the data and 2.the signature for this data. See next code example to create an example.
    Here is how it will be formatted:
        "{
            'data': 'hex_string of data',
            'signature': 'hex_string of signature;
        }"
    '''
    received_payload = '{ "data": "68656c6c6f20776f726c64", "signature": "28953e99dcc7f7ebf2771acae9e996e45997a212f7deba04a5974d1db6651fc8c50f11a5e5ad24ef25bdf0dafbdb736513f618184505f469f126c7dd4557cade" }'

    # Converting JSON string to Python dictionary for easier manipulation
    payload_pydict = json.loads(received_payload)

    # Getting the hex_strings from the new Python dictionary
    payload = payload_pydict['data']
    payload_sig = payload_pydict['signature']

    # Validating signature against public key and data, converting all hex_strings to bytearrays.
    if verify_ecdsa_signature(data=bytearray.fromhex(payload), sig=bytearray.fromhex(payload_sig), pub_key=pub_key):
        print('Signature matches data and public key pair.')
    else:
        print('Signature is invalid; it does not correspond to the public key.')
```

### Validation of Sensor Data Signature on AWS

This example will generate randomly simulated temperature sensor data, package
the data into JSON format, and sign and send to send to AWS IoT.
The function `read_temp()` will return an array containing random values for
`temp_c` and `temp_f`.

{{< callout notice >}}
If you wish to use an actual DS18B20 OneWire probe to collect temperature data,
you can follow the instructions at this link.
{{< resource_link "https://learn.adafruit.com/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing/hardware" >}}
Using a DS18B20 OneWire Probe to Collect Temperature Data
{{< /resource_link >}}

Add this code and substitute for the `read_temp()` function in the example below.
This code collects Temperature data from the probe. It reads from a file that the probes deposit temperature data to. The function `read_temp()` will return an array containing `temp_c` and `temp_f`, whenever you need to read temperature from the probes. Substitute this next snippet of code if you are using a real probe.

```python
#!/usr/bin/python3

os.system('modprobe w1-gpio')
os.system('modprobe w1-therm')
base_dir = '/sys/bus/w1/devices/'
device_folder = glob.glob(base_dir + '28*')[0]
device_file = device_folder + '/w1_slave'

def read_temp():
    # Supplies random temperature in Celsius and Farenheit for this example.
    lines = read_temp_raw()
    while lines[0].strip()[-3:] != 'YES':
        time.sleep(0.2)
        lines = read_temp_raw()
        equals_pos = lines[1].find('t=')
        if equals_pos != -1:
            temp_string = lines[1][equals_pos+2:]
            temp_c = float(temp_string) / 1000.0
            temp_f = temp_c * 9.0 / 5.0 + 32.0
            return temp_c, temp_f
```

{{< /callout >}}

**Collect data in JSON format, sign, and prepare for AWS**

```python
#!/usr/bin/python3

import json
import random
import time
import zymkey

'''
Note that JSON data needs to be in this format:
    "{
        'data': 'hex_string of data',
        'signature': 'hex_string of signature;
    }"
If you wish to use a different JSON format, you can always modify the lambda function.
'''

def read_temp():
    # this provides simulated random data for the example
    temp_c = float(random.randint(0,100))
    temp_f = temp_c * 9.0 / 5.0 + 32.0
    return temp_c, temp_f


while True:
    temp_C, temp_F = read_temp()
    deviceID = 1
    myIP= '192.168.100.100'

    # Package the data in Python dictionary, then convert to JSON string.
    data = {'temp_F': temp_F, 'temp_C': temp_C, 'deviceIP': myIP, 'deviceID': deviceID}

    # sign the JSON string
    json_str = json.dumps(data)
    json_str_bytes = bytearray(json_str, 'utf-8')
    signature = zymkey.client.sign(json_str)

    # Make a new dictionary to hold the hex_strings of the data and signature, and then turn into JSON
    json_data = json.dumps({'data': json_str_bytes.hex(), 'signature': signature.hex()})
    print(json_data)
    # 10 seconds before reading temperature again
    time.sleep(10)
```

#### Sending Encrypted Temperature Data to AWS

The AWS SDK doesn't support TLS connections over OpenSSL engines. Therefore, since
we keep the private key in the Zymbit module and not the file system, we will use CURL to make HTTPS requests
to AWS with the Zymbit module's embedded private key. We will be using PyCurl to do this programatically.

**Installing PyCurl**

PyCurl is simply a wrapper on the libssl library for C/C++. Install and
configure libssl library along with PyCurl:

    sudo apt-get install libcurl4-openssl-dev
    sudo apt-get install libssl-dev
    sudo pip install pycurl

**Registering Zymbit module device Certificate**

Connecting to and Publishing data to AWS IoT requries you to present a valid certificate that
has been regsitered with your AWS account. Instructions for that process is outlined
[here](https://docs.zymbit.com/tutorials/aws-iot/tls/). Make sure that the certificate
has a policy attached to allow data publication on AWS, if you follow the post completely this
should be done.

**Publishing data to AWS IoT**

Next we will publish the temperature data signed and saved from the last section to AWS IoT using PyCurl.
**Make sure to find and change your AWS IoT endpoint in the following code. Information on how
to do this can be found in the tutorial linked above.**

```python
#!/usr/bin/python3

import json
import pycurl
import random
import time
import zymkey


def read_temp():
    temp_c = float(random.randint(0,100))
    temp_f = temp_c * 9.0 / 5.0 + 32.0
    return temp_c, temp_f


def ZK_AWS_Publish(url, post_field, CA_Path, Cert_Path,):
    c = pycurl.Curl()

    # Set Curl to use zymkey_ssl engine
    c.setopt(c.SSLENGINE, "zymkey_ssl")
    c.setopt(c.SSLVERSION, c.SSLVERSION_TLSv1_2)

    # Set certificates for HTTPS connection
    c.setopt(c.SSLCERT, Cert_Path)
    c.setopt(c.CAINFO, CA_Path)

    # Set endpoint and HTTPS type, here it is a POST
    c.setopt(c.URL, url)
    c.setopt(c.POSTFIELDS, post_field)

    # Tell Curl to do client and host authentication
    c.setopt(c.SSL_VERIFYPEER, 1)
    c.setopt(c.SSL_VERIFYHOST, 2)

    # Turn on Verbose output and set key as placeholder, not actually a real file.
    c.setopt(c.VERBOSE, 1)
    c.setopt(c.SSLKEYTYPE, "ENG")
    c.setopt(c.SSLKEY, "nonzymkey.key")

    c.perform()
    c.close()


if __name__ == '__main__':
    while True:

        temp_C, temp_F = read_temp()
        deviceID = 1
        myIP= '192.168.100.100'

        # Package the data in Python dictionary, then convert to JSON string.
        data = {'temp_F': temp_F, 'temp_C': temp_C, 'deviceIP': myIP, 'deviceID': deviceID}

        # sign the JSON string
        json_str = json.dumps(data)
        json_str_bytes = bytearray(json_str, 'utf-8')
        signature = zymkey.client.sign(json_str)

        # Make a new dictionary to hold the hex_strings of the data and signature, and then turn into JSON
        json_data = json.dumps({'data': json_str_bytes.hex(), 'signature': signature.hex()})

        # make sure and substitute you AWS endpoint as well as the paths to your certificate
        AWS_ENDPOINT = 'https://<endpoint>.amazonaws.com:8443/topics/pub_key_validate?qos=1'
        ZK_AWS_Publish(url=AWS_ENDPOINT, post_field=json_data, CA_Path='/home/pi/verify-sig/AWS_CA.pem', Cert_Path='/home/pi/verify-sig/zymkey.crt')

        time.sleep(10)
```

#### Checking Data is being published to AWS IoT

If all the previous steps have been done correctly, then you should be able to see the JSON string
you published on the AWS IoT console. It will be published to the topic **pub_key_validate**. This
is encoded in the endpoint link you can see in the code. The topic can be changed to whatever
you want. **Here's how to check the data from the AWS IoT console**:

1. From the **AWS console**, select **AWS IoT**.
2. On the **left hand bar**, select **Test**. If MQTT Test is shown choose that.
3. Under **subscription topic**, write **pub_key_validate** and hit **subscribe**.
4. You should see your data being shown as it is being published.

#### Verifying Signature of Encrypted Data with Zymkey Public Key on AWS

**Signature Verification Lambda function**
An AWS Lambda function is code that runs on the cloud based on a configured trigger.
For this demonstration, the trigger will be data published to a specific topic, `pub_key_validate`,
on AWS IoT. From there the lambda function can validate signatures and talk with any other AWS service.

The function is written in terms of a **lambda_handler**. The **event** that it gets passed is
the JSON string published to AWS IoT. The Python lambda context automatically converts **event** from
a JSON string to Python dictionary.

```python
#!/usr/bin/python3

import ecdsa
import json
import hashlib

def verify_ecdsa_signature(data, sig, pub_key):
    vk = ecdsa.VerifyingKey.from_string(pub_key, ecdsa.NIST256p)
    return vk.verify(sig, data, hashfunc=hashlib.sha256)

def lambda_handler(event, context):
    #event is already converted from json->python dict
    pub_key_byte = bytearray.fromhex('9929a80b1d2e1543992dc767f394d1859bc33e9b241203f53473d859e1506f7ee5593b53a7fe7014aecc1f14886e1440e6bde27571c596a7ae3d1573e4122d90')
    byte_data = bytearray.fromhex(event['data'])
    byte_signature = bytearray.fromhex(event['signature'])
    success_message = 'Signature is authenticated against public key and data presented; it is valid.'
    fail_message = 'Signature authentication has failed.'
    if verify_ecdsa_signature(data=byte_data, sig=byte_signature, pub_key=pub_key_byte):
        print(success_message)
        return success_message
    else:
        print(fail_message)
        return fail_message
```

**Setting up Lambda function on AWS**

The lambda function is the python code that actually validates your Zymbit module signature. The data in
JSON format will be published to AWS IoT, and then routed to the lambda function. This is triggered
by an IoT rule. This basic lambda function will take the JSON string, validate the data using the
Python-ECDSA package, and then print and log its success status.

To set up the lambda function on AWS, we must first package the code with the ECDSA package, since
it is not part of the Python STL. To do this we zip up the lambda code with the ECDSA package in the
build directory.

**Packaging function with Python-ECDSA**

You can download a pre-configured zip file with Python-ECDSA included here. You can  modify the
lambda function however you want here, but make sure you change the public key in particular if
you want to test out simple validation. **If you change the lambda function make sure it is
changed inside the zip file.**

Otherwise just **zip up the lambda function** with the **ecdsa directory** you made in the
**build directory**. You can do this by first cloning the Github repository. Then build the
project by running this build command while inside the project directory.

     python setup.py build

Find the **ecdsa** directory inside  the **build** directory, and zip up that directory with your code.

**Now, follow these steps to upload and activate your code on AWS:**

1. From the **AWS Console**, select **Lambda**
2. Select the orange **Create function** button
3. Choose to **Author from Scratch**
4. Click **next**, the trigger will be configured later.
5. Give the Lambda function an appropriate **Name** and **Description**. Select **Python 2.7** as the **Runtime**.
6. Under **Code entry type**, choose to **Upload a .ZIP file**
7. Upload your **Zip file**, making sure you have **adjusted the public key for the lambda**.
8. For **Handler** make sure to change it to **Signature_Validation_Lambda.lambda_handler**
9. Choose to **Create A Role** if you don't already have one with basic logging privileges.
10. Give it an appropriate name and choose a **policy template**, picking **basicedgelambda**.
11. Finally, click **next** and then **create function**.

**Testing Lambda function is working properly**

AWS' lambda function can be given sample JSON input to test the function. So what we can do is
create data and sign it with Zymkey then convert it to a hex string locally, and then copy these
strings as input into the lambda function. If the public key in the lambda function you set up is
the complement to your Zymkey, it will validate correctly. Here we will use python to print out
the JSON string we need.

```python
#!/usr/bin/python3

import zymkey
import json

data = bytearray('hello world~')
signature = zymkey.client.sign(data)
python_dictionary = {'data': data, 'signature': signature}
print(json.dumps(python_dictionary))
```

Copy the output string, you will need to paste it onto the AWS test inputs. From the AWS Lambda
console, select your lambda function and click **Test**. Paste your JSON string as the input.
It should **return and print a success message**.

**Creating AWS IoT Rule**

The final step is to create  a trigger for the Lambda function. Here we will make a Rule in AWS IoT,
so that all data published to pub_key_readings are routed to and trigger your Lambda function.

1. From your **AWS Console**, click on the **AWS IoT service**.
2. On the left hand side, select **Rules** and then click the blue **Create button**.
3. Give it an **appropriate Name and Description**.
4. Using **SQL version 2016-03-23** use the following settings:

```
Attribute: *
Topic Filter: pub_key_reading
```

Set it to trigger a lambda function, and select the lambda function you created for signature validation.

**Seeing it all in Action**

The whole data pipeline goes like this:

**python collects data -> zymkey signs data -> python packages data to json -> pycurl publish
data to AWS IoT -> AWS IoT rule routs data and triggers lambda -> Lambda validates signature
and logs the success/failure.**

If you've tested that data is being published and the lambda function is working properly, it should all work when you run the program to publish data.

From your AWS Console, select **CloudWatch**. Under **Logs** you shoud see something like
**/aws/lambda/Signature_Validation**. Check the logs for proper validation, if you have no
logs chances are your AWS IoT rule is not routing the data properly. If data is being published
and no logs appear, check your rule is configured properly.

