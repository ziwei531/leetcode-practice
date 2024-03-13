/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = strs[0];

    console.log(strs[2].indexOf("flo")); // this will give -1; use this knwoledge to find the solution

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1); // remove the last character

            if (prefix === "") return "";
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
