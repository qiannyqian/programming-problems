// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

function anagrams(stringA, stringB) {
  strA = stringA.replace(/\W+/g, '').toLowerCase();
  strB = stringB.replace(/\W+/g, '').toLowerCase();

  if (strA.length !== strB.length) {
    return false;
  }

  let charCount = {};

  for (i = 0; i < strA.length; i++) {
    let item = strA[i];
    if (!charCount[item]) {
      charCount[item] = 0;
    }
    charCount[item] = charCount[item] + 1;
  }

  for (i = 0; i < strB.length; i++) {
    let item = strB[i];
    if (!charCount[item]) {
      charCount[item] = -1;
    }
    charCount[item] = charCount[item] - 1;
  }

  let keys = Object.keys(charCount);

  let count = 0;

  for (let i = 0; i < keys.length; i++) {
    count += charCount[keys[i]];
  }

  return count === 0;
}
