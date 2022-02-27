import test from "ava";
import { isIPAddress, isIPV6Address, isIPV4Address, ipVersion } from "./index.js";

test("isIP", (t) => {
  t.true(isIPAddress("192.168.1.1"));
  t.true(isIPAddress("1:2:3:4:5:6:7:8"));
  t.true(isIPAddress("::1"));
});

test("isIPv6", (t) => {
  t.true(isIPV6Address("1:2:3:4:5:6:7:8"));
  t.true(isIPV6Address("::1"));
});

test("isIPv4", (t) => {
  t.true(isIPV4Address("192.168.0.1"));
});

test("ipVersion", (t) => {
  t.is(ipVersion("192.168.0.1"), 4);
  t.is(ipVersion("1:2:3:4:5:6:7:8"), 6);
  t.is(ipVersion("abc"), undefined);
});
