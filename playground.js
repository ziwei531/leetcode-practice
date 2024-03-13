var firstMissingPositive = function (nums) {
    let max = 0;
    let answer;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    const boolArr = Array(max).fill(false);

    for (let i = 0; i < max; i++) {
        boolArr[nums[i] - 1] = true;
    }

    let 
    for (let i = 0; i < boolArr.length; i++) {
        if (boolArr[i] === true) {
            answer = i;
            break;
        }
    }

    console.log(boolArr);
    console.log(answer);
};
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
