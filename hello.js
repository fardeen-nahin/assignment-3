
// 1. kilometer to meter


function kilometerToMeter(kilometer) {
  if(kilometer > 0) {
      var result = kilometer * 1000;
      return result;
  }
  else {
      console.log("Value Could not be zero or negetive")
  }
}
var conv = kilometerToMeter(9);
console.log(conv);


//2. Budget Calculator


function budgetCalculator(clcNum, mobNum, lapNum) {
clockPrice = clcNum * 50;
mobilePrice = mobNum * 100;
laptopPrice = lapNum * 500;
totalPrice = clockPrice + mobilePrice + laptopPrice;
return totalPrice;
}
var netPrice = budgetCalculator(2, 1, 1);
console.log(netPrice);

// 3. hotel cost


function hotelCost(day) {
if (day < 11) {
  cost = day * 100;
} else if (day > 10 && day < 21) {
  offer = day - 10;
  offer = offer * 80;
  cost = offer + 1000; //1000 = first 10 day cost.
} else {
  offer = day - 20;
  offer = offer * 50;
  cost = offer + 1800; // 1800 =  First 10 day cost + Second Ten day cost.
}
return cost;
}

var totalCost = hotelCost(24);
console.log(totalCost);

//4. mega friend


function megaFriend(largeName) {
var leng = 0;
var largeElement;

for (i = 0; i < largeName.length; i++) {
  if (largeName[i].length > leng) {
    leng = largeName[i].length;
    largeElement = largeName[i];
  }
}
return largeElement;
}
var friendsArray = ["Hasan", "Fardeen", "Safee", "Abdul-Qahhar"];
var theLargestName = megaFriend(friendsArray);
console.log("final = ", theLargestName);