import React, { useState } from "react"


const App = () =>{
  const [count,setCount] = useState(10);
  console.log("hello");
  
  //  function DisplayData() {
  //   //  console.log("function calll..........");
  //   //  count = count+1;
  //   //  console.log(count);/
  //   setCount(count+1)
  //}
  return(
    <>
    
    <h1> Hello React</h1>
    <h1>count:{count}</h1>
    <button onClick={()=>setCount(count+1)}>click me</button>

  </>
  )
  
}
export default App;
