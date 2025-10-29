// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/solutions/javascript?filter=me&sort=best_practice&invalids=false

// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

//     lst contains integers, that means it may contain some negative numbers
//     if lst is empty or contains a single element, return 0
//     lst is not sorted

// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7


function maxDiff(list) {
  const sortedArr=list.sort((a,b)=>b-a)
  return sortedArr[0]-sortedArr[sortedArr.length-1]||0
};