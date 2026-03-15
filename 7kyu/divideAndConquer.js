/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
Fundamentals
St
*/

function divCon(arr){
 const sumOfint=arr.filter(x=>typeof(x)!=="number").map(Number).reduce((acc,cur)=>acc+cur,0)
  const sumOfnums=arr.filter(x=>typeof(x)==="number").reduce((acc,cur)=>acc+cur,0)
  return sumOfnums-sumOfint
}