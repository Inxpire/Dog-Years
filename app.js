// My age is constant variable of 33
const myAge = 33;
// These are early human years
let earlyYears = 2;
/* This converts ealy human years to early
dog years */
earlyYears = 2 * 10.5;
/* take away the first two years of human age as this is already accounted for above */
laterYears = myAge - earlyYears;
//laterYears in dog years
laterYears *=4;
console.log(earlyYears);
console.log(laterYears);
/* Add early years and late years to calculate my age in dog years */
myAgeInDogYears = earlyYears + laterYears;
myName = 'Ingrid van den Berg'.toLowerCase();
// Below is my age in dog years.
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
