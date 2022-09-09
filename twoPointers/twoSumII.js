const twoSum = (nums, target) => {
  // // using slow and fast pointer
  // let p1 = 0, p2 = 1
  
  // while (p1 < p2) {
  //   if(nums[p1] + nums[p2] === target) return [p1+1, p2+1]
  //   if(nums[p1] + nums[p2] < target) {
  //     p1++
  //     p2++
  //   } else {
  //     p1--
  //   }
  // }
  // using 2 pointers, one at beginning and one at end
  let p1 = 0, p2 = nums.length - 1

  while (p1 < p2) {
    if(nums[p1] + nums[p2] === target) return [p1+1, p2+1]
  
    if(nums[p1] + nums[p2] > target) p2--
    else p1++
  }
}

console.log(twoSum([2,3,4], 6))
