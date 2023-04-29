let year = prompt("Enter a year: ");
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
  document.write("Year is Leap Year");
} else {
  document.write("Not Leap Year");
}