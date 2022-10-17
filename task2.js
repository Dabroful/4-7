'use strict'

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (allCashbox) => {
  const sum = allCashbox.reduce((acc, number) => acc + number, 0);
  const length = allCashbox.length;
  return sum / length;
};

console.log(getAverageValue(allCashbox));


