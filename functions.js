// Question 1
if (a > b) {
  c = a;
}
else {
  c = b;
}

// Question 2
function maxOfThree(x,y,z){
  return maxOfTwo(x, maxOfTwo(y, z));
}


// Question 3
function isCharacterAVowel(x) {
  var vowels = ['a','e','i','o','u'];
  for (i = 0; i < vowels.length; i++) {
    if (x == vowels[i]) {
      return true;
    }
  }
  return false;
}


// Question 4
function multiplyArray(arr){
  return arr.reduce(function(previous, current){
    return previous * current;
  });
}


// Question 5
function reverseString(x) {
  var reverse ="";
  for (var i = x.length - 1; i >= 0; i--){
    reverse += x[i];
  }
  return reverse;
}


// Question 6
function findLongestWord () {

}

// Question 7
function filterLongWords () {

}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}

// Bonus 3
var numberOfArguments = function(){

}
