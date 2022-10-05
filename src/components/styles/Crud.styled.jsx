// Show
import styled from "styled-components";
import { Link } from "react-router-dom";

export const CrudWrap = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fff;

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CrudTable = styled.table`
  width: 100%;
  max-width: 800px;
  margin: 1rem auto;
  text-align: center;
  border-collapse: collapse;
`;

export const CrudRow = styled.tr`
  background-color: var(--row-bg-color);
  color: #fff;
  padding: 1rem;
  border-bottom: 1px solid #535353;

  &.row:hover {
    background-color: var(--row-bg-color-hover);
  }
`;

export const CrudColumn = styled.td`
  padding: 0.8rem;

  &.actions {
    display: flex;
    justify-content: center;
  }
`;

export const CrudHeader = styled.th`
  padding: 0.8rem;
  font-weightHeader
`;

export const CrudBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--danger-color);
  color: #fff;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--danger-color-hover);
  }
`;

export const CreateLink = styled(Link)`
  display: flex;
  align-items: center;
  background-color: var(--main-font-color);
  color: #fff;
  padding: 0.4rem 2rem;
  text-decoration: none;
  border-radius: 0.4rem;
  font-size: 1.1rem;

  span {
    font-size: 1.1rem;
    margin-right: 0.3rem;
  }

  &:hover {
    background-color: var(--main-color-hover);
  }
`;

export const EditLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--very-light-gray-color);
  color: var(--dark-gray-color);
  font-size: 1.5rem;
  text-decoration: none;
  border-radius: 0.5rem;
  margin-right: 0.3rem;

  &:hover {
    background-color: var(--light-gray-color);
    color: #fff;
  }
`;

// Create - Edit
export const CreateWrap = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  max-width: 1200px;
  height: 100vh;
  padding: 1rem;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: 800px;
`;

export const FormLabel = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid rgb(225, 225, 225);
  border-radius: 0.4rem;
  font-size: 1rem;
  margin-bottom: 1rem;

  &[type="file"] {
    padding: 0.1rem;
  }

  &[type="file"]::file-selector-button {
    background-color: var(--main-font-color);
    color: #fff;
    padding: 0.5rem;
    margin-right: 1rem;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 0.4rem;

    &:hover {
      background-color: var(--main-color-hover);
    }
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: var(--very-light-gray-color);
  color: #000;
  padding: 0.4rem 2rem;
  text-decoration: none;
  margin-right: 0.5rem;
  border-radius: 0.4rem;
  font-size: 1.1rem;

  &:hover {
    background-color: var(--light-gray-color);
    color: #fff;
  }
`;

export const FormBtn = styled.button`
  width: 10rem;
  background-color: var(--main-font-color);
  color: #fff;
  padding: 0.4rem 2rem;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 0.4rem;

  &:hover {
    background-color: var(--main-color-hover);
  }
`;