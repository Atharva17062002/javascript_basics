let fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

console.log(fruits);

// document.getElementById("demo").innerHTML = fruits.toString();

let fruit = fruits.at(2);

fruit = fruits[2];

console.log(fruit);

// document.getElementById("demo").innerHTML = fruits.join(" * ");

fruit = fruits.pop();
console.log(fruit);

length = fruits.push("Kiwi");
console.log(length);

fruit = fruits.shift();
console.log(fruit);

fruits.unshift("Lemon");
console.log(fruits);

fruits[fruits.length] = "Kiwi";
console.log(fruits);

delete fruits[0];
console.log(fruits);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

let myChildren = myGirls.concat(myBoys);
console.log(myChildren);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
console.log(fruits);
