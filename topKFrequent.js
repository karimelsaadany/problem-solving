var topKFrequent = function(nums, k) {
  // // using hashMap: time O(k*n) space O(n)
  // const hashMap = {};

  // for (let i = 0; i < nums.length; i++) {
  //   if (!hashMap[nums[i]]) {
  //     hashMap[nums[i]] = 1
  //   } else {
  //     hashMap[nums[i]] += 1
  //   }
  // }

  // const answer = []

  // for (let i = 0; i < k; i++) {
  //   let max = 0;
  //   Object.keys(hashMap).forEach(key => {
  //     if (max === 0) {
  //       max = key
  //     } else if (hashMap[key] > hashMap[max]) {
  //       max = key
  //     }
  //   })
  //   answer.push(+max)
  //   hashMap[max] = 0
  // }
  // return answer

  // using hashMap and Array: time O(n) space O(n)

  const hashMap = {}

  for (let i = 0; i < nums.length; i++) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1
    } else {
      hashMap[nums[i]] += 1
    }
  }

  const arr = new Array(nums.length)
  Object.entries(hashMap).forEach(([key, val]) => {
    if(arr[val]) {
      arr[val].push(+key)
    } else {
      arr[val] = [+key]
    }
  })

  let i = k;
  let j = nums.length;
  let answer = []

  while (i > 0) {
    if (arr[j] && arr[j].length <= i) {
      answer.push(...arr[j])
      i -= arr[j].length
    }
    j--
  }

  return answer
}

topKFrequent([1,2], 2)
