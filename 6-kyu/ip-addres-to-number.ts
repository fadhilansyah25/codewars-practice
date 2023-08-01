// Description
/* 
    An IPv4 address is a 32-bit number that identifies a device on the internet.

    While computers read and write IP addresses as a 32-bit number, we prefer to read 
    them in dotted-decimal notation, which is basically the number split into 4 chunks 
    of 8 bits, converted to decimal, and delmited by a dot.

    In this kata, you will create the function ipToNum (or ip_to_num, depending on the language) 
    that takes an ip address and converts it to a number, as well as the function numToIp (or num_to_ip) 
    that takes a number and converts it to an IP address string. Input will always be valid.

    Conversion Example
    //original IP address
    192.168.1.1

    //breaks down into 4 binary octets
    11000000 . 10101000 . 00000001 . 00000001

    //which are merged together (unsigned 32-bit binary)
    11000000101010000000000100000001

    //and finally converted to base 10
    3232235777
    Note that the binary octets are unsigned (so we can't have negative numbers).

    Be careful: JavaScript does bitwise arithmetic on signed 32-bits integers.

    Examples
    ipToNum / ip_to_num
    '192.168.1.1' converts to 3232235777
    '10.0.0.0'    converts to  167772160
    '176.16.0.1'  converts to 2953838593
    numToIp / num_to_ip
    3232235777 converts to '192.168.1.1'
    167772160 converts to    '10.0.0.0'
    2953838593 converts to  '176.16.0.1'
*/

// Solution
function ipToNum(ip: string) {
  return parseInt(
    ip
      .split(".")
      .reduce((acc, v) => acc + Number(v).toString(2).padStart(8, "0"), ""),
    2
  );
}

function numToIp(num: number) {
  return num
    .toString(2)
    .padStart(32, "0")
    .match(/.{1,8}/g || [])
    ?.map((v) => parseInt(v, 2))
    .join(".") as string;
}

// Manual Test
console.log(numToIp(ipToNum("192.168.1.1"))); // should =>  '192.168.1.1'
console.log(numToIp(ipToNum("10.0.0.0"))); // should =>  '10.0.0.0'
console.log(numToIp(ipToNum("176.16.0.1"))); // should =>  '176.16.0.1'
console.log(ipToNum(numToIp(3232235777))); // should => 3232235777
console.log(ipToNum(numToIp(167772160))); // should => 167772160
console.log(ipToNum(numToIp(2953838593))); // should => 2953838593
