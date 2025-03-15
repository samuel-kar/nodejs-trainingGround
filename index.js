function getAge(birthYear, currentYear){
    return (currentYear - birthYear);
}

const age = getAge(1972, 2022);
console.log("The age constant is: " + age);
module.exports.getAge = getAge;

const number1 = 1;
const number2 = 2;
const result = number1 + number2;
console.log("The result is " + result);

const text = "Here is some text to briefly enjoy";
console.log(text);
console.log("Hello" + "world");