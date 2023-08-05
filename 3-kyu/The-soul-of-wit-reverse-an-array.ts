/* Description */
/* 
    No time for stories. Reverse an array, return the result.
     Do whatever you want with the original array. Don't use Array.prototype.reverse.

    You have 47 bytes to spare.

    Example: [1, 2, 3] → [3, 2, 1]

    And this time you won't be able to do the thing from this kata:
     https://www.codewars.com/kata/59ae589c07157afba80000a7/solutions/javascript.

    require, import and from are't allowed as well.
*/
// Original Solution (reduce all unused character)
// export let reverse=(a:any)=>a.map(a.pop, [...a])

/* Solution */
export let reverse = (a: any) => a.map(a.pop, [...a]);

/* Manual Test */
console.log(reverse([1, 2, 3])); // should =>  [3, 2, 1]
console.log(reverse([..."01234567890123456789"])); // should => [..."98765432109876543210"]
console.log(reverse([0, undefined])); // should => [undefined, 0]
