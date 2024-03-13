/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// find the three elements that sum up to 0;
var threeSum = function (nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    console.log(nums);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue;
        }

        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;

        while (leftPointer < rightPointer) {
            let sumOfThree = nums[i] + nums[leftPointer] + nums[rightPointer];
            if (sumOfThree > 0) {
                rightPointer--;
            } else if (sumOfThree < 0) {
                leftPointer++;
            } else {
                result.push([nums[i], nums[leftPointer], nums[rightPointer]]);
                leftPointer++;
                while (
                    nums[leftPointer] === nums[leftPointer - 1] &&
                    leftPointer < rightPointer
                ) {
                    leftPointer++;
                }
            }
        }
    }

    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([0, 0, 0]));
