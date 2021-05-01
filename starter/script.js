'use strict';

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
  printGoals: function (...playersWithGoal) {
    let totalGoals = 0;
    for (let i = 0; i < playersWithGoal.length; i++) {
      console.log(playersWithGoal[i]);
    }
    totalGoals = playersWithGoal.length;
    console.log(totalGoals);
  },
};


console.log("--------- taks 1 --------------");

console.log([...game.players]);
console.log(game.players);

const [players1, players2] = game.players;

console.log(players1);
console.log(players2);

  console.log("--------- taks 2 --------------");

const [gk, ...fieldPlayers] = players1;

console.log(gk);
console.log(fieldPlayers);

  console.log("--------- taks 3 --------------");

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

  console.log("--------- taks 4 --------------");
  
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

  console.log("--------- taks 5 --------------");
  
// const { team1, x: draw, team2 } = game.odds;
const { odds: {team1, x: draw, team2} } = game;
console.log(team1, draw, team2);
  
  console.log("--------- taks 6 --------------");
  
game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals('Lewandowski', 'Gnarby', 'Lewandowski');

  console.log("--------- taks 7 --------------");
  
console.log(Boolean(team1 < team2))
team1 < team2 && console.log(`Team1, "${game.team1}" is more likely to win!`);

console.log(" ------------  Code Challenge 2 -------------------");
console.log("------------- task 1 ----------------");

for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
};

console.log("------------- task 2 ----------------");

let average = 0;
for (const value of Object.values(game.odds)) {
  average += value;
}
average /= Object.values(game.odds).length;
console.log(average);

console.log("------------- task 3 ----------------");

for (const [teamName, teamOdd] of Object.entries(game.odds)) {
  // console.log(`Odd of victory ${game[teamName] || "draw"}: ${teamOdd}`);
  const teamStr = ( teamName === "x" ? "draw" : `victory ${game[teamName]}` );
  console.log(`Odd of ${teamStr}: ${teamOdd}`);
};

console.log("------------- task 4(bonus) ----------------");

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player] += 1 : scorers[player] = 1;
}
console.log(scorers)
