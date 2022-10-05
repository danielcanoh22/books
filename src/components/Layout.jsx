import React, { useState, useEffect } from "react";
import { Backdrop, Container, FooterWrap, ProductsWrap, Section } from "./styles/Global.styled";

import {
  collection,
  getDocs
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

import { handleToggleMenu } from "../components/Header";
import { Header } from "./Header";
import { Slider } from "./Slider";
import { Card } from "./Card";
import { Article } from "./Article";
import { Form } from "./Form";
import { articles } from "../data";
import { Footer } from "./Footer";

/**
 * Este componente muestra la aplicación completa, uniendo y renderizando los diferentes componentes
 * que se crearon.
 * 
 * @component
 */
export const Layout = () => {
  // 1. Configurar hooks
  const [products, setProducts] = useState([]);

  // 2. Referenciar a la DB firestore
  const productsCollection = collection(db, "products");

  // 3. Mostrar los docs
  /**
   * Esta función se encarga de tomar todos los productos que están almacenados en la base de datos y guardarlos
   * en un arreglo, para que posteriormente se creen las tarjetas que se muestran en la sección de productos.
   */
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
      <Backdrop className="backdrop" onClick={handleToggleMenu}></Backdrop>
      <main className="main">
        <section id="hero">
          <Slider />
        </section>
        <Section id="products">
          <Container className="container">
            <h2 className="section-title">Productos Disponibles</h2>
            <ProductsWrap>
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
            </ProductsWrap>
          </Container>
        </Section>
        <Section className="blog" id="blog">
          <h2 className="section-title">Blog</h2>
          <Container className="container">
            {articles.map((article) => (
              <Article
                key={article.title}
                image={article.image}
                title={article.title}
                description={article.description}
              />
            ))}
            <Form />
          </Container>
        </Section>
      </main>
      <FooterWrap>
        <Footer/>
      </FooterWrap>
    </>
  );
};
