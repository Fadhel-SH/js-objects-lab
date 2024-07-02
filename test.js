const pokemon = require('./data')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  };

  // Exercise 1: Logging the name of Pokémon with number 59
// console.log('Solve Exercise 1 here:', pokemon[58].name);

// Exercise 2: Adding game object with party, gyms, and items


// Exercise 3: Adding difficulty property to game object
game.difficulty = "Medium";

// Exercise 4: Adding starter Pokémon to game.party array
const starterPokemon = pokemon.find(p => p.starter);
game.party.push(starterPokemon);

// Exercise 5: Adding three more Pokémon to game.party array
const additionalPokemon = pokemon.filter(p => p.Number === 3 || p.Number === 6 || p.Number === 9);
game.party.push(...additionalPokemon);

// Exercise 6: Setting completed property to true for gyms with difficulty below 3
game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});

// Exercise 7: Evolving starter Pokémon in game.party array
game.party.forEach((pokemon, index) => {
  switch (pokemon.Number) {
    case 1: // Bulbasaur evolves into Ivysaur
      game.party.splice(index, 1, pokemonArray[2]);
      break;
    case 4: // Charmander evolves into Charmeleon
      game.party.splice(index, 1, pokemonArray[5]);
      break;
    case 7: // Squirtle evolves into Wartortle
      game.party.splice(index, 1, pokemonArray[8]);
      break;
    case 25: // Pikachu evolves into Raichu
      game.party.splice(index, 1, pokemonArray[26]);
      break;
  }
});

// Exercise 8: Printing names of Pokémon in game.party array
console.log('Solve Exercise 8 here:');
game.party.forEach(pokemon => {
  console.log(pokemon.name);
});

// Exercise 9: Printing names of starter Pokémon from pokemon array
console.log('Solve Exercise 9 here:');
pokemon.filter(p => p.starter).forEach(pokemon => {
  console.log(pokemon.name);
});

// Exercise 10: Adding catchPokemon method to game object
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};

// Exercise 11: Modifying catchPokemon method to decrease pokeballs in inventory
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
  this.items.find(item => item.name === 'pokeball').quantity--;
};

// Exercise 12: Completing gyms with difficulty below 6
game.gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
});

// Exercise 13: Creating gymStatus method to tally completed and incomplete gyms
game.gymStatus = function() {
  let gymTally = { completed: 0, incomplete: 0 };
  this.gyms.forEach(gym => {
    if (gym.completed) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  });
  console.log(gymTally);
};

// Exercise 14: Adding partyCount method to game object
game.partyCount = function() {
  return this.party.length;
};

// Exercise 15: Completing gyms with difficulty below 8
game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});

// Exercise 16: Logging the entire game object
console.log('Solve Exercise 16 here:');
console.log(game);


