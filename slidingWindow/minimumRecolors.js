const minimumRecolors = (blocks, k) => {
  let minRecolors = Number.POSITIVE_INFINITY
  let minRecolorsPerPass = 0

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] === 'W') minRecolorsPerPass++
    if (i >= k - 1) {
      minRecolors = Math.min(minRecolors, minRecolorsPerPass)
      if (blocks[i - (k - 1)] === 'W') minRecolorsPerPass--
    }
  }

  return minRecolors
}

console.log(minimumRecolors('WBWBBBW', 2))
