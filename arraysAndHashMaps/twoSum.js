function twoSum(nums, target) {
  if (nums.length === 2) {
    if (nums[0] + nums[1] === target) return [nums[0], nums[1]]
  }

  const hashMap = {}

  for (let i = 0; i < nums.length; i++) {
    if (!(hashMap[target - nums[i]] >= 0)) {
      hashMap[nums[i]] = i
    } else {
      return [hashMap[target - nums[i]], i]
    }
  }
}

console.log(twoSum([2,7,11,15], 9))
