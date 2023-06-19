import React, {useState} from 'react'
import '../../assets/styles/components.scss'
import '../../assets/styles/cbc.scss'
import Sidebar from '../../components/Sidebar.js'
import Materia from '../../components/Materia.js'
import sede from '../../assets/images/cbc-1.png'
import {useParams} from 'react-router-dom'

function Welcome() {
  return (
    <div className='content'>
      <h1>Ciclo Basico Comun</h1>
      
      <p>
        Material para el <a href='https://www.cbc.uba.ar/' target='_blank'>ciclo basico comun</a> de todas las carreras de la facultad de ciencias
        exactas y naturales.
      </p>
      
      <img src={sede}/>
  </div>
  )
}

export default function Mate({resueltos, cargado}) {
  const {materia} = useParams()

  const materias = [
    'Analisis', 'Algebra', 'Quimica', 'Fisica', 'Biologia', 'Matematica', 'Sociedad y Estado', 'Intr. al pens. cientifico'
  ]

  function renderContent() {
    if (materia === undefined) return <Welcome/>
    else return <Materia nombre={materia} resueltos={resueltos} cargado={cargado}/>
  }

  return (
    <div id='cbc'>
      {renderContent()}
      <Sidebar materias={materias} carrera='cbc'/>
    </div>
  )
}
