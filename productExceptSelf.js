const productExceptSelf = (nums) => {
  let answer = [1]

  let prefixMult = 1 
  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefixMult
    prefixMult *= nums[i]
  }

  let postfixMult = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= postfixMult
    postfixMult *= nums[i]
  }

  return answer
}

console.log(productExceptSelf([1,2,3,4]))