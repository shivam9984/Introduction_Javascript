// var 
var greet= "hello this is out of scope";
var outscope="hello outer scope";
 var time =3;
  if(time>2)
  {
    greet="inside the scope";
  }
  console.log(greet); // output-> inside the scope
// var is function scoped
  // var can be redeclared and updated here greet varible is re declared inside if statement
/* suppose 
     if two varible having same name written in outer and inner scope then check it reachability

     */

function greeting()
{
    var outscope="this is inside th function"
    console.log(outscope);
}
greeting();
console.log(outscope);// hello outer scope


// coming to the let is block scope {} let varible get upadeted
let greet_="let variable outside"
var time =3;
if(time>2)
{
   let greet_="inside the scope";
}
console.log(greet_);

// coming to the const
 const obj={name:"shivam",
            last_name:"Rai"
}
/* in const property can be changed it , but cant be declaresd again like 
     obj={ name:
           name2:}
           */
obj.last_name="satyam";
obj.class="b.tech";
console.log(obj);