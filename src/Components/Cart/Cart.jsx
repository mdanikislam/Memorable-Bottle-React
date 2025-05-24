import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h3>Cart: {cart.length}</h3>
      
        <div className="cart-img">
        {cart.map((bottle) => (
          <div >
            <img src={bottle.img} />
            <button onClick={() => handleRemoveFromCart(bottle.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
// Cart.Proptypes = {
//   cart: Proptypes.array.isRequired,
//   handleRemoveFromCart: Proptypes.func.isRequired,
// };

export default Cart;
