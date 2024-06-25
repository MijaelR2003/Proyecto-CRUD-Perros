import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const apiUrl = "https://experimental-dogs-experimental-org.koyeb.app/api/v1/dogs"

function Home() {
    const [perros, setPerros] = useState([])

    useEffect(()=>{
        axios.get(apiUrl)
        .then((res)=>{
            setPerros(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    })

    const nuevoArreglo = perros.map((perro)=>{
        return (
            <li key={perro._id}>
                <Link to={"/actualizar-perro/" + perro._id}>{perro.name}</Link>
                <p>{perro.breed}</p>
                <p>{perro.color}</p>
                <p>{perro.age}</p>
                <p>{perro.favoriteToy}</p>
                <p>{perro.personality}</p>
                <p>{perro.bio}</p>
            </li>
        )
    })

  return (
    <div>
        <ul>{nuevoArreglo}</ul>
    </div>
  )
}

export default Home