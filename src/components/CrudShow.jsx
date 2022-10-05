import React, { useState, useEffect } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { CrudWrap, BackLink, EditLink, CreateLink, CrudTable, CrudRow, CrudHeader, CrudColumn, CrudBtn } from "./styles/Crud.styled";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import Swal from "sweetalert2";
import { db } from "../firebaseConfig/firebase";

/**
 * Este componente se encarga de mostrar la tabla que contiene toda la información de los productos que se han agregado.
 * Adicionalmente, muestra diferentes botones que permiten Crear, Editar y Eliminar un producto.
 * 
 * @component
 */
export const CrudShow = () => {
  // 1. Configurar hooks
  const [products, setProducts] = useState([]);

  // 2. Referenciar a la DB firestore
  const productsCollection = collection(db, "products");

  // 3. Mostrar los docs
  /**
   * Esta función se encarga de tomar todos los productos que están almacenados en la base de datos y guardarlos
   * en un arreglo.
   */
  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // 4. Función para eliminar un doc
  /**
   * Esta función se encarga de eliminar un producto en específico, seleccionándolo por medio de su ID único.
   */
  const deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    getProducts();
  };

  // 5. Función de confirmación Sweet Alert 2
  /**
   * Esta función se encarga de mostrar una ventana de confirmación cuando se desea eliminar un producto.
   */
  const confirmDelete = (id) => {
    Swal.fire({
      title: "¿Desea eliminar el producto?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Llamar a la función para eliminar
        deleteProduct(id);
        Swal.fire(
          "¡Eliminado!",
          "El producto se ha eliminado correctamente",
          "success"
        );
      }
    });
  };

  // 6. Usar useEffect
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <CrudWrap>
      <div className="links">
        <BackLink to="/">Inicio</BackLink>
        <CreateLink to="/create">
          <span>+</span>
          Agregar Producto
        </CreateLink>
      </div>
      <CrudTable>
        <thead>
          <CrudRow>
            <CrudHeader>Título</CrudHeader>
            <CrudHeader>Autor</CrudHeader>
            <CrudHeader>Precio</CrudHeader>
            <CrudHeader>Acciones</CrudHeader>
          </CrudRow>
        </thead>
        <tbody>
          {products.map((product) => (
            <CrudRow key={product.id} className="row">
              <CrudColumn>{product.title}</CrudColumn>
              <CrudColumn>{product.author}</CrudColumn>
              <CrudColumn>{product.price}</CrudColumn>
              <CrudColumn className="actions">
                <EditLink to={`/edit/${product.id}`}>
                  <BsFillPencilFill />
                </EditLink>

                <CrudBtn onClick={() => confirmDelete(product.id)}>
                  <BsFillTrashFill />
                </CrudBtn>
              </CrudColumn>
            </CrudRow>
          ))}
        </tbody>
      </CrudTable>
    </CrudWrap>
  );
};
