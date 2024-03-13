let t1 = [4, 3, 2, 7, 8, 2, 3, 1];
let t2 = [1, 1];
let t3 = [1, 2];

var findDisappearedNumbers = function (nums) {
    const startingNum = 1; // must start with 1

    const uniqueKeys = new Set(nums);

    let result = [];

    for (let i = startingNum; i <= nums.length; i++) {
        if (!uniqueKeys.has(i)) {
            result.push(i);
        }
    }

    console.log(result);
};

findDisappearedNumbers(t1);
findDisappearedNumbers(t2);
findDisappearedNumbers(t3);
