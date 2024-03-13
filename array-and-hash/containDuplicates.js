/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let containsDuplicates = false;

    // brute force method
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] === nums[j]) {
    //             containsDuplicates = true;
    //         }
    //     }
    // }

    nums = nums.sort();

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            containsDuplicates = true;
        }
    }
    return containsDuplicates;
};

console.log(containsDuplicate([2, 14, 18, 22, 22]));
console.log(containsDuplicate([1, 2, 3, 4]));
