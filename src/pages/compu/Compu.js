import React, {useState} from 'react'
import '../../assets/styles/components.scss'
import '../../assets/styles/compu.scss'
import plan from '../../assets/images/plan-compu.png'
import Sidebar from '../../components/Sidebar.js'
import Materia from '../../components/Materia.js'
import {useParams} from 'react-router-dom'

function Welcome() {
  return (
    <div className='content'>
      <h1>Computacion</h1>
      <p>
      Material para la carrera de Ciencias de la Computacion.
      Aca esta la <a href='https://computacion.dc.uba.ar/' target='_blank'>pagina de la carrera</a> y 
      un <a href='https://visualizador-encuestas.exactas.uba.ar/index.html' target='_blank'>visualizador de encuestas</a>.
      </p>
      
      <img src={plan}/>
  </div>
  )
}

export default function Compu({resueltos, cargado}) {
  const {materia} = useParams()
  
  const materias = [
     'Analisis 2 (C)', 'Algebra 1', 'Probabilidad y Estadistica (C)', 'Algoritmos 1', 'Metodos Numericos',
     'Organizacion del Comp. 1', 'Algoritmos 2', 'Organizacion del Comp. 2', 'Algoritmos 3', 'Logica y Computabilidad',
     'Sistemas Operativos', 'Ingenieria 1', 'Paradigmas de Prog.', 'Teoria de Lenguajes', 'Teoria de las Com.',
     'Base de Datos', 'Ingenieria 2'
  ]

  function renderContent() {
    if (materia === undefined) return <Welcome/>
    else return <Materia nombre={materia} resueltos={resueltos} cargado={cargado}/>
  }

  return (
    <div id='compu' style={{height: "max-content"}}>
      {renderContent()}
      <Sidebar materias={materias} carrera='compu'/>
    </div>
  )
}
