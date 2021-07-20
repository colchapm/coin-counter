export default class coinCounter {


  coinCounterRecursive(givenAmount) 
  {

    if (isNaN(givenAmount)) {
      return 'Error, try again.';
    }
    else {
      return ("hello world") 
    }

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