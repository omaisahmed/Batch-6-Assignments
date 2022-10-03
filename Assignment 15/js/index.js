// Create a function which takes a name in its parameter.Call that function like replaceNames("Sana");
var names = [
  ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
  ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
  ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
  ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
];

function replaceNames(names, username) {
  for (var i = 0; i < names.length; i++) {
    names[i][4] = username;
  }
}
replaceNames(names, "Omais");
console.log(names);
