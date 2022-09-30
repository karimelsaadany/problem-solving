const binarySearch = (nums, target) => {
  if (nums.length === 1 && nums[0] === target) return 0
  let lowIndex = 0
  let highIndex = nums.length - 1

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2)
    if (nums[midIndex] === target) return midIndex

    if (nums[midIndex] > target) {
      highIndex = midIndex - 1
    } else {
      lowIndex = midIndex + 1
    }
  }

  return -1
}

console.log(binarySearch([-1,0,3,5,9,12],9))
