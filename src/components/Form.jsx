import { FormWrap, FormContent, FormInput, FormBtn } from "./styles/Form.styled";

export const Form = () => {
  return (
    <FormWrap>
      <h2>Suscríbete a nuestro newsletter</h2>
      <p>Entérate de las últimas novedades</p>
      <FormContent>
        <FormInput type="email" placeholder="Correo electrónico" required />
        <FormBtn>SUSCRIBIRME</FormBtn>
      </FormContent>
    </FormWrap>
  );
};
