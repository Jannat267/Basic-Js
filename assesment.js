// 1.Three type variable
var string = 'string';
var number = 23;
var boolean = true;

// declare variable using let and const
const static = 23;
let changeable = 20;
changeable = 50;
//console.log(changeable);

// arithmetic operation(+,-,*,/,%)
var input1 = 15;
var input2 = 5;
var add = input1 + input2;
var sub = input1 - input2;
var multiply = input1 * input2;
var division = input1 / input2;
var modulus = input1 % input2;
//console.log(add, sub, multiply, division, modulus);

// usage of && and ||
var input1 = 15;
var input2 = 5;
if (input1 > input2 && input2 == 0) {
    //console.log("not ok");
} else if (input1 > input2 || input2 != 0) {
    // console.log("ok");
}

// display odd number between 7 to 19 using while loop
var i = 7;
while (i <= 19) {
    i++;
    if (i % 2 != 0) {
        //console.log(i);
    }
}

// declare array,find array length, change 4th element and add 2 element remove 1 element
let array = [12, 345, 45, 35, 56, 44];
//console.log(array.length);
array[3] = 234;
//console.log(array);
array.push(900);
array.push(500);
//console.log(array);
array.pop();
//console.log(array);

// display all element of an array using for loop and check if there any element greater than 80

for (var i = 0; i <= array.length; i++) {
    var element = array[i];
    //console.log(element);
    if (element > 80) {
        //console.log(element);
    }
}

// declare an object with 3 property value and change one property value

let mobile = {
    name: "samsung",
    color: "black",
    ram: 16
};
mobile.color = "red";
//console.log(mobile);

// feet to inch converter
function feetToInch(feet) {
    let inch = 12 * feet;
    return inch;
}
var measurement = feetToInch(4);
//console.log(measurement);


// centimetere to metere converter
function centimeterToMeter(centimeter) {
    let meter = centimeter / 100;
    return meter;
}
var measurement2 = centimeterToMeter(450);
//console.log(measurement2);


// paper requirements 
function paperRequirements(q1, q2, q3) {
    let book1 = q1 * 100;
    let book2 = q2 * 200;
    let book3 = q3 * 300;
    let total = book1 + book2 + book3;
    return total;
}
var paper = paperRequirements(20, 30, 10);
//console.log(paper);


// bestFriends
function bestFriends(friends) {

    let largest = [];
    for (let element of friends) {
        if (element.length > largest.length) {
            largest = element;
        }

    }

    return largest;
}
const names = ["ablu", "bablull", "cablu", "bablu", "dablu", "babul mia"];

let bestFriend = bestFriends(names);
//console.log(bestFriend);

// stop array if there is any negative number
function onlypositive(numbers) {

    let array = [];
    for (let element of numbers) {

        if (element > 0) {
            array.push(element);
        } else {
            break;
        }
    }
    return array;
}
var num = [12, 34, 5, -3, 45, 67];
var results = onlypositive(num);
console.log(results);