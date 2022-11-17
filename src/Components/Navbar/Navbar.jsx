import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><Link to='/Home'>Inicio</Link></li>
            <li><Link to='/News'>Noticias</Link></li>
            <li><Link to='/Form'>Formulario</Link></li>
        </ul>
    </div>
  )
}

export default Navbar