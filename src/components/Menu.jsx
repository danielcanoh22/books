import { MenuWrap, MenuItems, MenuItem } from "./styles/Header.styled";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

/**
 * Esta función se encarga de aplicar el efecto de Desplazamiento Suave a la página, cuando se pulsa
 * alguna de las opciones del menú.
 */
const handleSmoothScrollTo = function(e) {
  e.preventDefault();

  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
}

/**
 * Este componente muestra el menú de navegación de la aplicación.
 * 
 * @component
 */
export const Menu = () => {
  return (
    <MenuWrap className="menu" onClick={handleSmoothScrollTo}>
      <MenuItems>
        <MenuItem>
          <a href="#hero" className="nav-link">Inicio</a>
        </MenuItem>
        <MenuItem>
          <a href="#products" className="nav-link">Productos</a>
        </MenuItem>
        <MenuItem>
          <a href="#blog" className="nav-link">Blog</a>
        </MenuItem>
        <MenuItem>
          <Link to='/crud'>Admin</Link>
        </MenuItem>
        <MenuItem className="cart">
          <Link to='/cart'>
          <BsCart />
          </Link>
        </MenuItem>
      </MenuItems>
    </MenuWrap>
  );
};
