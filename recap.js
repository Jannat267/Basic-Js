function largestNum(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        //console.log(element);
        if (element > max) {
            max = element;
        }
    }
    return max;

}

function duplicateRemove(names) {
    let unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;

}
// const ages = [-10, -90, -56, 6];
// const oldest = largestNum(ages);
// console.log("oldest age is ", oldest);
const names = ["ablu", "bablu", "cablu", "bablu", "dablu", "cablu"];
let remove = duplicateRemove(names);
console.log(remove);