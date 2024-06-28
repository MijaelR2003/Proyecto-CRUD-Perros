import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ObtenerPerro from "./pages/ObtenerPerro";
import ActualizarPerro from "./pages/ActualizarPerro";
import Nave from "./pages/Nave";
import CrearPerro from './pages/CrearPerro';

function Rutas() {
  //const apiUrl =
  //"https://experimental-dogs-experimental-org.koyeb.app/api/v1/dogs";
  const apiUrl =
  "https:experimental-unicorns-experimental-org.koyeb.app/api/v1/unicorns";

  return (
    <>
      <Nave />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ObtenerPerro apiUrl={apiUrl}/>} />
          <Route path='/crear-perro' element={<CrearPerro apiUrl={apiUrl}/>}/>
          <Route path="/actualizar-perro/:id" element={<ActualizarPerro apiUrl={apiUrl}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rutas;
