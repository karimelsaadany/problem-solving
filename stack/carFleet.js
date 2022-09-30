const carFleet = (target, position, speed) => {
  const cars = []
  const stack = []
  
  for (const[i, p] of position.entries()) {
    cars.push([p, speed[i]])
  }
  
  cars.sort((b,a) => a[0] - b[0])

  for (let i = 0; i < cars.length; i++) {
    let timeToReach = (target - cars[i][0]) / cars[i][1]
    if (stack.length == 0 || timeToReach > stack[stack.length - 1]) {
      stack.push(timeToReach)    
    }
  }

  return stack.length
}

console.log(carFleet(12,[10,8,0,5,3],[2,4,1,1,3]))
