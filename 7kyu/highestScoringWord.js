/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(str){

  str=str.split(" ")
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  let finalResult
  let heighstScoring=0
  for(let i=0;i<str.length;i++){
    let result=0
    str[i].split("").map(x=>result+=alphabet.indexOf(x)+1)
    if(result>heighstScoring){
      heighstScoring=result
      finalResult=str[i]
   }
}
  return finalResult
}