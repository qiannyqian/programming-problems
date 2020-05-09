// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.

function chunk(array, size) {
  let res = [];
  let temp = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    temp.push(item);

    if (temp.length === size || i === array.length - 1) {
      res.push(temp);
      temp = [];
    }
  }

  console.log(res);
  return res;
}

chunk(['a', 'b', 'c', 'd'], 2);
chunk([0, 1, 2, 3, 4, 5], 4);
