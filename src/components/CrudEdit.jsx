import React, { useEffect, useState } from "react";
import { CreateWrap as EditWrap, FormContainer, FormLabel, FormInput, BackLink, FormBtn } from "./styles/Crud.styled";

import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig/firebase";
import { Link } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

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
