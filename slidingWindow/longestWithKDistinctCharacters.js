const longestWithKDistinctCharacters = (s, k) => {
  let maxLength = Number.NEGATIVE_INFINITY
  let maxLengthPerPass = 0
  let hashMap = {}
  let l = 0

  for (let r = 0; r < s.length; r++) {
    if (!hashMap[s[r]]) {
      hashMap[s[r]] = 1
    }
    else hashMap[s[r]] += 1

    while (Object.keys(hashMap).length > k) {
      hashMap[s[l]]--
      maxLengthPerPass--
      if (!hashMap[s[l]]) {
        delete hashMap[s[l]]
      }
      l++
    }

    maxLengthPerPass++
    maxLength = Math.max(maxLengthPerPass, maxLength)
  }

  return maxLength
}

console.log(longestWithKDistinctCharacters('AABBCCDD', 2))
