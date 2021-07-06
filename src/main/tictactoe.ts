type Player = 'X' | 'O';
export class TicTacToe {
  private matrix: string[][];

  constructor() {
    this.matrix = [[], [], [], [], [], [], [], [], []];
  }

  play(player: Player, position: any) {
    const posX = position.posX;
    const posY = position.posY;
    if (this.matrix[posX][posY] != undefined) {
      return 'Position played';
    }
    this.matrix[posX][posY] = player;
    return this.matrix;
  }

  hasAnyBodyWon() {
    for (let pos = 0; pos < 3; pos++) {
      let wonByAnyLine = this.matrix[pos][0] != undefined && this.matrix[pos][0] == this.matrix[pos][1] && this.matrix[pos][1] == this.matrix[pos][2];
      let wonByAnyColumn = this.matrix[0][pos] != undefined && this.matrix[0][pos] == this.matrix[1][pos] && this.matrix[1][pos] == this.matrix[2][pos];
      let wonByAnyDiagonal = (this.matrix[pos][pos] != undefined && this.matrix[0][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][2]) ||
        (this.matrix[0][2] != undefined && this.matrix[0][2] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][0]);
        
      if (wonByAnyLine || wonByAnyColumn || wonByAnyDiagonal) {
        return true;
      }
    }
    return false;
  }
}
