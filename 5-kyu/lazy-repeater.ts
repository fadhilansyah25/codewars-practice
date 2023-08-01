// Description
/* 
    The makeLooper() function (or make_looper in your language) takes a string (of non-zero length) as an argument. 
    It returns a function. The function it returns will return successive characters of the string on successive invocations. 
    It will start back at the beginning of the string once it reaches the end.

    note: Different loopers should not affect each other, so be wary of unmanaged global state.
*/

// Example
/* 
    var abc = makeLooper('abc');
    abc(); // should return 'a' on this first call
    abc(); // should return 'b' on this second call
    abc(); // should return 'c' on this third call
    abc(); // should return 'a' again on this fourth call
*/

// Solution
export function makeLooper(str: string) {
  let nextIndex = 0,
    end = str.length;

  return () => {
    if (nextIndex < end) {
      const result = str[nextIndex];
      nextIndex++;
      return result;
    } else {
      nextIndex = 1;
      return str[0];
    }
  };
}

/* Manual Test */
var abc = makeLooper("abc");
console.log(abc()); // shpuld => a
console.log(abc()); // shpuld => b
console.log(abc()); // shpuld => c
console.log(abc()); // shpuld => a
console.log(abc()); // shpuld => b
console.log(abc()); // shpuld => c

var opgqsa = makeLooper("opgqsa");
opgqsa(); // should => o
opgqsa(); // should => p
opgqsa(); // should => g
console.log(opgqsa()); // should => q

// Iterators
/* 
    src:   
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
*/
