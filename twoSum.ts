function twoSum(nums: number[], target: number): number[] | undefined {
  if (nums.length === 2) {
    if (nums[0] + nums[1] === target) return [nums[0], nums[1]]
  }

  interface IHash {
    [key: number]: number
  }

  const hashMap: IHash = {}

  for (let i = 0; i < nums.length; i++) {
    if (!(hashMap[target - nums[i]] >= 0)) {
      hashMap[nums[i]] = i
    } else {
      return [hashMap[target - nums[i]], i]
    }
  }
}

console.log(twoSum([2,7,11,15], 9))
