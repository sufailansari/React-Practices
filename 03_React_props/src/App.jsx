import React from "react";
import Profile from "./component/Profile";
import Cards from "./component/Cards";
// const App = ()=>{ //parent 

//   let name1 = "Sorab"
//   let age1= 22

//   let name2 = "sumit"
//   let age2 = 25

//   let name3 = "suhaib"
//   let age3 = 26
//   return(
//     <>
//     <Profile name = {name1} age ={age1}/>
//     <Profile name = {name2} age ={age2}/>
//     <Profile name = {name3} age ={age3}/>
//     </>
//   );
// }

 //passing the object
// const App = ()=>{ //parent 

//   let data = {
//     name:"neha",
//     age :25,
//     subject:"React",
//     address:{
//       state:"dehli",
//       pin:3321
//     }
//   }
//   return(
//     <>
//     <Profile data ={data}/>
//     <Profile name = {name2} age ={age2}/>
//     <Profile name = {name3} age ={age3}/>
//     </>
//   );
// }

//

const App = ()=>{ //parent 

  let product  = [
    {
      id:1,
      name:"car",
      brand:"com",
      price:25
    },
    {
      id:2,
      name:"laptop",
      brand:"dell",
      price:25000
    },
    {
      id:3,
      name:"mouse",
      brand:"logistic",
      price:250
    }

  ];

  return(
    <>
    {product.map((item)=>{
      return(
        <Cards id={item.id} name = {item.name} brand ={item.brand}  price = {item.price}/>
      );
      
    })}

    </>
  );
}

export default App;