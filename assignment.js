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
// console.log(kilometerToMeter(null))

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
// console.log(budgetCalculator(3,.35,2))
