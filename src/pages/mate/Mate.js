import React, {useState} from 'react'
import '../../assets/styles/components.scss'
import '../../assets/styles/mate.scss'
import Sidebar from '../../components/Sidebar.js'
import Materia from '../../components/Materia.js'
import planA from '../../assets/images/plan-aplicada-transp-3.png'
import planP from '../../assets/images/plan-pura-transp.png'
import {useParams} from 'react-router-dom'

function Welcome() {
  return (
    <div className='content'>
      <h1>Matemática</h1>
      <p>
      Material para ambas orientaciones de la carrera de Ciencias Matemáticas.
      Acá esta la <a href='https://cms.dm.uba.ar/academico/materias/' target='_blank'>página de la carrera</a> y 
      un <a href='https://visualizador-encuestas.exactas.uba.ar/index.html' target='_blank'>visualizador de encuestas</a>.
      </p>
      
      <div className='planes'>
        <img src={planP}/>
        <img src={planA}/>
      </div>
  </div>
  )
}

export default function Mate({resueltos, cargado}) {
  const {materia} = useParams()

  const materias = [
    'Análisis 1', 'Álgebra 1', 'Taller de Cálculo Avanzado', 'Álgebra Lineal', 'Análisis 2', 'Cálculo Avanzado',
    'Cálculo Numérico', 'Probabilidad y Estadística (M)', 'Análisis Complejo', 'Análisis Real', 'Álgebra 2',
    'Topología', 'Geometría Proyectiva', 'Análisis Funcional', 'Geometría Diferencial', 'Ecuaciones Diferenciales',
    'Álgebra 3', 'Intro. a la Computación', 'Estadística', 'Inv. Operativa', 'Temas de Física', 'Optimización',
    'Análisis Numérico'
  ]

  function renderContent() {
    if (materia === undefined) return <Welcome/>
    else return <Materia nombre={materia} resueltos={resueltos} cargado={cargado}/>
  }

  return (
    <div id='mate'>
      {renderContent()}
      <Sidebar materias={materias} carrera='mate'/>
    </div>
  )
}
