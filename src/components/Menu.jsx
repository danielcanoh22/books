import styled from "styled-components";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const MenuWrap = styled.nav`
  @media screen and (max-width: 34em) {
    background-color: #fff;
    position: fixed;
    width: 90%;
    left: 0;
    right: 0;
    top: calc(var(--header-height) + 1rem);
    margin: 0 auto;
    border-radius: 0.5rem;
    opacity: 0;
    transition: opacity 0.8s;
    pointer-events: none;

    &.active {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

const MenuItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 34em) {
    flex-direction: column;
  }
`;

const MenuItem = styled.li`
  margin: 0 0.8rem;

  a {
    text-decoration: none;
    font-weight: 400;
    color: var(--dark-gray-color);
  }

  a:hover {
    color: var(--main-font-color);
  }

  @media screen and (max-width: 34em) {
    margin: 1rem 0;
  }

  &.cart {
    font-size: 1.5rem;
  }
`;

export const Menu = () => {
  return (
    <MenuWrap className="menu">
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
          <Link to='/crud' className="nav-link">Admin</Link>
        </MenuItem>
        <MenuItem className="cart">
          <BsCart />
        </MenuItem>
      </MenuItems>
    </MenuWrap>
  );
};
