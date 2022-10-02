import React from "react";
import { useState } from "react";
import { BsBookHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import { books } from "../data";
import { Card } from "./Card";
import { CartCheckout } from "./CartCheckout";
import { CartProduct } from "./CartProduct";
import { Header } from "./Header";
import { CartTitle, CartProducts } from "./styles/Cart.styled";
import { BackLink, CrudWrap as CartWrap } from "./styles/Crud.styled";

export const Cart = () => {
  const data = JSON.parse(localStorage.getItem("products")) || [];
  const [total, setTotal] = useState(0);

  // console.log(data[0].price.slice(2))
  // if (data.length > 0) {
  //   data.forEach((el) => {
  //     setTotal(total + Number(el.price.slice(2)));
  //   });
  // }

  // data.forEach((el) => {
  //   const product = products.find((prod) => prod.id === el.id);

  //   if (!product) products.push(el);

  //   if (product) {
  //     products[products.indexOf(product)].amount++;
  //   }
  // });

  // console.log(products);

  return (
    <CartWrap className="cart">
      <div className="links">
        <BackLink to="/">Regresar</BackLink>
      </div>
      <CartTitle>Carrito de Compras</CartTitle>
      <CartProducts>
        <section className="products-list">
          {data.length > 0 ? (
            data.map((book) => (
              <CartProduct
                key={book.id}
                image={book.image}
                title={book.title}
                author={book.author}
                price={book.price}
                amount={book.amount}
                id={book.id}
              />
            ))
          ) : (
            <h3>No se han agregado productos al carrito 😢</h3>
          )}
        </section>
        <CartCheckout total={total} />
      </CartProducts>
    </CartWrap>
  );
};
