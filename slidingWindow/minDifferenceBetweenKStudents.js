const minDifference = (nums, k) => {
  if (nums.length === 1) return 0
  sortedNums = nums.sort((b,a) => a - b)
  let minDiff = Number.POSITIVE_INFINITY
  
  for (let i = 0; k + i <= nums.length; i++) {
    minDiff = Math.min(minDiff, Math.abs(nums[k - 1 + i] - nums[i]))
  }

  return minDiff
}

console.log(minDifference([9, 4, 1, 7], 2))
