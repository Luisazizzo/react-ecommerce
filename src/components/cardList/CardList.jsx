import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Card from "../card/Card";
import Loading from "../Loading/Loading";
import "./index.css";

const CardList = ({ title, endpoint, setCardDescription }) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setProductsList(() => data.products));
  }, []);

  return (
    <div className="CardList">
      <h2>{title}</h2>
      <div className="CardList__list">
        {productsList.length > 0 ? (
          productsList.map((product) => (
            <Card
              setCardDescription={setCardDescription}
              productData={product}
              key={product.id}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default CardList;
