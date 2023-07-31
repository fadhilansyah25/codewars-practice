// Sum of Intervals Code Wars
function sumOfIntervals(intervals: [number, number][]) {
  // your code here
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);

  for (let i = 0; i < intervals.length - 1; i++) {
    let j = i + 1;

    while (j < intervals.length) {
      if (intervals[i][1] >= intervals[j][0]) {
        intervals[i][1] = Math.max(intervals[i][1], intervals[j][1]);
        intervals.splice(j, 1);
      } else {
        j++;
      }
    }
  }
  
  console.log(intervals);

  return intervals.reduce((acc, v) => acc + (v[1] - v[0]), 0);
}

console.log(
  sumOfIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ])
); // => 19

console.log(
  sumOfIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ])
); // => 7

console.log(
  sumOfIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
  ])
); // => 9

console.log(
  sumOfIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40],
  ])
); // => 100000030
