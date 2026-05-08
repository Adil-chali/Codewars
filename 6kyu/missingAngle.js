// Below is a right-angled triangle:

//   |\
//   | \
//   |  \
//   |   \ 
// o |    \ h 
//   |     \
//   |    θ \
//   |_______\ 
//      a

// Your challange is to write a function that calculates the angle θ in degrees. You will be given three arguments representing each side: o, h and a. One of the arguments equals zero. Use the length of the two other sides to calculate θ.

// Round the result to the nearest integer, except in C and JavaScript.

function missingAngle(h, a, o) {
    const rad = a === 0 ? Math.asin(o / h) : 
              o === 0 ? Math.acos(a / h) : 
              Math.atan(o / a);
              
  return rad * (180 / Math.PI);
}

