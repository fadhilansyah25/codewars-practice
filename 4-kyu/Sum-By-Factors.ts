// Description
/* 
  Given an array of positive or negative integers
  I= [i1,..,in]

  you have to produce a sorted array P of the form

  [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

  P will be sorted by increasing order of the prime numbers. The final result has to be 
  given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

  Example:
  I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
  [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

  Notes:
   - It can happen that a sum is 0 if some numbers are negative!
      Example: 
      I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers 
      for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

  - In Fortran - as in any other language - the returned string is not permitted to contain any redundant 
      trailing whitespace: you can use dynamically allocated character strings.
*/

// // Solution Code *not improved code
// function primeFactors(n: number) {
//   const ans: number[] = [];

//   for (let i = 2; n != 1; i++) {
//     if (n % i == 0) {
//       while (n % i == 0) {
//         n = n / i;
//       }
//       ans.push(i);
//     }
//   }

//   return ans;
// }

// function sumOfDivided(lst: number[]): number[][] {
//   let factors: number[] = [];
//   let sums: number[][] = [];

//   for (let i = 0; i < lst.length; i++) {
//     factors = [...new Set([...primeFactors(lst[i]), ...factors])];
//   }

//   for (let i = 0; i < factors.length; i++) {
//     let msum = 0;
//     for (let j = 0; j < lst.length; j++) {
//       if (lst[j] % factors[i] === 0) {
//         msum += lst[j];
//       }
//     }
//     sums.push([factors[i], msum]);
//   }

//   sums.sort((a, b) => a[0] - b[0]);
//   return sums;
// }

// // Improved Code
function primeFactors(n: number): number[] {
  const factors: Set<number> = new Set();
  // eg: n = 15 (step 1)

  // i = 2; i < Math.sqrt(15) 3.8.. :true ; i++ (step 2)
  // i = 3; i < Math.sqrt(15) 3.8.. :true ; i++ (step 4)
  // i = 4; i < Math.sqrt(5) 2.2..  :false      (step 9)
  for (let i = 2; i <= Math.sqrt(n); i++) {

    // i = 2: 15 % 2 == 0 ? false        (step 3)

    // i = 3; 15 % 3 == 0? true          (step 5)
    // i = 3; 5 % 3 == 0? false          (step 8)
    while (n % i === 0) {
      factors.add(i);
      // factors = [3]                   (step 6)
      n /= i;
      // n = n:15 / 3 = 5                (step 7)
    }
  }

  // n = 5, n > 1: true                 (step 10)
  if (n > 1) {
    factors.add(n); // factors[3, 5]    (step 11)
  }

  return Array.from(factors);
}

function sumOfDivided(lst: number[]): number[][] {
  const factors: Set<number> = new Set();
  const sums: number[][] = [];

  for (const num of lst) {
    const numFactors = primeFactors(Math.abs(num));
    numFactors.forEach((factor) => factors.add(factor));
  }

  for (const factor of factors) {
    const msum = lst.reduce(
      (acc, num) => (num % factor === 0 ? acc + num : acc),
      0
    );
    sums.push([factor, msum]);
  }

  sums.sort((a, b) => a[0] - b[0]);
  return sums;
}

// // Manual Test
console.log(sumOfDivided([12, 15]));
console.log(sumOfDivided([15, 21, 24, 30, 45]));
