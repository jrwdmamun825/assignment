function kilometerToMeter(kilo){
    var meter = 1000;
    var result = kilo * 1000;
    return result;
}
var output = kilometerToMeter(17);
console.log(output);




function budgetCalculator(watch, phone, laptop){
    var firstBudget = watch * 50;
    var secondBuget = phone * 100;
    var thirdBudget = laptop * 500;
    var total = firstBudget + secondBuget + thirdBudget;
    return total;
}
var output = budgetCalculator(2,2,2);
console.log(output);


function hotelCost(days){
    var cost = 0;
    if(days <= 10){
        cost = days * 100;
    }
    else if(days <= 20){
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;

}

var output = hotelCost(26);
console.log(output);
 



function megaFriend(arra)
  {
    var max = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var element = arra[i].length;
        if (element > max) {
            ans = arra[i];
            max = element;
        }
    }
    return ans;
}


var result = megaFriend(['rafiq', 'rifat', 'sifat','solimullah', 'rakibbb']);
console.log(result);