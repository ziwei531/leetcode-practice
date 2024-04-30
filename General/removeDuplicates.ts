function removeDuplicates(nums: number[]): number {
    let totalUnique = 0;

    let val: number;
    let tempArr: number[] = [nums[0]];
    let currentValue = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== currentValue) {
            val = nums[i];
            currentValue = nums[i];
            tempArr.push(val);
        }
    }

    totalUnique = tempArr.length;
    for (let i = 0; i < nums.length; i++) {
        nums[i] = tempArr[i];
    }

    return totalUnique;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
