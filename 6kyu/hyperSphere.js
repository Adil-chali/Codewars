/*
You will be given an array of cordinates and a radius. The function should return if the coordinates describe a point within the given radius of the origin.

In two dimensions the condition that any [x, y] coordinate lies in a given radius (= a circle) is:

x2+y2≤r2x^2 + y^2 ≤ r^2x2+y2≤r2

This generalises to higher dimensions as follows:

x2+y2+z2+...≤r2x^2 + y^2 + z^2 + ... ≤ r^2x2+y2+z2+...≤r2

Note: a point with no coordinates should return true, as in zero dimensions all points are the same point
*/

function inSphere(coords, radius) {
  return coords.reduce((a, b) => a + b * b, 0) <= radius * radius
}