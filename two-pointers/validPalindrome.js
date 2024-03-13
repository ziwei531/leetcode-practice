/**
 * @param {string} s
 * @return {boolean}
 * Given a string s, return true if the s can be palindrome after deleting at
 * most one character from it.
 */
var validPalindrome = function (s) {
    if (s === 0) {
        return false;
    }

    const reverseString = (str) => {
        let reversedString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversedString += str[i];
        }
        return reversedString;
    };

    let reversedString = reverseString(s);
    if (reversedString === s) {
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        let arrS = s.split("");
        arrS.splice(i, 1);

        let str = arrS.join("");

        let reversedString = reverseString(str);
        if (reversedString === str) return true;
    }
    return false;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca")); // total 4. midpoint [1, 2]. [half - 1, half]
console.log(validPalindrome("abc"));
console.log(validPalindrome("aacbaa")); // total 6. midpoint [2,3]
console.log(validPalindrome("deeee"));
