// Description
/* 
    Third day at your new cryptoanalyst job and you come across your toughest assignment yet. 
    Your job is to implement a simple keyword cipher. A keyword cipher is a type of monoalphabetic 
    substitution where two parameters are provided as such (string, keyword). 
    The string is encrypted by taking the keyword, dropping any letters that appear more than once. 
    The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.
    
    For example, if your string was "hello" and your keyword was "wednesday", your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.

    To encrypt 'hello' you'd substitute as follows,

                abcdefghijklmnopqrstuvwxyz
    hello ==>   |||||||||||||||||||||||||| ==> bshhk
                wednsaybcfghijklmopqrtuvxz

    hello encrypts into bshhk with the keyword wednesday. This cipher also uses lower case letters only.
*/

// Solution
function keywordCipher(string: string, keyword: string) {
  const en = [...new Set(keyword + "abcdefghijklmnopqrstuvwxyz")];
  return [...string.toLowerCase()]
    .map((v) => (/[a-z]/.test(v) ? en[v.charCodeAt(0) - 97] : v))
    .join("");
}

// Manual Test
console.log(keywordCipher("Welcome home", "secret")); // shoudl => "wticljt dljt"
console.log(keywordCipher("hello", "wednesday")); // shoudl => "bshhk"
console.log(keywordCipher("alpha bravo charlie", "delta")); // shoudl => "djofd eqdvn lfdqjga"
console.log(keywordCipher("Home Base", "seven")); // shoudl => "dlja esqa"
console.log(keywordCipher("basecamp", "covert")); // shoudl => "ocprvcil"
console.log(keywordCipher("one two three", "rails")); // shoudl => "mks twm tdpss"
console.log(keywordCipher("Test", "unbuntu")); // shoudl => "raqr"
