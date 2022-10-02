var text = "the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog";

// Task : 1) Replace these letters ("quick" , "brown" , "fox" , "lazy" , "dog") with ("lazy" , "black" , "cat" , "big" , "wall") respectively using slice(). //In one block of code
var flag = false;
for(var i=0; i<text.length; i++) {
  if((text.slice(i, i+5) === 'quick')) {
    text = text.slice(0,i) + 'lazy' + text.slice(i+5);
    flag = true;
  }
  if((text.slice(i, i+5) === 'brown')) {
    text = text.slice(0,i) + 'black' + text.slice(i+5);
    flag = true;
  }
  if((text.slice(i, i+3) === 'fox')) {
    text = text.slice(0,i) + 'cat' + text.slice(i+3);
    flag = true;
  }
  if((text.slice(i, i+4) === 'lazy')) {
    text = text.slice(0,i) + 'big' + text.slice(i+4);
    flag = true;
  }
  if((text.slice(i, i+3) === 'dog')) {
    text = text.slice(0,i) + 'wall' + text.slice(i+3);
    flag = true;
  }
}
  if(flag){
    console.log(text);
  }

//   Task : 2) Replace the first occurrence of letter "jumps" with "bounce" using indexOf().
var indexOfJumps = text.indexOf("jumps");
text = text.slice(0, indexOfJumps) + "bounce" + text.slice(indexOfJumps + 5);
console.log(text);

// Task : 3) Replace the letter "brown" with "black" from last using lastIndexOf().
var lastIndexOfBrown = text.lastIndexOf("brown");
text = text.slice(0, lastIndexOfBrown) + "black" + text.slice(lastIndexOfBrown + 5);
console.log(text);

// Task : 4) Replace the first occurrence of letter "The" with "A" using replace().
var text = text.replace("the", "A");
console.log(text);

// Task : 5) Replace "jumps" with "jumping" from complete text using replace().
var text = text.replace(/jumps/g, "jumping");
console.log(text);