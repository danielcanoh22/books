import styled from "styled-components";

export const CartTitle = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const CartProducts = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  .products-list {
    width: 70%;
  }
`

// Products
export const ProductWrap = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 110px;
  margin: 0.2rem 0;
  border: 1px solid var(--very-light-gray-color);
  overflow: hidden;
`;

export const ProductImg = styled.figure`
  max-height: 110px;
  width: 200px;
  overflow: hidden;
`;

export const ProductInfo = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  text-align: left;
`;

export const ProductAmount = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    margin: 0 0.8rem;
    background-color: #fff;
    border: 1px solid var(--very-light-gray-color);
    font-size: 1.5rem;
    color: var(--light-gray-color);
    cursor: pointer;

    &:hover {
      border-color: var(--main-font-color);
      color: var(--main-font-color);
    }
  }

  p {
    font-size: 0.9rem;
    font-weight: 700;
  }
`;

export const ProductBtn = styled.button`
  color: var(--light-gray-color);
  background-color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--main-font-color);
  }
`;

// Checkout
export const CheckoutWrap = styled.article`
  padding: 0.5rem;

  h3 {
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    margin: 0.8rem 0;
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const CheckoutBtn = styled.button`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background-color: var(--main-font-color);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--main-color-hover);
  }
`;
export const CheckoutCoupon = styled.section`
  border-top: 1px solid var(--very-light-gray-color);
  margin-top: 0.6rem;

  h4 {
    margin: 0.8rem 0;
    font-size: 0.9rem;
    color: (--light-gray-color);
  }

  input {
    padding: 0.3rem;
    outline: none;
    border: 1px solid var(--light-gray-color);
    border-right: none;
  }

  div {
    display: flex;
  }

  button {
    border: none;
    padding: 0.4rem;
    background-color: var(--main-font-color);
    border-radius: 0;
    font-size: 0.8rem;
    color: #fff;
    font-weight: 700;
    cursor: pointer;

    &:hover {
    background-color: var(--main-color-hover);
  }
  }
`;
