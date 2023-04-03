import { useEffect, useState } from "react";
import CartItem from "../cartItem";
import "./index.css";

const TendinaCart = ({ tendinaCart, setCart, cart }) => {
  const [totale, setTotale] = useState(0);

  useEffect(() => {
    setTotale(0);
    cart.forEach((item) => setTotale((prev) => prev + item.price * item.qty));
  }, [cart]);

  const deleteCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className={`TendinaCart ${tendinaCart && "show"}`}>
      {cart.map((item, index) => (
        <CartItem deleteCart={deleteCart} item={item} key={index} />
      ))}
      <h2 className="totale">Totale: ${totale}</h2>
    </div>
  );
};

export default TendinaCart;
