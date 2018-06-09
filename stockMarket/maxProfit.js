function maxProfitBrute(numArray){
  var maxProfit = 0;
  for(var i = 0; i < numArray.length; i++){
    for(var j = i + 1; j < numArray.length; j++){
      if(numArray[j] - numArray[i] > maxProfit){
        maxProfit = numArray[j] - numArray[i];
      }
    }
  }
  return maxProfit;

}

function maxProfitElegant(numArray){

  var length = numArray.length;
  if(length === 2){
    return numArray[1] - numArray[0];
  }
  else {
    var allProfitScenarios = [];
    numArray.forEach(function(element){
      allProfitScenarios.push(element - numArray[0])
    })

    return Math.max(...allProfitScenarios.concat(maxProfitElegant(numArray.slice(1))))
  }



}

console.log(maxProfitBrute([45, 24, 35, 31, 40, 38, 11])); // answer should be 16
console.log(maxProfitElegant([45, 24, 35, 31, 40, 38, 11])); // answer should also be 16