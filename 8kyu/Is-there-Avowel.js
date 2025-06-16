// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.
function isVow(arr){
const vowelsCode=[97, 101, 105, 111, 117];
  for(let i=0; i<arr.length; i++){
    if(vowelsCode.includes(arr[i])){
      arr[i]=String.fromCharCode(arr[i])
    }
  }
  return arr
  
}
