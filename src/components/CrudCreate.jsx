import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

export const CrudCreate = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const productsCollection = collection(db, "products");

  const addProduct = async (e) => {
    e.preventDefault();
    await addDoc(productsCollection, {
      title: title,
      author: author,
      price: price,
    });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Crear Producto</h1>
          <form onSubmit={addProduct}>
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
              ></input>
              <label className="form-label">Autor</label>
              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                type="text"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                className="form-control"
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">Store</button>
          </form>
        </div>
      </div>
    </div>
  );
};
