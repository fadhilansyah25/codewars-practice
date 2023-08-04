// Description
/* 
    The problem
    How many zeroes are at the end of the factorial of 10? 10! = 3628800, i.e. there are 2 zeroes. 
    16! (or 0x10!) in hexadecimal would be 0x130777758000, which has 3 zeroes.

    Scalability
    Unfortunately, machine integer numbers has not enough precision for larger values. 
    Floating point numbers drop the tail we need. We can fall back to arbitrary-precision ones - built-ins or from a library, 
    but calculating the full product isn't an efficient way to find just the tail of a factorial. 
    Calculating 100'000! in compiled language takes around 10 seconds. 1'000'000! would be around 10 minutes, 
    even using efficient Karatsuba algorithm

    Your task
    is to write a function, which will find the number of zeroes at the end of (number) factorial in 
    arbitrary radix = base for larger numbers.

    base is an integer from 2 to 256
    number is an integer from 1 to 1'000'000

    Note Second argument: number is always declared, passed and displayed as a regular decimal number. 
    If you see a test described as 42! in base 20 it's 4210 not 4220 = 8210.
*/

// Solution *not efficient performance
/* 
export const countTrailingZeros = (base: number, num: number) => {
  let trailing = 0;
  let factor = factorial(num).toString(base);

  while (factor.endsWith("0")) {
    trailing++;
    factor = factor.slice(0, -1);
  }

  return trailing;
};

function factorial(n: number) {
  let result = BigInt(1);

  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }

  return result;
}

// // Manual Test
console.log(countTrailingZeros(10, 10)); // should be => 2
console.log(countTrailingZeros(16, 16)); // should be => 3
 */


// Improvement Code
// Note
/* 
    - first, calculate the highest power of Base (p) that divides Factorial Number (n)! using
        Legendre's Formula
        src: https://en.wikipedia.org/wiki/Legendre%27s_formula

    - second, find the prime factor from Base (p)
*/

// Legendre's Formula Implementation
function findPowerOfP(num: number, base: number) {
  // instance n: 10! and base p: 2

  let power = 0;
  let temp = base; // 2

  // pre-loop 1: check: temp = 2 <= n:10? true, in
  // pre-loop 2: check: temp = 4 <= n:10? true, in
  // pre-loop 3: check: temp = 8 <= n:10? true, in
  // pre-loop 4: check: temp = 16 <= n:10? false, pass
  while (temp <= num) {
    power += Math.floor(num / temp);
    // loop 1: power = power (0) + Math.floor(10/2):5 = 5
    // loop 2: power = power (5) + Math.floor(10/4):2 = 7
    // loop 3: power = power (7) + Math.floor(10/8):1 = 8
    temp *= base;
    // loop1: temp = temp (2) * 2 = 4
    // loop2: temp = temp (4) * 2 = 8
    // loop2: temp = temp (8) * 2 = 16
  }

  console.log(power);

  return power;
}

// Find the Prime Factors of base
function primeFactorsofB(b: number) {
  // vector to store all the prime factors
  // along with their number of occurrence
  // in factorization of B
  const ans: number[][] = [];

  for (let i = 2; b != 1; i++) {
    // loop 1: i = 2, b != 1 => true;
    // loop 2: i = 3, b != 1 => true;
    // loop 3: i = 4, b != 1 => true;
    // loop 4: i = 5, b != 1 => true;
    // loop 5: i = 6, b != 1 => false, out loop

    // loop 1: b % i == 0 ? = 10 % 2 == 0? true => in
    // loop 2: b % i == 0 ? = 5 % 3 == 0? false => pass
    // loop 3: b % i == 0 ? = 5 % 4 == 0? false => pass
    // loop 4: b % i == 0 ? = 5 % 5 == 0? trues => in
    if (b % i == 0) {
      let count = 0; // count = 0
      // loop 1:
      // inner-loop 1: b % 2 == 0? true
      // inner-loop 2: b % 2 == 0? = 5 % 2 == 0? false, out while

      // loop 4
      // inner-loop 1: b % 2 == 0? true
      // inner-loop 2: b = 1, b % 2 == 0? false, out while
      while (b % i == 0) {
        b = b / i;
        // loop 1:
        // inner-loop 1: b = b / i => b = 10 / 2 = 5

        // loop 4
        // inner-loop 1: b = b / i => b = 5 / 5 = 1
        count++;
        // loop 1
        // inner-loop 1 :count = 1

        // loop 4
        // inner-loop 1 :count = 1
      }

      // latest condition loop 1: b = 5, i = 2, countAbove = 1
      // latest condition loop 4: b = 1, i = 5, countAbove = 1
      ans.push([i, count]);
    }
    // loop 1: ans = ans[[2, 1]], i++ i = 3, b = 5
    // loop 2: ans = ans[[2, 1]], i++ i = 4, b = 5
    // loop 3: ans = ans[[2, 1]], i++ i = 5, b = 5
    // loop 4: ans = ans[[2, 1], [5, 1]], i++ i = 6, b = 1
  }

  console.log(ans);

  return ans;
}

// Returns largest power of B that
// divides N!
function largestPowerOfB(n: number, b: number) {
  const vec = primeFactorsofB(b);
  // vec : [2, 1], [5, 1]

  let ans = Number.MAX_VALUE;
  // ans : 1.7976931348623157e+308

  for (let i = 0; i < vec.length; i++) {
    // calculating minimum power of all
    // the prime factors of B
    console.log(ans, Math.floor(findPowerOfP(n, vec[i][0]) / vec[i][1]));

    ans = Math.min(ans, Math.floor(findPowerOfP(n, vec[i][0]) / vec[i][1]));
    // loop 1: ans Math.min(1.7976.., 8) = 8
    // loop 2: ans Math.min(8, 2) = 2

    console.log(ans, " temp ans");
  }

  return ans;
}

// Driver code
console.log(largestPowerOfB(10, 10));
console.log(largestPowerOfB(16, 16));
