export enum Compass {
  N = "N",
  E = "E",
  S = "S",
  W = "W",
}

export class Direction {
  private orientation: Compass;

  constructor() {
    this.orientation = Compass.N;
  }

  public getOrientation(): Compass {
    return this.orientation;
  }

  public turnRight() {
    if (this.orientation === Compass.N) {
      this.orientation = Compass.E;
    } else if (this.orientation === Compass.E) {
      this.orientation = Compass.S;
    } else if (this.orientation === Compass.S) {
      this.orientation = Compass.W;
    } else if (this.orientation === Compass.W) {
      this.orientation = Compass.N;
    }
  }

  public turnLeft() {
    if (this.orientation === Compass.N) {
      this.orientation = Compass.W;
    } else if (this.orientation === Compass.W) {
      this.orientation = Compass.S;
    } else if (this.orientation === Compass.S) {
      this.orientation = Compass.E;
    } else if (this.orientation === Compass.E) {
      this.orientation = Compass.N;
    }
  }
}
