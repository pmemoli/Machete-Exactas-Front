import React from 'react'
import '../assets/styles/components.scss'

export default function Footer() {
  return (
    <footer id='footer'>
      <hr/>
      <div className='content'>
        <div className='useful-links'>
          <a className='useful-link' href='https://github.com/pmemoli/Machete-Exactas-Front' target='_blank' rel="noreferrer">
            <img style={{width: '20px', margin: '3px'}} src={require('../assets/images/github-icon.png')}></img>
          </a>
        </div>
      </div>
    </footer>
  )
}
