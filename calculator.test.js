const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  //odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test ('can add two large positive numbers', () => { 
    expected = 5000;
    actual = sum(2500, 2500);
    expect(actual).toBe(expected);
    
  });

  test ('can add two negative numbers', () => {
    expected = -20;
    actual = sum(-15, -5);
    expect(actual).toBe(expected);
    
  });

  test('can add zero', () => {
    expected = 26;
    actual = sum(26, 0);
    expect(actual).toBe(expected);
    
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 5;
    actual = subtract(7, 2);
    expect(actual).toBe(expected);
  
  });

test('can subtract two negative numbers', () => {
    expected = -25;
    actual = subtract(-50, -25);
    expect(actual).toBe(expected);

  });

});


describe('multiply', () => {
  test('can multiply two large numbers', () => {
    expected = 25000000;
    actual = multiply(5000, 5000);
    expect(actual).toBe(expected);

  });

  test('can multiply with zero', () => {
      expected = 0;
      actual = multiply(70, 0);
      expect(actual).toBe(expected);
  });

});

describe('divide', () => {
  test('can divide two negative numbers', () => {
    expected = 15;
    actual = divide(-30, -2);
    expect(actual).toBe(expected);

  });

  test('can divide two small numbers', () => {
    expected = 2;
    actual = divide(4, 2);
    expect(actual).toBe(expected);

  });

});

describe('modulus', () => {
  test('return 0 when number is multiple of 5', () => {
    expected = 0;
    actual = modulus(25, 5);
    expect(actual).toBe(expected);
  });

  test('return remainder when number is not multiple of 5', () => {
    expected = 2;
    actual = modulus(12, 5);
    expect(actual).toBe(expected);
  });
  
});

describe('even', () => {
  test('should return true when number is even', () => {
    expected = true;
    actual = even(26);
    expect(actual).toBe(expected);
  });

  test('should return false when number is NOT even', () => {
    expected = false;
    actual = even(27);
    expect(actual).toBe(expected);

  })
});

// describe('odd', () => {
//   test('should return true when number is odd', () => {
//     expected = false;
//     actual = odd(27);
//     expect(actual).toBe(expected);

//   });


//   test('should return true when large number is odd', () => {
//     expected = true;
//     actual = odd(5100000000000001)
//     expect(actual).toBe(expected);
//   });

