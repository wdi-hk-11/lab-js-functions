// Question 1
function maxOfTwoNumbers(a,b) {
   if (a<b) {
    return b
   } else {
    return a
   }
}

// Question 2
function maxOfThree(a,b,c) {
   if (a>b && a>c) {
    return a
   }
   if (b>a && b>c) {
    return b
   }
   if (c>a && c>b) {
    return c
   }
}

// Question 3
function isCharacterAVowel(a) {
   if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u") {
    return true
   } else {
    return false
   }
}

// Question 4

function sumArray(array) {
   sum = 0
  for (var i = 0; i<array.length; i++) {
     sum = sum + array[i]
  }
  return sum

}


// Question 4
function multiplyArray(array) {
   product = 1
   for (var i = 0; i<array.length; i++) {
     product = product * array[i]
   }
   return product

}


// Question 5
 // pseudo code:  find last character and build a new string using this, throw it away and then loop
// for (var i = 0; i<string.length; i++) {
 //    var newString = string[string.length - 1];
function reverseString(string){

      newString = ""
      for (var i = 0; i < string.length ; i++) {
       newString = newString + string.pop()

      }
      return newString
   }



// Question 8
function findLongestWord (array) {
  for (var i = 0, i<string.length; i++) {
     let length = array.length
     }
}

// Question 9
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
