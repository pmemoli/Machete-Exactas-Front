import React from 'react'
import {Link} from 'react-router-dom'
import '../../assets/styles/components.scss'

export default function Sidebar() {
  return (
    <div id="sidebar">
      <ul className='side-items'>
        <li className='side-item'><a href='https://exactas.uba.ar/calendario-academico/' target='_blank' rel='noreferrer'>Calendario académico</a></li>
        <li className='side-item'><a href='https://calendar.google.com/calendar/u/0/embed?src=sn0ir2b77hr77k7f1it9q2u730@group.calendar.google.com&ctz=America/Argentina/Buenos_Aires&pli=1' target='_blank' rel='noreferrer'>Menú universitario</a></li>
        <li className='side-item'><a href='https://exactas.uba.ar/higieneyseguridad/plan-de-proteccion/planos/' target='_blank' rel='noreferrer'>Planos de edificios</a></li>
        <li className='side-item'><a href='https://exactas.uba.ar/wp-content/uploads/2022/10/0I-aulas-v2.pdf' target='_blank' rel='noreferrer'>Mapa del 0+inf</a></li>
        <li className='side-item'><a href='https://exactas.uba.ar/agenda/' target='_blank' rel='noreferrer'>Agenda FCEN</a></li>
        <li className='side-item'><Link to='/otras-fuentes'>Otras fuentes</Link></li>
      </ul>
    </div>
  )
}
