/* Description */
// Given two integers a and b, which can be positive or negative, 
// find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.
// Note: a and b are not ordered!

/* Examples */
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

/* Solution */
export function getSum(a: number, b: number): number {
  if (a > b) [a, b] = [b, a];

  // Using Sum Integers Formula
  // S = n(a + i)/2
  // S = sum of the consecutive integers
  // n = count number of values between two numbers
  // a = first term
  // i = last term
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}

/* Manual Test */
console.log(getSum(0, -1)); // should => -1
console.log(getSum(0, 1)); // should => 1
