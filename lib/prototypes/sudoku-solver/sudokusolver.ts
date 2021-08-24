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

export function solve(board: number[][]): number[][] {
    let iter = 0;
    while (board.some((row) => row.some((col) => col === 0)) && iter < 100) {
        const availables = findAvailableNumbers(board);
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (availables[row][col].length === 1) {
                    board[row][col] = availables[row][col][0];
                }
            }
        }
        iter++;
    }

    console.log("Iterations:", iter);

    return board;
}

export function findAvailableNumbers(board: number[][]): number[][][] {
    const availables: number[][][] = [];
    for (let row = 0; row < board.length; row++) {
        availables.push([]);
        for (let col = 0; col < board[0].length; col++) {
            var cell = board[row][col];
            availables[row].push([]);
            if (cell !== 0) continue;
            const boxNums = findAvailableNumbersInBox(board, getBox(row, col));
            const rowNums = findAvailableNumbersInRow(board, row);
            const colNums = findAvailableNumbersInCol(board, col);
            const available = boxNums.filter((x) => rowNums.includes(x) && colNums.includes(x));
            availables[row][col] = available;
        }
    }
    return availables;
}

export function findAvailableNumbersInRow(board: number[][], row: number): number[] {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const existing = [0];
    for (let col = 0; col < board[0].length; col++) {
        existing.push(board[row][col]);
    }
    return numbers.filter((x) => !existing.includes(x));
}

export function findAvailableNumbersInCol(board: number[][], col: number): number[] {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const existing = [0];
    for (let row = 0; row < board.length; row++) {
        existing.push(board[row][col]);
    }
    return numbers.filter((x) => !existing.includes(x));
}

export function findAvailableNumbersInBox(board: number[][], box: number): number[] {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const existing = [0];

    // TODO(selim): We don't need to loop over the whole board, we can just loop over the specific
    //  box. But this works for now.
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            var cbox = getBox(row, col);
            if (cbox != box) continue;
            existing.push(board[row][col]);
        }
    }

    return numbers.filter((x) => !existing.includes(x));
}

export function getBox(row: number, col: number) {
    return Math.floor(row / 3) * 3 + Math.floor(col / 3);
}
