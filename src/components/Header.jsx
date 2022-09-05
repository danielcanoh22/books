import { BsBookHalf } from "react-icons/bs";
import { Menu } from "./Menu";

const toggleMenu = function () {
  const btnMenu = document.querySelector(".btn-menu");
  const menu = document.querySelector(".menu");
  const backdrop = document.querySelector('.backdrop');

  btnMenu.classList.toggle("active");
  menu.classList.toggle("active");
  backdrop.classList.toggle("active");
};

export const Header = () => {
  return (
    <div className="container">
      <h1 className="logo">
        <BsBookHalf className="logo-icon" /> Books
      </h1>
      <button className="btn-menu" onClick={toggleMenu}>
        <span></span>
      </button>
      <Menu />
    </div>
  );
};
