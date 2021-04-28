'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return (
      [ this.starterMenu[starterIndex], this.mainMenu[mainIndex] ]
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

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

