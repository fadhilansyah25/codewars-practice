function bilanganTerbesar(...bilangan: number[]): number {
  return Math.max(...bilangan);
}

let a = 1;
let b = 10;
let c = 7;

console.log(bilanganTerbesar(a, b, c));
