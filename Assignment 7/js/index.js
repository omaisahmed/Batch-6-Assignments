// Q1A
var students = ["Ali", "Faizan", "Sami", "Saad"];

// Q1B
var obtainedMarks = [100, 200, 300, 400];

// Q1C
var totalMarks = 500;
var percentage1 = (obtainedMarks[0] / totalMarks) * 100;
var percentage2 = (obtainedMarks[1] / totalMarks) * 100;
var percentage3 = (obtainedMarks[2] / totalMarks) * 100;
var percentage4 = (obtainedMarks[3] / totalMarks) * 100;

if (percentage1 < 40) {
  grade1 = "Fail";
} else {
  grade1 = "Pass";
}

if (percentage2 < 40) {
  grade2 = "Fail";
} else {
  grade2 = "Pass";
}

if (percentage3 < 40) {
  grade3 = "Fail";
} else {
  grade3 = "Pass";
}

if (percentage4 < 40) {
  grade4 = "Fail";
} else {
  grade4 = "Pass";
}

// Q1D
console.log(
  "Score of " +
    students[0] +
    " is " +
    obtainedMarks[0] +
    ". The percentage is " +
    percentage1 +
    "%. The grade is " +
    grade1
);

console.log(
     "Score of " +
       students[1] +
       " is " +
       obtainedMarks[1] +
       ". The percentage is " +
       percentage2 +
       "%. The grade is " +
       grade1
   );

   console.log(
     "Score of " +
       students[2] +
       " is " +
       obtainedMarks[2] +
       ". The percentage is " +
       percentage3 +
       "%. The grade is " +
       grade1
   );

   console.log(
     "Score of " +
       students[3] +
       " is " +
       obtainedMarks[3] +
       ". The percentage is " +
       percentage4 +
       "%. The grade is " +
       grade1
   );

//    Q2A
var colors = ['red','green','blue'];
console.log(colors);

// Q2B
var user_input1 = prompt('What color you want to add at the beginning?');
var user_output1 = colors.unshift(user_input1);
console.log(user_output1);
console.log(colors);

// Q2C
var user_input2 = prompt('What color you want to add at the end?');
var user_output2 = colors.push(user_input2);
console.log(user_output2);
console.log(colors);

// Q2D
var user_output3 = colors.unshift("yellow","orange");
console.log(user_output3);
console.log(colors);

// Q2E
var user_output4 = colors.push("purple","brown");
console.log(user_output4);
console.log(colors);

// Q2F
var user_output5 = colors.shift(0);
console.log(user_output5);
console.log(colors);

// Q2G
var user_output6 = colors.pop(0);
console.log(user_output6);
console.log(colors);

// Q2H
var user_input7 = prompt('At which index you want to add color?');
var user_input8 = prompt('Which color you want to add on that index?');
var user_output7 = colors.splice(user_input7,0,user_input8);
console.log(user_output7);
console.log(colors);

// Q2I
var user_input9 = prompt('At which index you want to delete color?');
var user_input10 = prompt('How many colors you want to delete?');
var user_output9 = colors.splice(user_input9,user_input10);
console.log(user_output9);
console.log(colors);

// Q3
// Multiplication Table
var number = parseInt(prompt('Enter any number: '));
for(var i = 1; i <= 10; i++) {
     var result = i * number;
    console.log(number + "x" + i + "=" + result);
}