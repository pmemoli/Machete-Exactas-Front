import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/styles/components.scss'

export default function Sidebar({materias, carrera}) {
  return (
    <div id="sidebar">
      <ul className='side-items'>
        {materias.map(materia => {
          return (
          <Link to={`/${carrera}/${materia}`}><li className='side-item'>{materia}</li></Link>
          )
        })}
      </ul>
    </div>
  )
}
