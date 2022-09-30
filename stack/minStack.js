class MinStack {
  constructor() {
    this.stack = new Array()
    this.minStack = new Array()
    this.length = 0
  }

  push(val) {
    this.stack.push(val)
    this.length++

    let minVal = Math.min(val, this.minStack[this.length - 1] ?? val)
    this.minStack.push(minVal)
  }

  pop() {
    if (!this.length) return
    this.stack.pop()
    this.minStack.pop()
    this.length--
  }

  top() {
    return this.stack[this.length - 1]
  }

  getMin() {
    return this.minStack[this.length - 1]
  }
}

const minStack = new MinStack()

minStack.push(4)
// console.log(minStack)
console.log(minStack.getMin())
minStack.push(3)
console.log(minStack.getMin())
// console.log(minStack)
minStack.push(2)
console.log(minStack.getMin())
// console.log(minStack)
minStack.push(1)
console.log(minStack.getMin())
// console.log(minStack)
minStack.push(1)
console.log(minStack.getMin())
// console.log(minStack)
minStack.pop()
// console.log(minStack)
console.log(minStack.getMin())
minStack.pop()
// console.log(minStack)
console.log(minStack.getMin())
minStack.pop()
// console.log(minStack)
console.log(minStack.getMin())
minStack.pop()
console.log(minStack)
minStack.pop()
console.log(minStack)
// console.log(minStack.getMin())
// const top = minStack.top()
// console.log(top)
