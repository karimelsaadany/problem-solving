class EncodeAndDecode {
  constructor(strArr) {
    this.strArr = strArr
  }

  encode() {
    for (let i = 0; i < this.strArr.length; i++) {
      this.strArr[i] = `${this.strArr[i].length}#${this.strArr[i]}`
    }
    this.strArr = this.strArr.join('')
    return this.strArr
  }

  decode() {
    const decodedStr = []
    let i = 0
    while (i < this.strArr.length) {
      let j = i;
      while (this.strArr[j] !== '#') {
        j += 1
      }
      let wordLength = parseInt(this.strArr.slice(i, j))
      decodedStr.push(this.strArr.slice(j+1, j+1+wordLength))
      i = j + 1 + wordLength
    }
    return decodedStr
  }
}

const encodeAndDeocde = new EncodeAndDecode(["lint","code","love","you"])
const encodedStr = encodeAndDeocde.encode()
console.log(encodedStr)
const decodedStr = encodeAndDeocde.decode()
console.log(decodedStr)