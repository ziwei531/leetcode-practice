const testCase1 = [3, 0, 1];
const testCase2 = [0, 1];
const testCase3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const testCase4 = [1];
const testCase5 = [
    45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
    4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34,
    30, 25, 47, 0, 31, 42, 24, 10, 14,
];

// missingindex is more accurate
var missingNumber = function (nums) {
    let missingNum;
    let booleanArr = new Array(nums.length + 1).fill(false);

    for (const num of nums) {
        booleanArr[num] = true; // index 1 exists, index 2 exists, index 3 does not exist
    }

    booleanArr.forEach((e, index) => {
        if (e === false) {
            missingNum = index;
        }
    });

    console.log(missingNum);
    return missingNum;
};

missingNumber(testCase1);
missingNumber(testCase2);
missingNumber(testCase3);
missingNumber(testCase4);
missingNumber(testCase5);
