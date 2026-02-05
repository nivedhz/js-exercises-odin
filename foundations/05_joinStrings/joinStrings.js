/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!
const firstName = "Carlos";
const lastName = "Stevenson";
const birthYear = 1947; //The year was unnecessarily converted to string via double quotes
const thisYear = 1965;//The year was unnecessarily converted to string via double quotes
const fullName = `${firstName} ${lastName}`
const age = thisYear - birthYear // The age was also unnecessarily type converted to strings via back ticks

greeting = `Hello! My name is ${fullName} and I am ${age} years old.`
console.log(greeting) // Forgot this the first time XD



// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
