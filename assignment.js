//
// kilometer to meter convertion
function kilometerToMeter(kiloMeter){
  if (kiloMeter < 0){
    return "measurement can not be negative, enter a positive value";
  }
  meter = kiloMeter *1000; // 1 km = 1000 meter;
  meter = Number(meter.toFixed(2));
  return  typeof meter;
}

