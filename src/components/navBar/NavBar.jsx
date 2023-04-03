import { useState, useEffect } from "react";
import { FiShoppingCart, FiAlignJustify } from "react-icons/fi";
import "./index.css";

const Navbar = ({
  onHandleSubmit,
  onHandleInput,
  inputValue,
  setTendinaCart,
  cart,
}) => {
  const [quantita, setQuantita] = useState(0);

  useEffect(() => {
    setQuantita(0);
    cart.forEach((item) => setQuantita((prev) => prev + item.qty));
  }, [cart]);

  const toggleTendina = () => {
    setTendinaCart((prev) => !prev);
  };

  return (
    <div className="Navbar">
      <ul>
        <li>
          <FiAlignJustify className="menu" />
        </li>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
        <li className="cart-qty-icons">
          <p className="qtyCart">{quantita}</p>
          <FiShoppingCart onClick={toggleTendina} className="cart" />
        </li>
      </ul>

      <form className="NavBar__form" onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Scegli una categoria..."
        />
      </form>
    </div>
  );
};

export default Navbar;
