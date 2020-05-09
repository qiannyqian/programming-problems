// Coding question of the day:

// Write a function that takes in two strings, and returns True if they are permutations of each other, False otherwise

function checkPermutation(str1, str2) {
  if (str1.length === str2.length) {
    let string1 = str1.split('').sort().join('');
    let string2 = str2.split('').sort().join('');

    if (string1 === string2) {
      return 'They are permutations of each other';
    } else return 'They are not permutations';
  } else return 'They are not the same length';
}

checkPermutation('small', 'malls');

// Using key value pairs

function checkPermutation2(str1, str2) {
  let dic1 = {};

  let arr1 = str1.split('');

  for (let i = 0; i < arr1.length; i++) {
    let char = arr1[i];
    if (dic1[char] !== undefined) {
      dic1[char] = 0;
    }
    dic1[char] = dic1[char] + 1;
    console.log(dic1);
  }
}

checkPermutation2('smalls', 'malls');

// Using 2 key value pair objects

function checkPermutation3(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let dic1 = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (!dic1[char]) {
      dic1[char] = 0;
    }
    dic1[char] = dic1[char] + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!dic1[char]) {
      dic1[char] = -1;
    }
    dic1[char] = dic1[char] - 1;
  }

  let keys = Object.keys(dic1);

  let count = 0;

  for (let i = 0; i < keys.length; i++) {
    count += dic1[keys[i]];
  }

  return count === 0;
}

checkPermutation3('small', 'malls');
