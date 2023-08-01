// Description
/* 
    Write a class that, when given a string, will return an uppercase string with each 
    letter shifted forward in the alphabet by however many spots the cipher was initialized to.

    For example:
    var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
    c.encode('Codewars'); // returns 'HTIJBFWX'
    c.decode('BFKKQJX'); // returns 'WAFFLES'

    If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
    The shift will always be in range of [1, 26].
*/

// Solution
var CaesarCipher = function (shift: number) {
  // TODO: Complete the CaesarCipher object
  this.shift = shift;

  this.encode = function (s: string) {
    return s
      .split("")
      .map((c, i) => (/[a-z]/gi.test(c) ? trans(c, this.shift) : c))
      .join("")
      .toUpperCase();
  };

  this.decode = function (s: string) {
    return s
      .split("")
      .map((c, i) => (/[a-z]/gi.test(c) ? trans(c, -this.shift) : c))
      .join("");
  };

  const trans = (c: string, d: number) => {
    const delta = c < "a" ? 65 : 97;
    return String.fromCharCode(
      ((c.charCodeAt(0) - delta + d + 26) % 26) + delta
    );
  };
};

// Manual Test
const c = new CaesarCipher(5);
console.log(c.encode("Codewars")); // returns 'HTIJBFWX'
console.log(c.decode("BFKKQJX")); // returns 'WAFFLES'
