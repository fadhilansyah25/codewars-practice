// menggunakan Math.pow
function hitungPangkat(angka: number, pangkat: number): number {
  return Math.pow(angka, pangkat);
}

console.log(hitungPangkat(5, -2));
console.log(hitungPangkat(-2, -2));

// tanpa menngunakan Math.pow
function customPower(base: number, exponent: number): number {
  if (exponent === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 0; i < Math.abs(exponent); i++) {
    result *= base;
  }

  if (exponent < 0) {
    result = 1 / result; // menginvers hasil jika angka basis adalah negatif
  }

  return result;
}

console.log(customPower(-2, -2));
