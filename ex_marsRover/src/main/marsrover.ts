import { Direction, Compass } from "./direction";

const GRID_SIZE_X = 10;
const GRID_SIZE_Y = 10;

interface IPosition {
  x: number;
  y: number;
}

export class MarsRover {
  private position: IPosition = {
    x: 0,
    y: 0,
  };

  private direction: Direction;

  public constructor() {
    this.position = { x: 0, y: 0 };
    this.direction = new Direction();
  }

  public getState() {
    return `${this.position.x}:${
      this.position.y
    }:${this.direction.getOrientation()}`;
  }

  public command(command: string) {
    for (let i = 0; i < command.length; i++) {
      let currentCommand = command.charAt(i);
      if (currentCommand === "R") {
        this.direction.turnRight();
      } else if (currentCommand === "L") {
        this.direction.turnLeft();
      } else if (currentCommand === "M") {
        this.move();
      } else {
        throw new Error("Not Implemented");
      }
    }
  }

  private move() {
    const orientation = this.direction.getOrientation();
    if (orientation === Compass.N) {
      this.position.y = (this.position.y + 1 + GRID_SIZE_Y) % GRID_SIZE_Y;
    }
    if (orientation === "E") {
      this.position.x = (this.position.x + 1 + GRID_SIZE_X) % GRID_SIZE_X;
    }
    if (orientation === "S") {
      this.position.y = (this.position.y - 1 + GRID_SIZE_Y) % GRID_SIZE_Y;
    }
    if (orientation === "W") {
      this.position.x = (this.position.x - 1 + GRID_SIZE_X) % GRID_SIZE_X;
    }
  }
}
