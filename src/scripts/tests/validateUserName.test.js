const validateUserName = require('../logic/mainMenuLogic');

test('Default test 1', () => {
    expect(validateUserName('John Doe')).toBe('John Doe');
});

test('Default test 2', () => {
    expect(validateUserName('Jane Doe')).toBe('Jane Doe');
});

test('Not string', () => {
    expect(validateUserName(1)).toBe('Admiral');
});

test('Empty value', () => {
    expect(validateUserName('')).toBe('Admiral');
});

test('Null value', () => {
    expect(validateUserName(null)).toBe('Admiral');
});

test('Undefined value', () => {
    expect(validateUserName(undefined)).toBe('Admiral');
});

test('No argument', () => {
    expect(validateUserName()).toBe('Admiral');
});

test('Whitespaces', () => {
    expect(validateUserName('    ')).toBe('Admiral');
});


  

