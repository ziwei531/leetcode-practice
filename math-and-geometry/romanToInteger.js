/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbolsMap = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    s = s.split("");
    let result = 0;
    let i = s.length - 1;

    while (i > 0) {
        if (symbolsMap.get(s[i]) > symbolsMap.get(s[i - 1])) {
            result += symbolsMap.get(s[i]) - symbolsMap.get(s[i - 1]);
            i--;
        } else {
            result += symbolsMap.get(s[i]);
        }

        i--;
    }

    if (i === 0) {
        result += symbolsMap.get(s[i]);
    }

    return result;
};

console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
console.log(romanToInt("V")); // Output: 5
