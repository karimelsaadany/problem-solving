const trap = (height) => {
  let result = 0
  let p1 = 0, p2 = height.length - 1
  let p1Max = height[p1], p2Max = height[p2]

  while (p1 < p2) {
    if (p1Max < p2Max) {
      p1++
      p1Max = Math.max(p1Max, height[p1])
      result += p1Max - height[p1]
    } else {
      p2--
      p2Max = Math.max(p2Max, height[p2])
      result += p2Max - height[p2]
    }
  }
  return result
}

console.log(trap([4,2,0,3,2,5]))
