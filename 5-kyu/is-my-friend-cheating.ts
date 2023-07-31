// Description //
/* 
    A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
    Within that sequence, he chooses two numbers, a and b.
    He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
    Given a number n, could you tell me the numbers he excluded from the sequence?
    The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

    [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
    with all (a, b) which are the possible removed numbers in the sequence 1 to n.

    [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".

    It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no 
    possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).
 */

// Example //
/*
    removNb(26) should return "[15 21], [21 15]" 
*/

// Solution //
export function removeNb(n: number): number[][] {
  // your code
  return Array(n)
    .fill(undefined)
    .map((_, i) => [i + 1, ((n * (n + 1)) / 2 - i - 1) / (i + 2)])
    .filter(([a, b]) => b === ~~b && b <= n);
}

console.log(26);  // should => [[15, 21],[21, 15]]
console.log(101); // should => [[55, 91],[91, 55]]
console.log(102); // should => [[70, 73],[73, 70]]
console.log(110); // should => [[70, 85],[85, 70]]
