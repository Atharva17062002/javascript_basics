// variable hoisting

console.log(counter); // 👉 undefined
var counter = 1;

//function hoisting

let x = 20,
  y = 10;

let result = add(x, y); 
console.log(result); // 👉 30

function add(a, b) {
  return a + b;
}

//Arrow and anonymous functions won't work
fun1();

let fun1 = function() { console.log(x); };




