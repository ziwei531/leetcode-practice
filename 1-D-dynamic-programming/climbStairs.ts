function climbStairs(n: number): number {
    if (n === 1) return 1;

    let dp: number[] = [0]; // at index 0, there is zero ways to climb the stairs since there's no staircase
    dp[1] = 1; // with just one staircase, obviously you can only climb once
    dp[2] = 2; // with two staircase, the ways you can climb is two times

    for (let i = 3; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // take the previous two to get the i's total of ways
    }

    return dp[n]; // the final answer is at dp[n] as that's where the loop ends
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(4));
