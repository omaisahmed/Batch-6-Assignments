// 1) Write a program that displays current date and time in your browser.
var date = new Date();
var dt = date.toDateString();
var time = date.toLocaleTimeString();
console.log("Date: " + dt);
console.log("Time: " + time);

// 2) Write a program that ask user to enter number of month and show the month in words. For example December.
var month_name = function (dt) {
  mlist = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return mlist[dt.getMonth()];
};
var userInput = prompt("Please enter month no");
console.log("Month Name: " + month_name(new Date(userInput)));

// 3) Write a program that tests whether it's before noon and alert “Its AM” else “its PM”
var a = new Date();
var b = a.toString();
var c = b.slice(16, 19);
if (c === "12:") {
  console.log("It's PM");
} else if (c === "13:") {
  console.log("It's PM");
} else if (c === "14:") {
  console.log("It's PM");
} else if (c === "15:") {
  console.log("It's PM");
} else if (c === "16:") {
  console.log("It's PM");
} else if (c === "17:") {
  console.log("It's PM");
} else if (c === "18:") {
  console.log("It's PM");
} else if (c === "19:") {
  console.log("It's PM");
} else if (c === "20:") {
  console.log("It's PM");
} else if (c === "21:") {
  console.log("It's PM");
} else if (c === "22:") {
  console.log("It's PM");
} else if (c === "23:") {
  console.log("It's PM");
} else if (c === "24:") {
  console.log("It's AM");
} else if (c === "01:") {
  console.log("It's AM");
} else if (c === "02:") {
  console.log("It's AM");
} else if (c === "03:") {
  console.log("It's AM");
} else if (c === "04:") {
  console.log("It's AM");
} else if (c === "05:") {
  console.log("It's AM");
} else if (c === "06:") {
  console.log("It's AM");
} else if (c === "07:") {
  console.log("It's AM");
} else if (c === "08:") {
  console.log("It's AM");
} else if (c === "09:") {
  console.log("It's AM");
} else if (c === "10:") {
  console.log("It's AM");
} else if (c === "11:") {
  console.log("It's AM");
}

// 4) Create a date object of the starting date of this Independence Day and alert the number of days past since the event.
today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
  cmas.setFullYear(cmas.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((cmas.getTime() - today.getTime()) / one_day) +
    " Number of days past from Independence Day: "
);

// 5) Write a program to ask the user about his age. Calculate and show his birth year in your browser.
var ageInYears = prompt("Enter your age");
var ageInMillis = ageInYears * 365 * 24 * 60 * 60;
var dateOfBirth = new Date(new Date().getTime() - ageInMillis);
console.log(dateOfBirth);
