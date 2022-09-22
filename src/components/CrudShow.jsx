import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../firebaseConfig/firebase";
import { books } from "../data";

const CrudWrap = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fff;

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CrudTable = styled.table`
  width: 100%;
  max-width: 800px;
  margin: 1rem auto;
  text-align: center;
  border-collapse: collapse;
`;

const CrudRow = styled.tr`
  background-color: var(--row-bg-color);
  color: #fff;
  padding: 1rem;
  border-bottom: 1px solid #535353;

  &.row:hover {
    background-color: var(--row-bg-color-hover);
  }
`;

const CrudColumn = styled.td`
  padding: 0.8rem;

  &.actions {
    display: flex;
    justify-content: center;
  }
`;

const CrudHeader = styled.th`
  padding: 0.8rem;
  font-weightHeader
`;

const CrudBtn = styled.button`
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

const CreateLink = styled(Link)`
  display: flex;
  align-items: center;
  background-color: var(--main-font-color);
  color: #fff;
  padding: 0.4rem 2rem;
  text-decoration: none;
  border-radius: 0.4rem;

  span {
    font-size: 1.5rem;
    margin-right: 0.3rem;
  }

  &:hover {
    background-color: var(--main-color-hover);
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

  &:hover {
    background-color: var(--light-gray-color);
    color: #fff;
  }
`;

const EditLink = styled(Link)`
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

export const CrudShow = () => {
  // 1. Configurar hooks
  const [products, setProducts] = useState([]);

  // 2. Referenciar a la DB firestore
  const productsCollection = collection(db, "products");

  // 3. Mostrar los docs
  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // 4. Función para eliminar un doc
  const deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    getProducts();
  };

  // 5. Función de confirmación Sweet Alert 2
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
