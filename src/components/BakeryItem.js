// TODO: create a component that displays a single bakery item
import "./BakeryItem.css";

function BakeryItem(props){
    return(<div className="BakeryItem">
        <h3>Name: {props.item.name}</h3>
        <p>Price: {props.item.price}</p>
        <p>{props.item.description}</p>
        
        <img src ={props.item.image} />
        <button onClick={()=>{props.addToCart(props.item)}}>Add to cart</button>
    </div>
    )
}

export default BakeryItem;
