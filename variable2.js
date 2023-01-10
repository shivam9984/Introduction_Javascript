/*  
 global variable -> In web pages, the global object is window, so you can set and access global variables using the window.variable syntax.
  read about the windows variable
*/
// array declaration without using constructor
data_type=["boolean","null","undefined","Number","BigInt","String","Symbol"];




// falsy value sin javavscript 
/*
 values considered falsy
  false
  undefined
  


*/
  if("")
  {
    console.log("in the if scope");
  }
  else{
    console.log("in the else scope");
  }
// Array_literals
data_type.reverse()
console.log(data_type);
console.log(data_type['0']); // console.log(data_tyep[0]) equivalent to this statement

// in an array object acces using  bracket notation
  const copydata_type=Array.from(data_type);



// data_type.forEach(element => {
//     console.log(element);
// });
//  console.log(typeof(data_type));  // checking of data_type
//  const obj= { 1:"shivam" ,2:"satyam"};
//  const coffees = ['French Roast', 'Colombian', 'Kona'];
//  coffees.push("tea");
//  console.log(typeof(coffees));  // checking of data_type
//  console.log(typeof(obj));  // checking of data_type