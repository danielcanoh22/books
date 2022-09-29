import { BsBookHalf } from "react-icons/bs";
import { HeaderWrap, HeaderLogo, HeaderMenuBtn } from "./styles/Header.styled";
import { Menu } from "./Menu";

export const handleToggleMenu = function () {
  const btnMenu = document.querySelector(".btn-menu");
  const menu = document.querySelector(".menu");
  const backdrop = document.querySelector(".backdrop");

  btnMenu.classList.toggle("active");
  menu.classList.toggle("active");
  backdrop.classList.toggle("active");
};

export const Header = () => {
  return (
    <HeaderWrap>
      <div className="container">
        <HeaderLogo>
          <BsBookHalf className="logo-icon" /> Books
        </HeaderLogo>
        <HeaderMenuBtn className="btn-menu" onClick={handleToggleMenu}>
          <span></span>
        </HeaderMenuBtn>
        <Menu />
      </div>
    </HeaderWrap>
  );
};
