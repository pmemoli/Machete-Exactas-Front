import React, {useState, useRef, useEffect} from 'react'
import axios from 'axios'
import Resueltos from './Resueltos.js'
import Modal from './Modal.js'
import '../assets/styles/materia.scss'

const axiosResueltos = axios.create({
  baseURL: 'http://localhost:5000/api/resueltos'
})

export default function Materia({nombre, carrera}) {
  const [modalDisplay, setModalDisplay] = useState('no-display')
  const [resueltos, setResueltos] = useState([])
  const typeRef = useRef()

  if (nombre == 'Matematica 1' || nombre == 'Analisis 2 (C)') nombre = 'Analisis 1'
  if (nombre == 'Matematica 3') nombre = 'Analisis 2'
  if (nombre == 'Probabilidad') nombre = 'Probabilidad Y Estadistica (M)'
  if (nombre == 'Intr. a la Est. y Cs. de Datos') nombre = 'Estadistica'
  if (nombre == 'Intr. a la Inv. Oper. y Opt.') nombre = 'Inv. Operativa'
  
 
  const nombreMateria = nombre.replaceAll(' ', '_').toLowerCase()

  useEffect(() => {loadResueltos()}, [nombre])

  async function loadResueltos() {
    try {
        const newResueltos = await axiosResueltos.get(`/por_materia/${nombreMateria}`)
        setResueltos(newResueltos.data.filter(resuelto => resuelto.accepted === 1))
        console.log(resueltos)
    }
    catch(err) {
        console.log(err)
    }
  }

  function handleModalDisplay(type) {
    if (modalDisplay === 'no-display') setModalDisplay('display')
    else setModalDisplay('no-display')
    typeRef.current.value = type
  }

  return (
  <div>
      <h1>{nombre}</h1>

      <div id='resueltos'>
        <Resueltos nombre='Primeros Parciales' tipoResuelto='primeros-parciales' handleModal={handleModalDisplay} resueltos={resueltos}/>
        <Resueltos nombre='Segundos Parciales' tipoResuelto='segundos-parciales' handleModal={handleModalDisplay} resueltos={resueltos}/>
        <Resueltos nombre='Finales' tipoResuelto='finales' handleModal={handleModalDisplay} resueltos={resueltos}/>
        <Resueltos nombre='Guias Resueltas' tipoResuelto='guias-resueltas' handleModal={handleModalDisplay} resueltos={resueltos}/>
        <Resueltos nombre='Apuntes y Clases' tipoResuelto='apuntes-clases' handleModal={handleModalDisplay} resueltos={resueltos}/>
        <Resueltos nombre='Complementos' tipoResuelto='complementos' handleModal={handleModalDisplay} resueltos={resueltos}/>
      </div>

      <Modal modalDisplay={modalDisplay} typeRef={typeRef} nombreMateria={nombreMateria} setModalDisplay={setModalDisplay}/>
      <br/><br/><br/>
    </div>
  )
}
