/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/ 
function balance(left, right) {
  left = left.split("")
  right = right.split("")
  let leftSum=0
  let rightSum=0
  for (let i = 0; i < left.length; i++) {
      left[i]==="!"?leftSum+=2:leftSum+=3
        
  }    
  for (let i = 0; i < right.length; i++) {
      right[i]==="!"? rightSum+=2:rightSum+=3
  }  
  return leftSum>rightSum ?"Left":rightSum>leftSum? "Right": "Balance"
  
}