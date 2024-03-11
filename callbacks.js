function myFirst() {
    console.log("Hello");
  }
  
function mySecond() {
    console.log("Goodbye");
}
  
  myFirst();
  mySecond();

//   function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
  mySecond();
  myFirst();

  function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);