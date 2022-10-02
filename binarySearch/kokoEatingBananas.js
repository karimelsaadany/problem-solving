const minEatingSpeed = (piles, h) => {
  if (piles.length === h) {
    return Math.max(...piles)
  }

  let lowK = 1
  let highK = Math.max(...piles)
  let res = highK

  while (lowK <= highK) {
    const midK = Math.floor((lowK + highK) / 2)
    let hCalc = 0
    for (let i = 0; i < piles.length; i++) {
        hCalc += Math.ceil(piles[i] / midK)
    }
    if (hCalc === h) {
      
    }
    if (hCalc <= h) {
      res = Math.min(midK, res)
      highK = midK - 1
    }
    else lowK = midK + 1
  }

  return res
}

console.log(minEatingSpeed([30,11,23,4,20], 7))
