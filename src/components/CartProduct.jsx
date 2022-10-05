import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "./Card";
import { CardTitle, CardAuthor, CardPrice } from "./styles/Card.styled";
import {
  ProductWrap,
  ProductImg,
  ProductInfo,
  ProductAmount,
  ProductBtn,
} from "./styles/Cart.styled";

/**
 * Este componente muestra una tarjeta que contiene toda la información del producto agregado al carrito de compras.
 * Adicionalmente, muestra 2 botones que permiten cambiar la cantidad de productos que se desea comprar y la opción
 * para remover un producto.
 * 
 * @component
 */
export const CartProduct = ({ id, image, title, author, price, amount }) => {
  const [amountProd, setAmountProd] = useState(amount);
  // let data = JSON.parse(localStorage.getItem("products")) || [];
  let data = getLocalStorage() || [];

  /**
   * Esta función se encarga de remover un producto del carrito de compras, actualizar el arreglo de productos y guardarlo
   * nuevamente en el LocalStorage del navegador.
   */
  const handleRemoveProduct = function (e) {
    const product = e.target.closest(".cart-product");
    const productId = product.dataset.id;
    const totalPrice = document.querySelector(".checkout-total");
    let price = 0;
    // data = JSON.parse(localStorage.getItem("products")) || [];
    data = getLocalStorage() || [];

    data.splice(
      data.findIndex((el) => el.id === productId),
      1
    );

    e.target.closest(".cart-product").remove();

    localStorage.removeItem("products");

    if (data.length > 0) {
      // localStorage.setItem("products", JSON.stringify(data));
      setLocalStorage(data);
      data = getLocalStorage() || [];
      price = data.map((book) => (Number(book.price.slice(2))) * book.amount).reduce((i, j) => i + j, 0);

      totalPrice.textContent = `$${price}`;
    }

    if (data.length === 0) totalPrice.textContent = `$${price}`;
  };

  /**
   * Esta función se encarga de cambiar la cantidad de productos que se desea comprar, actualizar el precio total a pagar y guardar
   * los datos actualizados en el LocalStorage del navegador.
   */
  const handleCalcPrice = function (e) {
    data = getLocalStorage() || [];
    const product = e.target.closest(".cart-product");
    const productId = product.dataset.id;
    const productPrice = Number(
      product.querySelector(".product-price").textContent.slice(2)
    );
    const totalPrice = document.querySelector(".checkout-total");

    if (e.target.classList.contains("btn-subtract") && amountProd > 1) {
      setAmountProd(amountProd - 1);

      data[data.findIndex(el => el.id === productId)].amount--;

      totalPrice.textContent = `$${
        Number(totalPrice.textContent.slice(1)) - productPrice
      }`;
    }

    if (e.target.classList.contains("btn-add")) {
      setAmountProd(amountProd + 1);

      data[data.findIndex(el => el.id === productId)].amount++;

      totalPrice.textContent = `$${
        Number(totalPrice.textContent.slice(1)) + productPrice
      }`;
    }

    setLocalStorage(data);
  };

  return (
    <ProductWrap
      className="cart-product"
      data-id={id}
      onClick={handleCalcPrice}
    >
      <ProductImg>
        <img src={image}></img>
      </ProductImg>
      <ProductInfo>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardAuthor>{author}</CardAuthor>
          <CardPrice className="product-price">{price}</CardPrice>
        </div>
        <section>
          <ProductAmount>
            <button className="btn-subtract">-</button>
            <p className="product-amount">{amountProd}</p>
            <button className="btn-add">+</button>
          </ProductAmount>
          <ProductBtn onClick={handleRemoveProduct}>
            Remover Producto
          </ProductBtn>
        </section>
      </ProductInfo>
    </ProductWrap>
  );
};

CartProduct.propTypes = {
  /**
   * ID único de cada producto generado por Firebase.
   */
  id: PropTypes.string,
  /**
   * Portada del libro. En caso de no agregarse una portada, se utilizará una imagen por defecto.
   */
  image: PropTypes.string,
  /**
   * Título del libro.
   */
  title: PropTypes.string.isRequired,
  /**
   * Autor del libro.
   */
  author: PropTypes.string.isRequired,
  /**
   * Precio del libro.
   */
  price: PropTypes.string.isRequired,
  /**
   * Cantidad de productos agregados al carrito.
   */
  amount: PropTypes.number
};
