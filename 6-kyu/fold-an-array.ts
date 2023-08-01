// Description
/* 
    In this kata you have to write a method that folds a given array of integers by the middle x-times.

    An example says more than thousand words:

    Fold 1-times:
    [1,2,3,4,5] -> [6,6,3]

    A little visualization (NOT for the algorithm but for the idea of folding):

    Step 1         Step 2        Step 3       Step 4       Step5
                        5/           5|         5\          
                        4/            4|          4\      
    1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
    ----*----      ----*          ----*        ----*        ----*


    Fold 2-times:
    [1,2,3,4,5] -> [9,6]
    As you see, if the count of numbers is odd, the middle number will stay. 
    Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

    The array will always contain numbers and will never be null. The parameter runs will always 
    be a positive integer greater than 0 and says how many runs of folding your method has to do.

    If an array with one element is folded, it stays as the same array.

    The input array should not be modified!
*/

// Solution
export function foldArray(array: number[], runs: number): number[] {
  let nArr = [...array];

  for (let i = 0; i < runs; i++) {
    let n = nArr.length,
      fold = Math.floor(n / 2);

    for (let j = 0; j < fold; j++) nArr[j] += nArr[n - 1 - j];

    nArr = n % 2 === 0 ? nArr.slice(0, fold) : nArr.slice(0, fold + 1);
  }

  return nArr;
}

// Manual Test
var input = [1, 2, 3, 4, 5];
var expected = [6, 6, 3];
console.log((foldArray(input, 1), expected));

expected = [9, 6];
console.log((foldArray(input, 2), expected));

expected = [15];
console.log((foldArray(input, 3), expected));

input = [-9, 9, -8, 8, 66, 23];
expected = [14, 75, 0];
console.log((foldArray(input, 1), expected));
