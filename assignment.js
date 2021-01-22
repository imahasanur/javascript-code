//
// kilometer to meter convertion
function kilometerToMeter(kiloMeter){
  if(kiloMeter < 0){
    return "Measurement can not be negative, enter a positive value";
  }
  else if(!(typeof kiloMeter == "number")){
      return "Enter a number";
  }
  meter = kiloMeter *1000; // 1 km = 1000 meter;
  meter = Number(meter.toFixed(2));
  return meter;
}

//Caluculation of total amount of products
function budgetCalculator(ghori, phone, laptop){
  if(ghori < 0 || phone < 0 || laptop < 0){
    return "Amount can not be negative , enter a valid number";
  }
  else if(!(typeof ghori == "number") || !(typeof phone == "number") || !(typeof laptop == "number")){
    return "Enter a number";
  }
  else if((ghori%1 > 0) || (phone%1 > 0) || (laptop%1 > 0)){
    return "Enter a integer number of product";
  }
  var totalCost = (ghori*50) + (phone*100) + (laptop*500);
  return totalCost;
}

//Calculation of hotel cost of staying days
function hotelCost(days){
  if(days < 0){
    return "Days can not be negative";
  }
  else if(!(typeof days == "number")){
    return "Enter a number";
  }
  else if(days%1 > 0){
    return "Enter a integer number of days"
  }
  var cost = 0;
  var firstTen, secondTen, lastDays;
  firstTen = secondTen = lastDays = 0;
  if(days <= 10){
      firstTen = days * 100;   
  }
  else if(days <= 20){
    firstTen = (10 * 100);
    secondTen = (days - 10) * 80;
  }
  else{
    firstTen = (10 * 100);
    secondTen = (10 * 80);
    lastDays = (days - 20) * 50;
  }
  cost = firstTen + secondTen + lastDays;
  return cost;
}

//Finding a friend's longest name 
function megaFriend(friends){
  if(friends.length == 0){
    return "Give some name of your friends in an array";
  }
  var len = 0;
  var longestName = "";
  for(var name = 0; name < friends.length; name++){
    if(typeof friends[name] == "string" && friends[name].length > len){
      longestName = friends[name];
      len = friends[name].length;
    }
  }
  if(len == 0){
    return "Push some valid name of your friends"
  }
  return longestName;
}
