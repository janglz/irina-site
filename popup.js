"use strict";

let raceNumber = Math.floor(Math.random() * 1000);
const age = 25;
const registeredEarly = false;
if (age > 18 && registeredEarly) {
  raceNumber +=1000;
}
if (age > 18 && registeredEarly) {
  console.log(`Your race at 9.30 a.m. Your number ${raceNumber}`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Your race at 11.00 a.m. Your number ${raceNumber}`);
} else if (age < 18) {
  console.log(`Your race at 12.30 a.m. Your number ${raceNumber}`);
}



