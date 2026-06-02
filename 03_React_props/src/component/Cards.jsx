const Cards = ({id, name, brand, price}) => {

    return(
        <div style={{
            width:"300px",
            border:"2px solid red",
            margin:"20px"
        }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu7vx16XwsUlcvF9ephK3J33c7hU6WzsTU5A&s" alt="Description of image" 
            style={{
                width:100

            }}/>
            <h1>product: {id}</h1>
            <h1>product name: {name}</h1>
            <h1>product brand: {brand}</h1>
            <h1>product price: {price}</h1>

        </div>
    );
}

export default Cards;
