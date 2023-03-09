const year = prompt("Enter a year");

function isLeapapYear(year) {
  if (year %4 === 0) {
    
    if (year % 100 === 0) {
     
      if (year % 400 === 0) {
        
        return true;
      } else {
        return false;
      } 
    } else {
      return true;
   }
  } else {
    return false;
  }
}
if (isLeapapYear(year) === true){
  document.write(`${year} is leap year`);
} else {
  document.write(`${year} is not leap year`);
}