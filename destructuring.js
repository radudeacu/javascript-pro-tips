const turtle = {
    name: 'Bob 🐢',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}

'Bad code 💩'

function feed1(animal) {
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}

'Good code ✅'

function feed2({ name, meal, diet}) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

// OR

function feed3(animal) {
    const {name, meal, diet} = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

console.log(feed1(turtle));
console.log(feed2(turtle));
console.log(feed3(turtle));