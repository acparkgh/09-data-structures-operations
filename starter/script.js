"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log("B737"[2]);

console.log(airline.length);
console.log("B777".length);

console.log(airline.indexOf("r"))
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Air"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf("P")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-8));
console.log(airline.slice(1, -1));


const checkMiddleSeat = function (seat) {
  const seatPosition = seat.slice(-1);
  const middleSeat = "You got middle seat 🥺";
  const isleSeat = "You got lucky!!!"
  return (
    seatPosition === "B" || seatPosition === "E" ? middleSeat : isleSeat
  );
};

console.log(checkMiddleSeat("11B"));
console.log(checkMiddleSeat("11E"));
console.log(checkMiddleSeat("11A"));

console.log(new String("Jonas"));
console.log(typeof new String("Jonas"));
console.log(typeof new String("Jonas").slice(-1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log("Jonas".toUpperCase());

const passenger = "jOnas";
const passengerLowercase = passenger.toLowerCase();
console.log(passengerLowercase);
const passengerCorrect = passengerLowercase[0].toUpperCase() + passengerLowercase.slice(1);
console.log(passengerCorrect);

const correctPassengerName = function (passengerName) {
  console.log( passengerName.toLowerCase()[0].toUpperCase() + passengerName.toLowerCase().slice(1) );
}

correctPassengerName("aNdrEW");

const email = "hello@jonas.io";
const loginEmail = '  Hello@Jonas.Io \n';

const emailCorrected = loginEmail.toLowerCase().trim();
console.log(email === emailCorrected);

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement = "All passengers come to boarding door 23.  Boarding door 23";
// console.log(announcement.replace("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

const airplane = "A320neo";
console.log(airplane.includes("A320"));
console.log(airplane.startsWith("A320"));
console.log(airplane.endsWith("neo"));

const strSample = "a+very+nice+string";
console.log(strSample);
console.log(strSample.split("+"));
console.log("Jonas Schmedtmann".split(" "));
const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
console.log(firstName);
console.log(lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const splitName = name.toLowerCase().split(" ");
  const nameArray = [];
  for (const eachName of splitName) {
    // nameArray.push(eachName[0].toUpperCase() + eachName.slice(1));
    nameArray.push( eachName.replace( eachName[0], eachName[0].toUpperCase() ) );
  }
  return (nameArray.join(" "));
}

console.log(capitalizeName("jonAs schmEDtmann"));
console.log(capitalizeName("jeSSica anN SMith DAVIS"));

const message = "Go to gate 23!";
console.log(message.padStart(25, "+"));
console.log(message.padEnd(25, "+"));
console.log(message.padStart(25, "+").padEnd(39, "+"));

const maskCreditCard = function (number) {
  const str = String(number);
  const lastFourDigits = str.slice(-4);
  return (
    lastFourDigits.padStart(str.length, "*")
  );
}

console.log(maskCreditCard(462465554311584));
console.log(maskCreditCard("518976876334483345"));
console.log(maskCreditCard(1234567890));

const warningMessage = "Bad weather... All Departures Delayed...";
console.log(`${warningMessage} \n`.repeat(5));

const planesInLine = function (n) {
  console.log(`${warningMessage.toUpperCase()}\nThere are ${n} planes waiting in line ${`🛩`.repeat(n)}`);
}

planesInLine(5);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const convertText = function () {
  const text = document.querySelector("textarea").value;
  const correctedTexts = text.toLowerCase().split("\n");
  
  for (const [index, word] of correctedTexts.entries()) {
    const [firstWord, secondWord] = word.trim().split("_");
    const camelCasedWord = `${firstWord}${secondWord[0].toUpperCase() + secondWord.slice(1)}`;
    console.log(`${camelCasedWord.padEnd(20, " ")}${"✅".repeat(index + 1)}`);
  };
  
};
  
document.querySelector("button").addEventListener("click", convertText);

