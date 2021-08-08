//**************/ problem 1 solution /*****************/
// function create
function seerToMon(seer) {

    if (seer < 0) { //Negative input check
        return "Weight Cannot be Negative.Please Enter a valid input"
    } else {
        let mon = seer / 40; //output calculation
        return mon; // return ouutput
    }

}
// function call
console.log(seerToMon(130));


//**************/ problem 2 solution /*****************/
// create totalSales function
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {

    if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return "Quantity value cannot be negative.Please enter positive value"; //checking negative value
    } else {
        const shirtPrice = 100;
        const pantPrice = 200;
        const shoePrice = 500;
        const totalShirt = shirtQuantity * shirtPrice;
        const totalPant = pantQuantity * pantPrice;
        const totalShoe = shoeQuantity * shoePrice;
        const totalSales = totalShirt + totalPant + totalShoe;
        return totalSales; //output return
    }

}
console.log(totalSales(2, 8, 2)); //function call


//**************/ problem 3 solution /*****************/
//create deliveryCost function
function deliveryCost(tshirtQuantity) {
    if (tshirtQuantity < 0 || typeof(tshirtQuantity) == "string") {
        return "You give a negative / string value.Please enter a valid positive value"; //checking if there is any string or negative value
    } else {
        const deliveryRateUpto100 = 100;
        const deliveryRateUpto200 = 80;
        const deliveryRateMoreThan200 = 50;
        if (tshirtQuantity <= 100) {
            const cost = tshirtQuantity * deliveryRateUpto100;
            return cost; //cost upto 100 delivery
        } else if (tshirtQuantity <= 200) {
            const First100Cost = 100 * deliveryRateUpto100;
            const restQuantity = tshirtQuantity - 100;
            const second100Cost = restQuantity * deliveryRateUpto200;
            const totalCost = First100Cost + second100Cost;
            return totalCost; //cost upto 200 delivery
        } else {
            const First100Cost = 100 * deliveryRateUpto100;
            const second100Cost = 100 * deliveryRateUpto200;
            const restQuantity = tshirtQuantity - 200;
            const restQuantityCost = restQuantity * deliveryRateMoreThan200;
            const totalCost = First100Cost + second100Cost + restQuantityCost;
            return totalCost; //cost more than 200 delivery
        }
    }
}
console.log(deliveryCost("hello")); //funtion call


//**************/ problem 4 solution /*****************/
//create perfectFriend function
function perfectFriend(friends) {
    let largest = []; //empty array declare
    for (let element of friends) {

        if (typeof(element) != "string") {
            return "Any of input/inputs are not valid " // checking if the array is to string
        } else {
            if (element.length == 5) {
                largest = element; //assigning value to an empty array;
                break; // break the loop 
            }
        }
    }
    return largest;
}
const names = ["ablu", "titu", "cablu", "bablu", "dablu", "babul mia"];

console.log(perfectFriend(names));