import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ActualizarPerro from "./pages/ActualizarPerro"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/actualizar-perro/:id" element={<ActualizarPerro/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
