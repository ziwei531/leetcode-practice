var construct2DArray = function (original, m, n) {
    // m = rows
    // n = columns
    let answer = [];
    let row = [];

    if (m * n !== original.length) {
        return answer;
    }

    for (let i = 0; i < original.length; i++) {
        row.push(original[i]);
        if (row.length === n) {
            answer.push(row);
            row = [];
        }
    }

    console.log(answer);
    return answer;

    // if (m * n === original.length) {
    //     let index = 0;
    //     for (let i = 0; i < m; i++) {
    //         arr[i] = []; // make the first index of arr an empty array.
    //         for (let j = 0; j < n; j++) {
    //             // [1, 2, 3] <- 1, 2, and 3 are the columns
    //             arr[i][j] = original[index]; // insert the corresponding indexes from original to arr[i]'s array's indexes
    //             index++;
    //         }
    //     }
    //     console.log(arr);

    //     return arr;
    // } else {
    //     console.log(arr);
    //     return arr;
    // }
};

construct2DArray([1, 2, 3, 4], 2, 2);
construct2DArray([1, 2, 3], 1, 3);
construct2DArray([1, 2], 1, 1);
