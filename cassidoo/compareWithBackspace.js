// This week's question:
// Given two strings n and m, return true if they are equal when both are typed into empty text editors. The twist: # means a backspace character.

// Example:
// > compareWithBackspace("a##c", "#a#c")
// > true      // both strings become "c"

// > compareWithBackspace("xy##", "z#w#")
// > true      // both strings become ""

function compareWithBackspace(firstStr, secondStr) {
  let firstArr = firstStr.split('');
  let secondArr = secondStr.split('');

  console.log(firstArr);
  console.log(secondArr);

  let one = [];
  let two = [];

  for (let i = 0; i < firstArr.length; i++) {
    let item = firstArr[i];

    if (item == '#') {
      one.pop();
    } else {
      one.push(item);
    }
  }

  console.log(one);

  for (let i = 0; i < secondArr.length; i++) {
    let char = secondArr[i];

    if (char == '#') {
      two.pop();
    } else {
      two.push(char);
    }
  }

  console.log(two);

  let first = one.join();
  let second = two.join();

  console.log(first === second);
  return first === second;
}

compareWithBackspace('a##c', '#a#c');
compareWithBackspace('xy##', 'z#w#');
