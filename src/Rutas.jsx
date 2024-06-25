import { BrowserRouter, Route, Routes } from "react-router-dom"
import ObtenerPerro from "./pages/ObtenerPerro"
import ActualizarPerro from "./pages/ActualizarPerro"

function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ObtenerPerro/>}/>
        <Route path="/actualizar-perro/:id" element={<ActualizarPerro/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas