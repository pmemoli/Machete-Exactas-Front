import React from 'react'
import '../assets/styles/components.scss'
import shell from '../assets/images/shell.png'

export default function Footer() {
  return (
    <footer id='footer'>
      <hr/>
      <div className='content'>
        <div className='useful-links'>
            <a className='useful-link' href='./'>Contacto</a>
            <a className='useful-link' href='./'>Github</a>
        </div>
        <div className='basados'>
            <img src={shell} alt='shell'/>
        </div>
      </div>
    </footer>
  )
}
