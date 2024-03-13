/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let occurrenceCheck = new Map();

    // Math.abs(i - j) <= k.
    // nums[i] === nums[j], where nums[i] and nums[j] must be different indexes

    for (let i = 0; i < nums.length; i++) {
        if (occurrenceCheck.has(nums[i])) {
            return true;
        }

        // once it has reached the limits. remember that abs(i - j) cannot exceed k
        // meaning, if i already equals k, we must proceed into removing the leftmost element of nums from the hashMap
        // so that it is back into the confines that adheres to the <= k condition.
        if (i >= k) {
            if (occurrenceCheck.size === 0) return false;
            else occurrenceCheck.delete(nums[i - k]);
        }
        // we need to delete first before we can proceed to the next iteration.

        occurrenceCheck.set(nums[i]);
    }
    return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicate([1, 2, 1], 0));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 5], 3)); // examine this if you're confused with i >= k. Notice how if i >= k, the leftmost element would've exceeded the abs(i -j) <= k condition.
