const generateParenthesis = (n) => {
  const stack = []
  const res = []

  function backTrack(openN, closedN) {
    if (openN === closedN && openN === n) {
      res.push(stack.join(''))
      return
    }

    if (openN < n) {
      stack.push('(')
      backTrack(openN + 1, closedN)
      stack.pop()
    }

    if (closedN < openN) {
      stack.push(')')
      backTrack(openN, closedN + 1)
      stack.pop()
    }
  }

  backTrack(0, 0)
  return res
}

console.log(generateParenthesis(3))
