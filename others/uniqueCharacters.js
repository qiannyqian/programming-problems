// Is Unique: Implement an algorithm to determine if a string has all unique characters.

function isUnique(str) {
  return new Set(str).size === str.length;
}

// A Set basically reduces a string into an object that has only unique keys, it uses the methods size (to check size of set) and has (returns a boolean indicating whether an element with the specified value exists in a Set object or not.)

//This method checks size of set against length of string
//If string has unique characters, size of set === length of string.

console.log(isUnique('abc'));
console.log(isUnique('abcabc'));

console.log(isUnique('hello'));
console.log(isUnique('blasphemy'));
