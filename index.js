// Write your solution here!
const cats =  ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
    console.log(cats);
}
destructivelyAppendCat("MIlano");


function destructivelyPrependCat(name) {
    cats.unshift(name);
    console.log(cats);
}
destructivelyPrependCat("Bee");


function destructivelyRemoveLastCat(name) {

    cats.pop();
    console.log(cats);
}
destructivelyRemoveLastCat();


function destructivelyRemoveFirstCat(name) {

    cats.shift()
    console.log(cats);
}
destructivelyRemoveFirstCat();
