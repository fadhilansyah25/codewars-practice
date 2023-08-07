/* Description */
/* 
    Given two strings s1 and s2, we want to visualize how different the two strings are. 
    We will only take into account the lowercase letters (a to z). First let us count the 
    frequency of each lowercase letters in s1 and s2.

    s1 = "A aaaa bb c"
    s2 = "& aaa bbb c d"

    s1 has 4 'a', 2 'b', 1 'c'
    s2 has 3 'a', 3 'b', 1 'c', 1 'd'

    So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. 
    In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

    We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" 
    where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. 
    In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

    The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times 
    as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the 
    number of the string where they appear with their maximum value and :. If the maximum is in s1 
    as well as in s2 the prefix is =:.

    In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) 
    will be in decreasing order of their length and when they have the same length sorted in 
    ascending lexicographic order (letters and digits - more precisely sorted by codepoint); 
    the different groups will be separated by '/'. See examples and "Example Tests".

    Hopefully other examples can make this clearer.

    s1 = "my&friend&Paul has heavy hats! &"
    s2 = "my friend John has many many friends &"
    mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

    s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
    s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
    mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

    s1="Are the kids at home? aaaaa fffff"
    s2="Yes they are here! aaaaa fffff"
    mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
    Note for Swift, R, PowerShell
    The prefix =: is replaced by E:

    s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
    s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
    mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"
*/

// /* Solution */
export const mix = (s1: string, s2: string): string => {
  const mapS1 = groupByCount(s1);
  const mapS2 = groupByCount(s2);
  const keyList = [...new Set([...mapS1.keys(), ...mapS2.keys()])].sort();

  const tempMapS1: Temp[] = [];
  const tempMapS2: Temp[] = [];
  const tempSame: Temp[] = [];

  for (const key of keyList) {
    if (mapS1.has(key) && mapS2.has(key)) {
      if (Number(mapS1.get(key)) === Number(mapS2.get(key))) {
        tempSame.push({
          alphabet: key,
          fromString: "=",
          count: Number(mapS1.get(key)),
        });
      } else {
        if (Number(mapS1.get(key)) > Number(mapS2.get(key))) {
          tempMapS1.push({
            alphabet: key,
            fromString: "1",
            count: Number(mapS1.get(key)),
          });
        } else {
          tempMapS2.push({
            alphabet: key,
            fromString: "2",
            count: Number(mapS2.get(key)),
          });
        }
      }
    } else {
      if (mapS1.has(key)) {
        tempMapS1.push({
          alphabet: key,
          fromString: "1",
          count: Number(mapS1.get(key)),
        });
      }
      if (mapS2.has(key)) {
        tempMapS2.push({
          alphabet: key,
          fromString: "2",
          count: Number(mapS2.get(key)),
        });
      }
    }
  }

  return [...tempMapS1, ...tempMapS2, ...tempSame]
    .sort((a, b) => b.count - a.count)
    .map((val) => `${val.fromString}:${val.alphabet.repeat(val.count)}`)
    .join("/");
};

type Temp = {
  alphabet: string;
  fromString: string;
  count: number;
};

function groupByCount(array: string) {
  return new Map(
    [
      ...array
        .split("")
        .filter((value) => value.match(/[a-z]/))
        .sort()
        .reduce((acc, val) => {
          acc.set(val, (acc.get(val) || 0) + 1);
          return acc;
        }, new Map<string, number>()),
    ].filter(([_, count]) => count > 1)
  );
}

/* Clever Solution */
// export const mix = (s1: string, s2: string): string => {
//   return (
//     [
//       ...new Set(
//         [...s1, ...s2] // List lowercase characters
//           .filter((char) => /^[a-z]$/.test(char))
//       ),
//     ]
//       // Count character occurrences on each string
//       .map(
//         (char) =>
//           [
//             char,
//             [...s1].filter((c) => c === char).length,
//             [...s2].filter((c) => c === char).length,
//           ] as const
//       )
//       // Filter characters that appear more than once
//       .filter(([, c1, c2]) => c1 > 1 || c2 > 1)
//       // Map back to string in the requested format
//       .map(
//         ([char, c1, c2]) =>
//           `${c1 === c2 ? "=" : c1 > c2 ? "1" : "2"}:${char.repeat(
//             Math.max(c1, c2)
//           )}`
//       )
//       // Sort by repetitions (desc) and char code (asc)
//       .sort((a, b) =>
//         a.length === b.length
//           ? a.charCodeAt(0) - b.charCodeAt(0) ||
//             a.charCodeAt(2) - b.charCodeAt(2)
//           : b.length - a.length
//       )
//       .join("/")
//   );
// };

/* Manual Test */
console.log(mix("Are they here", "yes, they are here")); // should be => "2:eeeee/2:yy/=:hh/=:rr"
console.log(mix("looping is fun but dangerous", "less dangerous than coding")); // should be => "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"
console.log(mix("In many languages", " there's a pair of functions")); // should be => "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"
