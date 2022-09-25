const isValid = (s) => {
  const parenthesesHashMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (Object.keys(parenthesesHashMap).includes(s[i])) {
      stack.push(s[i])
    }
    else if (parenthesesHashMap[stack[stack.length - 1]] === s[i]) {
      stack.pop()
    } else return false
  }

  if (!stack.length) return true
  else return false
}

console.log(isValid('()'))
