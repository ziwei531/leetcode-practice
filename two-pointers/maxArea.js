/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = Number.MIN_SAFE_INTEGER;

    let rightPointer = height.length - 1;

    for (let leftPointer = 0; leftPointer < rightPointer; ) {
        let leftPointerHeight = height[leftPointer];
        let rightPointerHeight = height[rightPointer];
        let width = rightPointer - leftPointer;
        let minimumHeight = Math.min(leftPointerHeight, rightPointerHeight);
        let area = minimumHeight * width; // refer to the picture again if you cant visualize this. if the other end is taller, the water will spill

        maxArea = Math.max(maxArea, area);

        // essentially, if either end is shorter, moving that end means
        // we can potentially find an end that is higher. It's actually illogical to move the end that is higher as that will ruin the optimal result, since an optimal result means that we want both ends to be as high as possible
        if (leftPointerHeight < rightPointerHeight) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }
    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([1, 2, 1]));
