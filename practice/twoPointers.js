// two sum. two pointers execise
// two pointers assumes that the array is sorted.

const twoSum = (arr, target) => {
    const firstPointer = 0;
    const lastPointer = arr.length - 1;

    for (let i = firstPointer, j = lastPointer; i < j; ) {
        let sum = arr[i] + arr[j];

        if (sum === target) {
            return [i, j];
        }

        if (sum > target) {
            j--;
        } else if (sum < target) {
            i++;
        }
    }
};

const arr = [1, 2, 3, 4];
console.log(twoSum(arr, 6));
console.log(twoSum(arr, 5));
