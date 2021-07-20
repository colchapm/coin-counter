import coinCounter from './../src/js/coinCounter.js';


describe ('coinCounterRecursive', () => {
  test('should return error', () => { 
    const givenAmount = "hello"
    const newTest = new coinCounter();
    expect(newTest.coinCounterRecursive(givenAmount)).toEqual('Error, try again.');
  });
  test('should return number of pennies', () => { 
    const givenAmount = .09
    const newTest = new coinCounter();
    expect(newTest.coinCounterRecursive(givenAmount)).toEqual('your change back in pennies is: 4');
  });
  test('should return number of nickels', () => { 
    const givenAmount = .09
    const newTest = new coinCounter();
    expect(newTest.coinCounterRecursive(givenAmount)).toEqual('your change back in nickels is: 1');
  });

  

});

