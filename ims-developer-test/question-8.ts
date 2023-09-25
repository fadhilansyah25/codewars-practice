// menggunakan fungsi rekursif
function factorial(n: number): number {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

function fact(n: number) {
  let total = 1;
  while (n > 1) {
    total *= n;
    n--;
  }

  return total;
}

console.log(factorial(5));
