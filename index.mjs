export const getAge = (birthYear, currentYear) => currentYear - birthYear;
export const getAgeForPerson = (person, currentYear) => (currentYear - person.birthYear);
export const divideIt = (firstNumber, secondNumber) => {
    if (secondNumber==0){
        throw new Error(
            "Pls no division by 0"
        );
    }
    return (firstNumber / secondNumber);
};

export const getAgeGroup = (age) => {
    /*
    if (age < 4) {
        return "toddler";
    } else if (age < 13) {
        return "kid";
    }
    else if (age < 20) {
        return "teenager";
    } else if (age < 40) {
        return "adult"; 
    } else return "old";
     */
    if (age < 0) return "error";
    if (age < 4) return "toddler";
    if (age < 13) return "kid";
    if (age < 20) return "teenager";
    if (age < 40) return "adult";
    if ((age > 39 && age <49) || age > 50) return "old";
    //if none of the above works then return simply prime
    return "prime";
};

function LogThis(message) {
    console.log(message);
}
LogThis("Logging this message");

const logThis2 = function (message) {
    console.log(message);
};

logThis2("Logging this message too");


const logThis3 = (message) => {
    console.log(message);
};

console.log(logThis3);
console.log(logThis3.toString());