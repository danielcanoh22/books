import { BsBookHalf } from "react-icons/bs";
import { Menu } from "./Menu";
import styled from "styled-components";

const HeaderWrap = styled.header`
  height: var(--header-height);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);

  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const HeaderLogo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;

  & .logo-icon {
    color: var(--main-font-color);
    margin-right: 0.5rem;
  }
`;

const HeaderMenuBtn = styled.button`
  position: relative;
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: none;

  & span {
    display: block;
    width: 100%;
    height: 1px;
    background-color: #000;
    transition: background-color 0.5s ease-in-out;
  }

  & span::before,
  & span::after {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: #000;
    transition: transform 0.5s;
  }

  & span::after {
    top: auto;
    bottom: 0.45rem;
  }

  &.active > span {
    background-color: transparent;
  }

  &.active > span::before {
    transform: rotate(45deg) translate(6px, 5px);
  }

  &.active > span::after {
    transform: rotate(-45deg) translate(6px, -5px);
  }

  @media screen and (max-width: 34em) {
    display: block;
  }
`;

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
