import styled from "styled-components";

const FormWrap = styled.article`
  position: absolute;
  bottom: -8%;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: var(--very-light-gray-color);
  padding: 3rem 1rem;
  width: 60%;
  max-width: 800px;

  @media screen and (max-width: 48em) {
    width: 80%;
  }
`;

const FormContent = styled.form`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  width: 70%;
  outline: none;
  border: 2px solid #000;
  border-radius: 0.2rem;

  &:valid {
    border-color: var(--success-color);
  }

  &:invalid {
    border-color: var(--error-color);
  }
`;

const FormBtn = styled.button`
  padding: 0.5rem;
  margin-top: 0.5rem;
  background-color: var(--main-font-color);
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: rgb(191, 112, 255);
  }
`;

export const Form = () => {
  return (
    <FormWrap>
      <h2>Suscríbete a nuestro newsletter</h2>
      <p>Entérate de las últimas novedades</p>
      <FormContent>
        {/* <FormLabel>Correo Electrónico</FormLabel> */}
        <FormInput type="email" placeholder="Correo electrónico" required />
        <FormBtn>SUSCRIBIRME</FormBtn>
      </FormContent>
    </FormWrap>
  );
};
