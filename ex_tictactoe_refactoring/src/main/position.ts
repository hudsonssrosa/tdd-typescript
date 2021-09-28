export class Position {
    private row: number = 0;
    private column: number = 0;

    public desiredPosition(x: number, y: number) {
        this.row = x;
        this.column = y;
    }

    public getPosition() {
        return {
            row: this.row,
            column: this.column,
        }
    }
}