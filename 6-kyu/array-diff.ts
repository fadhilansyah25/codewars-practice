export function arrayDiff(a: number[], b: number[]): number[] {
  // if (!a.length) return [];
  return a.filter((v) => !b.includes(v));
}

console.log(arrayDiff([], [4, 5]));
console.log(arrayDiff([1, 2, 3], [1, 2]));
