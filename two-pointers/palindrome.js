/**
 * @param {string} s
 * @return {boolean}
 */

const t1 = "A man, a plan, a canal: Panama";
const t2 = "race a car";
const t3 = " ";
var isPalindrome = function (s) {
    const nonNumericCharacters = /[^0-9a-zA-Z]/g;
    let bool = false;
    s = s.trim().toLowerCase().replace(nonNumericCharacters, "");

    console.log(s);

    let reversedString = "";

    for (let i = s.length - 1; i >= 0; i--) {
        reversedString += s.at(i);
    }

    if (reversedString === s) {
        bool = true;
    }

    console.log(reversedString);
    console.log(bool);
    return bool;
};

isPalindrome(t1);
isPalindrome(t2);
isPalindrome(t3);
isPalindrome("ab_a");
