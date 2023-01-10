
// converting stringinto  da
// const date=new Date()
// console.log(date.toString());
// // const date2= new Date("Fri Nov 18 2022 15:49:55")
// // console.log(date2.getHours);
// // static method in javascript
// console.log(date.getHours());
//    const date3= date.getTime();
//    console.log(date3);
// 

// var array = [{id: 1, date: "2020-05-12" }, 
// {id: 2, date: "2020-05-10"}];

// array.sort(function(a,b){
//   // Turn your strings into dates, and then subtract them
//   // to get a value that is either negative, positive, or zero.
//   return new Date(a.date) - new Date(b.date)
// });
// console.log(array)
/*
 generating date between(date1,date2)  // only betweens
  

*/
//  const date= new Date('2022-12-10')
//  const date2=   new Date(date.getTime()+86400000)
// console.log(date2)
// 

 function generateDate(date1,date2,plan,actual)
 {
  // format  will be same as earlier 
    const data={
      date:[],
      plan_list:[],
      actual_list:[]
    }
    date1 = new Date(date1.getTime()+86400000)
    while(date1.getTime()<date2.getTime())
    {
      
       data.date.push(date1)
       data.plan_list.push(plan)
       data.actual_list.push(actual)
       date1=new Date(date1.getTime()+86400000)
    }
    return data
 }
 const value=generateDate(new Date("2022-12-20"),new Date('2023-01-10'),20,10)
//  console.log(value)
//   const datelist= [
//    new Date('2022-11-29'),
//    new Date('2022-11-30')

// ]
//  datelist.push(...value.date)
//  console.log(datelist)
// date_list2=[]
// date_list2.sort((a,b)=> {return new Date(a)-new Date(b)})
// console.log(date_list2)
//  console.log(value.date)
 const filter_data= value.date.filter(Element=> Element.getTime()<=new Date(Date.now()).getTime())
 console.log(filter_data)

// const date= Date.now()
// console.log(new Date(date).toDateString())
 // 