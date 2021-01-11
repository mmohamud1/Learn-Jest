// Objects with functions to test
const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Mo", lastName: "Mohamud" };
    return user;
  },
};

module.exports = functions;
