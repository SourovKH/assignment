const generateSquare = require("../src/shapes/square.js");
const test = require("../lib/testing.js");

const testSquare = function() {
  test.assertEquality("****\n****\n****\n****\n", generateSquare.square(4), 'should give square of given length');
}

testSquare();
