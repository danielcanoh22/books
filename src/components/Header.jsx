import { BsCart } from "react-icons/bs";

export const Header = () => {
  return (
    <div className="container">
      <h1>Logo</h1>
      <nav>
        <ul className="menu-items">
          <li className="menu-item">
            <a href="#">Inicio</a>
          </li>
          <li className="menu-item">
            <a href="#">Productos</a>
          </li>
          <li className="menu-item">
            <a href="#">Contacto</a>
          </li>
          <li className="menu-item cart">
            <BsCart />
          </li>
        </ul>
      </nav>
    </div>
  );
};
