/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"


*/
const bmi = (weight,height,bmi=weight/(Math.pow(height,2)))=>
    bmi<=18.5?"underwight":
    bmi<=25?"normal":
    bmi<=30?"overweight":"obese";