// Array

Array.of()
Array.prototype.concat()
Array.prototype.copyWithin()
Array.prototype.entries() //returns an Iterator with key/value pairs
Array.prototype.every() //arr.every(callback[, thisArg])
Array.prototype.fill()
Array.prototype.filter() // arr.filter(callback[, thisArg])
Array.prototype.find() // arr.find(callback[, thisArg]) returns a value in array, if asatisfies function
Array.prototype.findIndex() //arr.findIndex(callback[, thisArg])  returns an index if satisfies function
Array.prototype.forEach() 
Array.prototype.includes()
Array.prototype.indexOf()
Array.prototype.join()
Array.prototype.keys()
Array.prototype.lastIndexOf()
Array.prototype.map()
Array.prototype.pop()
Array.prototype.push()
Array.prototype.reduce()
Array.prototype.reduceRight()
Array.prototype.reverse()
Array.prototype.shift()
Array.prototype.slice()
Array.prototype.some()
Array.prototype.sort()
Array.prototype.splice()
Array.prototype.toLocaleString()
Array.prototype.toSource()
Array.prototype.toString()
Array.prototype.unshift()
Array.prototype.values()
//Array.prototype[@@iterator]()


/* EXAMPLE */
 var eArr = arr.entries();
console.log(eArr.next().value);

function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false

function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

//Find an object in an array by one of its properties
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
function findCherries(fruit) { 
    return fruit.name === 'cherries';
}
console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
