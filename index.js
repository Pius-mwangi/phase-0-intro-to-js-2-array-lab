// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
  console.log(cats);
}

destructivelyAppendCat("Milano");

function destructivelyPrependCat(name) {
  cats.unshift(name);
  console.log(cats);
}

destructivelyPrependCat("Bee");

function destructivelyRemoveLastCat() {
  cats.pop();
  console.log(cats);
}

destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
  cats.shift();
  console.log(cats);
}

destructivelyRemoveFirstCat();

function appendCat(name) {
  const newCats = cats.slice();
  newCats.push(name);
  return newCats;
}

appendCat("Bee2");

function prependCat(name) {
  const newCats = cats.slice();
  newCats.unshift(name);
  return newCats;
}

prependCat("Bee1");

function removeLastCat() {
  const newCats = cats.slice();
  newCats.pop();
  
  return newCats;
}

removeLastCat();

function removeFirstCat() {
  const newCats = cats.slice();
  newCats.shift();
 
  return newCats;
}

removeFirstCat();
