    // https://www.codewars.com/kata/68b0064510c5854a66e6323a/train/javascript

//     Given an array of seats, return the maximum number of new people which can be seated, as long as there is at least a gap of 2 seats between people.

//     Empty seats are given as 0.
//     Occupied seats are given as 1.
//     Don't move any seats which are already occupied, even if they are less than 2 seats apart. Consider only the gaps between new seats and existing seats.

// Examples

// [0, 0, 0, 1, 0, 0, 1, 0, 0, 0] ➞ 2
// // [1, 0, 0, 1, 0, 0, 1, 0, 0, 1]

// [0, 0, 0, 0] ➞ 2
// // [1, 0, 0, 1]

// [1, 0, 0, 0, 0, 1] ➞ 0
// // There is no way to have a gap of at least 2 chairs when adding someone else.

// Notes

//     Notice how there may be several possibilities for assigning seats to people, but these cases won't affect the results.
//     All seats will be valid.



    function maximumSeating(seats) {
    let amount = 0;
    for ( let i = 0; i < seats.length; i++){
    let left1 = seats[i-1] || 0;
    let left2 = seats[i-2] || 0;
    let right1 = seats[i+1] || 0;
    let right2 = seats[i+2] || 0;
    //   console.log(i, left1, left2, right1, right2);
    if (seats[i] === 0 && left1 === 0 && left2 === 0 && right1 === 0 && right2 === 0) {
        amount++;
        i += 2;
    }
    }
    return amount;
    }