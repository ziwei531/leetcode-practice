/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let splitS = s.split(" ");
    let splitPattern = pattern.split("");

    let uniqueS = [...new Set(splitS)];
    let uniquePattern = [...new Set(splitPattern)];

    console.log(uniqueS);
    console.log(uniquePattern);

    if (uniqueS.length !== uniquePattern.length) return false;

    let sMap = new Map();

    for (let i = 0; i < uniqueS.length; i++) {
        sMap.set(uniqueS[i], uniquePattern[i]);
    }

    // console.log(sMap);

    for (let i = 0; i < splitS.length; i++) {
        splitS[i] = sMap.get(splitS[i]);
    }

    // console.log(splitS);

    if (splitS.join("") === splitPattern.join("")) return true;
    return false;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
