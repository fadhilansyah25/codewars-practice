// Description
/* 
    Build Tower
    Build a pyramid-shaped tower, as an array/list of strings, given a positive integer 
    number of floors. A tower block is represented with "*" character.

    For example, a tower with 3 floors looks like this:
    [
    "  *  ",
    " *** ", 
    "*****"
    ]

    And a tower with 6 floors looks like this:
    [
    "     *     ", 
    "    ***    ", 
    "   *****   ", 
    "  *******  ", 
    " ********* ", 
    "***********"
    ]
*/

// Solution
export const towerBuilder = (nFloors: number): string[] => {
  // build here
  return new Array(nFloors)
    .fill("")
    .map(
      (_, i) =>
        " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
};

// Manual Test
console.log(towerBuilder(1)); // should =>  ["*"]
console.log(towerBuilder(2)); // should =>  [" * ","***"]
console.log(towerBuilder(3)); // should =>  ["  *  "," *** ","*****"]
