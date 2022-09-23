const characterReplacement = (s, k) => {
  let maxLength = 0
  let hashMap = {}
  let i = 0
  let j = 0

  while (j < s.length) {
    if (!hashMap[s[j]]) hashMap[s[j]] = 1
    else hashMap[s[j]] += 1

    while ((j - i + 1) > k + Math.max(...Object.values(hashMap))) {
      hashMap[s[i]] -= 1
      i++
    }

    maxLength = Math.max(maxLength, j - i + 1)
    j++
  }

  return maxLength
}

console.log(characterReplacement('AABABBA', 1))
