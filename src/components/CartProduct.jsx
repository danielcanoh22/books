import React from "react";
import { useState } from "react";
import { CardTitle, CardAuthor, CardPrice } from "./styles/Card.styled";
import { ProductWrap, ProductImg, ProductInfo, ProductAmount, ProductBtn } from "./styles/Cart.styled";


export const CartProduct = ({ id, image, title, author, price, amount }) => {
  const [amountProd, setAmountProd] = useState(amount);
  let data = JSON.parse(localStorage.getItem("products")) || [];
  
  const handleRemoveProduct = function(e) {
    const productId = e.target.closest('.cart-product').dataset.id;
    data = JSON.parse(localStorage.getItem("products")) || [];

    data.splice(data.findIndex(el => el.id === productId), 1);
  
    e.target.closest('.cart-product').remove();
  
    localStorage.removeItem('products');

    if (data.length > 0) localStorage.setItem("products", JSON.stringify(data));
  }

  return (
    <ProductWrap className="cart-product" data-id={id}>
      <ProductImg>
        <img src={image}></img>
      </ProductImg>
      <ProductInfo>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardAuthor>{author}</CardAuthor>
          <CardPrice>{price}</CardPrice>
        </div>
        <section>
          <ProductAmount>
            <button onClick={() => amountProd > 1 ? setAmountProd(amountProd - 1) : setAmountProd(1)}>-</button>
            <p>{amountProd}</p>
            <button onClick={() => setAmountProd(amountProd + 1)}>+</button>
          </ProductAmount>
          <ProductBtn onClick={handleRemoveProduct}>Remover Producto</ProductBtn>
        </section>
      </ProductInfo>
    </ProductWrap>
  );
};
