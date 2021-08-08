function grade(marks) {

    if (marks >= 80 && marks <= 100) {
        return " A+";
    } else if (marks >= 70 && marks < 80) {
        return " A";
    } else if (marks >= 60 && marks < 70) {
        return " B";
    } else if (marks >= 50 && marks < 60) {
        return " C";
    } else if (marks >= 40 && marks < 50) {
        return " D";
    } else if (marks >= 0 && marks < 40) {
        return " F";
    } else {
        return " Invalid";
    }
}
var result = grade(35);
//console.log(result);
function grade2(marks) {
    var score;
    switch (true) {
        case (marks >= 80 && marks <= 100):
            score = "A+";
            break;

    }

}
// var result2 = grade2(90);
// console.log(result2);