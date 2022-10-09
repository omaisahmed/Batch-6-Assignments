// Create a calculator using function + switch case
var operators = prompt("Enter Any Operator (+, -, * or /): ");
var no1 = parseFloat(prompt("Enter Your First Number: "));
var no2 = parseFloat(prompt("Enter Your Second Number: "));

function Calculator() {
switch (operators) {
  case "+":
    result = no1 + no2;
    console.log("Sum: " + (no1 + no2));
    break;

  case "-":
    result = no1 - no2;
    console.log("Subtraction: " + "Sum: " + (no1 - no2));
    break;

  case "*":
    result = no1 * no2;
    console.log("Multiplication: " + (no1 * no2));
    break;

  case "/":
    result = no1 / no2;
    console.log("Division: " + (no1 / no2));
    break;

  default:
    console.error("Invalid operator");
    break;
}
}
Calculator(no1, no2, operators);
