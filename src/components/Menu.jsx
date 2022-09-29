import { MenuWrap, MenuItems, MenuItem } from "./styles/Header.styled";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const smoothScrollTo = function(e) {
  e.preventDefault();

  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
}

export const Menu = () => {
  return (
    <MenuWrap className="menu" onClick={smoothScrollTo}>
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
          <BsCart />
        </MenuItem>
      </MenuItems>
    </MenuWrap>
  );
};
