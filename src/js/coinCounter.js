const coins = [100, 25, 10, 5, 1];

function change(amount, coinIndex = 0) {
  const result = Math.trunc(amount / coins[coinIndex])
  const remain = amount % coins[coinIndex];

  if (isNaN(amount)) {
    return 'Error, please enter a number';
  } //termination case
  console.log({amount, result, remain});
  if (coinIndex === 4) {
    return; //base case
  } else {
    change(remain, coinIndex + 1);
  }
}

// console.log(change(128));


// export default class coinCounter {
  
//   coinCounterRecursive(givenAmount) 
//   {


//     if (isNaN(givenAmount)) {
//       return 'Error, try again.';
//     } // termination case
//     const changeBack = givenAmount * 100;

//     if (changeBack < 5) { // base case
//       const numberOfPenny = changeBack
//       return (`your change back in pennies is: ${numberOfPenny}`)
//     }

//     else if (changeBack < 10) {
//       const remainingChange = changeBack % 5 / 100 
//       const numberOfNickel = parseInt(changeBack/5)
//       return coinCounterRecursive(remainingChange) + `your change back in nickels is: ${numberOfNickel}`
//     }

//     else if (remainingChange < 25) {
//       const remainingChange = changeBack % 10 / 100 
//       const numberOfDime = parseInt(changeBack/10)
//       return coinCounterRecursive(remainingChange) + `your change back in dimes is: ${numberOfDime}`
//     }

//     else 
//       const remainingChange = changeBack % 25 / 100 
//       const numberOfQuarter = parseInt(changeBack/25)
//       return coinCounterRecursive(remainingChange) + `your change back in quarters is: ${numberOfQuarter}`

//   }
// }
      