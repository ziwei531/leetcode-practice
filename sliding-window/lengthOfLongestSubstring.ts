function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    let left = 0;
    let right = 0;

    let set = new Set();

    while (right < s.length) {
        const rightChar = s[right];
        const leftChar = s[left];

        if (!set.has(rightChar)) {
            set.add(rightChar);
            max = Math.max(max, set.size);
            right++;
        } else {
            set.delete(leftChar);
            left++;
        }
    }
    return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring(" "));
