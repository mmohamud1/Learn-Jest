const functions = require('./functions');


// Test To find expected outcome
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
});

// Test to make sure outcome does not not occur
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
});

// PARAMETERS TO CHECK FOR TRUTHY AND FALSEY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeUndefined opposite of toBeUndefined
// toBeTruthy matched anything that an if statement treats as true
// toBeFalsey matched anything that an if statement treats as false

// Some examples below
test('should be null', () => {
    expect(functions.isNull()).toBeNull()
});