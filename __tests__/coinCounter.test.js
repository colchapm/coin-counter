import coinCounter from './../src/js/coinCounter.js';


describe ('coinCounterRecursive', () => {
  test('should return error', () => { 
    const givenAmount = "hello"
    const newTest = new coinCounter();
    expect(newTest.coinCounterRecursive(givenAmount)).toEqual('Error, try again.');
  });
  test('should return hello world', () => { 
    const givenAmount = 10
    const newTest = new coinCounter();
    expect(newTest.coinCounterRecursive(givenAmount)).toEqual('hello world');
  });

});

