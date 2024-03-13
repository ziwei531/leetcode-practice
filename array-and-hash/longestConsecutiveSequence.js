/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    //
    if (nums.length === 0) {
        return 0;
    }
    let set = new Set();
    let longestSequence = 0;

    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }

    set.forEach((e) => {
        // check whether this can be the beginning of the sequence.
        if (!set.has(e - 1)) {
            let currentNum = e;
            let currentStreak = 1;

            // if the potentially initial value does not have any subsequent values (by adding 1), this loop would not trigger.
            // if it does have subsequent values, this loop would update the currentStreak
            while (set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak++;
            }

            // update the sequence based on which streak is larger.
            // if currentStreak is larger than current longestSequence, it'll update it
            longestSequence = Math.max(longestSequence, currentStreak);
        }
    });

    return longestSequence;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([1, 2, 0, 1])); // 3
console.log(longestConsecutive([0])); // 1
console.log(longestConsecutive([0, 0])); // 1
console.log(longestConsecutive([])); // 0
