const findMin = (nums) => {
  let minNum = 5000
  let lowIndex = 0
  let highIndex = nums.length - 1

  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2)
    minNum = Math.min(minNum, nums[midIndex])

    if ((nums[midIndex] >= nums[lowIndex]
      && nums[lowIndex] < nums[highIndex])
      || nums[midIndex] < nums[lowIndex]
      ) {
        highIndex = midIndex - 1
      } else lowIndex = midIndex + 1
  }

  return minNum
}

console.log(findMin([1]))