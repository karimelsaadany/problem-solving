const isValidSudoku = (board) => {
  let hashRow = {}
  let hashCol = {}
  let square = {}
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue
      if (!hashRow[i]) {
        hashRow[i] = new Set()
      }
      if (!hashCol[j]) {
        hashCol[j] = new Set()
      }
      if (!square[[parseInt(i / 3), parseInt(j / 3)]]) {
        square[[parseInt(i / 3), parseInt(j / 3)]] = new Set()
      }
      if (
        hashRow[i].has(board[i][j]) ||
        hashCol[j].has(board[i][j]) ||
        square[[parseInt(i / 3), parseInt(j / 3)]].has(board[i][j])
      ) return false
      hashRow[i].add(board[i][j])
      hashCol[j].add(board[i][j])
      square[[parseInt(i / 3), parseInt(j / 3)]].add(board[i][j])
    }
  }
  return true
}

const board = [
["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
]

console.log(isValidSudoku(board))