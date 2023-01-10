console.log(greet(2,3,4));
function greet( a,b,c)
{
    return a>b?(a>c?a:c): (b>c?b:c)
}


// function expression refer to function  that are anonymus 

const fun = function(){
    console.log('this is function expression');

}
fun()

// function scope
/*
 function inside any function can access all the varibales from the outer function, 
 and varibles that accessibel bt outer function as well


*/
const name="shivam"
function getScore() {
    const num1 = 2;
    const num2 = 3;
  
    function add() {
      return `${name} scored ${num1 + num2}`;
    }
  
    return add();
  }
  console.log(getScore())

  //Nested functions and closures
//   The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.
// The following example shows nested functio

// name conflicts
function outside() {
    const x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
console.log(outside())  
// rest parameters
function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
  }
  
  const arr = multiply(2, 1, 2, 3);
  console.log(arr); // [2, 4, 6]

// 


