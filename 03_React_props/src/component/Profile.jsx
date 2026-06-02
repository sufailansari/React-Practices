// function Profile({name,age}){
//     //console.log(prop);
//     //let {name,age} = prop;
    
//     return(
//         <>
//         <div style={{ width:"250px",border:"2px solid black"}} >
//          <h1 style={{color:"red"}}>Hello Student </h1>
//          <h2 style={{color:"green"}}>student Infromation</h2>
//          <h1>my name is :{name}</h1>
//          <h1>my age is :{age}</h1>
//         </div>
       
//         </>
//     )
// }

function Profile(prop){
   
    return(
        <>
        <h1>name : {prop.data.name}</h1>
        <h1>Ad : {prop.data.address.state}</h1>
        </>
    );
}
export default Profile