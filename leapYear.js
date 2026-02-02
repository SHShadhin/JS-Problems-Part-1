// leapYear or not 


// simple rules 

function isLeapYear (year) {
    if (year % 4 === 0) {  // jodi 4 diye vaag kore vagfol 0 hoy tahole leapyear.
        return true;
    }
    else {
        return false;
    }
} 

const leapYear = isLeapYear (1900);
console.log(leapYear);


// complex rules

function isLeapYear2 (year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year %  100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const leapYear2 = isLeapYear2 (1900);
const leapYear3 = isLeapYear2 (2000);
const leapYear4 = isLeapYear2 (2100);
const leapYear5 = isLeapYear2 (2024);

console.log(leapYear2, leapYear3, leapYear4, leapYear5);