import PropTypes from "prop-types";
import { ArticleWrap, ArticleImg, ArticleInfo, ArticleTitle, ArticleDescription, ArticleLink } from "./styles/Article.styled";

/**
 * Este componente muestra una tarjeta que contiene la información de cada artículo de la sección de Blog.
 * 
 * @component
 */
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
  /**
   * Imagen representativa del artículo.
   */
  image: PropTypes.string.isRequired,
  /**
   * Título del artículo.
   */
  title: PropTypes.string.isRequired,
  /**
   * Breve descripción del artículo.
   */
  description: PropTypes.string.isRequired,
};
