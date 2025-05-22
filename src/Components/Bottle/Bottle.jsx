import './Bottle.css'
const Bottle = ({bottle}) => {
    const {img, name, price, seller, ratings, ratingsCount,shipping, quantity} = bottle;
    return (
        <div className='bottle-content'>
            <img className='bottle-img' src={img} alt="" />
            <h3><span>Name : </span>{name}</h3>
            <h4><span>Price : </span>{price}</h4>
            <h4><span>Seller : </span>{seller}</h4>
            <div className='ratings'>
                <h4><span>Ratings : </span>{ratings}</h4>
            <h4><span>Ratings Count: </span>{ratingsCount}</h4>
            </div>
            <div className="ratings">
                <h4><span>Shipping : </span>{shipping}</h4>
                <h4><span>Quantity : </span>{quantity}</h4>
            </div>
            <button>Buy Now</button>
        </div>
    );
};

export default Bottle;