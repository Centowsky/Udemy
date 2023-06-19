import React from "react";
import { Link } from "react-router-dom";

const ProductsPage = (props) => {
  return (
    <>
      <h3>Strona produktu</h3>
      <Link to="/products">Powrót do listy produktów</Link>
    </>
  );
};

export default ProductsPage;
