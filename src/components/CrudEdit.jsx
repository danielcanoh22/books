import React, { useEffect, useState } from "react";
import { CreateWrap as EditWrap, FormContainer, FormLabel, FormInput, BackLink, FormBtn } from "./styles/Crud.styled";

import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

/**
 * Este componente se encarga de mostrar el formulario que permite editar y actualizar un producto.
 * La información del producto a editar, aparece por defecto en los campos de texto cuando
 * se renderiza el componente.
 * 
 * @component
 */
export const CrudEdit = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  let urlImage;

  const navigate = useNavigate();
  const { id } = useParams();

  /**
   * Esta función se encarga de tomar la información ingresada en el formulario, almacenarla en un objeto y subirla a la base de datos,
   * reemplazando los datos que existían anteriormente.
   */
  const updateProduct = async (e) => {
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
  
      const product = doc(db, "products", id);
      const data = {
        title: title,
        author: author,
        price: price,
        image: urlImage || image,
      };
      await updateDoc(product, data);
      navigate("/");
    }
  };

  /**
   * Esta función se encarga de tomar la información del producto que se desea editar, por medio del ID único
   * que es generado por Firebase.
   */
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
