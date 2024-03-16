/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length === 1 || s.length === 0) return false;
    s = s.split("");
    const arr = [];
    const pairs = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    for (char of s) {
        if (pairs[char]) {
            arr.push(char);
        } else {
            const top = arr.pop();
            if (pairs[top] !== char) {
                return false;
            }
        }
    }

    if (arr.length === 0) return true;
    return false;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("[)"));
console.log(isValid("["));
console.log(isValid("[["));
