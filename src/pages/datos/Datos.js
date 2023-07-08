import React, {useState} from 'react'
import '../../assets/styles/components.scss'
import '../../assets/styles/datos.scss'
import plan from '../../assets/images/plan-datos.png'
import Sidebar from '../../components/Sidebar.js'
import Materia from '../../components/Materia.js'
import { useParams } from 'react-router-dom'

function Welcome() {
  return (
    <div className='content'>
      <h1>Datos</h1>
      <p>
      Material para la carrera de Ciencia de Datos.
      Acá está la <a href='https://lcd.exactas.uba.ar/' target='_blank'>página de la carrera</a> y 
      un <a href='https://visualizador-encuestas.exactas.uba.ar/index.html' target='_blank'>visualizador de encuestas</a>. 
      Muchas materias se dan tambien en el <a href='https://ic.fcen.uba.ar/actividades-academicas/formacion/materias' target='_blank'>instituto de calculo</a>.
      </p>
    <img src={plan}/>
  </div>
  )
}

export default function Datos({resueltos, cargado}) {
  const {materia} = useParams()
  
  const materias = [
     'Análisis 1', 'Álgebra 1', 'Algoritmos 1', 'Análisis 2', 'Algoritmos 2', 'Análisis Avanzado',
     'Álg. Lineal Computacional', 'Laboratorio de Datos', 'Probabilidad', 'Algoritmos 3', 'Intr. al Modelado Contínuo',
     'Intr. a la Est. y Cs. de Datos', 'Intr. a la Inv. Oper. y Opt.'
  ]

  function renderContent() {
    if (materia === undefined) return <Welcome/>
    else return <Materia nombre={materia} resueltos={resueltos} cargado={cargado}/>
  }

  return (
    <div id='datos'>
      {renderContent()}
      <Sidebar materias={materias} carrera='datos'/>
    </div>
  )
}
