function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // Check if the year is divisible by 100
        if (year % 100 === 0) {
            // Check if the year is also divisible by 400
            if (year % 400 === 0) {
                return true; // It is a leap year
            } else {
                return false; // It is not a leap year
            }
        } else {
            return true; // It is a leap year
        }
    } else {
        return false; // It is not a leap year
    }
}

// Example usage:
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2023)); // false
