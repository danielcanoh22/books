import { SliderWrap, SliderImg, SliderTitle, SliderSubtitle } from "./styles/Slider.styled";

/**
 * Este componente muestra un Slider que contiene diferentes imágenes que van cambiando automáticamente.
 * 
 * @component
 */
export const Slider = () => {
  return (
    <SliderWrap>
      <SliderImg>{ <SliderTitle>¡BIENVENIDO A <br /> BOOKS!</SliderTitle> } {<SliderSubtitle>Encuentra todos tus libros favoritos en un solo lugar</SliderSubtitle>}</SliderImg>
    </SliderWrap>
  );
};
