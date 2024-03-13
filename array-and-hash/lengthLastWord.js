/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim();

    s = s.split("");

    let len = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " " && s.length === 1) return 1;
        if (s[i] !== " ") {
            len += 1;
        }
        if (s[i] === " " || i === 0) return len;
    }
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("a"));
console.log(lengthOfLastWord("    day"));
