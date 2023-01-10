// objects in the javascript

// declaring new object

// keys that symbols can get the value using bracket ['']
const myCar= new Object();
myCar.make="ford";
myCar.model="Mustang";
myCar.year="1969";

// console.log(myCar);
 console.log(myCar['make'])
 const nexon={
    'make':"tata",
    model:'Mustang',
    year:1969,
    displayspeed()
    {
      console.log('wihtin 10 seconds it reaches to the 100')
      
    }
    
   

 }
 console.log(nexon['make'])
  console.log(nexon.displayspeed);

 console.log(Object.keys(myCar));  // return a list

const list=[1,2,3,4];
console.log(Object.keys(list));  
// using a constructor function // 
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.message=`${this.make} ${this.model} ${this.year}`

  }

  const myCar3=new Car("eagle","mustang",1989)
 console.log(myCar3);
// creating object using object.create
 // without using any constructor function
 const Animal = {
    type: 'Invertebrates', // Default value of properties
    displayType() {  // Method which will display type of Animal
      console.log(this.type);
    }
  };

  const animal = Object.create(Animal);
 animal.displayType();
// defining methods 

function greet()
{
    console.log(`hi this me ${this.type}`);

}
animal.greet=greet;
animal.greet()

//Defining getters and setters

const myObj= {
  a: 2,
  get b()
  {
    return this.a+2;
  },

  set c(x)
  {
    this.a= x/2
  }
}
  console.log(Object.keys(myObj))

  // deleting properties
  const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

delete myobj.a;
console.log('a' in myobj)
// Comparing objects

// const fruit = {name: 'apple'};
// const fruitbear = {name: 'apple'};


const fruit = {name: 'apple'};
const fruitbear = fruit;  
// Assign fruit object reference to fruitbear

// Here fruit and fruitbear are pointing to same object
fruit == fruitbear; // return true
fruit === fruitbear; // return true

fruit.name = 'grape';
console.log(fruitbear); // { name