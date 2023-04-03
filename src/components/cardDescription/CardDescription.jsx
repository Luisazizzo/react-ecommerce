import "./index.css";

const CardDescription = ({
  setCardDescription,
  cardDescription,
  setCart,
  cart,
}) => {
  const addCart = () => {
    const newObj = {
      ...cardDescription,
      qty: 1,
    };

    const isProductInCart = cart.find(
      (product) => product.id === cardDescription.id
    );

    if (isProductInCart === undefined) {
      setCart((prev) => [...prev, newObj]);
    } else {
      const obj = {
        ...isProductInCart,
        qty: isProductInCart.qty + 1,
      };
      const newCart = cart.filter((obj) => obj.id !== isProductInCart.id);
      setCart([...newCart, obj]);
    }

    setCardDescription(false);
  };

  const close = () => {
    setCardDescription(false);
  };

  return (
    <div className="CardDescription">
      <div className="CardDescription__modal">
        <p onClick={close} className="close">
          x
        </p>
        <p className="description">{cardDescription.description}</p>
        <p className="price">{`$${cardDescription.price}`}</p>
        <div className="img">
          {cardDescription.images.map((img) => (
            <img src={img} alt={img} key={img} />
          ))}
        </div>
        <button onClick={addCart} className="btn-add-cart">
          Aggiungi al carrello
        </button>
      </div>
    </div>
  );
};

export default CardDescription;
