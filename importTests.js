var myModule = require('./myModule');

var test = myModule.storeInList();
test(6,7,89)
var newList = test(30, 3,5,800,1,4,9);

console.log(myModule.sortList(newList));