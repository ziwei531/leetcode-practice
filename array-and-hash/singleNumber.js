// var singleNumber = function (nums) {
//     let sorted = nums.sort((a, b) => a - b);

//     for (let i = 0; i < sorted.length; i += 2) {
//         if (sorted[i] !== sorted[i + 1]) {
//             console.log(sorted[i]);
//             return sorted[i];
//         }
//     }
// };

var singleNumber = function (nums) {
    let hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!hashMap.has(nums[i])) {
            hashMap.set(nums[i]);
        } else {
            hashMap.delete(nums[i]);
        }
    }
    console.log([...hashMap.keys()][0]);
    return [...hashMap.keys()][0];
};

singleNumber([4, 1, 2, 1, 2]);

// var singleNumber = function (nums) {
//     let sorted = nums.sort();
//     let duplicateNumbers = [];

//     for (let i = 0; i < sorted.length; i++) {
//         if (sorted[i + 1] !== undefined && sorted[i] === sorted[i + 1]) {
//             duplicateNumbers.push(sorted[i]);
//         }
//     }

//     for (let i = 0; i < duplicateNumbers.length; i++) {
//         sorted = sorted.filter((e) => {
//             return e !== duplicateNumbers[i];
//         });
//     }

//     console.log(sorted);
//     return sorted[0];
// };
