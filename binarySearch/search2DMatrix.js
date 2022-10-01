const search2DMatrix = (matrix, target) => {
  const numberOfCols = matrix[0].length
  if (matrix.length === 1 && numberOfCols === 1 && matrix[0][0] === target) return true
  //get the row that has the target using binary search
  let lowRow = 0;
  let highRow = matrix.length - 1
  let mediumRow = 0

  while (lowRow < highRow) {
    mediumRow = Math.floor((highRow + lowRow) / 2)
    if (matrix[mediumRow][0] === target || matrix[mediumRow][numberOfCols - 1] === target) return true
    if (target < matrix[mediumRow][0]) {
      highRow = mediumRow - 1
    }
    else if (matrix[mediumRow][numberOfCols - 1] < target) {
      lowRow = mediumRow + 1
    } else {
      lowRow = mediumRow
      highRow = lowRow
    }
  }

  //use binary search to check if the target exists in the chosen row
  const nums = matrix[lowRow]
  let lowIndex = 0
  let highIndex = nums.length - 1

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2)
    if (nums[midIndex] === target) return true

    if (nums[midIndex] > target) {
      highIndex = midIndex - 1
    } else {
      lowIndex = midIndex + 1
    }
  }
  return false
}

console.log(search2DMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 11))
