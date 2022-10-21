import React, { useState } from "react";
import {
  CreateWrap,
  FormContainer,
  FormLabel,
  FormInput,
  BackLink,
  FormBtn,
} from "./styles/Crud.styled";

import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

/**
 * Este componente se encarga de mostrar el formulario que permite agregar (crear) nuevos libros a la sección de productos y a la tabla del CRUD.
 *
 * @component
 */
export const CrudCreate = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  let urlImage =
    "https://firebasestorage.googleapis.com/v0/b/books-tecnicas.appspot.com/o/portadas%2Fportada-default.png?alt=media&token=77853867-e7b5-4e7e-92b6-e3ecb27c0b0a";

  const productsCollection = collection(db, "products");

  /**
   * Esta función se encarga de tomar la información ingresada en el formulario, almacenarla en un objeto y subirla a la base de datos.
   */
  const addProduct = async (e) => {
    e.preventDefault();

    if (title && author && price) {
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

      await addDoc(productsCollection, {
        title: title,
        author: author,
        price: price,
        image: urlImage,
      });
      navigate("/");
    }
  };

  return (
    <CreateWrap>
      <h2>Agregar Producto</h2>
      <FormContainer onSubmit={addProduct}>
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
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => setImage(e.target.files[0])}
        ></FormInput>
        <div className="btns">
          <BackLink to="/crud">Regresar</BackLink>
          <FormBtn type="submit">Agregar</FormBtn>
        </div>
      </FormContainer>
    </CreateWrap>
  );
};
