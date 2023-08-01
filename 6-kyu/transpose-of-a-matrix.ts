// Description
/* 
    Transpose means is to interchange rows and columns of a two-dimensional array matrix.
    [AT]ij=[A]ji
    ie: Formally, the i th row, j th column element of AT is the j th row, i th column element of A:

    Example :
    [[1,2,3],[4,5,6]].transpose() //should return [[1,4],[2,5],[3,6]]

    Write a prototype transpose to array in JS or add a .transpose method in Ruby or create 
    a transpose function in Python so that any matrix of order ixj 2-D array returns transposed Matrix of jxi .
*/

interface Array<T> {
    transpose(): Array<T>
}
// nb: ignore this, this just for extend Array in typescript

// Solution
Array.prototype.transpose = function () {
  //complete solution
  if (!this.length) return [];
  if (!this[0].length) return [[]];

  const n = this.length,
    m = this[0].length;
  const transPosed: number[][] = [];

  for (let i = 0; i < m; i++) {
    const arr: number[] = [];
    for (let j = 0; j < n; j++) {
      arr.push(this[j][i]);
    }
    transPosed.push(arr);
  }

  return transPosed;
};

// Manual Test
console.log([[1,2,3],[4,5,6]].transpose()) //should return [[1,4],[2,5],[3,6]]