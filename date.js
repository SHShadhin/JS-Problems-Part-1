const today = new Date(); // ajker din tarikh dekhar jonno
const date = new Date('2026-10-25');

console.log(today);

console.log(date.getMonth()); // months 9 asbe karon month ke tara index hisebe dhore 

const specificDate = new Date(2026, 0, 10); // months and date ke index hisebe dhore 
console.log(specificDate);
specificDate.setMonth(5); // months er index set kore months change kora hoise
console.log(specificDate.toLocaleString('en-GB')) // show time bd system 

