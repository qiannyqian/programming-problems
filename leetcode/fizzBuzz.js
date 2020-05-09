// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

function fizzBuzz(n) {
  let newArr = [];

  for (let i = 1; i <= n; i++) {
    let word = i;

    if (i % 3 === 0) {
      word = 'Fizz';
    }

    if (i % 5 === 0) {
      word = 'Buzz';
    }

    if (i % 3 === 0 && i % 5 === 0) {
      word = 'FizzBuzz';
    }

    newArr.push(word.toString());
  }

  return newArr;
}
