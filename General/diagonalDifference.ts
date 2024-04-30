function diagonalDifference(arr: number[][]): number {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[i][n - 1 - i];
    }

    return Math.abs(leftDiagonal - rightDiagonal);
}

console.log(
    diagonalDifference([
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9],
    ])
);
