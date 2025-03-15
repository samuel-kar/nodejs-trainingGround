/*function getAge(birthYear, currentYear){
    return (currentYear - birthYear);
}
    */
//another way to write, with anonymous function
// but impossible to call this one without a name
/*
function (birthYear, currentYear){
    return (currentYear - birthYear);
}
*/
/* 
const getAge = function (birthYear, currentYear){
    return (currentYear - birthYear);
}
*/

//getting rid of function keyword
/*
const getAge = (birthYear, currentYear) => {
    return (currentYear - birthYear);
}
*/
//
//and finally, curly braces optional if only one line 
//const getAge = (birthYear, currentYear) => return currentYear - birthYear;
//
//also return keyword is implied if only one line
const getAge = (birthYear, currentYear) => currentYear - birthYear;