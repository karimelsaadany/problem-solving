const findMaxAverage = (nums, k) => {
  let maxAvg = Number.NEGATIVE_INFINITY;
  let avg = Number.NEGATIVE_INFINITY;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    
    if (i >= k - 1) {
      avg = sum / k
      maxAvg = Math.max(maxAvg, avg)
      sum -= nums[i - (k-1)]
    }
  }

  return maxAvg
}

console.log(findMaxAverage([5], 1))
