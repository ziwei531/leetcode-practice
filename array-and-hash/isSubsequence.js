/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    sArr = s.split("");

    t = t.split("");

    for (let i = 0; i < t.length; i++) {
        if (sArr[0] === t[i]) {
            sArr.shift();
        }
    }

    return sArr.length > 0 ? false : true;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
