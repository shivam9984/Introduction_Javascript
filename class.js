const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}
// console.log(Date.now().toLocaleString)

class Myclass
{
    // instance field;
    myfield
    myfield2
    constructor(a,b,c,d, e)
    {
        this.vlaues=[a,b,c]
        this.myfield=d
        this.myfield2=e
    }

    myMethod()
    {
        return this.vlaues;
    }

    static classMethod()
    {
        console.log('in the static method');
    }
}
const myclass= new Myclass(1,2,3,4,5)
 console.log(myclass.myMethod());
 myclass.classMethod()