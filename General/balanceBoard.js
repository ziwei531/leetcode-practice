const balanceBoard = (s1, s2) => {
    let r = 0;
    let w = 0;
    let q = 0; // question mark

    let balanceRequired; // how much to balance. If row1 has 2, then we need 2.

    let r1 = 0;
    let w1 = 0;
    let q1 = 0;

    let replacements = 0;

    for (s of s1) {
        if (s === "R") r++;
        if (s === "W") w++;
        if (s === "?") q++;
    }

    for (s of s2) {
        if (s === "R") r1++;
        if (s === "W") w1++;
        if (s === "?") q1++;
    }

    if (r === w) {
        // balance
        balanceRequired = r;
    }

    if (r !== w) {
        // not balance

        let needed = Math.abs(r - w);
        if (q > needed) {
            replacements += needed;
            balanceRequired = Math.max(r, w);
        } else {
            replacements = -1; // cannot be balanced
        }
    }

    if (r1 !== balanceRequired || w1 !== balanceRequired) {
        let needed = balanceRequired * 2; // if 2 is required, that means r1 + w1 = 4.

        needed = needed - (r1 + w1); // if it's 4, we subtract r1 + w1 and we'll get 2;

        console.log(needed);
        if (q1 > needed) {
            replacements += needed;
        } else {
            replacements = -1;
        }
    }

    // console.log(r, w, q);
    // console.log(r1, w1, q1);
    console.log("Replacements Needed: " + replacements);
};

console.log(balanceBoard("W?WR?", "R??W?"));
console.log(balanceBoard("RR?", "?R?")); // -1
console.log(balanceBoard("R?R??", "??W??")); // 5
