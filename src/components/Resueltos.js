import React from 'react'

export default function Resueltos({nombre, tipoResuelto, handleModal, resueltos}) {
  return (
    <div className='section'>
        <div className='tipo-resuelto'>
            <h2>{nombre}</h2>
            <button className='upload-button' onClick={() => {handleModal(tipoResuelto)}}>Subir</button>
        </div>
        <ul className='items-resueltos'>
            {resueltos.filter(resuelto => resuelto.tipoResuelto === tipoResuelto).map(
                resuelto => (
                <li>
                    <a className='item-resuelto' href={resuelto.link} target='_blank' rel='noreferrer'>{resuelto.nombre}</a>
                </li>
                )
            )}
        </ul>
  </div>
  )
}
