# ip-address-validator

> Validate if the IP address and its version

## Install

```sh
npm install ip-address-validator
```

## Usage

```js
import {isIPAddress, isIPV6Address, isIPV4Address, ipVersion} from 'ip-address-validator';

isIPAddress('192.168.0.108');
//=> true

isIPAddress('a.b.c.d');
//=> false

isIPV4Address('10.10.8.4');
//=> true

isIPV6Address('1:2:3:4:5:6:7:8');
//=> true

ipVersion('1:2:3:4:5:6:7:8');
//=> 6

ipVersion('10.10.8.4');
//=> 4

ipVersion('a.b.c.d');
//=> "Please enter valid IP address"
```

## API

### isIPAddress(string)

Check if `string` is valid IP address.

### isIPV6Address(string)

Check if `string` is valid IPv6 address.

### isIPV4Address(string)

Check if `string` is valid IPv4 address.

### ipVersion(string)

Returns `6` if `string` is IPv6, `4` if `string` is IPv4, or `undefined` if `string` is neither.

