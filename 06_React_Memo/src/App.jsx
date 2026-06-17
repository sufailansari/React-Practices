import React, { useActionState, useState } from 'react'
import Child from './Component/Child'

const App = () => {
  let[data,setData] = useState(100)
  let[count,setCount] = useState(0)
  return (

    <>
    
      <h1>Hello React </h1>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increament</button>
      <button onClick={()=>setData(150)}>Data</button>
      <Child content = {data} />
    </>
  ) 
}

export default App