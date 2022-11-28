// # Dice Numbers Calculator

// You will receive three different values as parameters, each value represents a single dice number. Your goal is to calculate the final result for this dices play.

// If you receive three dices with the same number, you should return the number multiplied by 3. If the result is two numbers equals, you should return the number multiplied by 2. If there are no equal numbers, you should return the biggest of them.

// ### Input and Output

// Based on the explanation above, you will receive inputs like the examples below:

// ```
// Example 1:
// - Dice 1: 1
// - Dice 2: 2
// - Dice 3: 3

// Example 2:
// - Dice 1: 4
// - Dice 2: 1
// - Dice 3: 4

// Example 3:
// - Dice 1: 3
// - Dice 2: 3
// - Dice 3: 3
// ```

// Based on the examples above, you should return the value that represents the correct number value.

// ```
// Example 1: 3
// Example 2: 8
// Example 3: 9
// ```

// The example 1 will return 3 because there are no equal numbers, and 3 is the biggest value. On the example 2 will return 8, because there are two equal dices. And the last example will return 9, because there are three equal dices.

// Note: You have to be careful with numbers out of a dice range (which is from 1 to 6).

export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number
): number => {
   // check number range
   if ((dice1 || dice2 || dice3) > 6 || (dice1 || dice2 || dice3) < 1) {
    throw new Error('Dice out of number range')
  }
  
  // If you receive three dices with the same number, you should return the number multiplied by 3
  if (dice1 === dice2 && dice2 === dice3 && dice3 === dice1) {
    return dice1 * 3
  }
  
  // If the result is two numbers equals, you should return the number multiplied by 2
  let arr = [dice1, dice2, dice3];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
       if (arr[i] === arr[j]) {
          return arr[i] * 2
        }
    }
  }
  
  // If there are no equal numbers, you should return the biggest of them.
  let noDuplicates = new Set(arr);  
  
  if (arr.length === noDuplicates.size) {
    let sorted = arr.sort();    
    return sorted[2];
  }

  return 0;
};

