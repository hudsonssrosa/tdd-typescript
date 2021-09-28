import { gameState } from "./gameState";
import { Matrix } from "./matrix";
import { Players } from "./players";
import { Position } from "./position";

type Player = 'X' | 'O';

export class TicTacToe {
  private matrix: Matrix;

  constructor() {
    this.matrix = new Matrix();
  }

  play(player: Players, desiredPosition: Position) {
    
    if(this.matrix.ifPositionPlayed(desiredPosition)){
      return gameState.TryAgain;
    };
    this.matrix.playPosition(player, desiredPosition)
    if(this.isTheGameWon()) {
      return gameState.GameWon;
    }
    return gameState.NextTurn;
  }

  isTheGameWon() {
    let winState = false;
    let pos = 0;
    while (pos < 3 && winState === false) {
      winState = this.isWinner(pos);
      pos++;
    }
    return winState;
  }

  isWinner(pos: number){
    return (this.matrix.wonByRow(pos) || this.matrix.wonByColumn(pos) || this.matrix.wonByDiagonal(pos));
  }
}
