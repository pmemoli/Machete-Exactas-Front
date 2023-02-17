import React, {useState, useRef, useEffect} from 'react'
import axios from 'axios'
import Resueltos from './Resueltos.js'
import Modal from './Modal.js'
import '../assets/styles/materia.scss'

export default function Materia({nombre, resueltos, cargado}) {
  const [modalDisplay, setModalDisplay] = useState('no-display')
  const [tipoRes, setTipoRes] = useState('')
  const [resueltosMateria, setResueltosMateria] = useState([])

  if (nombre == 'Matematica 1' || nombre == 'Analisis 2 (C)') nombre = 'Analisis 1'
  if (nombre == 'Matematica 3') nombre = 'Analisis 2'
  if (nombre == 'Probabilidad') nombre = 'Probabilidad Y Estadistica (M)'
  if (nombre == 'Intr. a la Est. y Cs. de Datos') nombre = 'Estadistica'
  if (nombre == 'Intr. a la Inv. Oper. y Opt.') nombre = 'Inv. Operativa'
 
  const nombreMateria = nombre.replaceAll(' ', '_').toLowerCase()

  useEffect(() => {
    setResueltosMateria(resueltos.filter(resuelto => resuelto.materia === nombreMateria && resuelto.accepted === 1))
  }, [cargado, nombre])

  useEffect(() => {
    setModalDisplay('no-display')
  }, [nombre])  

  function handleModalDisplay(type) {
    if (modalDisplay === 'no-display') setModalDisplay('display')
    else setModalDisplay('no-display')
    setTipoRes(type)
  }

  if (!cargado) return (
  <div>
    <h1>Cargando...</h1>
  </div>
)

  else return (
  <div>
      <h1>{nombre}</h1>

      <div id='resueltos'>
        <Resueltos nombre='Primeros Parciales' tipoResuelto='primeros-parciales' handleModal={handleModalDisplay} resueltos={resueltosMateria}/>
        <Resueltos nombre='Segundos Parciales' tipoResuelto='segundos-parciales' handleModal={handleModalDisplay} resueltos={resueltosMateria}/>
        <Resueltos nombre='Finales' tipoResuelto='finales' handleModal={handleModalDisplay} resueltos={resueltosMateria}/>
        <Resueltos nombre='Guias Resueltas' tipoResuelto='guias-resueltas' handleModal={handleModalDisplay} resueltos={resueltosMateria}/>
        <Resueltos nombre='Apuntes y Clases' tipoResuelto='apuntes-clases' handleModal={handleModalDisplay} resueltos={resueltosMateria}/>
        <Resueltos nombre='Complementos' tipoResuelto='complementos' handleModal={handleModalDisplay} resueltos={resueltosMateria}/>
      </div>

      <Modal modalDisplay={modalDisplay} typeRef={tipoRes} nombreMateria={nombreMateria} setModalDisplay={setModalDisplay}/>

      <br/><br/><br/>
    </div>
  )
}
