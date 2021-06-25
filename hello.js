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