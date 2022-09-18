const divisorSubstrings = (num, k) => {
  let result = 0
  let numString = String(num)

  for (let i = 0; i < numString.length; i++) {
    if (i >= (k - 1)) {
      let partialInt = parseInt(numString.slice((i - (k - 1)), i + 1))
      if (parseInt(numString) % partialInt === 0) result += 1
    }
  }

  return result
}

console.log(divisorSubstrings(240, 2))
