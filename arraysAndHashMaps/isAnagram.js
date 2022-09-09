function isAnagram(s, t) {
  // // using sorting: time O(nlogn) / space O(1)
  //   if(s.split('').sort().join('') === t.split('').sort().join('')) return true
  //   return false

  // // using hashMap: time O(n) / space O(n)
  // if (s.length !== t.length) return false
  // const sHash = {}
  // const tHash = {}

  // for (let i = 0; i < s.length; i++) {
  //   if (sHash[s[i]]) {
  //     sHash[s[i]] += 1
  //   } else {
  //     sHash[s[i]] = 1
  //   }

  //   if (tHash[t[i]]) {
  //     tHash[t[i]] += 1
  //   } else {
  //     tHash[t[i]] = 1
  //   }
  // }

  // for (let i = 0; i < s.length; i++) {
  //   if (sHash[s[i]] !== tHash[s[i]]) return false
  // }

  return true
};

console.log(isAnagram("dgqztusjuu", "dqugjzutsu"))
