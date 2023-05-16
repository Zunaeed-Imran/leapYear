let year = prompt("Enter a Year: ");
let month = prompt("Enter a Month: ");
let days;
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
  if (month == "02") {
    days = 29;
  } else if (month == "09" || month == "04" || month == "06" || month == "11") {
    days = 30;
  } else {
    days = 31;
  }
} else {
  if (month == "02") {
    days = 28;
  } else if (month == "09" || month == "04" || month == "06" || month == "11") {
    days = 30;
  } else {
    days = 31;
  }
}

document.write(days);