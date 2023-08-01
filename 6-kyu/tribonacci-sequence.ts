// Description
/* 
    Well met with Fibonacci bigger brother, AKA Tribonacci.

    As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 
    (instead of 2) numbers of the sequence to generate the next. And, worse part of it, 
    regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

    So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input 
    (AKA signature), we have this sequence:
    [1, 1 ,1, 3, 5, 9, 17, 31, ...]

    But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] 
    instead of [1, 1] basically shifts the common Fibonacci sequence by once place, 
    you may be tempted to think that we would get the same sequence shifted by 2 places, 
    but that is not the case and we would get:
    [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

    Well, you may have guessed it by now, but to be clear: you need to create a fibonacci 
    function that given a signature array/list, returns the first n elements - signature 
    included of the so seeded sequence.

    Signature will always contain 3 numbers; n will always be a non-negative number; 
    if n == 0, then return an empty array (except in C return NULL) and be ready for 
    anything else which is not clearly specified ;)
*/

// Solution
export function tribonacci(
  [a, b, c]: [number, number, number],
  n: number
): number[] {
  if (n === 0) return [];
  if (n === 1) return [a];
  if (n === 2) return [a, b];

  const seq = [a, b, c];
  for (let i = 3; i < n; i++) {
    const nextSeq = seq[i - 1] + seq[i - 2] + seq[i - 3];
    seq.push(nextSeq);
  }

  return seq;
}

// Manual Test
console.log(tribonacci([1, 1, 1], 10)); // should => [1, 1, 1, 3, 5, 9, 17, 31, 57, 105
console.log(tribonacci([0, 0, 1], 10)); // should => [0, 0, 1, 1, 2, 4, 7, 13, 24, 44
console.log(tribonacci([0, 1, 1], 10)); // should => [0, 1, 1, 2, 4, 7, 13, 24, 44, 81
console.log(tribonacci([1, 0, 0], 10)); // should => [1, 0, 0, 1, 1, 2, 4, 7, 13, 24
console.log(tribonacci([0, 0, 0], 10)); // should => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0
console.log(tribonacci([1, 2, 3], 10)); // should => [1, 2, 3, 6, 11, 20, 37, 68, 125, 230
console.log(tribonacci([3, 2, 1], 10)); // should => [3, 2, 1, 6, 9, 16, 31, 56, 103, 190
