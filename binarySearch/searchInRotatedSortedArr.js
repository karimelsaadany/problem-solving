const search = (nums, target) => {
  let lowIndex = 0
  let highIndex = nums.length - 1

  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2)
    if (nums[midIndex] === target) return midIndex

    //in case of mid is in left sorted array
    if (nums[midIndex] >= nums[lowIndex]) {
      if (target > nums[midIndex] || target < nums[lowIndex]) lowIndex = midIndex + 1
      else highIndex = midIndex - 1
    } 
    //in case of mid is in right sorted array
    else {
      if (target < nums[midIndex] || target > nums[highIndex]) highIndex = midIndex - 1
      else lowIndex = midIndex + 1
    }
  }

  return -1
}

console.log(search([1], 1))
