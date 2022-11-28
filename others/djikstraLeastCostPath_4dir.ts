// # Find Least Cost Path

// You will receive a bidimensional array of numbers, and your goal here is to find the least cost path to the array's last item.
// You can move to the right, left, up, and down but can not navigate on the diagonal.

// ### Input and Output

// You will receive an input like the one below:

// ```
// [[42, 51, 22, 10,  0],
// [2,  50, 7,  6,   15],
// [4,  36, 8,  30,  20],
// [0,  40, 10, 100, 1]]
// ```

// Based on the input above, you will return the sum of all the indexes to get at the end, with the least cost paths, which is the following:

// ```
// 140

// // The least costly path to the last item is this:
// // 42 -> 2 -> 4 -> 36 -> 8 -> 7 -> 6 -> 15 -> 20 -> 1
// ```

export const findLessCostPath = (board: number[][]): number => {
  interface nextQueueObj {
    value: number,
    curr: number[]
  }

   // init empty visited set
   const visited = new Set();
   // 4 directions
   const DIRECTIONS = [
     [-1, 0],
     [1, 0],
     [0, 1],
     [0, -1]
   ];
   
   // keep track of current known shortest path
   let minCostArr = board.map((row) => row.map((_) => Number.MAX_VALUE));
   
   // initialize priority queue & first value to be 42
   minCostArr[0][0] = board[0][0];
   let nextQueue: nextQueueObj[] = [{ value: board[0][0], curr: [0, 0] }];
 
   // while loop until queue finish
   while (nextQueue.length > 0) {
     // get current from pq
     const { curr }: any = nextQueue.shift();
     // store current as visited
     visited.add(String(curr));
     
     //loop over 4 dirs
     DIRECTIONS.forEach(([m, n]) => {
       const [x, y] = curr;
       const nextX = x + m;
       const nextY = y + n;
       
       // check if neighbor is valid
       if (board[nextX] && board[nextX][nextY] !== undefined) {
         
         //store current minimum neighbor onto current known shortest path arr
         minCostArr[nextX][nextY] = Math.min(
           minCostArr[nextX][nextY],
           minCostArr[x][y] + board[nextX][nextY]
         );
         
         //if not visited, add to pq.
         if (!visited.has(String([nextX, nextY]))) {
           nextQueue.push({
             value: minCostArr[nextX][nextY],
             curr: [nextX, nextY]
           });
           // simulating priority queue
           nextQueue.sort((a, b) => a.value - b.value);
         }
       }
     });
   }
 
   return (
     minCostArr[board.length - 1][board[0].length - 1] -
     board[board.length - 1][board[0].length - 1]
   );

};