const lengthOfLongestSubstring = (s) => {
  let hashSet = new Set()
  let longest = 0
  let l = 0

  for (let r = 0; r < s.length; r++) {
    while (hashSet.has(s[r])) {
      hashSet.delete(s[l])
      l++
    }
    hashSet.add(s[r])
    longest = Math.max(longest, hashSet.size)
  }
  return longest
}

console.log(lengthOfLongestSubstring('abcdefgb'))
