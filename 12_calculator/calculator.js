const add = function (a, b) {
    return a + b;
};
const subtract = function (a, b) {
    return a - b;
}

const sum = function (array) {
    return array.reduce((total, current) => total + current, 0)
}

const multiply = function (array) {
    return array.reduce((total, current) => total * current)
}

const power = function (a, b) {
    return a ** b
}

const factorial = function (number) {
    if (number == 0) return 1;
    let total = 1;
    for (i = number; i >= 1; i--) {
        total = total * i;
    }
    return total
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
