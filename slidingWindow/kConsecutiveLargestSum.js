const largestSum = (nums, k) => {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i]

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, currentSum)
      currentSum -= nums[i - (k - 1)]
    }
  }

  return maxSum;
}

console.log(largestSum([4,2,1,7,8,1,2,8,1,0], 3))
