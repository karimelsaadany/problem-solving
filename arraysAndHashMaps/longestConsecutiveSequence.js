const consecutiveSequence = (nums) => {
  const hashSet = new Set(nums)
  let longest = 0

  for (let i = 0; i < nums.length; i++) {
    if (!hashSet.has(nums[i] - 1)) {
      let length = 0
      while (hashSet.has(nums[i] + length)) {
        length++
      }
      if (length > longest) longest = length
    }
  }

  return longest
}

console.log(consecutiveSequence([2, 5, 4, 7, 8, 1, 3]));
