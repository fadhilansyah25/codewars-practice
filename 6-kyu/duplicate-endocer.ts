// Description
/* 
    The goal of this exercise is to convert a string to a new string where each character 
    in the new string is "(" if that character appears only once in the original string, or 
    ")" if that character appears more than once in the original string. 
    Ignore capitalization when determining if a character is a duplicate.

    Examples
    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))((" 

    Notes
    Assertion messages may be unclear about what they display in some languages. 
    If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!    
*/

// Solution
export function duplicateEncode(word: string): string {
  const arrChar = word.toLowerCase().split("");
  const comparator = [
    ...new Set(arrChar.filter((e, i, a) => a.indexOf(e) !== i)),
  ];

  let encode = "";
  arrChar.forEach((item) => {
    !comparator.includes(item) ? (encode += "(") : (encode += ")");
  });

  return encode;
}

// Manual Test
console.log(duplicateEncode("din")) // should =>  "(((");
console.log(duplicateEncode("recede")) // should =>  "()()()");
console.log(duplicateEncode("Success")) // should =>  ")())())"
console.log(duplicateEncode("(( @")) // should =>  "))((");
