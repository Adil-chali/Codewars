//https://www.codewars.com/kata/5562aa03004710f3ab0001d5/javascript
/*

Given a two-dimensional array of non negative integers arr, a value val, and a coordinate coord in the form (row, column), return an iterable (depending on the language) of all of the coordinates that contain the given value and are connected to the original coordinate by the given value. Connections may be made horizontally, vertically, and diagonally. If the value of arr at coord is not equal to val, return an empty iterable. The coordinates must include the original coordinate and may be in any order.
Examples:

With the following array:

    [1,0,2,0,2,1]
    [1,0,2,1,5,7]
    [4,1,1,0,1,9]

With val 1 and coord (0, 0), the output should contain (the order doesn't matter and the actual data structure depends on the language):

[(2, 4), (2, 1), (0, 0), (2, 2), (1, 0), (1, 3)]

With value 2 and coord (0,  2):

[(0, 2), (1, 2)]

With value 0 and coord (0, 0), the output should be empty.
 */
function connectedValues(arr, val, coord) {

  if (!arr[coord[0]] || arr[coord[0]][coord[1]] !== val) return [];

  let result = [coord];
  
  let visited = new Set([coord.toString()]);
  for (let i = 0; i < result.length; i++) {
    let [r, c] = result[i];
    
    let neighbors = [
      [r-1, c], [r+1, c], [r, c-1], [r, c+1],
      [r-1, c-1], [r-1, c+1], [r+1, c-1], [r+1, c+1]
    ];

    for (let [nr, nc] of neighbors) {
       if (arr[nr] && arr[nr][nc] === val) {
         
          let key = nr + "," + nc;  
         
          if (!visited.has(key)) {
             visited.add(key);
             result.push([nr, nc]); 
          }
       }
    }
  }
  
  return result;


}