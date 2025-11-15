// https://www.codewars.com/kata/5a434a9dc5e284724f000011/javascript
// Find the most common letter (not a space) in the given string (comprised of at least 3 lowercase words) and replace it with the given letter.

// If such letters are two or more, choose the one that appears earliest in the string.

// For example:

// ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
// ('real talk bro', 'n') => 'neal talk bno'
// ('great job go ahead', 'k') => 'grekt job go khekd'


function replaceCommon(str, letter) {
  let max=0
  let maxChar=""
  str.split(" ").join("").split("").forEach(x=>{
    if(str.split(x).length > max){
      max = str.split(x).length;
      maxChar = x;
    }
  })
  return str.replaceAll(maxChar,letter)
}