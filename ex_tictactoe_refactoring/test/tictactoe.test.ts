import {gameState} from '../src/main/gameState';
import {Players} from '../src/main/players';
import {Position} from '../src/main/position';
import {TicTacToe} from '../src/main/tictactoe';

describe('TicTacToe test', () => {
  let tictactoe: TicTacToe;
  let position: Position;
  beforeEach(() => {
    tictactoe = new TicTacToe();
    position = new Position();
  });

  it('Should returns the position 1,1 in matrix for Player X', () => {
    position.desiredPosition(1, 1);
    const state = tictactoe.play(Players.X, position);
    expect(state).toBe(gameState.NextTurn);
  });

  it('Should returns the position 2,2 in matrix for Player O', () => {
    position.desiredPosition(2, 2);
    const state = tictactoe.play(Players.O, position);
    expect(state).toBe(gameState.NextTurn);
  });

  it('Should returns Position played if another player has already played that position', () => {
    position.desiredPosition(2, 2);
    tictactoe.play(Players.X, position);
    position.desiredPosition(2, 2);
    expect(tictactoe.play(Players.O, position)).toBe(gameState.TryAgain);
  });

  it("should determine the winner, when we have 3 X's in a row", () => {
    position.desiredPosition(0, 0);
    tictactoe.play(Players.X, position);
    position.desiredPosition(1, 0);
    tictactoe.play(Players.O, position);
    position.desiredPosition(0, 1);
    tictactoe.play(Players.X, position);
    position.desiredPosition(1, 1);
    tictactoe.play(Players.O, position);
    position.desiredPosition(0, 2);
    expect(tictactoe.play(Players.X, position)).toBe(gameState.GameWon);
  });

  it('should determine if nobody won', () => {
    position.desiredPosition(0, 0);
    tictactoe.play(Players.O, position);
    position.desiredPosition(0, 1);
    tictactoe.play(Players.X, position);
    position.desiredPosition(1, 0);
    tictactoe.play(Players.O, position);
    position.desiredPosition(1, 1);
    tictactoe.play(Players.X, position);
    position.desiredPosition(2, 1);
    tictactoe.play(Players.O, position);
    position.desiredPosition(2, 0);
    tictactoe.play(Players.X, position);
    position.desiredPosition(0, 2);
    tictactoe.play(Players.O, position);
    position.desiredPosition(1, 2);
    tictactoe.play(Players.X, position);
    position.desiredPosition(2, 2);
    tictactoe.play(Players.O, position);

    expect(tictactoe.isTheGameWon()).toBe(false);
  });

  it('should determine if somebody won', () => {
    position.desiredPosition(0, 0);
    tictactoe.play(Players.X, position);
    position.desiredPosition(1, 0);
    tictactoe.play(Players.O, position);
    position.desiredPosition(0, 1);
    tictactoe.play(Players.X, position);
    position.desiredPosition(0, 2);
    tictactoe.play(Players.O, position);
    position.desiredPosition(1, 1);
    tictactoe.play(Players.X, position);
    position.desiredPosition(2, 2);
    tictactoe.play(Players.O, position);
    position.desiredPosition(2, 1);
    tictactoe.play(Players.X, position);

    expect(tictactoe.isTheGameWon()).toBe(true);
  });

  it('should determine if has a winner in the board', () => {
    position.desiredPosition(0, 0);
    tictactoe.play(Players.X, position);
    position.desiredPosition(0, 1);
    tictactoe.play(Players.O, position);
    position.desiredPosition(0, 2);
    tictactoe.play(Players.X, position);
    position.desiredPosition(1, 0);
    tictactoe.play(Players.O, position);
    position.desiredPosition(1, 1);
    tictactoe.play(Players.X, position);
    position.desiredPosition(1, 2);
    tictactoe.play(Players.O, position);
    position.desiredPosition(2, 0);
    tictactoe.play(Players.X, position);
    position.desiredPosition(2, 1);
    tictactoe.play(Players.O, position);
    position.desiredPosition(2, 2);
    tictactoe.play(Players.X, position);

    expect(tictactoe.isTheGameWon()).toBe(true);
  });
});
