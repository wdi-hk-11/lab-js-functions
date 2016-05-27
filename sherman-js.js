// Question 1
function maxOfTwoNumbers(numArray) {
  return Math.max.apply(null, numArray);
}	
maxOfTwoNumbers([1,2,3]);

// Question 2
function maxOfThree(numArray) {
  return Math.max.apply(null, numArray);
}	
maxOfThree([1,2,3]);

// Question 3
function isCharacterAVowel(a) {
	var vowels = ['a','e','i','o','u','A','E','I','O','U'];
	for (i = 0; i < vowels.length; i++) {
	if (a == vowels[i]) {
		return true;
	}
		return false;
	}
}
isCharacterAVowel('a');


// Question 4
 function sumArray(array) {
	var count = 0;
	for (var i = 0; i < array.length; i++) {
		count += array[i];
	}
	return count;
}
sumArray([1,2,3,4]);



// Question 4
function multiplyArray(array) {
	var count = array[0]
	for (i = 0; i < array.length; i++) {
		count *= (array[i])
	}
	return count
}
multiplyArray([1,2,3,4]);


// Question 5
function reverseString(x) {
	var letter = ' ';
	for (var i = x.length-1; i>= 0; i--)
	letter += x[i];
	return(letter);
	
}
reverseString('happyfeet');


// Question 6
function findLongestWord (x) {
	var long = 0;
	for (var i = 0;i < x.length; i++) {
		if(x[i].length > long) {
			long = x[i].length; 
		}
	}
	return long;
	}

findLongestWord(['sevenaa', 'four', 'fiverr']);

// Question 7
function findLongestWord (x, y) {
	var long = [];
	for (var i = 0;i < x.length; i++) {
		if(x[i].length > y) {
			long.push(x[i]); 
		}
	}
	return long;
	}

findLongestWord(['sevenaa', 'four', 'fiverr'],4);

// I really have no idea how to these!
// Barely managed the top by working back from the solutions.
// I'll come back after I get back better at javascript.
// Bonus 1



// Bonus 2
function charactersOccurencesCount() {
  
}

// Bonus 3
var numberOfArguments = function(){
  
}
