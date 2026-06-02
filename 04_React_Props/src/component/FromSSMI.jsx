// SSMI : Single State multipal inputes
import React, { useState } from 'react'

const FromSSMI = () => {
    const [fromData,setFromData] =useState({
        userName:"",
        email : "",
        password : "",
        fatherName:""
    })


    function captureFormData(e) {
        //console.log(e);
        let {name,value} = e.target
        setFromData({...fromData,[name]:value})
        
    }
    function displayData(){
        console.log(fromData);
        
    }
  return (
    <>
    <input type="text" placeholder='Enter the name' 
     name = "userName" onChange={captureFormData} value={fromData.userName}/><br /><br />
    <input type="text" placeholder='Enter the Email'
     name ="email" onChange={captureFormData} value={fromData.email}/><br /><br />
     <input type="text" placeholder='Enter the father Name' 
    name ="fatherName" onChange={captureFormData} value={fromData.fatherName} /><br /><br />
    <input type="password" placeholder='Enter the password' 
    name ="password" onChange={captureFormData} value={fromData.password} /><br /><br />
    <button onClick={displayData}>Show Data</button>

    </>
  )
}

export default FromSSMI