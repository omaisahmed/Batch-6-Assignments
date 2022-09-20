var person = prompt("Please enter your name");
console.log( "Hello " + person + " !" );

var questions = [
     {
           question: "What does HTML stand for?\n(a) Hyper Text Preprocessor\n(b) Hyper Text Markup Language\n(c) Hyper Text Multiple Language",
           answer: "b"
     },
     {
          question: "What does CSS stand for?\n(a) Common Style Sheet\n(b) Colorful Style Sheet\n(c) Cascading Style Sheet",
          answer: "c"
     },
     {
          question: "What does PHP stand for?\n(a) Hometext Preprocessor\n(b) Hypertext Preprocessor\n(c) Preprocessor Home Preprocessor",
          answer: "b"
     },
     {
          question: "What does SQL stand for?\n(a) Structured Query Language\n(b) Statement Question Language\n(c) Stylesheet Query Language",
          answer: "a"
     },
     {
          question: "Who invented JavaScript?\n(a) Douglas Crockford\n(b) Sheryl Sandberg\n(c) Brendan Eich",
          answer: "c"
     },
     {
          question: "Which one of these is a JavaScript package manager?\n(a) TypeScript\n(b) npm\n(c) Node.js",
          answer: "b"
     },
     {
          question: "What does XML stand for?\n(a) eXecutable Multiple Language\n(b) eXtensible Markup Language\n(c) eXamine Multiple Language",
          answer: "b"
     },
     {
          question: "Which tool can you use to ensure code quality?\n(a) Angular\n(b) jQuery\n(c) ESLint",
          answer: "c"
     },
     {
          question: "Which is not a principle of Object Oriented Programming?\n(a) Abstraction\n(b) Polymorphism\n(c) Impressionism",
          answer: "c"
     },
     {
          question: "What type of inheritence pattern is utilized in JavaScript?\n(a) Prototypal\n(b) Classical\n(c) Trust",
          answer: "a"
     },
];
var score = 0;

for(var i = 0; i < questions.length; i++){
     var response = prompt(questions[i].question);
     if(response == questions[i].answer){
          score++;
          console.log("Score " + score + "/" + questions.length);
          
     } else {
          score--;
          console.log("Score " + score + "/" + questions.length);
     }
}

if (score < 6){
     console.log("Grade : F");      
     } 
   else if (score < 7) {
           console.log("Grade : D"); 
             } 
   else if (score < 8) 
        {
           console.log("Grade : C"); 
   } else if (score < 9) {
           console.log("Grade : B"); 
   } else if (score < 10) {
           console.log("Grade : A"); 
}
// console.log("Score " + score + "/" + questions.length);
console.log("Percentage " + score/questions.length * 100 + "%");