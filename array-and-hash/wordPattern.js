/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    // let sMap = new Map();

    // for (let i = 0; i < split.length; i++) {
    //     sMap.set(split[i], );
    // }

    let split = s.split(" ");
    // console.log(split);

    let uniqueArr = [...new Set(split)];

    console.log(sMap);
};

console.log(wordPattern("abba", "dog cat cat dog"));
