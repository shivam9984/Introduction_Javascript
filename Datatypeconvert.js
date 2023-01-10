// from documentation 

let answer = 42;
console.log(`${answer}`);

answer="very intersting to learn javascript ";
console.log(`${answer}`);

// JavaScript is dynamically typed, this assignment does not cause an error message.
//  Numbers and the '+' operator

x= "the answer"+ 42;

// Converting strings to numbers

 console.log(parseInt("101",2));
 console.log(parseFloat("56.9"))
   // array literals create array objects

   const coffees = ['French Roast', 'Colombian', 'Kona'];
   coffees.pop();
   console.log(coffees);
   console.log(coffees.length)

   const fish = ['Lion', 'fox' , 'Angel'];
   console.log(fish);

   // boolena literals  true ,false
    x=42;
     console.log(typeof(x));
    // objcet literals
  console.log('one line \nanother line'
  )
  const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
 console.log(typeof(toString(x)));
 console.log(2.5%1);
 // equality comparison and 
  //refering to  documentation 
             const value = Math.ceil(5.89);
             console.log(value);

 // for in loop gives only the property values
 
 result='';
  for( const i in fish)
  {
   result+= ` ${fish[i]}`;
  }
  console.log(result);

  const arr=[3,5,7];
  arr.foo="hello";
  console.log(arr);


  // for of loop
   for(const i of fish)
   {
    console.log(i);
   }
   console.log(fish.includes("lion"));