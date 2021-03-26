'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   }
// };

// const {name, openingHours, categories} = restaurant
// console.log(name, openingHours, categories)

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant 

// console.log (restaurantName, hours, tags)


// Coding Challenge #1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const [players1, players2] = game.players
// // 2.
// const [gk, ...fieldPlayers] = players1
// console.log(gk, fieldPlayers)
// // 3.
// const allPlayers = [...players1, ...players2]
// console.log(allPlayers)
// // 4.
// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(playersFinal)
// //5.
// // const {team1, x: draw, team2} = game.odds
// const {odds: {team1, x: draw, team2}} = game
// console.log (team1, draw, team2)
// // 6. 
// const printGoals = (...goals) => {
//   for (let player of goals) {
//     console.log(player)
//   }
//   console.log('Number of goals:' + goals.length)
// }
// // 7. 
// // const win = team1 > team2 && team1
// // const displayWin = win || team2 

// // console.log(displayWin)

// team1 < team2 && console.log(' Team 1 is more likely to win')
// team1 > team2 && console.log(' Team 2 is more likely to win')

// Coding Challenge #2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. 
for (let [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`)
}

// 2. 
const odds = Object.values(game.odds) 
let avg = 0

for (let odd of odds) avg = avg + odd 
console.log(avg/odds.length)

// 3. 
for (let team of Object.keys(game.odds)) {
  game[team] ? console.log(`Odd of victory ${game[team]}: ${game.odds[team]}`) : console.log(`Odd of draw ${game.odds[team]}`)
}


// Sets 

const ordersSet = new Set ([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
])

const rest = new Map()
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze, Italy')


// Coding Challenge #3 

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


const events = new Set ()

for (const [key, value] of gameEvents) {
  events.add(value)
  console.log(key)
}

console.log(events)

gameEvents.delete(64)
console.log(gameEvents)

console.log(`
An event happened, on average every ${90/gameEvents.size} minutes
`)

for (const [key, value] of gameEvents) [
  console.log(`[${key < 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${key}: ${value}`)
]

// Working with strings

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1)
  if(s === "b" || s === "e"){
    console.log("yes")
  } else console.log("no")
  

}

checkMiddleSeat('11b')
checkMiddleSeat('23c')
checkMiddleSeat('3e')

// Callback functions

const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase()

}

const upperFirstWord = function(str) {
  const [first, ...other]= str.split(' ')
  return[first.toUpperCase(), ...other].join(' ')
}

// Higer order function
const transformer = function(str, fn) {
  console.log(`Original string: ${str}`)
  console.log(`Transformed string: ${fn(str)}`)

  console.log(`Transformed by: ${fn.name}`)
}

transformer('Javascript is the best!', upperFirstWord)
transformer('Javascript is the best!', oneWord)


// Functions returning other functions 

const greet = greeting => name => console.log( `${greeting} ${name}`)

const greeterHey = greet('Hey')

greeterHey("Jin")
// greeterHey("steve")