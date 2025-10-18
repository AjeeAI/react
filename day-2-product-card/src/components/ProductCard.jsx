import "./ProductCard.css";

function ProductCard({name, price, image, inStock}){
    return (
        <div className={`card ${inStock ? "": "overlay"}`}>
            <h3>{name}</h3>
            <img src = {image} alt={name}/>
            <p>Price: ₦{price}</p>
        <p style={{color: inStock? "green": "red"}} >{inStock? "In Stock": "Out of stock"}</p>
        </div>
    );
}

export default ProductCard;