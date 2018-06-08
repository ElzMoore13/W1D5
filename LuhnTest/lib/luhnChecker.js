// 1. From the rightmost digit, which is the check digit, and moving left, double the value of every second digit. The check digit is not doubled, the first digit doubled is immediately to the left of the check digit. If the result of this doubling operation is greater than 9 (e.g., 8 × 2 = 16), then add the digits of the product (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or, alternatively, the same result can be found by subtracting 9 from the product (e.g., 16: 16 − 9 = 7, 18: 18 − 9 = 9).
// 2. Take the sum of all the digits.
// 3. If the total modulo 10 is equal to 0 (if the total ends in zero)
// then the number is valid according to the Luhn formula; else it is not valid.


var lunhChecker = {

  doubleNum: function doubleNum(num){
    var numArray = num.toString().split("");
    var length = numArray.length;
    for(var i = length - 2; i >= 0 ; i-=1){
      numArray[i] = numArray[i] * 2;
      if (numArray[i] > 9){
        numArray[i] = numArray[i].toString().split('');
        var newNumber = 0;
        for(j in numArray[i]){
          newNumber += Number(numArray[i][j]);
        }
        numArray[i] = newNumber;
      }
      i-=1;
    }

    return Number(numArray.join(''));


  },


  sums: function sums(num){
    var numArray = num.toString().split('');
    var sum = 0;
    for(i in numArray){
      sum += Number(numArray[i]);
    }
    return sum;

  },


  mod: function mod(num){
    if(num % 10 === 0)
      return true;
    else
      return false;


  },

  ultimateCheck: function ultimateCheck(num){
    var isValid = this.doubleNum(num);
    isValid = this.sums(isValid);
    isValid = this.mod(isValid);
    return isValid;
  }


}


module.exports = lunhChecker;