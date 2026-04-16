/*
Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:

274 -> '2-7-4'
6815 -> '68-1-5'

*/

function dashatize(num) {
  num=String(num)
  return num
    .replace(/[13579]/g, m => '-' + m + '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, ''); 
}