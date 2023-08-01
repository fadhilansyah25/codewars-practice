// Description
/* 
    Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
    Leave punctuation marks untouched.

    Examples:
    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world !');     // elloHay orldway !
*/

// Solution
export const pigIt = (a: string): string => {
  return a
    .split(" ")
    .map((v) => (/[a-z]/gi.test(v) ? v.slice(1) + v[0] + "ay" : v))
    .join(" ");
};

// Manual Test
console.log(pigIt("Pig latin is cool")); // should => ,'igPay atinlay siay oolcay')
console.log(pigIt("This is my string")); // should => ,'hisTay siay ymay tringsay')
