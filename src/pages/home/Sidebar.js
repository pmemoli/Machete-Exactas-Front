import React from 'react'
import {Link} from 'react-router-dom'
import '../../assets/styles/components.scss'

export default function Sidebar() {
  return (
    <div id="sidebar">
      <ul className='side-items'>
        <li className='side-item'><a href='https://exactas.uba.ar/calendario-academico/' target='_blank' rel='noreferrer'>Calendario academico</a></li>
        <li className='side-item'><a href='https://exactas.uba.ar/agenda/' target='_blank' rel='noreferrer'>Agenda fcen</a></li>
        <li className='side-item'><Link to='/otras-fuentes'>Otras fuentes</Link></li>
      </ul>
    </div>
  )
}
