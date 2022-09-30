const dailyTemperatures = (temperatures) => {
  const res = new Array(temperatures.length).fill(0)
  const stack = []
  const hashMap = []

  for (const [i, t] of temperatures.entries()) {
    while (stack[stack.length - 1] && t > stack[stack.length - 1][0]) {
      const [stackT, stackInd] = stack.pop()
      res[stackInd] = i - stackInd
    }
    stack.push([t, i])
  }

  return res
}

console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]))

// [89,62,70,58,47,47,46,76,100,70]

// let test = [1,2,3,4]
// console.log(test[-1])
