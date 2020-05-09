// #140
// This week’s question:
// Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

// Example:
// $ maxPointsOnLine([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])
// $ 4

function maxPointsOnLine(arr) {
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let gradientCount = {};

    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        let yIndex = arr[i][1] - arr[j][1];
        let xIndex = arr[i][0] - arr[j][0];
        let gradient = yIndex / xIndex;

        if (gradientCount[gradient] === undefined) {
          gradientCount[gradient] = 0;
        }

        gradientCount[gradient]++;
      }
    }

    for (let key in gradientCount) {
      const currmax =
        (key !== 'NaN' ? gradientCount[key] : 0) + (gradientCount['NaN'] || 0);
      if (currmax > maxCount) {
        maxCount = currmax;
      }
    }
    gradientCount['NaN'] = undefined;
  }

  console.log('Answer is: ', maxCount + 1);
}

maxPointsOnLine([
  [1, 1],
  [3, 2],
  [5, 3],
  [4, 1],
  [2, 3],
  [1, 4],
]);

maxPointsOnLine([
  [1, 1],
  [2, 2],
  [3, 3],
]);

maxPointsOnLine([
  [1, 1],
  [1, 1],
  [1, 1],
]);
