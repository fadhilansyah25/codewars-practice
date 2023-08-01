// Description
/* 
    Write a function that takes an integer as input, and returns the number of bits that 
    are equal to one in the binary representation of that number. You can guarantee that 
    input is non-negative.

    Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// Solution
export function countBits(n: number): number {
  // Program Me
  return n
    .toString(2)
    .split("")
    .reduce((c, d) => c + Number(d), 0);
}

// Manual Test
console.log(countBits(0)); // should =>  0
console.log(countBits(4)); // should =>  1
console.log(countBits(7)); // should =>  3
console.log(countBits(9)); // should =>  2
console.log(countBits(10)); // should => 2
