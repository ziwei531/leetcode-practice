/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let max = arr[arr.length - 1];
    arr[arr.length - 1] = -1;

    // start from the second last
    for (let i = arr.length - 2; i >= 0; i--) {
        // since the comparison only involves the right elements, immediately replace the current value with the max value
        let cur = arr[i]; // we store its value before changing it.
        arr[i] = max;
        if (cur > max) max = cur;
    }
    return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));

// element that is greatest among the right of the element
// meaning, if we're index index 1, do the comparison to the right of it EXCLUDING INDEX 1 ITSELF
