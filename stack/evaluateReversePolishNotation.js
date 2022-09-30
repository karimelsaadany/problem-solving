var evalRPN = function(tokens) {
  const stack = []
  const operators = ['+', '-', '*', '/']
  let resultPerPass = 0
    
  for (let i = 0; i < tokens.length; i++) {
      if (!operators.includes(tokens[i])) {
          stack.push(tokens[i])
      } else {
          let v1 = stack.pop()
          let v2 = stack.pop()
          if (v1 < 0 && tokens[i] === '-') {
            tokens[i] = '+'
            v1 = -1*v1
          }
          let resultPerPass = parseInt(eval(`${v2}${tokens[i]}${v1}`))
          console.log(resultPerPass)
          stack.push(`${resultPerPass}`)
      }
  }
  return stack[0]
};

console.log(evalRPN(["4","-2","/","2","-3","-","-"]))
