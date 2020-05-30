// HDB is demolishing an estate of aging flats in Redhill and wants to know how many clusters of households still reside in each block of flats. An example of a flat occupancy diagram of a single block is as below, with + representing an occupied unit and 0 representing an empty unit.

// ```
// 000++0
// +++00+
// 000000
// +0000+
// ++00+0
// ```

// Any 1 or more occupied units are defined as part of household cluster if they're adjacent, be it horizontally, vertically or diagonally. In other words, this diagram below is considered to have 1 cluster.

// ```
// 0+0
// +0+
// 0++
// ```

// Judging by these criteria, our first example above contains 3 clusters.

// Write a program for HDB that takes in an input text file with diagrams as above, and print out the number of distinct clusters. The number of rows and columns will be between 3 and 50. Include clear instructions on how to run your program with the input file. We only accept either a stdin or a < redirection, and we only expect a single integer to be printed out in the console.

// **Sample Input File**

// ```
// 000++0
// +++00+
// 000000
// +0000+
// ++00+0
// ```

// **Sample Output**

// `3`

//This question given by Glints as part 1 of their technical takehome is based of the number of Islands question from Leetcode, extended by asking

function household(grid) {
  let clusterCount = 0;

  const height = grid.length;

  if (grid.length === 0) {
    return 0;
  }

  const width = grid[0].length;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === '+') {
        clusterCount++;
        visit(i, j, grid);
      }
    }
  }

  return clusterCount;
}

function visit(i, j, grid) {
  const height = grid.length;
  const width = grid[0].length;

  if (i < 0 || i === height) {
    return;
  }

  if (j < 0 || j === width) {
    return;
  }

  if (grid[i][j] != '+') {
    return;
  }

  grid[i][j] = '#';
  visit(i - 1, j, grid);
  visit(i + 1, j, grid);
  visit(i, j - 1, grid);
  visit(i, j + 1, grid);
  visit(i - 1, j - 1, grid);
  visit(i - 1, j + 1, grid);
  visit(i + 1, j - 1, grid);
  visit(i + 1, j + 1, grid);
}

let firstDiagram = [
  ['0', '0', '0', '+', '+', '0'],
  ['+', '+', '+', '0', '0', '+'],
  ['0', '0', '0', '0', '0', '0'],
  ['+', '0', '0', '0', '0', '+'],
  ['+', '+', '0', '0', '+', '0'],
];

household(firstDiagram);
