const leapYears = (year) => {
    // const isYearDivisibleByFour = year % 4 === 0;
    // const isCentury = year % 100 === 0;
    // const isYearDivisibleeByFourHundred = year % 400 === 0;

    //     if (isYearDivisibleByFour && (!isCentury || isYearDivisibleeByFourHundred)) {
    //     return true;
    //     }
    // return false;
    // }
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            return true;
        }
        return false;
    }
    if (year % 4 == 0) {
        return true;
    }
    return false;
}

// Do not edit below this line
module.exports = leapYears;
