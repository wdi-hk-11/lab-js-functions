// Question 1
function maxOfTwoNumbers(a, b) {
    if(a < b) {
      return b;
  } else if (a > b) {
    return a;
  }
}

// Question 2
function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  }

  if (b > a && b > c) {
    return b;
  }

  if (c > a && c > b) {
    return c;
  }
}

// Question 3
function isCharacterAVowel(x) {
  var vowels = ['a','e','i','o','u','A','E','I','O','U'];
  for (i = 0; i < vowels.length; i++) {
    if (x == vowels[i]) {
      return true;
    }
  }
  return false;
}

// Question 4
function sumArray() {
var sum=1;
numbers forEach(function(i)) {sum *=i}
console.log(sum);
}
//1 liner method
var sumArray = function (arr){
  return arr.reduce(function(prev, curr) {retyrn prev + curr;}, 1);
}

// Question 5
function multiplyArray() {

}


// Question 6
var reverseString = function (){

};


// Question 7
function findLongestWord(arr) {
  var longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}

// Question 9
function filterLongWords (i) {
 var words = ["html", "CSS", "Javascript","Bootstrap"];
 var longwords = [];
 for(x=0; x<words.length; x++) {
   if (words[x].length>i) {
     longwords.push(words[x]);
   }
 }
 return longwords;


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}

// Bonus 3
var numberOfArguments = function(){

}
