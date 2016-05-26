// Question 1
function maxOfTwoNumbers(a,b) {
  // if a > b return a, else b
  if (a > b) {
    console.log(a);
  }
  else {
    console.log(b);
  }
}

// Question 2
function maxOfThree(a,b,c) {
  // if a > b store a, else store b
  // if stored > c return stored, else c
  var max = a;
  if (a < b) {
    max = b;
  }
  if (max < c){
    max = c;
  }
  console.log(max)
}

// Question 3
function isCharacterAVowel(string) {
  // if a is ('a' or 'i' or 'o'...) return yes else no

  var vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y']
  if (vowels.indexOf(string) > -1) {
    console.log(true);
} else {
    console.log(false);
}
  }

// Question 4
function sumArray(array) {
  // set sum =0
 // for each element of array add to sum
 // print sum
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum)
}


// Question 4
function multiplyArray(array) {
  // set multiple =0
 // for each element of array AFTER 1st multiply to multiple
 // print sum
  var multiple = array[0];
  for (var i = 1; i < array.length; i++) {
    multiple = multiple * array[i]
  }
  console.log(multiple)
}


// Question 5
function reverseString(string){
  // find length of string
  // create newstring
  // first element of newstirng is last element of first string
  // do until 0th element of first string
  var newstring = "";
  for (var i = string.length - 1; i >= 0; i--) {
    newstring += string[i];
  }
  console.log(newstring);
}


// Question 6
function findLongestWord(array) {
  // foreach element of array find length and store
  // if next element > stored update stored
  // returned stored
  var longestword = array[0].length;
  for (var i = 0; i < array.length; i++) {
    longestword = Math.max(array[i].length, longestword);
  }
  console.log(longestword)
}

// Question 7
function filterLongWords (array,x) {
  // for each element of array find length
  // if length is greater than x add to new array
  // return new array
  var newarray = []
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > x) {
      newarray += array[i]
    }
  }
  console.log(newarray)
}


// Bonus 1
//??????
String.prototype.reverseString = function (string){};

function reverseString(string){
  // find length of string
  // create newstring
  // first element of newstirng is last element of first string
  // do until 0th element of first string
  var newstring = "";
  for (var i = string.length - 1; i >= 0; i--) {
    newstring += string[i];
  }
  console.log(newstring);
}


function reverseString(string){
  // find length of string
  // create newstring
  // first element of newstirng is last element of first string
  // do until 0th element of first string
  var newstring = "";
  for (var i = string.length - 1; i >= 0; i--) {
    newstring += string[i];
  }
  console.log(newstring);
}

// Bonus 2
function charactersOccurencesCount() {

}

// Bonus 3
function numberOfArguments(){
  console.log(arguments.length);
}
