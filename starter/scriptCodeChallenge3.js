"use strict";

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
  
console.log(`------------ task 1 ---------------`);

const values = gameEvents.values();
const valuesArray = [...values];
console.log(valuesArray);
console.log(valuesArray[1]);

const events = [ ...new Set( [...gameEvents.values()] ) ];
console.log(events);

console.log(`------------ task 2 ---------------`);

gameEvents.delete(64);
console.log(gameEvents);

console.log(`------------ task 3 ---------------`);

const gameEventCount = gameEvents.size;
console.log(`An event happened, on average, every ${90 / gameEventCount } minutes`);

console.log(`------------ task 4 ---------------`);

for (const [minute, event] of gameEvents) {
  // minute < 45 ?
  //   console.log(`[FIRST HALF]${minute}: ${event}`)
  //    :
  //   console.log(`[SECOND HALF]${minute}: ${event}`)

  const half = ( minute < 45 ? "FIRST" : "SECOND" );
  console.log(`[${half} HALF] ${minute}: ${event}`);
};