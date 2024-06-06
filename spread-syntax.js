

// Objects

const pikachu = { name: 'Pikachu 🐹' };
const stats = { hp: 40, attack: 60, defense: 45 };

'Bad Oject Code 💩'

// pikachu['hp'] = stats.hp
// pikachu['attack'] = stats.attack
// pikachu['defense'] = stats.defense

// OR 

// const lvl0 = Object.assign(pickachu, stats)
// const lvl1 = Object.assign(pickachu, {hp: 45})


'Good Object Code ✅'

const  lvl0 = { ...pikachu, ...stats }
const  lvl1 = { ...pikachu, hp: 45 }

// Arrays 

let pokemon1 = ['Arbok', 'Raichu', 'Sandshrew'];

'Bad Array Code 💩'

// pokemon.push('Bulbasaur');
// pokemon.push('Metapod');
// pokemon.push('Weedle');

'Good Object Code ✅'

// Push

pokemon2 = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']

// Shift

pokemon3 = ['Bulbasaur', 'Metapod', 'Weedle', ...pokemon3]

