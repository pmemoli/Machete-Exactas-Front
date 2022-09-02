import React, {useState} from 'react'
import '../../assets/styles/components.scss'
import '../../assets/styles/compu.scss'
import plan from '../../assets/images/plan-compu.png'
import Sidebar from '../../components/Sidebar.js'
import Materia from '../../components/Materia.js'

function Welcome() {
  return (
    <div className='content'>
      <h1>Computacion</h1>
      <p>
      Material para la carrera de Ciencias de la Computacion.
      Aca esta la <a href='https://computacion.dc.uba.ar/' target='_blank'>pagina de la materia</a> y 
      un <a href='https://visualizador-encuestas.exactas.uba.ar/index.html' target='_blank'>visualizador de encuestas</a>.
      </p>
    <img src={plan}/>
  </div>
  )
}

export default function Compu({original, setOriginal}) {
  const [materia, setMateria] = useState('home');
  const materias = [
     'Analisis 2 (C)', 'Algebra 1', 'Probabilidad y Estadistica (C)', 'Algoritmos 1', 'Metodos Numericos',
     'Organizacion del Comp. 1', 'Algoritmos 2', 'Organizacion del Comp. 2', 'Algoritmos 3', 'Logica y Computabilidad',
     'Sistemas Operativos', 'Ingenieria 1', 'Paradigmas de Prog.', 'Teoria de Lenguajes', 'Teoria de las Com.',
     'Base de Datos', 'Ingenieria 2'
  ]

  function renderContent() {
    if (materia === 'home' || original) return <Welcome/>
    else return <Materia nombre={materia} carrera={'Compu'}/>
  }

  return (
    <div id='compu' style={{height: "max-content"}}>
      {renderContent()}
      <Sidebar materias={materias} setMateria={setMateria} setOriginal={setOriginal}/>
    </div>
  )
}
