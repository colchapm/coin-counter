export default class coinCounter {


  coinCounterRecursive(givenAmount) 
  {

    if (isNaN(givenAmount)) {
      return 'Error, try again.';
    } // termination case
    const changeBack = givenAmount * 100;

    if (changeBack < 5) { // base case
      const numberOfPenny = changeBack
      console.log(numberOfPenny)
      return (`your change back is in pennies: ${numberOfPenny}`)
    }

    else if (remainingChange < 10) {
      const remainingChange = changeBack % 5 / 100 
      const numberOfNickel = parseInt(change/5)
      console.log(numberOfNickel)
      return coinCounterRecursive(remainingChange) 
    }

    else if (remainingChange < 25) {
      const remainingChange = changeBack % 10 / 100 
      const numberOfDime = parseInt(change/10)
      console.log(numberOfDime)
      return coinCounterRecursive(remainingChange)
    }

    else 
    remainingChange = changeBack % 25 / 100 
    numberOfQuarter = parseInt(changeBack/25)
    console.lot(numberOfQuarter)
    return coinCounterRecursive(remainingChange)

  }
}
      

    // let remainingChange = givenAmount;
    // if (remainingChange < .05) {
    //   const numberOfPenny = remainingChange % .05
    // } else if (remainingChange < .10) {
      
    // }

  // //$0.93 == 2 quarters, 1 dime, 1nickel and 3 penny    {        
    
  // remainingChange = givenAmount;       
  // if (remainingChange < 0.05) // u owe 0.03 or 0.04      
  // {        numberOfPenny = remainingChange%0.05      }        
  // else if (remainingChange < 0.10) // u owe 0.08 or 0.07      
  // {         numberOfNickel = parseInt(remainingChange / 5)  //1        
  //   remainingChange = reamaningChange%5 //.04        
  //   return coinCounterRecursive(remainingChange);        }        
  //   else if (remainingChange < 0.25) // u owe 0.18      
  //   {        remainingChange = remainingChange%0.10 //0.08        
  //     numberOfDime = (givenAmount - (numberOfQuarter*0.25))/0.10;         
  //     return coinCounterRecursive(remainingChange);        }        
  //     else 
  //     // (remainingChange > 0.25); current remainingChange = 0.93      
  //     {        remainingChange = remainingChange%0.25 //18         
  //       numberOfQuarter = parseInt(givenAmount/0.25); //3 = $0.75        
  //       console.log(You will get ${numberOfQuarter} back);