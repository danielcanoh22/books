import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../firebaseConfig/firebase";

import { handleToggleMenu } from "../components/Header";
import { BsSearch } from "react-icons/bs";
import { Header } from "./Header";
import { Slider } from "./Slider";
import { Card } from "./Card";
import { Article } from "./Article";
import { Form } from "./Form";
import { articles } from "../data";
import { Footer } from "./Footer";

export const Layout = () => {
  // 1. Configurar hooks
  const [products, setProducts] = useState([]);

  // 2. Referenciar a la DB firestore
  const productsCollection = collection(db, "products");

  // 3. Mostrar los docs
  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // 6. Usar useEffect
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="backdrop" onClick={handleToggleMenu}></div>
      <main className="main">
        <section id="hero">
          <Slider />
        </section>
        <section className="section" id="products">
          <div className="container">
            <h2 className="section-title">Productos Disponibles</h2>
            {/* <form className="form-search">
              <div>
                <BsSearch />
              </div>
              <input type="search" placeholder="Buscar libro..."></input>
            </form> */}
            <section className="products-cards">
              {products.length > 0 ?
                products.map((book) => (
                <Card
                  key={book.id}
                  image={book.image}
                  title={book.title}
                  author={book.author}
                  price={Number(book.price)}
                  id={book.id}
                />
              )) : <h3>No hay productos disponibles 😢</h3>}
            </section>
          </div>
        </section>
        <section className="section blog" id="blog">
          <h2 className="section-title">Blog</h2>
          <div className="container">
            {articles.map((article) => (
              <Article
                key={article.title}
                image={article.image}
                title={article.title}
                description={article.description}
              />
            ))}
            <Form />
          </div>
        </section>
      </main>
      <footer className="footer">
        <Footer/>
      </footer>
    </>
  );
};
