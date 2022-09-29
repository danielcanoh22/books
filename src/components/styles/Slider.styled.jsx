import styled, { keyframes } from "styled-components";

import slide1 from "../../assets/images/slide1.png"
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";

export const SliderWrap = styled.section`
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 48em) {
    height: 450px;
  }

  @media screen and (max-width: 34em) {
    height: 300px;
  }
`;

const sliderAnimation = keyframes`
33.33% {
  background-image: url(${slide3});
  background-size: cover;
  background-position: center;
}

66.66% {
  background-image: url("${slide2}");
  background-size: cover;
  background-position: center;
}

100% {
  background-image: url(${slide1});
  background-size: cover;
  background-position: center;
}
`;

export const SliderImg = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: red;
  background-image: url(${slide1});
  background-size: cover;
  background-position: center;
  filter: grayscale(70%);

  animation: ${sliderAnimation} 20s 3s infinite;
`;
