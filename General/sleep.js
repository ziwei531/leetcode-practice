/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve) =>
        setTimeout(() => {
            console.log("hi there");
            resolve();
        }, millis)
    );
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

console.log(sleep(100));
