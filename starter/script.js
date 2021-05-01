'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = [ "mon", "tue", "wed", "thu", "fri" ] 
const openingHours = {
    // thu: {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    // fri: {
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
};

// Data needed for first part of the section
const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: openingHours,
  openingHours,
  order (starterIndex, mainIndex) {
    return (
      [ this.starterMenu[starterIndex], this.mainMenu[mainIndex] ]
    );
  },
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // }
  orderDelivery ({ mainIndex,
                   starterIndex,
                   address: deliveryAddress,
                   time: deliveryTime }) {
    // console.log(this);
    console.log(`Order Received: ${this.starterMenu[mainIndex]} and ${this.mainMenu[starterIndex]} will be delivered to ${deliveryAddress} at ${deliveryTime}.`)
  },
  orderPasta (ing1, ing2, ing3) {
    console.log(`Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.fri?.open);

const days = [ "mon", "tue", "wed", "thu", "fri", "sat", "sun" ];

for (const day of days) {
  const openingHour = restaurant.openingHours[day]?.open ?? "Closed!!!";
  console.log(`On ${day}, we open at ${openingHour}`);
}

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant?.orderPiaaz?.(0, 1) ?? "Method does not exist");
console.log( Boolean(restaurant?.order?.(0, 1)) );

// console.log(restaurant.orderPiaaz(0, 1) ?? "Method does not exist");
  // Uncaught TypeError: restaurant.orderPiaaz is not a function

const users = [ { name: "Jonas", email: "jonas@abc.com" } ];
console.log(users[0]?.email ?? "User Does Not Exist!");
console.log(users[1]?.name ?? "User does not exist!");

restaurant.numberGuests = 0;
console.log('No. of Guests:', restaurant.numberGuests);
console.log(Boolean(restaurant.numberGuests));
const numGuests1 = restaurant.numberGuests || 10;
const numGuests2 = restaurant.numberGuests ?? 10;
console.log('||:', numGuests1);
console.log('&&:', numGuests2);

console.log(Boolean(restaurant.orderPizza));

console.log(3 || 'Jonas');
console.log(0 || null || undefined);
console.log(0 && 'Jonas' && undefined);
console.log('Jonas' && 0 && undefined);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

// const { restaurantName, openingHours, categories } = restaurant;
// console.log(restaurantName, categories, openingHours);

const { restaurantName: restName, openingHours: hours, categories: tags } = restaurant;
console.log(restName, tags, hours);

// const { fri: {open: openHours, close} } = openingHours;
// console.log(openHours, close);

const { desserts = [], starterMenu: appertizer = [] } = restaurant;
console.log(desserts, appertizer);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 }
console.log(a, b);
console.log(obj);

( {a, b} = obj );
console.log(a, b);

console.log("---------- Spread Operator ---------------------");

const arr = [7, 8, 9];
const newArr = [5, 6, ...arr]
const newNewArr = [...newArr, ...arr];
console.log(newNewArr);
console.log(...newNewArr);

const newMenu = [ ...restaurant.mainMenu, 'Gnocci' ];
console.log(newMenu);
const mainMenuCopy1 = restaurant.mainMenu;
console.log(mainMenuCopy1);
const mainMenuCopy2 = [...restaurant.mainMenu];
console.log(mainMenuCopy2);
restaurant.mainMenu.push("Steak");
console.log(restaurant.mainMenu);
console.log(mainMenuCopy1);
console.log(mainMenuCopy2);

const fullMenu = [ ...restaurant.starterMenu, ...restaurant.mainMenu ];
console.log(fullMenu);

const str = 'Jonas';
const letters = [...str, ' ', 's'];
console.log(letters);

// const pastaIngredients = [
//   prompt('Let\'s make pasta! Ingredient 1?'),
//   prompt('Let\'s make pasta! Ingredient 2?'),
//   prompt('Let\'s make pasta! Ingredient 3?'),
// ]

// console.log(pastaIngredients);
// console.log(...pastaIngredients);

// restaurant.orderPasta(...pastaIngredients);

const newRestaurant = { ['founding Year']: 1991, ...restaurant, founder: 'Guiseppe' }
newRestaurant.restaurantName = 'Ristorante Roma';
console.log(newRestaurant);
console.log(restaurant);

console.log(`---------- Rest Operator -----------------------`);

const arr3 = [1, 2, ...[3, 4]]
console.log(arr3);
const [aa, bb, ...others] = [1, 2, 3, 4, 5];
console.log("aa:", aa, "bb:", bb, "others:", others);

console.log(restaurant.mainMenu);
console.log(restaurant.starterMenu);
const [pizza, , , , pasta, ...foods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, pasta, foods);

console.log(restaurant.openingHours);
const { sat: weekEnd, ...weekDays } = restaurant.openingHours;
console.log(weekEnd, weekDays);
console.log(weekDays.fri);

const addNumbers = function (...severalNumbers) {
  console.log(severalNumbers);
  let sum = 0;
  for ( let i = 0; i < severalNumbers.length; i++ ) {
    sum += severalNumbers[i];
  };
  console.log(sum);
  return sum;
}

console.log( addNumbers(1, 2, 3, 4, 5) );

const xyz = [23, 5, 7];
console.log(...xyz);
console.log( addNumbers(...xyz) );
console.log( addNumbers(23, 5, 7) );

restaurant.orderPizza("BBQ Chicked", "mushroom", "green pepper", "onion");


console.log(`---------- Rest Operator -----------------------`);

console.log(restaurant.categories);

// cat1 = 'Italian'
// cat2 = 'Pizzeria'

let [cat1, cat2] = restaurant.categories;
console.log("cat1:", cat1);
console.log("cat2:", cat2);

[cat1, cat2] = [cat2, cat1];
console.log("cat1:", cat1);
console.log("cat2:", cat2);

console.log(restaurant.categories);

console.log(restaurant.order(2, 0));

const [starter, mainMeal] = restaurant.order(2, 0);
console.log("Starter: ", starter, "&", "Main: ", mainMeal);

const nestedArray = [2, 4, [5, 6]];
const [i, , [k, l]] = nestedArray;
console.log(i, k, l);

const [p = 1, q = 1, r = 1, s = 1] = [, 9, 8];
console.log(p, q, r, s);

const array1 = [, 1, 2, , , 4, , , ,]
console.log(array1);

const [e1, f1, g1, h1, i1, j1, k1, l1, m1, n1] = array1;
console.log(e1, f1, g1, h1, i1, j1, k1, l1, m1, n1);

console.log(`------------------------------------------------`);
console.log(fullMenu);
for (let menuItem of fullMenu) {
  console.log(menuItem);
}
console.log(...fullMenu.entries());
console.log([...fullMenu.entries()]);

// for (let menuItem of fullMenu.entries()) {
  for (let [menuNumber, menuName] of fullMenu.entries()) {
  // const [menuNumber, menuName] = menuItem;
  console.log(`${menuNumber}. ${menuName}`);
  // console.log(`${menuItem[0] + 1}: ${menuItem[1]}`);
}


