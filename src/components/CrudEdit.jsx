import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig/firebase";
import { Link } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const EditWrap = styled.article`
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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: 800px;
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
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

const BackLink = styled(Link)`
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

const FormBtn = styled.button`
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

export const CrudEdit = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  let urlImage;

  const navigate = useNavigate();
  const { id } = useParams();

  const updateProduct = async (e) => {
    e.preventDefault();

    try {
      if (image.name) {
        const newRef = ref(storage, `/portadas/${image.name}`);
        const snap = await uploadBytesResumable(newRef, image);
  
        if (snap.state === "success") {
          urlImage = await getDownloadURL(snap.ref);
        }
      }
      
    } catch (error) {
      console.log(error);
    }

    const product = doc(db, "products", id);
    const data = {
      title: title,
      author: author,
      price: price,
      image: urlImage || image,
    };
    await updateDoc(product, data);
    navigate("/");
  };

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, "products", id));
    if (product.exists()) {
      setTitle(product.data().title);
      setAuthor(product.data().author);
      setPrice(product.data().price);
      setImage(product.data().image);
    }
  };

  useEffect(() => {
    getProductById(id);
  }, []);

  return (
    <EditWrap>
      <h2>Actualizar Producto</h2>
      <FormContainer onSubmit={updateProduct}>
        <FormLabel>Título</FormLabel>
        <FormInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        ></FormInput>
        <FormLabel>Autor</FormLabel>
        <FormInput
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
        ></FormInput>
        <FormLabel>Precio</FormLabel>
        <FormInput
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
        ></FormInput>
        <FormLabel>Portada</FormLabel>
        <FormInput
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
        ></FormInput>
        <div className="btns">
          <BackLink to="/crud">Regresar</BackLink>
          <FormBtn type="submit">Actualizar</FormBtn>
        </div>
      </FormContainer>
    </EditWrap>
  );
};
