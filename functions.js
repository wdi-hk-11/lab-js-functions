// Question 1
function maxofTwoNumbers(a,b) {
  if (a>b){
    return a;
  } else {
    return b;
  }
}

// Question 2
function maxoFThree(a,b,c) {
  if (a>b){
    if (a>c){
      return a;
    } else {
      return c;
    }
  } else {
    if (b>c) {return b;}
    else {return c;}
  }
}

// Question 3
function isCharacterAVowel(a){
  if (a=='a' || a=='e' || a=='i' || a=='o' || a=='u' ){
    return true;
  } else {return false;}
}

// Question 4
function sumArray(a){
  var sum=0;
  a.forEach(function(el){
    sum+=el;
  })
  return sum;
}

// Question 5
function multiplyArray(a){
  var product=1;
  a.forEach(function(el){
    product=product*el;
  })
  return product;
}

// Question 6
function reverseString(a){
  return a.split('').reverse().join('');
}
// OR

function reverseString2(a){
  var b = '';
  for (i=a.length-1;i>=0;i--){
    b+=a[i];
  }
  return b;
}

// Question 7
function findLongestWord(a){
  var max=0;
  for (i=0;i<a.length;i++){
    if (a[i].length>max){
      max = a[i].length;
    }
  }
  return max;
}

// Question 8
function filterLongWords(a,i){
  var filtered = a.filter(function(el){
    return el.length>i;
  })
  return filtered;
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}

// Bonus 3
var numberOfArguments = function(){

}
