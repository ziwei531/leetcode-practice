/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;
    let result = [];

    while (leftPointer < rightPointer) {
        let sum = numbers[leftPointer] + numbers[rightPointer];
        if (sum === target) {
            let firstIndices = leftPointer + 1;
            let secondIndices = rightPointer + 1;
            result.push(firstIndices, secondIndices);
            return result;
        } else if (sum > target) {
            rightPointer--;
        } else if (sum < target) {
            leftPointer++;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1, 2, 3, 4], 6));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
