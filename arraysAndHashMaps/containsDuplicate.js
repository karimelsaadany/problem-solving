const containsDuplicate = (nums) => {
  // // bruteForce: time O(n^2) / space O(1)
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i+1; j < nums.length - i; j++) {
  //     if (nums[i] === nums[j]) return true
  //   }
  // }

  // // Using sorting: time O(nlogn) / space O(1)
  // nums.sort()
  // for (let i = 0; i < nums.length -1; i++) {
  //   if (nums[i] === nums[i+1]) return true
  // }

  // // Using HashMap: time O(n) / space O(n)
  // const hashMap = {}

  // for (let i = 0; i < nums.length; i++) {
  //   if (hashMap[nums[i]]) return true
  //   hashMap[nums[i]] = 1
  // }

  // // Using HashSet: time O(n) / space O(n)
  // const numSet = new Set()

  // for (let i = 0; i < nums.length; i++) {
  //   if (numSet.has(nums[i])) return true
  //   numSet.add(nums[i])
  // }
  return false
}

console.log(containsDuplicate([1,2,3,4]))