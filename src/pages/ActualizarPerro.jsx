import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const apiUrl = "https://experimental-dogs-experimental-org.koyeb.app/api/v1/dogs/"

function ActualizarPerro() {
    const params = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState([])

    console.log(params)

    const modificar = () => {
        const data = {name: name}
        axios.put(apiUrl + params.id, data)
        .then((res)=>{
            console.log(res)
            navigate("/")
        }).catch((error) => {
            console.log(error)
        })
    }

    const inputChange = (event)=>{
        setName(event.target.value)
    }

  return (
    <div>
        <h1>Actualizar Perro</h1>
        <input type="text" placeholder='Nombre' value={name} onChange={inputChange}/>
        <button onClick={modificar}>Actualizar</button>
    </div>
  )
}

export default ActualizarPerro