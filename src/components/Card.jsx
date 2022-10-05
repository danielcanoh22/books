import React from "react";
import PropTypes from "prop-types";

import { BsFillCartPlusFill } from "react-icons/bs";
import {
  CardWrap,
  CardImg,
  CardInfo,
  CardTitle,
  CardAuthor,
  CardPrice,
  CardBtn,
} from "./styles/Card.styled";

/**
 * Esta función se encarga de almacenar en el LocalStorage del navegador un arreglo de productos.
 */
export const setLocalStorage = function (products) {
  localStorage.setItem("products", JSON.stringify(products));
};

/**
 * Esta función se encarga de retornar los datos almacenados en el LocalStorage del navegador.
 */
export const getLocalStorage = function () {
  const data = JSON.parse(localStorage.getItem("products"));
  return data;
};

const DEFAULT_IMAGE =
  "https://firebasestorage.googleapis.com/v0/b/books-tecnicas.appspot.com/o/portadas%2Fportada-default.png?alt=media&token=77853867-e7b5-4e7e-92b6-e3ecb27c0b0a";

/**
 * Este componente muestra una tarjeta que contiene la información de cada producto.
 *
 * @component
 */
export const Card = ({ id, image = DEFAULT_IMAGE, title, author, price }) => {
  /**
   * Esta función se encarga de tomar la información de cada producto, guardarla en un objeto y agregar dicho objeto a un arreglo de productos. Posteriormente, dicho arreglo se almacena en el LocalStorage del navegador.
   */
  const handleAddToCart = function (e) {
    const products = getLocalStorage() || [];
    const currentProduct = e.target.closest(".card");

    const book = {
      id: currentProduct.dataset.id,
      title: currentProduct.querySelector(".card-title").textContent,
      author: currentProduct.querySelector(".card-author").textContent,
      price: currentProduct.querySelector(".card-price").textContent,
      image: currentProduct.querySelector(".card-img").getAttribute("src"),
      amount: 1,
    };

    const product = products.find((prod) => prod.id === book.id);

    if (!product) products.push(book);

    setLocalStorage(products);
  };

  return (
    <CardWrap className="card" data-id={id}>
      <CardImg>
        <img src={image} className="card-img"></img>
      </CardImg>
      <CardInfo>
        <CardTitle className="card-title">{title}</CardTitle>
        <CardAuthor className="card-author">{author}</CardAuthor>
        <CardPrice className="card-price">$ {price}</CardPrice>
        <CardBtn onClick={handleAddToCart}>
          <BsFillCartPlusFill />
        </CardBtn>
      </CardInfo>
    </CardWrap>
  );
};

Card.propTypes = {
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
  price: PropTypes.number.isRequired,
};
