const largestSum = (nums, k) => {
  let p1 = 0, p2 = p1 + k - 1
  let maxSum = 0
  let sum = 0

  for (let i = 0; i < k; i++) {
    sum += nums[i]
    maxSum = sum
  }

  while (p2 < nums.length) {
    sum -= nums[p1]
    p1++
    sum += nums[p2 + 1]
    p2++
    if (sum > maxSum) maxSum = sum
  }

  return maxSum
}

console.log(largestSum([5, 7, 1, 4, 3, 6, 2, 9, 2], 5))
