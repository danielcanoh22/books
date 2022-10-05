import React from "react";
import { BsBookHalf } from "react-icons/bs";
import {
  MenuWrap,
  MenuItems,
  MenuItem,
  HeaderLogo,
} from "./styles/Header.styled";

/**
 * Este componente muestra el footer que contiene información extra de la aplicación.
 * 
 * @component
 */
export const Footer = () => {
  return (
    <section>
      <MenuWrap className="footer-menu" onClick={(e) => e.preventDefault()}>
        <MenuItems>
          <MenuItem>
            <a href="#" className="nav-link nav-link-footer">
              Acerca de
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" className="nav-link nav-link-footer">
              Términos y Condiciones
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" className="nav-link nav-link-footer">
              Política de Privacidad
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#" className="nav-link nav-link-footer">
              Contacto
            </a>
          </MenuItem>
        </MenuItems>
      </MenuWrap>
      <HeaderLogo className="footer-logo">
        <BsBookHalf className="logo-icon" /> Books
      </HeaderLogo>
      <p>
        <small>
        © Copyright by Daniel Cano Hernández. Aplicación realizada para el curso de Técnicas de Programación. Universidad de Antioquia.
        </small>
      </p>
    </section>
  );
};
