import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ObtenerPerro from "./pages/ObtenerPerro";
import ActualizarPerro from "./pages/ActualizarPerro";
import Nave from "./pages/Nave";

function Rutas() {
  return (
    <>
      <Nave />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ObtenerPerro />} />
          <Route path="/actualizar-perro/:id" element={<ActualizarPerro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rutas;
