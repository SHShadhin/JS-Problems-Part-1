// inch to feet conversion 

function inchToFeet (inch) {
    const feet = inch / 12;
    return feet;
}

const myHeight = inchToFeet (66);
// console.log(myHeight);



function inchToFeet2 (inch) {
    const feetFraction = inch / 12;
    const feetNum = parseInt(feetFraction)
    const inchRemaining = inch % 12;
    const result = feetNum + ' feet ' + inchRemaining + ' inch'

    return result;
}

const myHeight2 = inchToFeet2 (66);
console.log(myHeight2);




// mile to killometers 

function mileToKM (mile) {
    const killometer = mile * 1.60934 + ' killometer';
    return killometer;
}

const kill = mileToKM (5);
console.log(kill);