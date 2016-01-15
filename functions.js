// Question 1
function maxOfTwoNumbers(x,y) {
  if (x < y) {
    return y;
  } else if (x > y) {
    return x;
  }
}

// Question 2
function maxOfThree(x,y,z) {
  if (x > y && x > z) {
    return x;
  }

  if (y > x && y > z) {
    return y;
  }

  if (z > x && z > y) {
    return z;
  }
}

// Shorter Solution
function maxOfThree(x,y,z){
  return maxOfTwo(x, maxOfTwo(y, z));
}

// Question 3
function isCharacterAVowel(c) {
  var vowels = ['a','e','i','o','u'];
  if (vowels.indexOf(c) !== -1) {
    return true;
  }
  return false;
}

// for loop solution
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
function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function multiplyArray(arr) {
  var product = arr[0];
  for (var i = 1; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

function multiplyArray(arr){
  return arr.reduce(function(previous, current){
    return previous * current;
  });
}

// Question 5
var reverseString = function(str) {
  var arr = str.split('');
  var revArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr.join('');
};

function reverseString(x) {
  var reverse ="";
  for (var i = x.length - 1; i >= 0; i--){
    reverse += x[i];
  }
  return reverse;
}

// Question 5 alternative answer
var reverseString = function() {
  return this.split('').reverse().join('');
};

// Question 6
function findLongestWord(arr) {
  var longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}

// Question 7
function filterLongWords (arr,num) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length > num){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Bonus 1
String.prototype.reverse = function(){
  return this.split('').reverse().join('');
};

// Bonus 2
function charactersOccurencesCount(stringToCount) {
  var characters = {};
  // replacing all Capitals by Lowercase letters and removing spaces
  stringToCount = stringToCount.toLowerCase().replace(/\s/g, '');
  stringToCount.split("").forEach(function(l){
    // characters[l] = (isNaN(characters[l]) ? 1 : characters[l] + 1);
    characters[l] = (!!characters[l]) ? 1 : characters[l] + 1);
  });
  return characters;
}

// Bonus 3
var numberOfArguments = function(){
  return args.length;
};
