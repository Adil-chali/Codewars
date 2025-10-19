// https://www.codewars.com/kata/539ee3b6757843632d00026b/javascript
// Instructions

// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
// Example (Input --> Output)

// "CodEWaRs" --> [0,3,4,6]


let capitals = function (word) {

 return word.split("").map((x,i)=>x=== x.toUpperCase()?i:-1).filter((i)=>i!==-1)

};