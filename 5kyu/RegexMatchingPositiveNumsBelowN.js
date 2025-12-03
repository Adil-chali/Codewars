/*
You are given a positive natural number n (which is n > 0) and you should create a regular expression pattern which only matches the decimal representation of all positive natural numbers strictly less than n without leading zeros. The empty string, numbers with leading zeros, negative numbers and non-numbers should not match the regular expression compiled from your returned pattern.
Input

    n > 0 natural number, n can be from the full possible positive range

Output

    regular expression pattern as string which will be used to compile a regular expression to do the matches

Tests

The compiled regular expression will be tested against decimal representations of random numbers with and without leading zeros, strings including letters and the empty string and should only match for decimal representations of numbers k with 0 < k < n.

Tests use chai.assert.match() which itself uses RegExp.prototype.exec() to do the matches.
*/

const regexBelow = n => {
  const str = n.toString()
  const len = str.length

  if (n === 1) return '^\\D$'
  if (len === 1) return `^[1-${n - 1}]$`

  const res = [`([1-9]\\d{0,${len - 2}})`]

  for (let i = 0; i < len; i++) {
    if (i === 0) {
      const last = +str.slice(-1)
      if (last) res.push(`(${str.slice(0, -1)}[0-${last - 1}])`)
    } else if (i < len - 1) {
      const curr = +str[i]
      if (curr)
        res.push(`(${str.slice(0, i)}[0-${curr - 1}]\\d{0,${len - i - 1}})`)
    } else {
      const first = +str.slice(0, 1)
      if (first !== 1) {
        res.push(`([1-${first - 1}]\\d{0,${len - 1}})`)
      }
    }
  }

  return `^(${res.join('|')})$`
}