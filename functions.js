// Question 1
function maxOfTwoNumbers(a,b) {
  return (a>b) ? a: b;
}

/*
//////Long version alternative for Question 1/////
function maxOfTwoNumbers(a,b) {
  if(a>b) {
    return a;
  } else {
    return b;
  }
}
*/

// Question 2
function maxOfThree(a,b,c) {
  return (a>b) ? a : ((b>c)? b : c);
}

/*
//////Long version alternatives for Question 2/////
function maxOfThree(a,b,c) {
  var max = a;
  if (max < b) {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  return max;
}

function maxOfThree(a,b,c) {
  if (a<b || a<c) {
    if (b>c) {
      return b;
      } else {
        return c;
      }
    } else {
      return a;
    }
}
*/

// Question 3
function isCharacterAVowel(character) {
  var vowels = /[aeiou]/i;
  return (character.length == 1)? (vowels.test(character)) : "try again with one character";
}

// Question 4
function sumArray(array) {
  var i, total = 0;
  for(i in array) {
    total += array[i];
  }
  return total;
}


// Question 4
function multiplyArray(array) {
  var i, total = 1;
  for(i in array) {
    total *= array[i];
  }
  return total;
}


// Question 5
function reverseString (str){
  total = "";
  for (var i=str.length-1;i>=0;i--) {
    total += str[i];
  }
  return total;
}


// Question 6
function findLongestWord (words) {
  var longestword = 0;
  for(var i in words) {
    if (longestword < words[i].length) {
    longestword= words[i].length;
    }
  }
  return longestword;
}

// Question 7
function filterLongWords (words,i) {
  var filteredArrays = [];
  for(var x in words) {
    if (i < words[x].length) {
      filteredArrays.push(words[x]);
    }
  }
  return filteredArrays;
}


// Bonus 1
//??????
String.prototype.reverseString = function() {
  return this.split('').reverse('').join('');
}

/*
//////Long version alternative for Bonus 1/////
String.prototype.reverseString = function() {
  var total = "";
  for (var i=this.length-1;i>=0;i--) {
    total += this[i];
  }
  return total;
}
*/

// Bonus 2
String.prototype.charactersOccurencesCount = function() {
  var arr = this.toLowerCase('').split('').sort('');
  var obj = {};
  for (var i in arr) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    //The function above is equivalent for obj[arr[i]] = obj[arr[i]] ? obj[arr[i]]+1 : 1;
  }
  return obj;
}

// Bonus 3
var numberOfArguments = function(){
  return arguments.length;
}


/*
SELF NOTE
- ternary operators (condition) ? true : false;
- regex is regular expression, usually used for matching pattern. There are lots of variation e.g. /n/i for case insensitive so n or N works; /^n/ for match beginning with n; useful for password validation or extracting data.
- Empty callback and use arguments as parameter when building the function's logic. The function will be multiplyArray(1,2,3,4); instead of multiplyArray([1,2,3,4]);
- Object Oriented Programming (OOP). Include this, constructors, prototypes where an object encapsulates state, behavior.
- obj[arr[i]] = (obj[arr[i]] || 0) + 1; is example for Short Circuit Evaluation. E.g. 'hey' || 0 returns 'hey'. Use when multiple case are expected to be true ( || )or false ( && ).
*/