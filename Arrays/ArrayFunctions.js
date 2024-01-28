const marvel_heros = ["thor","Ironman","Spiderman"];
const dc_heroes = ["superman","flash","batman"]

// not expected to merge like this
marvel_heros.push(dc_heroes)
console.log(marvel_heros); //[ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

const all_new_heroes = [...marvel_heros,...dc_heroes]
console.log(all_new_heroes);  //[
//     'thor',
//     'Ironman',
//     'Spiderman',
//     [ 'superman', 'flash', 'batman' ],
//     'superman',
//     'flash',
//     'batman'
//   ] spreads all the array
const another_array = [1,2,3,[4,5,6],7,8,9]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray("Lakde"));
console.log(Array.from("Lakde"));
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // inse ek array bana dega ye
