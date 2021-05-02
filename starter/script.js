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