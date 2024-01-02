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

// orderPizza(mainIngredient, ...otherIngredients){
//   console.log(mainIngredient)
//   console.log(otherIngredients)
// };


// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   [4, 'Python'],
//   ['correct', 3],
//   [true, 'correct🍕🍕'],
//   [false, 'Try again please🙄😶']
// ]);
// console.log(question)
// console.log(Object.entries(restaurant.openingHours))
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap)
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
// }

// const answer = Number(prompt('Your Answer'));
// console.log(answer)
// console.log(question.get(question.get('correct') === answer));

// const airline = 'TAP Air Nigeria😍😍';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'FaRouK';
// const passengerLower = passenger.toLowerCase()
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing Emais:
// const email = "farukissa010@gmail.com";
// const loginEmail = ' Farukissa010@GMail.com';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim()
// console.log(trimmedEmail);
// const normailizedEmail = loginEmail.toLowerCase().trim();
// console.log(normailizedEmail);
// console.log(email === normailizedEmail);

// //replacing. 
// const priceNGN = '#187,675';
// const priceUS = priceNGN.replace('#', '$').replace(',', '.');
// console.log(priceUS)
// const announcement = 'All passengers come to boarding door 23. Hit me up when you get to door 23';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// //Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('FArouk'));
// console.log(plane.startsWith('Airbus'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('You are part of the Farouk Family')
// };

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase()
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are a suspected terorrist')
//   } else {
//     console.log(`You're welcome Aboard!😍😎😎😎`)
//   }
// }

// checkBaggage('I have a laptop, some foods and a knife');
// checkBaggage('I have a laptop and my drugs')
// checkBaggage('I am equipped with a gun for protection');

//Split and Join

console.log('A+very+nice+string'.split('+'))
console.log('Issa Farouk'.split(' '))
const [firstName, lastName] = 'Issa Farouk'.split(' '); //destructuring strings into a variable Names
const newName = ['Engr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);



//practice exercise

// const airline = 'TAP Air Nigeria😍😍';
// const plane = 'A320';

// console.log(plane[0])
// console.log(plane[1])
// console.log(plane[2])
// console.log('8737'[0])
// console.log(airline.length);
// console.log('8737'.length);

// console.log(airline.indexOf('N'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('nigeria'));
// console.log(airline.slice(4))// it is impossible to mutate strings, they are primitives
// console.log(airline.slice(4, 7));

// const checkMiddleSeat = function (seat) {
//   //B and E are the middle seat
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat😎😍');
//   else console.log('You got lucky😛😛😴')
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
// console.log(new String('Farouk'));
// console.log(typeof new String('jonas'));
// //console.log(new String('Farouk'))
// console.log(typeof new String('jonas'))

