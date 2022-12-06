"use strict";

const ipV4Regex = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";

const IpV6OctateRegex = "[a-fA-F\\d]{1,4}";

const ipV6Regex = `
(?:
(?:${IpV6OctateRegex}:){7}(?:${IpV6OctateRegex}|:)|                                   
(?:${IpV6OctateRegex}:){6}(?:${ipV4Regex}|:${IpV6OctateRegex}|:)|                             
(?:${IpV6OctateRegex}:){5}(?::${ipV4Regex}|(?::${IpV6OctateRegex}){1,2}|:)|                   
(?:${IpV6OctateRegex}:){4}(?:(?::${IpV6OctateRegex}){0,1}:${ipV4Regex}|(?::${IpV6OctateRegex}){1,3}|:)| 
(?:${IpV6OctateRegex}:){3}(?:(?::${IpV6OctateRegex}){0,2}:${ipV4Regex}|(?::${IpV6OctateRegex}){1,4}|:)| 
(?:${IpV6OctateRegex}:){2}(?:(?::${IpV6OctateRegex}){0,3}:${ipV4Regex}|(?::${IpV6OctateRegex}){1,5}|:)| 
(?:${IpV6OctateRegex}:){1}(?:(?::${IpV6OctateRegex}){0,4}:${ipV4Regex}|(?::${IpV6OctateRegex}){1,6}|:)| 
(?::(?:(?::${IpV6OctateRegex}){0,5}:${ipV4Regex}|(?::${IpV6OctateRegex}){1,7}|:))            
)(?:%[0-9a-zA-Z]{1,})?|(\:\:\d)                                            
`
  .replace(/\s*\/\/.*$/gm, "")
  .replace(/\n/g, "")
  .trim();

module.exports = {
  /**
   * Function to check if the address is valid IP address
   * @param {*} ipAddress
   * @returns true or false
   */
  isIPAddress(ipAddress) {
    return new RegExp(`(?:^${ipV4Regex}$)|(?:^${ipV6Regex}$)`).test(ipAddress.toString());
  },
  /**
   * Function which validates ipV4 address
   * @param {*} ipV4Address
   * @returns true or false
   */
  isIPV4Address(ipV4Address) {
    return new RegExp(`^${ipV4Regex}$`).test(ipV4Address.toString());
  },

  /**
   * Function which validates ipV6 address
   * @param {*} ipV6Address
   * @returns true or false
   */
  isIPV6Address(ipV6Address) {
    return new RegExp(`^${ipV6Regex}$`).test(ipV6Address.toString());
  },

  /**
   * Function to return IP address version
   * @param {*} ipAddress
   * @returns version
   */
  ipVersion(ipAddress) {
    return new RegExp(`(?:^${ipV4Regex}$)|(?:^${ipV6Regex}$)`).test(ipAddress.toString()) ? (new RegExp(`^${ipV6Regex}$`).test(ipAddress.toString()) ? 6 : 4) : "Please enter valid IP address";
  },
};
