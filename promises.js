// promises are something related  to callback functions
/*
  exmaple ->  a main function taking two function generally 
             if some condition occurs invoked this otherwisw that


*/
const money=10;
function main( callback1,callback2)
{
    if(money>10)
      callback1("you have enough money to spend ")
    else
      callback1('dont have enough maoney to spend');
}

main((Comment)=>console.log(Comment), (Comment)=>console.log(Comment));



// lets converting above expression  into promises 
 function checkPromise()
 {
     return new Promise((resolve,reject)=>
     {
        
        if(true)
        {
              resolve(
                 new  Promise((resolve)=>{
                      if(true)
                      {
                        resolve("hi this is inside the resolve")
                      }
                })
              
     )}
         else
         
         {
            reject("i promise not to give you any money")
         }

     })

 }
  //  checkPromise().then().then((res)=>console.log(res))

  list1=[1,2,3,4,5]
  // // console.log(list1.slice(-10))
  //  const arr2=list1.slice(-10)
  //  console.log(arr2.length)
 
   // 
   function get_list(value)
   {
    const dif = list1.length-value
    if(dif<0)
      return []
    else
     return list1.slice(0,dif)
   }

  console.log(get_list(10))
  // 

  function getTenDaysData(data){
     // data for days
     var diff=10
     const obj={
      date:[],
      planlist:[],
      actuallist:[]
     }
      if(data.date.length!==0)
      {
       
          if(data.date.length<=15){
            diff=15
          }
              
         // getting data from each list
          const value= data.date.length-diff
          const plan= data.planned_list.slice(diff*(-1));
          const actual= data.actual_list.slice(diff*(-1));
          const date= data.date.slice(diff*(-1));
          //  pushing the values
           obj.date=[...date]
           obj.planlist=[...plan]
           obj.actuallist=[...actual]
          if(value<=0)
          {
            data={
              date:[],
              planned_list:[],
              actual_list:[]
            }
          }
          else
          {
            data={
              date:[...data.date.slice(0,value)],
              planned_list:[...data.planned_list.slice(0,value)],
              actual_list:[...data.actual_list.slice(0,value)]
            }
          }
      }
      

      return {obj,data}
    


  }

const data={
  planned_list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
  date:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
  actual_list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],

}
const object= getTenDaysData(data)
// console.log(object.obj)
// // console.log(object.data)
// console.log("2nd object")

const object2=getTenDaysData(object.data)
console.log(object2.obj)
console.log(object2.data)

// const object3=getTenDaysData(object2.data)
// // console.log(object3.obj)
// const object4=getTenDaysData(object3.data)
// console.log(object4.obj)