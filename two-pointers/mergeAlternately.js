/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    word1 = word1.split("");
    let modifiedWord1 = [];

    // console.log(word1);
    for (let i = 0; i < word1.length; i++) {
        modifiedWord1.push(word1[i]);
        modifiedWord1.push("");
    }

    if (modifiedWord1.length < word1.length + word2.length) {
        let remainingNeeded =
            word1.length + word2.length - modifiedWord1.length;
        for (let i = 0; i < remainingNeeded; i++) {
            modifiedWord1.push("");
        }
    }

    // console.log(modifiedWord1);

    let initIndex = 0;
    for (let i = 0; i < modifiedWord1.length; i++) {
        if (modifiedWord1[i] === "") {
            if (!word2.charAt(initIndex)) continue;
            modifiedWord1[i] = word2.charAt(initIndex);
            initIndex++;
        }
    }

    return modifiedWord1.join("");
};
console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));
