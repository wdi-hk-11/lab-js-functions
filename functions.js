// question 1


function maxOfTwoNumbers ( a, b) {

     if (a>b){
      return a;
     }

     else { return  b ;}

}

// question 2

function maxOfThree (a, b, c){

      if (a>b && a>c){
      return a;
     }

     else if (b>a && b>c){
      return b;
     }

     else if (c>a && c>b){
      return c;
     }

}

// question 3
function isCharacterAVowel (b) {

        if (b[0] === 'a' ||b[0] === 'e'  ||b[0] === 'i' ||b[0] === 'o'  ||b[0] === 'u'){
          return true;
        }

        else{ return false;}


}

// question 4
function sumArray (numbers){
    var sum=0;
    numbers.forEach(function(el) {sum +=el});
    console.log(sum);


}

function multiplyArray (numbers){
    var sum=1;
    numbers.forEach(function(el) {sum *=el});
    console.log(sum);

}


// question 5

function reverseString(s) {
  var o = '';

  for (var i = s.length-1 ;i >= 0; i--){
     o+=s[i];
  }

 return o;
}

//

function reverseString(s){
  return s.split('').reverse('').join('');
}

"General Assembly".reverseString().
var s="happy";
reverseString (s);




//question 6
var s=['happy','hi','superhot',"dhjfaksfhkdsfh"];

function findlongestword (s){

  var j=0;

  for (i=0;i<s.length;i++)
  {
   if (s[i].length>j)
   {
    j=s[i].length;
    longest=s[i];
   }
  }
   return longest;
}

findlongestword (s);


//question 7
var s=['happy','hi','superhot',"dhjfaksfhkdsfh"];

function filterLongWords (s,i){

for (j=0;j<s.length;j++){
    if (s[j].length > i) {

       console.log (s[j]);
    }
   }
  }
filterLongWords(s,6);


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}

// Bonus 3
var numberOfArguments = function(){

}
