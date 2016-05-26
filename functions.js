// Question 1
function maxOfTwoNumbers(a,b) {
  if (a>b) {
    return a;
  }else{
    return b;
  }
}
maxOfTwoNumbers(1,8);

// Question 2
function maxOfThree(a,b,c) {
Math.max(a,b,c);
}
maxOfThree(4,53,6);

// Question 3
function isCharacterAVowel(a) {
  if (a=="a"){
    return true;
  }else if (a=="e"){
    return true;
  }else if (a=="i"){
    return true;
  }else if (a=="o"){
    return true;
  }else if (a=="u"){
    return true;
  }else{
    return false;
  }
}
isCharacterAVowel("c");

// Question 4
var sumArray = function (sumA) {
var sumA = [1,2,3,4];
var result =0;

for (var i=0; i<sumA.length;i++) {
    result += sumA[i];
 }
 return result;
}
sumArray();

// Question 4
function multiplyArray(multiplyA) {
var multiplyA = [1,2,3,4];
var result = 1;
for (var i=0; i<multiplyA.length;i++) {
    result *= multiplyA[i];
 }
return result;
}
multiplyArray();


// Question 5
var reverseString = function (string){
var string = "jag testar";
var reversed = "";
//I have no idea...


// Question 6
function findLongestWord (words) {
  var words = ["hi", "hello", "goodbye"];
  var longest = 0;
  for(var i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
  }
  return longest;
}
findLongestWord();

// Question 7
function filterLongWords (i) {
  var words = ["html", "CSS", "Javascript","Bootstrap"];
  var longwords = [];
  for(x=0; x<words.length; x++) {
    if (words[x].length>i) {
      longwords.push(words[x]);
    }
  }
  return longwords;
}
filterLongWords(3);

// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}

// Bonus 3
var numberOfArguments = function(){

}
