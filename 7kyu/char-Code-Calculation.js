// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6
function calc(x){
  let sumTotal1=""
  let finalSum=0
    x.split("").map(x=>sumTotal1+=(x.charCodeAt(0)).toString())
    const total1=sumTotal1
    const total2= sumTotal1.replace(/\d/g,d=>d==="7"?"1":d)
for(let i=0;i<total1.length;i++){
  finalSum+=total1[i]-total2[i]
}
    
    return finalSum
}