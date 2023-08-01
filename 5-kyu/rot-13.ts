// Description
/* 
    How can you tell an extrovert from an introvert at NSA?
    Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

    I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
    According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

    For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

    Test examples:
    "EBG13 rknzcyr." -> "ROT13 example."
    "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
*/

// Solution
export function rot13(str: string): string {
  let res = "";

  for (const char of str) {
    const asciiDec = char.charCodeAt(0);
    if (asciiDec >= 65 && asciiDec <= 90)
      res += String.fromCharCode(((asciiDec + 13 - 65) % 26) + 65);
    else if (asciiDec >= 97 && asciiDec <= 122)
      res += String.fromCharCode(((asciiDec + 13 - 97) % 26) + 97);
    else res += char;
  }

  return res;
}

// Manual Test
console.log(rot13("EBG13 rknzcyr.")); // should => ROT13 example.
console.log(rot13("This is my first ROT13 excercise!")); // should => Guvf vf zl svefg EBG13 rkprepvfr!
