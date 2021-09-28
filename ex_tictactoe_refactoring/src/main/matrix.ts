import {Players} from './players';
import {Position} from './position';

export class Matrix {
  private matrix: Players[][];
  private position: Position;

  constructor() {
    this.position = new Position();
    this.matrix = [[], [], [], [], [], [], [], [], []];
  }

  playPosition(player: Players, desiredPosition: Position) {
    const {row, column} = this.getCoordinates(desiredPosition);
    this.matrix[row][column] = player;
  }

  ifPositionPlayed(desiredPosition: Position) {
    const {row, column} = this.getCoordinates(desiredPosition);
    return (
      this.matrix[row][column] === Players.X ||
      this.matrix[row][column] === Players.O
    );
  }

  private getCoordinates(desiredPosition: Position) {
    // const position = desiredPosition;
    let coordinates = this.position.getPosition();
    const row = coordinates.row;
    const column = coordinates.column;
    return {row, column};
  }

  wonByRow(row: number) {
    return (
      (this.matrix[row][0] === Players.X || this.matrix[row][0] === Players.O) &&
      this.matrix[row][0] === this.matrix[row][1] && this.matrix[row][1] === this.matrix[row][2]
    );
  }

  wonByColumn(column: number) {
    return (
      (this.matrix[0][column] === Players.X || this.matrix[0][column] === Players.O) &&
      this.matrix[0][column] === this.matrix[1][column] && this.matrix[1][column] === this.matrix[2][column]
    );
  }

  wonByDiagonal(pos: number) {
    return (
      ((this.matrix[pos][pos] === Players.X || this.matrix[pos][pos] === Players.O) &&
        this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) ||
      (this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0])
    );
  }
}
