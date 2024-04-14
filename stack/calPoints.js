/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    const stack = [];
    let total = 0;

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "C") {
            stack.pop();
        } else if (operations[i] === "D") {
            const double = parseInt(stack.at(-1)) * 2;
            stack.push(double);
        } else if (operations[i] === "+") {
            let prevSecond = parseInt(stack.at(-2));
            let prevLast = parseInt(stack.at(-1));
            let result = prevSecond + prevLast;
            stack.push(result);
        } else {
            stack.push(parseInt(operations[i]));
        }
    }

    if (stack.length === 0) return 0;

    for (num of stack) {
        total += num;
    }

    return total;
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1", "C"]));
