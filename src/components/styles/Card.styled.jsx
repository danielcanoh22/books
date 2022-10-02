import styled from "styled-components";

export const CardWrap = styled.article`
  background-color: #fff;
  width: calc(1280px / 5 + 1rem);
  min-height: 440px;
  text-align: left;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0.4rem;
`;

export const CardImg = styled.figure`
  height: 350px;
  overflow: hidden;
`;

export const CardInfo = styled.section`
  position: relative;
  padding: 0.5rem;
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  color: var(--dark-gray-color);
`;

export const CardAuthor = styled.p`
  font-size: 0.8rem;
  color: var(--light-gray-color);
  margin: 0.5rem 0;
`;

export const CardPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--main-font-color);
`;

export const CardBtn = styled.button`
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
  color: var(--light-gray-color);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background-color: var(--main-font-color);
    color: #fff;
  }
`;