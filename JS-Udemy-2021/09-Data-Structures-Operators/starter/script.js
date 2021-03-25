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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }
};

const {name, openingHours, categories} = restaurant
console.log(name, openingHours, categories)

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant 

console.log (restaurantName, hours, tags)

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
const [players1, players2] = game.players
// 2.
const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers)
// 3.
const allPlayers = [...players1, ...players2]
console.log(allPlayers)
// 4.
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(playersFinal)
//5.
// const {team1, x: draw, team2} = game.odds
const {odds: {team1, x: draw, team2}} = game
console.log (team1, draw, team2)
// 6. 
const printGoals = (...goals) => {
  for (let player of goals) {
    console.log(player)
  }
  console.log('Number of goals:' + goals.length)
}
// 7. 
// const win = team1 > team2 && team1
// const displayWin = win || team2 

// console.log(displayWin)

team1 < team2 && console.log(' Team 1 is more likely to win')
team1 > team2 && console.log(' Team 2 is more likely to win')

