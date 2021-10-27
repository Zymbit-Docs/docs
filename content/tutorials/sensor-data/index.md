---
title: "Encrypting & Decrypting Sensor Data on Disk"
linkTitle: "Encrypt Sensor Data"
icon: ""
description: ""
date: ""
lastmod: ""
draft: false
images: []
toc: true
---

## Why do this?

If you are just getting started with HSM you may want to start by encrypting some data to disk. This would be useful if you are collecting data to be read/analyzed at later time; and you do not want to store your data ‘in the clear’.

Encrypting data on disk prevents a bad actor from imaging your SD card and gaining access to sensitive data that is being stored in the field. If bad actor were to successfully image the card, data would remain encrypted and locked with your HSM's private key. If the HSM was also removed, then the bad actor would still not be able to access the data because each specific HSM is bound to a specific host hardware. Moving a specific HSM to another host hardware would fail the binding process and HSM would not perform any crypto functions, including decryption of data blobs.

## Encrypting Data Blobs

The process we describe here can also be used more generally to encrypt binary large objects, or ‘data blobs’

## What you will need

If you have not already setup and bound your HSM please visit the [Getting Started](https://docs.zymbit.com/quickstart/getting-started/) page.

We will use temperature data from a DS18B20 OneWire probe. We will encrypt the data to disk using the HSM python package, and then decrypt in a different session. For the purpose of this tutorial I will not be going over the circuit setup and one-wire configuration. That is adequately covered [here. ](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing/hardware) If you have questions however, we are happy to help!

The process is very simple:

1. Collect Measurements
2. Encrypt data with HSM
3. Safely store data locally
4. Decrypt at a later time with HSM.

## Locking Data

Below is a sample script you can use to encrypt sensor data. Most of the code is for data acquisition, not encryption. For the most part, we are only interested in the lines toward the bottom using `zymkey.client` .

```
import base64
import time
import zymkey
import datetime
import logging
import argparse
import subprocess as sub


class TempRead(object):
    def __init__(self):
        self.base_dir = '/sys/bus/w1/devices/'

    def probe_scan(self):
        devices_raw = sub.check_output(['ls', self.base_dir])
        devices = []
        for i in range(0, len(devices_raw)-3):
            if devices_raw[i:i+3] == '28-':
                devices.append(devices_raw[i:i+15])

        return devices

    def read_temp_raw(self, probe):
        f = open(self.base_dir+probe+'/w1_slave', 'r')
        lines = f.readlines()
        f.close()
        return lines

    def read_temp(self, probe):
        lines = self.read_temp_raw(probe)

        while lines[0].strip()[-3:] != 'YES':
            time.sleep(0.2)
            lines = self.read_temp_raw(probe)
        equals_pos = lines[1].find('t=')

        if equals_pos != -1:
            temp_string = lines[1][equals_pos+2:]
            c = round(float(temp_string) / 1000, 1)
            f = round(float(c * 9 / 5 + 32), 1)
            return c, f

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--loglevel', '-l', default='debug')
    parser.add_argument('--file_out', '-fo', type=str, default='/tmp/encrypted.bin')
    parser.add_argument('--zymkey', action='store_true', default=False)
    parser.add_argument('--sleep', type=float, default=20)

    parser.set_defaults()
    args = parser.parse_args()

    logging.basicConfig(
        format="%(levelname)s:%(name)s:%(lineno)s:%(message)s",
        level=getattr(logging, args.loglevel.upper())
    )  # streams to sys.stderr by default

    temp = TempRead()
    probes = temp.probe_scan()

    encrypted_file = open(args.file_out, mode='wb')

    while True:
        for probe in probes:
            temp_c, temp_f = temp.read_temp(probe)
            payload = "action=data, " \
                "key=temperature, " \
                "tags.unit=c, " \
                "tags.sensor_id={}," \
                "timestamp={}, " \
                "value= {}".format(str("ds18b20:"+probe.replace("-", "")),
                                   datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                                   temp_c)

            logging.debug('Unencrypted Payload: {}'.format(payload))

            if args.zymkey:
                logging.info('Encrypting data...')
                locked_data = zymkey.client.lock(bytearray(payload))
                encrypted_file.write(base64.b64encode(locked_data)+'\n')
                logging.debug('Encrypted DATA: {}'.format(locked_data))

        time.sleep(args.sleep)
```

The takeaways here are the `zymbit.client.lock` method and the flow of data types. Specifically, we want to lock a measurement of type `float` , the zymkey app utils library expects a `bytearray` , and the data needs to be `base64.encode` d so the blob can be written to a file on disk. This may sound like a lot but it can all be contained in two simple lines of code:

```
locked_data = zymkey.client.lock(bytearray(payload))
encrypted_file.write(base64.b64encode(locked_data)+'\n')
```

See! HSM is super easy to use!

To see this in action copy this to your pi, save it as sensor_lock.py for consistency, and run the command:

`python sensor_lock.py --zymkey --sleep=5`

You should see encrypted data flowing and the new file `/tmp/encrypted.bin` , where your data is saved on disk.

## Unlocking Data

With the data we locked to disk above, lets unlock the data now so it is human and machine readable. A simple script such as the one pasted below will read the encrypted file, `decode` with base64, `unlock` with HSM and write to a `decrypted.txt` file so data is legible.

```
import base64
import logging
import zymkey
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--loglevel', '-l', default='debug')
parser.add_argument('--file_in', '-fi', type=str, default='/tmp/encrypted.bin')
parser.add_argument('--file_out', '-fo', type=str, default='/tmp/decrypted.txt')

parser.set_defaults()

args = parser.parse_args()

logging.basicConfig(
    format="%(levelname)s:%(name)s:%(lineno)s:%(message)s",
    level=getattr(logging, args.loglevel.upper())
)  # streams to sys.stderr by default

with open(args.file_in) as f:
    logging.debug("Reading encrypted data from {}".format(args.file_in))
    content = f.readlines()

decrypted_file = open(args.file_out, mode='w+')

for i in content:
    payload = zymkey.client.unlock(bytearray(base64.b64decode(i)))
    logging.info(str(payload))
    logging.debug("Writing decrypted sensor data {} to {}".format(payload, args.file_out))
    decrypted_file.write(str(payload) + '\n')

decrypted_file.close()
```

Copy this to your Raspberry Pi, save as `sensor_unlock.py` and run as is with:

`python sensor_unlock.py`

Your data will be unlocked and saved to disk at `/tmp/decrypted.txt` . It should look something like this:

```
action=data, key=temperature, tags.unit=c, tags.sensor_id=ds18b20:28000006151b77,timestamp=2016-12-13 22:55:02, value= 19.5
action=data, key=temperature, tags.unit=c, tags.sensor_id=ds18b20:280000061543fd,timestamp=2016-12-13 22:55:03, value= 19.6
action=data, key=temperature, tags.unit=c, tags.sensor_id=ds18b20:28000006156310,timestamp=2016-12-13 22:55:04, value= 19.3
action=data, key=temperature, tags.unit=c, tags.sensor_id=ds18b20:28000006e10735,
```

<h2 id="troubleshooting">TROUBLESHOOTING</h2>
<ul>
<li><a href="https://docs.zymbit.com/quickstart/faq/">Troubleshooting FAQ</a></li>
<li><a href="https://community.zymbit.com/">Community Forum</a></li>
</ul>
