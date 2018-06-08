//var output = [];

var storeInList = function(){
  var output = [];
  return function(...args){
    for(i in args){
      output.push(args[i])
    }
    console.log("output: " + output);
    return output
  }

}

var sortList = function(aList){
  aList.sort(function(a,b){
    return a - b;
  });
  return aList

}

var myModule = {
  storeInList: storeInList,
  sortList: sortList,

}

module.exports = myModule;