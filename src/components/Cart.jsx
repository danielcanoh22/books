import React from "react";
import { getLocalStorage } from "./Card";
import { CartCheckout } from "./CartCheckout";
import { CartProduct } from "./CartProduct";
import { CartTitle, CartProducts } from "./styles/Cart.styled";
import { BackLink, CrudWrap as CartWrap } from "./styles/Crud.styled";

/**
 * Este componente muestra la sección del carrito de compras con todos los productos agregados.
 *
 * @component
 */
export const Cart = () => {
  // const data = JSON.parse(localStorage.getItem("products")) || [];
  const data = getLocalStorage() || [];
  const total = data.map((book) => (Number(book.price.slice(2))) * book.amount).reduce((i, j) => i + j, 0);

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
