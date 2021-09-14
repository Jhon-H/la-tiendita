import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards.jsx";

const Product = () => {
  const url = "https://latienditaworkshop.herokuapp.com/products";

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      {product.map((productos) => (
        <Cards key={productos.id} list={productos} />
      ))}
    </div>
  );
};

export default Product;
