export const getAge = (birthYear, currentYear) => currentYear - birthYear;

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
    if (age < 4) return "toddler";
    if (age < 13) return "kid";
    if (age < 20) return "teenager";
    if (age < 40) return "adult";
    //if none of the above works then return simply old
    return "old";
};