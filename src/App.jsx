import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart";
import { CrudCreate } from "./components/CrudCreate";
import { CrudEdit } from "./components/CrudEdit";
import { CrudShow } from "./components/CrudShow";
import { Layout } from "./components/Layout";

/**
 * Este componente se encarga de crear todas las rutas a las diferentes secciónes de la aplicación, para que
 * posteriormente se renderice la página completa.
 * 
 * @component
 */
export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/crud" element={<CrudShow/>}></Route>
          <Route path="/create" element={<CrudCreate/>}></Route>
          <Route path="/edit/:id" element={<CrudEdit/>}></Route>
        </Routes>
    </BrowserRouter>
  );
};
