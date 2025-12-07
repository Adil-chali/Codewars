/*
(First in this series: http://www.codewars.com/kata/musical-pitch-classes)

This kata is the inverse of the previous one: you must write a method to_pitch_class that, when given an integer representing a musical pitch class, returns an array of every name for that note.

There are only twelve pitch classes (which are cyclical, e.g., the note above number 11 is number 0), and the numerical values of the natural notes are as follows:

C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11

A sharp ("♯") raises a note by one, and a flat ("♭") lowers it by one. For this kata, we'll also be using the double sharp and the double flat, which are exactly what they sound like: the double sharp raises a pitch by two, and the double flat lowers a pitch by two. Since Codewars doesn't allow the characters for sharp, flat, double sharp, and double flat, we'll use the strings "#", "b", "x", and "bb" instead.

Some examples:

toPitchClass(2) // - > should return ['D', 'Cx', 'Ebb']

toPitchClass(10) // -> should return ['A#', 'Bb', 'Cbb']

The order of the returned array doesn't matter.
*/
function toPitchClass(n) {
  var notes = { 0: 'C', 2: 'D', 4: 'E', 5: 'F', 7: 'G', 9: 'A', 11: 'B' }
  return [[1, '#'], [2, 'x'], [0, ''], [-1, 'b'], [-2, 'bb']].map(function (v) {
    var nn = (n - v[0] + 12) % 12
    if (nn in notes) return notes[nn] + v[1]
  }).filter(function (v) { return v })
}