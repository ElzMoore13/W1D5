function canPurchase(availMoney){
  return Math.floor(availMoney / 2);
}

function returnEmpties(empties){
  return Math.floor(empties / 2);
}

function returnCaps(empties){
  return Math.floor(empties / 4);
}

function poppinBottles(){
  var investment = process.argv.slice(2);
  var layoverEmpties = 0;
  var layoverCaps = 0;
  var totalBottles = 0;
  console.log(investment, layoverEmpties, layoverCaps, totalBottles)

  return function pop(){

    var popBack = 0;
    var popBackEmpties = 0;
    var popBackCaps = 0;

    var curBuy = canPurchase(investment);


    totalBottles += curBuy;

    layoverEmpties += curBuy
    if(layoverEmpties > 1){
      popBackEmpties = returnEmpties(layoverEmpties)
      layoverEmpties -= popBackEmpties * 2
    }

    layoverCaps += curBuy;
    if(layoverCaps > 3){
      popBackCaps = returnCaps(layoverCaps)
      layoverCaps -= popBackCaps * 4
    }


    popBack = popBackEmpties + popBackCaps;

    investment = popBack;
    investment = Math.floor(investment * 2)

    if(investment > 1)
      return pop()
    else{
      console.log("TOTAL BOTTLES: " + totalBottles);
      console.log("REMAINING BOTTLES: " + layoverEmpties);
      console.log("REMAINING CAPS: " + layoverCaps);
      console.log("TOTAL EARNED: ");
      console.log("\tBOTTLES: " + Math.floor(totalBottles / 2));
      console.log("\tCAPS: " + Math.floor(totalBottles / 4));
      return totalBottles;
    }

  }

}


var pop = poppinBottles()();
