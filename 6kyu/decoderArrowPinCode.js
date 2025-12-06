/*
You are a junior employee hired to work in an office for a meager salary, but you are full of ambition to conquer the universe of professional heights. You were shown your workplace, which has a computer, but it is password protected. Your coworkers decided to play a joke on you by setting a password on your computer. They left you a bunch of stickers with a strange sequence of characters, always starting with a digit and continuing with arrows. Some stickers have an additional digit starting with *. Taking one sticker in your hands and looking at the keyboard, you realize that this is probably the computer's PIN code, encoded as a sequence of arrows, but which of the stickers contains the correct sequence? It seems that among the stickers there are impossible combinations of arrows that go beyond the limits of the numeric keypad. You try to enter the first PIN code from the sticker, get confused by the arrows, and decide to write a function to decode the PIN code with arrows. Fortunately, you have your laptop with you.

+---+---+---+     +---sticker---+ 
| 7 | 8 | 9 |     |             |
+---+---+---+     |  1→↑→       |
| 4 | 5 | 6 |     |             |
+---+---+---+     |             |
| 1 | 2 | 3 |     +-------------+
+---+---+---+   presumably encoded
| 0 |                1256
+---+

Task

Your task is to write a decoder function for the arrow pin code that takes a string as input and returns a list containing a sequence of digits.

    The sticker contains between 4 and 8 characters.
    The PIN code on the sticker always begins with a digit and contains at least one arrow.
    There are no more than four types of arrows on the stickers ↓, ↑, →, ←.
    In addition to the first digit, the sticker may contain another digit with an asterisk *n, which probably indicates the number of times the previous key was pressed. The digit is always in the range 0 < *n < 10.
    The sticker may contain an incorrect PIN code consisting of an incorrect combination of arrows that goes beyond the digital keypad. In this case, return [].

Examples

correct sequence of arrows

    "1→↑→"       ==>   [1, 2, 5, 6]
    "1*2↓"       ==>   [1, 1, 1, 0]
    "0*2↑"       ==>   [0, 0, 0, 1]
    "0↑↑↑"       ==>   [0, 1, 4, 7]
    "5↓*1←↑↓"    ==>   [5, 2, 2, 1, 4, 1]
    "1→→↑↑←←↓↓"  ==>   [1, 2, 3, 6, 9, 8, 7, 4, 1]

incorrect sequence of arrows

    "0↑↑↑↑"      ==>   []
    "8↑*5→"      ==>   []
    "0←*2←"      ==>   []
    "8↑↑↑"       ==>   []
    "3↓←*4↑"     ==>   []
    "6→←→↓↑"     ==>   []

*/
function decArrowPinCode(sticker) {
  const keypad = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]
  const arrows = { "→": [0, 1], "↑": [-1, 0], "↓": [1, 0], "←": [0, -1] }
  const result = []
  
  let row = keypad.findIndex(pads => pads.includes(+sticker[0]))
  let col = keypad[row].indexOf(+sticker[0])
  
  for (let i = 0; i < sticker.length; i++) {
    if (sticker[i] in arrows)
      row += arrows[sticker[i]][0],
      col += arrows[sticker[i]][1]     
    else if (sticker[i] == "*")
      result.push(...Array(+sticker[++i] - 1).fill(keypad[row][col]))
    
    if (!keypad[row] || isNaN(keypad[row][col]))
      return []
    
    result.push(keypad[row][col])
  }
  
  return result
}