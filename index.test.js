const functions = require('./index')

test('Capitalize first letter', () => { 
    expect(functions.capitalize('hello')).toMatch(/Hello$/)
 })


test('Capitalize first letter', () => { 
    expect(functions.capitalize('TEST')).toMatch(/Test$/)
 })

test('Reverse string', () => { 
expect(functions.reverse('JavaScript')).toMatch(/tpircSavaJ/)
})

test('Reverse multiple words', () =>{
    expect(functions.reverse('Hello World')).toMatch(/dlroW olleH/)
})

test('Calculator: add', () => { 
    expect(functions.calculator.add(5,5)).toBe(10)
 })

test('Calculator: substract', () =>{
    expect(functions.calculator.substract(20,10)).toBe(10)
})

test('Calculator: multiply', () => {
    expect(functions.calculator.multiply(10,10)).toBe(100)
})

test('Calculator: divide', () => { 
    expect(functions.calculator.divide(100,10)).toBe(10)
 })

test('Cipher 1', () => { 
expect(functions.cipher('abcdefghijklmnopqrstuvwxyz', 3)).toBe('defghijklmnopqrstuvwxyzabc')
})

test('Cipher 2', () => { 
expect(functions.cipher('Hello World',3)).toBe('Hhoor Wruog')
})

test('Cipher 3', () => { 
expect(functions.cipher('Marcus Aurelius', 5)).toBe('Mfwhzx Azwjqnzx')
})

test('Analyze array 1', () => { 
    expect(functions.analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
 })

 test('Analyze array 2', () => { 
    expect(functions.analyzeArray([10,20,30,40,50,75])).toEqual({average: 37.5, min: 10, max: 75, length: 6});
  })