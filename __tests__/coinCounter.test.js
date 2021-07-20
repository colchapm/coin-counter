import coinCounter from './../src/js/coinCounter.js';


describe ('coinCounterRecursive', () => {
  test('should return error', () => { 
    const givenAmount = "hello"
    const newTest = new coinCounter();
    expect(newTest.coinCounterRecursive(givenAmount)).toEqual('Error, try again.');
  });
  test('should return number of pennies', () => { 
    const givenAmount = .04
    const newTest = new coinCounter();
    expect(newTest.coinCounterRecursive(givenAmount)).toEqual('your change back is in pennies: 4');
  });

  

});

