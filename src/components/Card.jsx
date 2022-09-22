import PropTypes from "prop-types";
import { BsFillCartPlusFill } from "react-icons/bs";
import styled from "styled-components";

const CardWrap = styled.article`
  background-color: #fff;
  width: calc(1280px / 5 + 1rem);
  min-height: 440px;
  text-align: left;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0.4rem;
`;

const CardImg = styled.figure`
  height: 350px;
  overflow: hidden;
`;

const CardInfo = styled.section`
  position: relative;
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
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--very-light-gray-color);
  font-size: 1.5rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background-color: var(--main-font-color);
    color: #fff;
  }
`;

export const Card = ({ image, title, author, price }) => {
  return (
    <CardWrap className="card">
      <CardImg>
        <img src={image}></img>
      </CardImg>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardAuthor>{author}</CardAuthor>
        <CardPrice>$ {price}</CardPrice>
        <CardBtn>
          <BsFillCartPlusFill />
        </CardBtn>
      </CardInfo>
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
  image:
    "https://firebasestorage.googleapis.com/v0/b/books-tecnicas.appspot.com/o/portadas%2Fportada-default.png?alt=media&token=77853867-e7b5-4e7e-92b6-e3ecb27c0b0a",
};
