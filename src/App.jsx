import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CrudCreate } from "./components/CrudCreate";
import { CrudEdit } from "./components/CrudEdit";
import { CrudShow } from "./components/CrudShow";
import { Layout } from "./components/Layout";

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}></Route>
          <Route path="/crud" element={<CrudShow/>}></Route>
          <Route path="/create" element={<CrudCreate/>}></Route>
          <Route path="/edit/:id" element={<CrudEdit/>}></Route>
        </Routes>
    </BrowserRouter>
  );
};
