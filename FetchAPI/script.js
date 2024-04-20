// let p= fetch("http://api.citybik.es/v2/networks")
// p.then(response=>{
//     console.log(response.status)
//     console.log(response.ok)
//     console.log(response.headers)
//     return response.json()
    
// }).then((value2)=>{
//     console.log(value2)
// })

// const createTodo= async (todo)=>{
// let options={
//     method:"POST",
//     headers:{
//         "Content-type":"application/json"
//     },
//     body: JSON.stringify(todo),
// }
// let p =await fetch('https://jsonplaceholder.typicode.com/posts',options)
// let response = await p.json()
// return response
// }

// const mainFunc=async()=>{
//     let todo={
//         title: 'Nitya1',
//         body: 'bharti',
//         userId:110,
//     }
//     let todor=await createTodo(todo)
//     console.log(todor)
// }
// mainFunc()

const URL= "https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact")
const btn=document.querySelector("#btn")


// const getFacts= async()=>{
//     console.log("getting data...........")
//     let response =  await fetch(URL)  //get request for receiving data
//     console.log(response)   //json format
//     console.log(response.status)
//     console.log(response.ok)
//     console.log(response.header)

//     let data= await response.json();
//     factPara.innerText= data[4].text;
// }

function getFacts(){
    fetch(URL)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data);
        factPara.innerText= data[4].text;
    })
}
btn.addEventListener("click",getFacts)