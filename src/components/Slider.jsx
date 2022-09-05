import styled, { keyframes } from "styled-components";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

const SliderWrap = styled.section`
  max-height: 550px;
  width: 100%;
  height: 550px;

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

const SliderImg = styled.article`
  width: 100%;
  height: 100%;
  background-color: red;
  background-image: url(${slide1});
  background-size: cover;
  background-position: center;
  animation: ${sliderAnimation} 20s 3s infinite;
`;

export const Slider = () => {
  return (
    <SliderWrap>
      <SliderImg></SliderImg>
    </SliderWrap>
  );
};
