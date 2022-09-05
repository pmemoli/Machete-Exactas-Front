import React, {useState, useEffect} from 'react'
import ModalLink from './ModalLink.js'
import ModalFile from './ModalFile.js'

export default function Modal({modalDisplay, typeRef, nombreMateria, setModalDisplay}) {
  const buttonWindow = (
    <div className='modal-buttons'>
      <div className='admin-buttons'>
        <button className='modal-button' onClick={e => {setWindow(fileWindow)}}>Subir Archivo</button>
        <button className='modal-button' onClick={e => {setWindow(linkWindow)}}>Subir Link</button>
      </div>
      <button className='modal-button' onClick={e => {setModalDisplay('no-display')}}>Cerrar</button>
    </div>
  )

  const linkWindow = <ModalLink modalDisplay={modalDisplay} typeRef={typeRef} nombreMateria={nombreMateria} setModalDisplay={setModalDisplay}/>
  const fileWindow = <ModalFile modalDisplay={modalDisplay} typeRef={typeRef} nombreMateria={nombreMateria} setModalDisplay={setModalDisplay}/>
  
  const [window, setWindow] = useState(buttonWindow)

  useEffect(() => {setWindow(buttonWindow)}, [modalDisplay])

  return (
    <div id='modal' className={modalDisplay}>
      {window}
    </div>
  )
}
