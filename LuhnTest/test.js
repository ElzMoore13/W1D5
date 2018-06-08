var assert = require("chai").assert;
var luhnChecker = require('./lib/luhnChecker');

describe("Luhn Checker", function(){
  it("should return the correct number with doubled values at every second position", function(){
      var expectedResult = 1438532;
      var actualResult = luhnChecker.doubleNum(1234562);
      var test = expectedResult === actualResult;
      console.log(actualResult);

      assert.isTrue(test);
  });

  it("should return the correct sum of all digits", function(){
      var expectedResult = 26;
      var actualResult = luhnChecker.sums(1438532);
      var test = expectedResult === actualResult;
      assert.isTrue(test);
  });


  it("should return true if sum % 10 == 0 ie, valid", function(){
      var expectedResult = true;
      var actualResult = luhnChecker.mod(180);
      assert.isTrue(actualResult);

  });

  it("shoul return true if the checker actually returns the correct answer to a given number", function(){
    var expectedResult = true
    var actualResult = luhnChecker.ultimateCheck(79927398713)
    assert.isTrue(actualResult);
  })






});