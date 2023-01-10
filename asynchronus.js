

// async function for asynchronusly call in javascript 

function resoleveafter2Seconds()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('resolved')
    },2000)
    })

}

async function asyncCall()
{
    // console.log('calling async calls')
    const value= await resoleveafter2Seconds();
    console.log(value)
    // async func
}
asyncCall();
console.log('after the asynccall')
