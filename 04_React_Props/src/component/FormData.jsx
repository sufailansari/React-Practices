import React, { useState } from 'react'

const FormData = () => {
const [data,setData] = useState("")
const[email,setEmail]= useState("")
const [password,setPassword] = useState("")
const [result,setResult] = useState("")

    function captureFormData(e){
        setData(e.target.value);
        
    }

    function captureFormEmail(e){
        setEmail(e.target.value);
        
    }

    function captureFormPassword(e){
        setPassword(e.target.value);
        
    }
    function getData(){
      let FormObj={
        name:data,
        email:email,
        password : password
      }
      console.log(FormObj)
    }
  return (
    <>
    <h1>{result}</h1>
    <input type="text" placeholder='Enter the name'  onChange={captureFormData} value={data} /><br />
    <input type="text" placeholder='Enter the Email'  onChange={captureFormEmail} value={email} /><br />
    <input type="text" placeholder='Enter the password'  onChange={captureFormPassword} value={password} /><br />

    <button onClick={getData}>Get-Data</button>
    </>
  )
}

export default FormData