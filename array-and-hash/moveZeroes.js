/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
    if (!nums.includes(0)) {
        return nums;
    }

    if (nums.every((num) => num === 0)) {
        return nums;
    }

    let nonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // nums[nonZeroIndex] = nums[i];

            [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
            nonZeroIndex++;

            // let's say it's [0, 1, 0, 3, 12], we can see that it has 3 nonZeroes
            // we assign each initial encounters of nonZeroes to index 0, and append nonZeroIndex
            // once loop is done, nonZeroIndex should be of value 3

            /**
             * encountered 1, index is currently 0, appending it will cause it to be 1
             * encountered 3, index is currently 1, appending it will cause it to be 2
             * encountered 12, index is currently 2, appending it will cause it to be 3
             *
             * the end nonZeroIndex is 3, therefore we can immediately start assigning Zeroes starting from index 3
             */
        }
    }

    // for (let i = nonZeroIndex; i < nums.length; i++) {
    //     nums[i] = 0;
    // }
    console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0]);
