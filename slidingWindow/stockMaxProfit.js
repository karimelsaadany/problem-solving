const maxProfit = (prices) => {
  let maxProfit = 0
  let tempProfit = 0

  let p1 = 0, p2 = 1

  while (p2 < prices.length) {
    if (prices[p1] < prices[p2]) {
      tempProfit = prices[p2] - prices[p1]
      p2++
    } else if (prices[p2] < prices[p1]) {
      p1 = p2
      p2++
    } else p2++
    maxProfit = Math.max(maxProfit, tempProfit)
  }

  return maxProfit
}

console.log(maxProfit([1,2,4,2,5,7,2,4,9,0,9]))
