const smallestSubarray = (nums, target) => {
  let minSubarrayLength = Number.POSITIVE_INFINITY
  let minLength = 0
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    minLength++

    while (sum >= target) {
      minSubarrayLength = Math.min(minSubarrayLength, minLength)
      sum -= nums[i - (minLength - 1)]
      minLength--
    }
  }

  if (minSubarrayLength === Number.POSITIVE_INFINITY) return 0

  return minSubarrayLength
}

console.log(smallestSubarray([1,1,1,1,1,1,1,1], 11))
