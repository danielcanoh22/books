import { BsBookHalf } from "react-icons/bs";
import { HeaderWrap, HeaderLogo, HeaderMenuBtn } from "./styles/Header.styled";
import { Menu } from "./Menu";
import { Container } from "./styles/Global.styled";

/**
 * Esta función se encarga de mostrar y ocultar el menú de navegación en la versión móvil de la aplicación.
 * 
 */
export const handleToggleMenu = function () {
  const btnMenu = document.querySelector(".btn-menu");
  const menu = document.querySelector(".menu");
  const backdrop = document.querySelector(".backdrop");

  btnMenu.classList.toggle("active");
  menu.classList.toggle("active");
  backdrop.classList.toggle("active");
};

/**
 * Este componente muestra el header que contiene el logo y el menú de navegación de la aplicación.
 * 
 * @component
 */
export const Header = () => {
  return (
    <HeaderWrap>
      <Container className="container">
        <HeaderLogo>
          <BsBookHalf className="logo-icon" /> Books
        </HeaderLogo>
        <HeaderMenuBtn className="btn-menu" onClick={handleToggleMenu}>
          <span></span>
        </HeaderMenuBtn>
        <Menu />
      </Container>
    </HeaderWrap>
  );
};
