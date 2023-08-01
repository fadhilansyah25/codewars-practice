// Description
/* 
    Write a method (or function, depending on the language) that converts a string to camelCase, 
    that is, all words must have their first letter capitalized and spaces must be removed.
*/

// Examples
/* 
    "hello case" --> "HelloCase"
    "camel case word" --> "CamelCaseWord"
*/

// Solution
export function camelCase(str: string): string {
  if (str === "") return "";
  return str
    .split(" ")
    .map((v) => v[0].toUpperCase() + v.slice(1).toLowerCase())
    .join("");
}

// Manual Test
console.log(camelCase("")) // should => ""); 
console.log(camelCase("test case")) // should => "TestCase");
console.log(camelCase("camel case method")) // should => "CamelCaseMethod");
console.log(camelCase("say hello")) // should => "SayHello");
console.log(camelCase("camel case word")) // should => "CamelCaseWord");