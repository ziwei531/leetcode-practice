/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices: number[]): number => {
    let maxProfit = 0;

    let leftPointer = 0;
    let rightPointer = leftPointer + 1;

    while (rightPointer <= prices.length) {
        let tempProfit = prices[rightPointer] - prices[leftPointer];

        if (tempProfit > maxProfit) {
            maxProfit = tempProfit;
        }

        if (prices[rightPointer] < prices[leftPointer]) {
            leftPointer++;
            rightPointer = leftPointer + 1;
        } else {
            rightPointer++;
        }
    }

    return maxProfit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 1, 4]));
