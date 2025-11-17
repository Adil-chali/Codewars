/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {

const result= arr.filter(x=>x%2!==0).reduce((acc,cur)=>acc+Math.pow(cur,3),0)

return Number.isNaN(result) ? undefined : result;
}