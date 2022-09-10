const maxArea = (heights) => {
  let maxArea = 0
  let area = 0
  let p1 = 0, p2 = heights.length - 1

  while(p1 < p2) {
    area = Math.min(heights[p1], heights[p2]) * (p2 - p1)
    if (area > maxArea) maxArea = area
    if (heights[p1] < heights[p2]) p1++
    else if (heights[p1] > heights[p2]) p2--
    else {
      p1++
      p2--
    }
  }

  return maxArea
}

console.log(maxArea([1,8,6,2,5,4,8,25,7]))