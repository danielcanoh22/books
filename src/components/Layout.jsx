import { Header } from "./Header"
import { Slider } from "./Slider"
import { Card } from "./Card"

import portada1 from "../assets/images/portada1.jpg"
import portada2 from "../assets/images/portada2.jpg"
import portada3 from "../assets/images/portada3.jpg"

export const Layout = () => {
  return (
    <>
      <header className="header">
        <Header/>
      </header>
      <main className="main">
      <div className="container">
        <section className="hero">
        <Slider/>
        </section>
        <section className="products">
          <h2 className="products-title">Productos Disponibles</h2>
          <section className="products-cards">
          <Card image={portada1} title={"El Psicoanalista"} author={"John Katzenbach"} price={35000} />
          <Card image={portada2} title={"El retrato de Dorian Gray"} author={"Oscar Wilde"} price={27000} />
          <Card image={portada3} title={"Escrito en el Agua"} author={"Paula Hawkins"} price={40000} />
          </section>
        </section>
      </div>
      </main>
      <footer className="footer">
      <p>FOOTER</p>
      </footer>
    </>
  )
}