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





