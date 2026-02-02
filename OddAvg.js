// ekta array er vitore kisu number thakbe
// tar moddhe theke odd numbers gulor average ber korte hobe.

function oddAverage(numbers) {
  const odds = [];
  for (number of numbers) {
    if (number % 2 === 1) {
      odds.push(number); // put the odd numbers of an array
    }
  }
  console.log(odds);

  let sum = 0;
  for (number of odds) {
    sum = sum + number; // sum of the odd numbers
    // console.log(sum)
  }
  const count = odds.length;
  console.log(count);
  const oddAvg = sum / count;
  return oddAvg;
}

const numbers = [23, 22, 43, 20, 44, 55, 25];
const avg = oddAverage(numbers);
console.log(avg);
