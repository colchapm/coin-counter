export default class coinCounter {


  coinCounterRecursive(givenAmount) 
  {

    if (isNaN(givenAmount)) {
      return 'Error, try again.';
    } // termination case
    const changeBack = givenAmount * 100;

    if (changeBack < 5) { // base case
      const numberOfPenny = changeBack
      return (`your change back in pennies is: ${numberOfPenny}`)
    }

    else if (changeBack < 10) {
      const remainingChange = changeBack % 5 / 100 
      const numberOfNickel = parseInt(changeBack/5)
      return coinCounterRecursive(remainingChange) + `your change back in nickels is: ${numberOfNickel}`
    }

    else if (remainingChange < 25) {
      const remainingChange = changeBack % 10 / 100 
      const numberOfDime = parseInt(changeBack/10)
      return coinCounterRecursive(remainingChange) + `your change back in dimes is: ${numberOfDime}`
    }

    else 
      const remainingChange = changeBack % 25 / 100 
      const numberOfQuarter = parseInt(changeBack/25)
      return coinCounterRecursive(remainingChange) + `your change back in quarters is: ${numberOfQuarter}`

  }
}
      