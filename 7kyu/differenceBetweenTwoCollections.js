// https://www.codewars.com/kata/594093784aafb857f0000122/solutions/javascript?filter=me&sort=best_practice&invalids=false

// Find the difference between two collections. The difference means that either the element is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

// The collections can contain duplicates; the difference should not contain duplicates.
// Example

// A = [a, a, t, e, f, i, j]

// B = [t, g, g, i, k, f]

// difference = [a, e, g, j, k]


function diff(a, b){
  return[...new Set([...b.filter((y)=>a.includes(y)===false) , ...a.filter((x)=>b.includes(x)===false)])].sort()
}