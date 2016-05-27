// Question 1
function maxOfTwoNumbers(x, y) {
  return Math.max(x, y);
}

// Question 2
function maxOfThree(x, y, z) {
  return Math.max(x, y, z);
}

// Question 3
function isCharacterAVowel(x) {
console.log( x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u');
}

// Question 4
function sumArray(x) {
  var result = 0;
  for (var i=0; i<x.length ; i++) {
    result += x[i];
  }
  return result;
}

sumArray([1,2,3,4]);

// Question 5
function multiplyArray(x){
  var result = 1;
  for (var i=0; i<sum.length ; i++) {
    result *= x[i];
  }
  return result;
}

multiplyArray([1,2,3,4]);

// Question 6
var reverseString = function (s){
  return s.split('').reverse().join('');
};


// Question 7
function findLongestWord (s) {
 for (var i=0; i<s[i].length; i++) {
    return Math.max(s[i].length);
// only return the 1st word, can't figure it out yet
 }
}
findLongestWord(s);


// Question 8
function filterLongWords (s, x) {
  var x;
  var y;
  if (var i=0; s[i].length>x; i++) {
    s.push(s[i]) = y;
  }
  return y;
}
// unexpected var, what's wrong?


// Bonus 1
//??????
String.prototype.reverseString = function(s) {
      var x = this.indexOf(s);
      if ( x === -1) {
        console.log(this.split('').reverse().join(''));
      }
};
"General Assembly".reverseString()


// Bonus 2
function charactersOccurencesCount() {


}

// Bonus 3
var numberOfArguments = function(){

}
