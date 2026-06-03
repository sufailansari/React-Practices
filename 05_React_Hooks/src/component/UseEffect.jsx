// import React, { useEffect, useState } from 'react'

// function App() {

//   let [count,setCount] = useState(0)
//   let [multi,setMulti]= useState(2)


//   useEffect(() =>{
//     console.log("useEffort is Working....");
    
//   },[count])

//   console.log("component javascript part .. ");
  
  

//   return (
//     <>
//     {console.log("html & jsx part of the componenet ")
//     }
//     <h1>App call</h1>
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(count = count+1)}>increment </button>
//     <h1>Multiply :{multi}</h1>
    
//     <button onClick={()=>setMulti(multi = multi*2)}>Multiply</button>

//     </>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'

// function App() {

//   let[data,setData] = useState([])
  
//  useEffect(()=>{
//    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
//     return result.json()
//   }).then((Response)=>{
//     console.log(Response);
    
//     setData(Response);
    
    
    
//   })
//  },[])


//   // fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
//   //   return result.json()
//   // }).then((Response)=>{
//   //   console.log(Response);
    
//   //   setData(Response);
    
    
    
//   // })

//   return (
//     <>
//     {console.log("jsx")
//     }
//     {
//       data.map((item)=>(
//         <p key={item.id}>{item.name},{item.username}</p>
//       ))
//     }
//     </>
//   )
// }

// export default App



