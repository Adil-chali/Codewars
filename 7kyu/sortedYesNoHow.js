// https://www.codewars.com/kata/580a4734d6df748060000045/javascript


// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// The order does not have to be strict: a sorted array can contain consecutive duplicates, e.g. [1, 1, 2, 3] is sorted in ascending order.

// It is guaranteed that there will always be a unique valid answer. More precisely:

//     there will be no arrays with less than 2 elements
//     there will be no arrays where all elements are equal
function isSortedAndHow(array) {
  if(array.join("") === array.slice().sort((a,b)=>a-b).join("")){
    return 'yes, ascending';
  }else if (array.join("") === array.slice().sort((a,b)=>b-a).join("")){
    
    return 'yes, descending';
  }else{
     console.log(array.join("") === array.sort((a,b)=>b-a).join(""))
    return "no"
  }
}