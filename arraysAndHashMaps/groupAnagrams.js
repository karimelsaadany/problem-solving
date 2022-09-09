function groupAnagrams(strs) {
  // // using count of letters compared to 26 letters from a to z as the hashMap key
  const hashMap = {}

  for (let i = 0; i < strs.length; i++) {
    let count = new Array(26).fill(0)
    for (let j = 0; j < strs[i].length; j++) {
      count[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }
    if (hashMap[count]) hashMap[count].push(strs[i])
    else hashMap[count] = [strs[i]]
  }

  // using sorted word as key
  // const hashMap = {}
    
  //   for (let i = 0; i < strs.length; i++) {
  //       let sortedStr = strs[i].split('').sort().join('')
  //       if (hashMap[sortedStr]) {
  //           hashMap[sortedStr].push(strs[i])
  //       } else {
  //           hashMap[sortedStr] = [strs[i]]
  //       }
  //   }

  return Object.values(hashMap)
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
