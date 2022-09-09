const threeSum = (nums) => {
  const result = []
  const sortedNums = nums.sort((b,a) => b - a)
  console.log(sortedNums)
  const target = 0

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (nums[i] > target) break
    if (i > 0 && nums[i] === nums[i+1]) continue
    
    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]

      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]])
        j++
        k--
      } else if (sum < target) {
        j++
      } else {
        k--
      }
    }
  }
  return result
}


console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))
