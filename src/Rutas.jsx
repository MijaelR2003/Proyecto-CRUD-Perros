import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ObtenerPerro from "./pages/ObtenerPerro";
import ActualizarPerro from "./pages/ActualizarPerro";
import Nave from "./pages/Nave";
import CrearPerro from "./pages/CrearPerro";
import VerPerros from "./pages/VerPerros";

function Rutas() {
  const apiUrl =
    "https://sample-dogs-api.netlify.app/api/v1//dogs";

  return (
    <>
      <BrowserRouter>
        <Nave />
        <Routes>
          <Route path="/" element={<ObtenerPerro apiUrl={apiUrl} />} />
          <Route path="/crear-perro" element={<CrearPerro apiUrl={apiUrl} />} />
          <Route
            path="/ver-perro/:id"
            element={<VerPerros apiUrl={apiUrl} />}
          />
          <Route
            path="/actualizar-perro/:id"
            element={<ActualizarPerro apiUrl={apiUrl} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rutas;
