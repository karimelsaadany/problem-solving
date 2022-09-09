const isAlphaNumeric = function (str) {return /^[a-zA-Z0-9]*$/.test(str)};
const validPalindrome = (s) => {
  let p1 = 0
  let p2 = s.length - 1

  while(p1 < p2) {
    if (isAlphaNumeric(s[p1])) {
      if (isAlphaNumeric(s[p2])) {
        if(s[p1].toLowerCase() === s[p2].toLowerCase()) {
          p1++
          p2--
        } else return false
      } else p2--
    } else {
      p1++
      if(!isAlphaNumeric(s[p2])) p2--
    }
  }

  return true
}

console.log(validPalindrome(".,"))
