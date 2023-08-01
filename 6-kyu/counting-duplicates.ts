// Description
/* 
    Count the number of Duplicates
    Write a function that will return the count of distinct case-insensitive alphabetic characters 
    and numeric digits that occur more than once in the input string. The input string can 
    be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

    Example
    "abcde" -> 0 # no characters repeats more than once
    "aabbcde" -> 2 # 'a' and 'b'
    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
    "indivisibility" -> 1 # 'i' occurs six times
    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    "aA11" -> 2 # 'a' and '1'
    "ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// Solution
export function duplicateCount(text: string): number {
  return [
    ...new Set(
      text
        .toLowerCase()
        .split("")
        .filter((e, i, a) => a.indexOf(e) !== i)
    ),
  ].length;
}

// Manual Test
console.log(duplicateCount("")); // should => 0
console.log(duplicateCount("abcde")); // should => 0
console.log(duplicateCount("aabbcde")); // should => 2
console.log(duplicateCount("aabBcde")); // should => 2, "should ignore case"
console.log(duplicateCount("Indivisibility")); // should => 1
console.log(duplicateCount("Indivisibilities")); // should => 2, "characters may not be adjacent"
