// Description
/* 
    The aim of the kata is to decompose n! (factorial n) into its prime factors.
    Examples:

    n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
    since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.

    n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"

    n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23
    Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

    Notes:
    - the function is decomp(n) and should return the decomposition of n! into its prime factors 
        in increasing order of the primes, as a string.
    - factorial can be a very big number (4000! has 12674 digits, n can go from 300 to 4000).
    = In Fortran - as in any other language - the returned string is not permitted to contain any 
        redundant trailing whitespace: you can use dynamically allocated character strings.
*/

// Solution
export function decomp(n: number): string {
  const primes = sieveEratos(n),
    factors: { [key: number]: number } = {};

  for (const prime of primes) {
    let temp = n,
      count = 0;
    while (temp >= prime) {
      count += Math.floor(temp / prime);
      temp = Math.floor(temp / prime);
    }
    if (count > 0) factors[prime] = count;
  }

  return Object.entries(factors)
    .map(([prime, count]) => (count > 1 ? `${prime}^${count}` : `${prime}`))
    .join(" * ");
}

function sieveEratos(n: number) {
  const primes: boolean[] = new Array(n + 1).fill(true);
  primes[0] = false;
  primes[1] = false;
  //   console.log(primes);

  for (let i = 2; i * i <= n; i++) {
    // console.log(i, primes);
    if (primes[i]) for (let j = i * i; j <= n; j += i) primes[j] = false;
    // console.log(i, primes);
  }

  const primeNumbers: number[] = [];
  for (let i = 0; i < primes.length; i++) if (primes[i]) primeNumbers.push(i);

  return primeNumbers;
}

// Manual Test
console.log(decomp(17), " =>  2^15 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17");
console.log(decomp(5), " =>  2^3 * 3 * 5");
console.log(decomp(22), " =>  2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19");
console.log(decomp(14), " =>  2^11 * 3^5 * 5^2 * 7^2 * 11 * 13");
console.log(
  decomp(25),
  " =>  2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23"
);
