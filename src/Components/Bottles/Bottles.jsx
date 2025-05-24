import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart } from "../Utilities/localstorage";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

//   load cart from localstorage 
useEffect(()=>{
    if(bottles.length){
        const storedCart = getStoredCart();

            const saveCart = [];
        for(const id of storedCart){
            const bottle = bottles.find(bottle => bottle.id === id)
            if(bottle){
                saveCart.push(bottle);
            }
            
        }
        setCart(saveCart)
    }
},[bottles])


  // handle cart
  const handleBottleCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  return (
    <div>
      <h2>Chose Your Best Bottle</h2>
      <h3>Cart : {cart.length}</h3>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            handleBottleCart={handleBottleCart}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
