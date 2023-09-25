function waterCost(waterAmount: number) {
  let totalCost = 0;
  const pricePerM3 = [
    [10, 1000],
    [10, 1500],
    [15, 2000],
  ];

  for (const [key, value] of pricePerM3) {
    if (waterAmount > 0) {
      totalCost += key * value;
      waterAmount -= key;
    } else {
      break;
    }
  }

  if (waterAmount > 0) {
    totalCost += waterAmount * 3000;
  }

  return totalCost;
}

console.log(waterCost(45));
