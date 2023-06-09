import "./index.css";

const CartItem = ({ item, deleteCart }) => {
  return (
    <div className="CartItem">
      <img src={item.thumbnail} alt={item.images[0]} />
      <p>{item.qty}</p>
      <p>{item.title}</p>
      <p>${item.price}</p>
      <p>${item.price * item.qty}</p>
      <p onClick={() => deleteCart(item.id)} className="delete-cart">
        x
      </p>
    </div>
  );
};

export default CartItem;
