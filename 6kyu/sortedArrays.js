// https://www.codewars.com/kata/56f2d43fe40b70a442000f26/javascript
// Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

// All the arguments except the last will be arrays, the last argument is n.

// nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value

// Be mindful of performance.

function nthSmallest(...arrays) {
  // Good luck!
  let n =arrays.pop()
    return arrays.flat().sort((a,b)=>a-b)[n-1]
}