import React from 'react'
import '../assets/styles/components.scss'

export default function Sidebar({materias, setMateria, setOriginal}) {
  function setChange(materia) {
    setMateria(materia)
    setOriginal(false)
  }

  return (
    <div id="sidebar">
      <ul className='side-items'>
        {materias.map(materia => {
          return (
          <li className='side-item' onClick={() => {setChange(materia)}}>{materia}</li>
          )
        })}
      </ul>
    </div>
  )
}
