import PropTypes from "prop-types";
import { ArticleWrap, ArticleImg, ArticleInfo, ArticleTitle, ArticleDescription, ArticleLink } from "./styles/Article.styled";

export const Article = ({ image, title, description }) => {
  return (
    <ArticleWrap>
      <ArticleImg image={image}></ArticleImg>
      <ArticleInfo>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDescription>{description}</ArticleDescription>
        <ArticleLink href="#">Leer artículo</ArticleLink>
      </ArticleInfo>
    </ArticleWrap>
  );
};

Article.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
