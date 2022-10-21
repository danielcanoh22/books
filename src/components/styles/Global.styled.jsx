import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
`;

export const Section = styled.section`
  text-align: center;
  padding-top: 3rem;

  .section-title {
    display: inline-block;
    padding: 0.2rem;
    font-size: 2rem;
    color: var(--dark-gray-color);
    margin-bottom: 2rem;
    ${'' /* border-top: 2px solid var(--main-font-color); */}
    border-bottom: 2px solid var(--main-font-color);

    @media screen and (max-width: 34em) {
      font-size: 1.5rem;
    }
  }

  .container {
    min-height: 100vh;
  }

  &.blog {
    background-color: #fff;
  }

  &.blog .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    padding-bottom: 18rem;
  }
`;

export const Search = styled.article`
  display: flex;
  margin: 1rem auto;
  width: 100%;
  max-width: 385px;
  height: 2rem;

  input {
    width: 100%;
    padding: 0.2rem;
    font-size: 1rem;
    border: 1px solid var(--light-gray-color);
    border-right: none;
    outline: none;
  }

  div {
    background-color: var(--main-font-color);
    color: white;
    padding: 0.5rem;
  }
`

export const ProductsWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const FooterWrap = styled.footer`
  text-align: center;
  padding: 12rem 1rem 2rem;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 8;

  &.active {
    display: block;
  }
`;
