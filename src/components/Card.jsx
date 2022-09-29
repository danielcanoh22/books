import PropTypes from "prop-types";
import { BsFillCartPlusFill } from "react-icons/bs";
import { CardWrap, CardImg, CardInfo, CardTitle, CardAuthor, CardPrice, CardBtn } from "./styles/Card.styled";

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
