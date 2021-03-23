// const add7 = (num) => {
//     return num + 7;
// }

// const multiply = (a, b) => {
//     return a * b;
// }

// const capitalize = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1)
// }

// console.log(capitalize("eric"));

// const lastLetter = (str) => {
//     return str.charAt(str.length - 1)
// }

// console.log(lastLetter("supercalifuckyou"));

let userInput = parseInt(prompt("Give me a number: "));
for (let i = 1; i <= userInput; i++) {
    // console.log(i);
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}