import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

export const CrudEdit = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();
  const {id} = useParams();

  const updateProduct = async (e) => {
    e.preventDefault();
    const product = doc(db, 'products', id);
    const data = {title: title, author: author, price: price};
    await updateDoc(product, data);
    navigate("/");
  };

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, 'products', id));
    if (product.exists()) {
      setTitle(product.data().title);
      setAuthor(product.data().author);
      setPrice(product.data().price);
    }
  }

  useEffect(() => {
    getProductById(id);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Actualizar Producto</h2>
          <form onSubmit={updateProduct}>
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
