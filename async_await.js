async function myFunction() {
  return "Hello";
}
myFunction().then(function (value) {
  myDisplayer(value);
});

let value = await promise;
