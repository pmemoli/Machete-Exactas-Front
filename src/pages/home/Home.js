import React from 'react'
import Sidebar from './Sidebar'
import homeImg from '../../assets/images/cero1.jpg'
import '../../assets/styles/home.scss'

export default function Home() {
  return (
    <div id='home'>
      <div className='content'>
        <h1>Bienvenid@s</h1>
        <p>Esta es una pagina con resueltos, apuntes y complementos para las materias
        que se dan en el pabellon 1 de la facultad de ciencias exactas y naturales en la 
        UBA. Cualquiera puede contribuir con material yendo a la pagina de la materia. 
        Puede tardar un tiempo en subirse por razones de moderacion.
        Los resueltos iniciales provienen de Cubawiki, Les Noetheries y Estufis (ver otras fuentes).</p>
        <img src={homeImg}/>
      </div>
      <Sidebar/>
    </div>
  )
}
