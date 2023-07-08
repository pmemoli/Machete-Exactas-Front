import React, {useState} from 'react'
import '../../assets/styles/components.scss'
import '../../assets/styles/compu.scss'
import plan from '../../assets/images/plan-compu.png'
import planNuevo from '../../assets/images/plan-compu-nuevo-4.png'
import Sidebar from '../../components/Sidebar.js'
import Materia from '../../components/Materia.js'
import {useParams} from 'react-router-dom'

function Welcome({planEstudios, setPlanEstudios}) {
  const opuesto = planEstudios === 'nuevo' ? 'viejo' : 'nuevo'

  return (
    <div className='content'>
      <div id='header-compu'>
        <h1>Computación</h1>
        <button onClick={() => setPlanEstudios(opuesto)}>Cambiar al plan {opuesto}</button>
      </div>
      
      <p>
        Material para la carrera de Ciencias de la Computación.
        Acá está la <a href='https://computacion.dc.uba.ar/' target='_blank'>página de la carrera</a> y 
        un <a href='https://visualizador-encuestas.exactas.uba.ar/index.html' target='_blank'>visualizador de encuestas</a>.
        En <a href='https://docs.google.com/document/d/e/2PACX-1vSlD-djaJcnw45-41ugO5yGqNl5hA_dKOAikyRDAh5QzsrToBi2XWPzU1i0ldDAbNct0rx2AfhuBf19/pub' targe='_blank'>esta página</a> hay mucha información del nuevo plan. 
      </p>
      
      <img src={planEstudios === 'viejo' ? plan : planNuevo}/>
  </div>
  )
}

export default function Compu({resueltos, cargado}) {
  const [planEstudios, setPlanEstudios] = useState('viejo')
  const {materia} = useParams()

  const materiasViejo = [
     'Análisis 2 (C)', 'Álgebra 1', 'Probabilidad y Estadística (C)', 'Algoritmos 1', 'Métodos Numericos',
     'Organización del Comp. 1', 'Algoritmos 2', 'Organización del Comp. 2', 'Algoritmos 3', 'Lógica y Computabilidad',
     'Sistemas Operativos', 'Ingeniería 1', 'Paradigmas de Prog.', 'Teoría de Lenguajes', 'Teoría de las Com.',
     'Base de Datos', 'Ingeniería 2'
  ]

  const materiasNuevo = [
    'Intro. a la Programación', 'Álgebra 1', 'Algoritmos y Estructuras de Datos', 'Análisis 1', 'Paradigmas de Prog. (N)', 'Técnicas de Diseño de Algoritmos',
    'Sistemas Digitales', 'Lenguajes Formales', 'Arquitectura y Organización', 'Álgebra Lineal Comp. (C)', 'Complejidad Computacional', 'Sistemas Operativos (N)',
    'Estadística Computacional', 'Almacenamiento y recuperación de información', 'Programación Concurrente y Paralela', 'Redes de Comunicaciones'
  ]

  function renderContent() {
    if (materia === undefined) return <Welcome planEstudios={planEstudios} setPlanEstudios={setPlanEstudios}/>
    else return <Materia nombre={materia} resueltos={resueltos} cargado={cargado}/>
  }

  return (
    <div id='compu' style={{height: "max-content"}}>
      {renderContent()}
      <Sidebar materias={planEstudios === 'viejo' ? materiasViejo : materiasNuevo} carrera='compu'/>
    </div>
  )
}
