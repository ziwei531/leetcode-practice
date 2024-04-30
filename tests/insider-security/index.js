function getMinProcessingTime(data, processTimeA, processTimeB) {
    let minTimeA = 0;
    let minTimeB = 0;
    let arrA;
    let arrB;

    arrA = data.slice(0, data.length / 2);
    arrB = data.slice(data.length / 2);

    for (let i = 0; i < arrA.length; i++) {
        minTimeA += arrA[i] * processTimeA;
    }

    for (let i = 0; i < arrB.length; i++) {
        minTimeB += arrB[i] * processTimeB;
    }

    console.log(arrA, arrB);

    console.log(minTimeA, minTimeB);

    return Math.max(minTimeA, minTimeB);
}

// console.log(getMinProcessingTime([4, 4, 6, 2, 5], 3, 2));
// console.log(getMinProcessingTime([1, 2, 3, 4], 2, 4));

// console.log(getMinProcessingTime([2, 4, 8, 3, 6, 2], 3, 4));
// console.log(getMinProcessingTime([4, 1, 2, 3, 4, 2, 4], 3, 4));

function reachTheEnd(grid, maxTime) {
    let n = grid.length;
    let m = grid[0].length;
    let visited = new Array(n).fill(0).map(() => new Array(m).fill(false));
    let queue = [[0, 0, 0]];

    while (queue.length) {
        let [x, y, time] = queue.shift();

        if (x === n - 1 && y === m - 1) {
            return "Yes";
        }

        if (
            x < 0 ||
            x >= n ||
            y < 0 ||
            y >= m ||
            visited[x][y] ||
            grid[x][y] === "#"
        ) {
            continue;
        }

        visited[x][y] = true;

        if (time === maxTime) {
            continue;
        }

        queue.push([x + 1, y, time + 1]);
        queue.push([x - 1, y, time + 1]);
        queue.push([x, y + 1, time + 1]);
        queue.push([x, y - 1, time + 1]);
    }

    return "No";
}

console.log(reachTheEnd(["..##", "#.##", "#..."], 5));
