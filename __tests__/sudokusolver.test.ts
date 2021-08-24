import {
    findAvailableNumbersInBox,
    findAvailableNumbersInCol,
    findAvailableNumbersInRow,
    solve,
} from "lib/prototypes/sudoku-solver/sudokusolver";

const sample = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0],
];

const solution = [
    [4, 3, 5, 2, 6, 9, 7, 8, 1],
    [6, 8, 2, 5, 7, 1, 4, 9, 3],
    [1, 9, 7, 8, 3, 4, 5, 6, 2],
    [8, 2, 6, 1, 9, 5, 3, 4, 7],
    [3, 7, 4, 6, 8, 2, 9, 1, 5],
    [9, 5, 1, 7, 4, 3, 6, 2, 8],
    [5, 1, 9, 3, 2, 6, 8, 7, 4],
    [2, 4, 8, 9, 5, 7, 1, 3, 6],
    [7, 6, 3, 4, 1, 8, 2, 5, 9],
];

describe("SudokuSolver", () => {
    it("find row numbers correctly", () => {
        const nums = findAvailableNumbersInRow(sample, 0);
        expect(nums).toStrictEqual([3, 4, 5, 8, 9]);
    });
    it("find col numbers correctly", () => {
        const nums = findAvailableNumbersInCol(sample, 0);
        expect(nums).toStrictEqual([2, 3, 4, 5, 9]);
    });
    it("find box numbers correctly", () => {
        const nums = findAvailableNumbersInBox(sample, 0);
        expect(nums).toStrictEqual([2, 3, 4, 5, 7]);
    });
    it("test", () => {
        const possibleNumbers = solve(sample);
        console.table(possibleNumbers);
    });
});
