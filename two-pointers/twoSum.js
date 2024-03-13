/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    let complementMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let subtractedValue = target - nums[i];
        if (complementMap.has(subtractedValue)) {
            console.log([complementMap.get(subtractedValue), i]);
            return [complementMap.get(subtractedValue), i];
        }

        // key will be the nums' value, and the map's value will be the index itself
        complementMap.set(nums[i], i);
    }

    return [];
};

twoSum([2, 7, 11, 15], 9); // [0,1]
twoSum([3, 2, 4], 6); // [1,2]
twoSum([3, 3], 6); // [0,1]
twoSum([2, 5, 5, 11], 10);
twoSum([3, 2, 3], 6);
