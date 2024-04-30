function gradingStudents(grades: number[]): number[] {
    // Write your code here

    let arr: number[] = [];

    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        if (grade < 38) {
            arr[i] = grade;
            continue;
        }
        let nextMultipleOf5 = Math.ceil(grade / 5) * 5; // eg. 72 / 5 = 14.4 = 15. 15 * 5 = 75
        if (nextMultipleOf5 - grade < 3) {
            arr[i] = nextMultipleOf5;
        } else {
            arr[i] = grade;
        }
    }

    return arr;
}

console.log(gradingStudents([73, 67, 38, 33]));
