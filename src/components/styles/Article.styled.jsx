import styled from "styled-components";

export const ArticleWrap = styled.article`
  display: flex;
  flex-direction: column;
  width: 45%;
  ${"" /* border: 2px solid red; */}
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0.8rem;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);

  flex-basis: 40%;

  @media screen and (max-width: 48em) {
    flex-basis: 70%;
  }

  @media screen and (max-width: 34em) {
    flex-basis: 90%;
  }
`;

export const ArticleImg = styled.section`
  height: 230px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const ArticleInfo = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const ArticleTitle = styled.h3`
  text-align: left;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--dark-gray-color);
`;

export const ArticleDescription = styled.p`
  font-size: 0.8rem;
  line-height: 1.8;
  color: var(--light-gray-color);
  text-align: left;
`;

export const ArticleLink = styled.a`
  margin: 0.5rem auto;
  text-decoration: none;
  color: var(--dark-gray-color);

  &:hover {
    color: var(--main-font-color);
  }
`;