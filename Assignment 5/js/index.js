// Prompt for user input and return the value
var name = prompt("Please enter your name");
console.log( "Hello " + name + " !" );

// Parse prompt value in number perform example
var x = parseInt(prompt("Enter a Value","0"), 10);
console.log(x);

var y = parseFloat(prompt("Enter a Value", "23.6"));
console.log(y);

// Comparision Operators

// (==) Operator
var op1 = 7;
console.log(op1==10);

// (===) Operator
var op2 = 45;
console.log(op2===90);

// (!=) Operator
var op3 = 9;
console.log(op3!=3);

// (!==) Operator
var op4 = 2;
console.log(op4!==3);

// (>) Operator
var op5 = 5;
console.log(op5>3);

// (<) Operator
var op6 = 30;
console.log(op6>50);

// (>=) Operator
var op7 = 25;
console.log(op7>=30);

// (<=) Operator
var op8 = 42;
console.log(op8<=30);

// IF ELSE STATEMENT
var age = 18;
if (age >= 18) {
  console.log("Mubashir is an adult.");
} else {
  console.log("Mubashir is a child.");
}

var company = prompt('Which company created JavaScript?', '');
if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}

// ELSE IF STATEMENT
var pet = "dog";
if (pet === "lizard") {
  console.log("I own a lizard");
} else if (pet === "dog") {
  console.log("I own a dog");
} else if (pet === "cat") {
  console.log("I own a cat");
} else if (pet === "snake") {
  console.log("I own a snake");
} else if (pet === "parrot") {
  console.log("I own a parrot");
} else {
  console.log("I don't own a pet");
}