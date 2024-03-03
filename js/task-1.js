function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  const makeTransaction = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  return makeTransaction;
}

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// const start = 6;
// const end = 17;
// let number;
// function numberFirst(start, end) {
//   for (let index = 0; start < (index % 5 === 0) < end; index += 5) {
//     number = start - (start % 5);
//   }
//   return number;
// }

// console.log(numberFirst(6, 17));

// const start = 6;
// const end = 17;
// let number;
// number = start - (start % 5);

// console.log((number = start - (start % 5) + 5));

// console.log(end - start);

// for (let index = start; index <= end; index++) {
//   if (index % 5 === 0) {
//     number = index;
//     break;
//   }
// }
// console.log(number);

function findNumber(start, end, divisor) {
  let number;
  for (let index = start; index <= end; index++) {
    if (index % divisor === 0) {
      return (number = index);
    }
  }
}

console.log(findNumber(8, 17, 3));
