import styled from "styled-components";

// Header
export const HeaderWrap = styled.header`
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

export const HeaderLogo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;

  &.footer-logo {
    margin: 2rem 0;
  }

  & .logo-icon {
    color: var(--main-font-color);
    margin-right: 0.5rem;
  }
`;

export const HeaderMenuBtn = styled.button`
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

// Menu
export const MenuWrap = styled.nav`
  @media screen and (max-width: 34em) {
    &:not(.footer-menu) {
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
  }
`;

export const MenuItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 34em) {
    flex-direction: column;
  }
`;

export const MenuItem = styled.li`
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
