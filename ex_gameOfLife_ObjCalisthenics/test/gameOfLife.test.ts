import {GameOfLife} from "../src/main/gameOfLife";

describe('Game Of Life', () => {
    describe("Given we have a live cell ", () => {
        it("should die if fewer than two live neighbours", () => {
            let grid = [
                [0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ]
            const gameOfLife = new GameOfLife(grid)
            const cell = gameOfLife.shoudLive({positionX: 1, positionY: 1})
            expect(cell).toBe(false)
        })
        it("should become alive if three live neighbours", () => {
            let grid = [
                [0, 1, 1, 0, 0],
                [0, 1, 0, 0, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ]
            const gameOfLife = new GameOfLife(grid)
            const cell = gameOfLife.shoudLive({positionX: 1, positionY: 1})
            expect(cell).toBe(true)
        })
        it("should die if more than three live neighbours (overpopulation)", () => {
            let grid = [
                [0, 1, 0, 0, 0],
                [1, 1, 1, 0, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ]
            const gameOfLife = new GameOfLife(grid)
            const cell = gameOfLife.shoudLive({positionX: 1, positionY: 1})
            expect(cell).toBe(false)
        })
    })
    describe("Given we have a dead cell", () => {
        it("Should become alive if there are three live neighbours", () => {
            let grid = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0]
            ]
            const gameOfLife = new GameOfLife(grid)
            const cell = gameOfLife.shoudLive({positionX: 2, positionY: 2})
            expect(cell).toBe(true)

        })
    })

})