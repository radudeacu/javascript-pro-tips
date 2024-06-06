// 1.

const foo = { name: 'tom', age: 30, nervous: false };
const bar = { name: 'tom', age: 40, nervous: false };
const baz = { name: 'tom', age: 50, nervous: true };

'Bad code 💩'
console.log('%cBad code 💩', 'color: red; font-weight: bold');

console.log(foo);
console.log(bar);
console.log(baz);

'Good code ✅'
console.log('%cGood code ✅', 'color: green; font-weight: bold');


console.log('%c My Friends', 'color: orange; font-weight: bold');
console.log({foo, bar, baz});

// console.table(...)  useful when you have an array of objets

console.log('%c Table', 'color: pink; font-weight: bold');
console.table([foo, bar, baz]);


// Console.time
console.time('looper');

let i = 0;
while (i < 1000000) { i++};

console.timeEnd('looper');


// Stack trace logs

const deleteMe = () => console.trace('bye database');

deleteMe();