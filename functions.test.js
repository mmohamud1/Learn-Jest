const functions = require("./functions");

// Test To find expected outcome
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// Test to make sure outcome does not not occur
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// PARAMETERS TO CHECK FOR TRUTHY AND FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeUndefined opposite of toBeUndefined
// toBeTruthy matched anything that an if statement treats as true
// toBeFalsy matched anything that an if statement treats as false

/* Falsy is values such as 0, null and undefined where Truthy are actual values such as strings and values */

// Some examples below
test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test("should be truthy", () => {
  expect(functions.checkValue(5)).toBeTruthy();
});

// Test function with object or array with toEqual
test("user should be Mo Mohamud object", () => {
  expect(functions.createUser()).toEqual({ firstName: "Mo", lastName: "Mohamud" });
});

// Less than and greater than with function created in this file
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600)
})

// Test using Regular Expressions (Regex)
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
})