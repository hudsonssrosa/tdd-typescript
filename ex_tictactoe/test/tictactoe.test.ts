import { TicTacToe } from "../src/main/tictactoe";

describe("TicTacToe test", () => {

  it("Should returns the position 1,1 in matrix for Player X", () => {
    let tictactoe: TicTacToe = new TicTacToe();
    const position = { posX: 1, posY: 1 }
    const matrix = tictactoe.play('X', position)
    expect(matrix[1][1]).toBe('X')
  })

  it("Should returns the position 2,2 in matrix for Player O", () => {
    let tictactoe: TicTacToe = new TicTacToe();
    const position = { posX: 2, posY: 2 }
    const matrix = tictactoe.play('O', position)
    expect(matrix[2][2]).toBe('O')
  })

  it("Should returns the position 2,2 in matrix for Player X", () => {
    let tictactoe: TicTacToe = new TicTacToe();
    let position = { posX: 2, posY: 2 }
    const matrix = tictactoe.play('O', position)
    expect(tictactoe.play('O', position)).toBe('Position played')
  })

  it("should determine the winner, when we have 3 X's in a row", ()=>{
    let tictactoe: TicTacToe = new TicTacToe();
    tictactoe.play('X', {posX: 0, posY: 0 })
    tictactoe.play('O', {posX: 1, posY: 0 })
    tictactoe.play('X', {posX: 0, posY: 1 })
    tictactoe.play('O', {posX: 1, posY: 1 })
    tictactoe.play('X', {posX: 0, posY: 2 })
    
    expect(tictactoe.hasAnyBodyWon()).toBe(true)
  })

  it("should determine if nobody won", ()=>{
    let tictactoe: TicTacToe = new TicTacToe();
    tictactoe.play('O', {posX: 0, posY: 0 })
    tictactoe.play('X', {posX: 0, posY: 1 })
    tictactoe.play('O', {posX: 0, posY: 2 })

    tictactoe.play('O', {posX: 1, posY: 0 })
    tictactoe.play('X', {posX: 1, posY: 1 })
    tictactoe.play('X', {posX: 1, posY: 2 })

    tictactoe.play('X', {posX: 2, posY: 0 })
    tictactoe.play('O', {posX: 2, posY: 1 })
    tictactoe.play('O', {posX: 2, posY: 2 })
    
    expect(tictactoe.hasAnyBodyWon()).toBe(false)
  })

  it("should determine if has a winner in the board", ()=>{
    let tictactoe: TicTacToe = new TicTacToe();
    tictactoe.play('X', {posX: 0, posY: 0 })
    tictactoe.play('O', {posX: 0, posY: 1 })
    tictactoe.play('X', {posX: 0, posY: 2 })

    tictactoe.play('O', {posX: 1, posY: 0 })
    tictactoe.play('X', {posX: 1, posY: 1 })
    tictactoe.play('O', {posX: 1, posY: 2 })

    tictactoe.play('X', {posX: 2, posY: 0 })
    tictactoe.play('O', {posX: 2, posY: 1 })
    tictactoe.play('X', {posX: 2, posY: 2 })
    
    expect(tictactoe.hasAnyBodyWon()).toBe(true)
  })

});
