// https://www.codewars.com/kata/5937ae46377144bb2f000029/javascript

// Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.

// The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).

// For example, given width = 3 and height = 3:

// ***
// * *
// ***

// End each line of the string (including the last one) with a carriage return-line feed combination.

// Note: You may assume that width and height will always be greater than zero.

const getRectangleString = (w, h) => 
	Array.from({ length: h }, (_, i) => 
  	(!i || i === h - 1 ? 
    	'*'.repeat(w) : 
      '*' + ' '.repeat(w - 2) + '*'
    ) + '\r\n'
  ).join('');