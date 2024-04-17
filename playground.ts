const isValidPalindrome = (s: string): boolean => {
    const cleanedString = s
        .split(" ")
        .join("")
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();
    const reversedString = cleanedString
        .split("")
        .reverse()
        .join("")
        .toLowerCase();
    console.log(cleanedString);
    console.log(reversedString);
    return cleanedString === reversedString;
};

isValidPalindrome("race a car");
isValidPalindrome("A man, a plan, a canal: Panama");
