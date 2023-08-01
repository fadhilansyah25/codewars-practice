// Description
/* 
    Write a function that accepts a square matrix (N x N 2D array) 
    and returns the determinant of the matrix.

    How to take the determinant of a matrix -- it is simplest to start with the smallest cases:
    A 1x1 matrix |a| has determinant a.
    A 2x2 matrix [ [a, b], [c, d] ] or
    |a  b|
    |c  d|
    has determinant: a*d - b*c.

    The determinant of an n x n sized matrix is calculated by reducing the problem to the 
    calculation of the determinants of n matrices ofn-1 x n-1 size.
    For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or
    |a b c|  
    |d e f|  
    |g h i| 

    the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking 
    the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs:
    |- - -|
    |- e f|
    |- h i| 

    Note the alternation of signs.
    The determinant of larger matrices are calculated analogously, e.g. 
    if M is a 4x4 matrix with first row [a, b, c, d], then:
    det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)
*/

// Solution
export function determinant(m: number[][]) {
  // return the determinant of the matrix passed in
  const n = m.length;
  if (n === 1) return m[0][0];
  if (n === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

  let det = 0;
  for (let i = 0; i < n; i++) {
    const inMtrx: number[][] = [];
    for (let j = 1; j < n; j++) {
      const a: number[] = [];

      for (let k = 0; k < n; k++) {
        if (k !== i) a.push(m[j][k]);
      }

      inMtrx.push(a);
    }

    det += m[0][i] * ((-1) ** (1 + (i + 1)) * determinant(inMtrx));
  }

  return det;
}

// Manual Test 
console.log(determinant([[1]])); // should => 1
console.log(determinant([[1, 3], [2, 5]])); // should => -1
console.log(determinant([[2, 5, 3], [1, -2, -1], [1, 3, 4]])); // should => -20
