import React, { useState } from "react"
import Com from "./Component/Com";


// const App = () =>{
 
//   console.log("hello");
//   const [color,setColor] = useState("black")

//   return(
//     <>
    
//     <h1  style={{color}}>My name is Hement</h1>
//     <hr />
//     <button onClick={()=> setColor("red")}>Red</button>
//     <button onClick={()=>setColor("Blue")} >Blue</button>

//   </>
//   )
  
// }


//Show and Hide  text 

// const App = () =>{
 
//   console.log("hello");
//   const [visible,setVisible] = useState(true)

//   return(
//     <>
//     {visible?<h1>This  is my name</h1>:""}
//     {visible && <h1>Raj</h1>}
//     <button onClick={()=>{setVisible(!visible)}}>Show/Hide</button>

//   </>
//   )
  
// }

// Change the Button content on click


const App = () =>{
  return(
    <>
    <Com/>
    <Com/>
    <Com/>
    <Com/>
  </>
  )
}

export default App;

