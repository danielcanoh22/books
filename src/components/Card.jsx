import PropTypes from "prop-types";
import { BsCart } from "react-icons/bs";
import styled from "styled-components";

const CardWrap = styled.article`
  background-color: #fff;
  width: calc(1280px / 5 - 0.4rem);
  text-align: left;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0.4rem;
`;

const CardImg = styled.figure`
  max-height: 350px;
  overflow: hidden;
`;

const CardInfo = styled.section`
  padding: 0.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  color: var(--dark-gray-color);
`;

const CardAuthor = styled.p`
  font-size: 0.8rem;
  color: var(--light-gray-color);
  margin: 0.5rem 0;
`;

const CardPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--main-font-color);
`;

const CardBtn = styled.button`
  width: 100%;
  background-color: rgb(243, 243, 243);
  padding: 0.4rem;
  font-size: 0.9rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: var(--main-font-color);
    color: #fff;
  }

  span {
    margin-right: 0.5rem;
  }
`;

export const Card = ({ image, title, author, price }) => {
  return (
    <CardWrap>
      <CardImg>
        <img src={image}></img>
      </CardImg>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardAuthor>{author}</CardAuthor>
        <CardPrice>$ {price}</CardPrice>
      </CardInfo>
      <CardBtn>
        <span>
          <BsCart />
        </span>
        Agregar al carrito
      </CardBtn>
    </CardWrap>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Card.defaultProps = {
  image: "./src/assets/images/portada-default.png",
};
