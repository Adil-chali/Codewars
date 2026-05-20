/**
 * Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
 */
function findMissingLetter(arr)
{
  const alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
 for(let i=0;i<arr.length-1;i++){
   const currentNumberIndex=alpha.indexOf(arr[i].toLowerCase())
      const nextNumberIndex=alpha.indexOf(arr[i+1].toLowerCase())
console.log(arr[i])
  if(nextNumberIndex !== currentNumberIndex + 1){
   const char=alpha[currentNumberIndex + 1]
    return  arr[i]===arr[i].toUpperCase()?char.toUpperCase():char
  }
 }
  
}