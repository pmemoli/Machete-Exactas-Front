import React, {useRef} from 'react'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'

const axiosResueltos = axios.create({
  baseURL: 'https://machete-exactas-back.vercel.app/api/resueltos'
})

function validateLink(link) {
  const sources = ['imgur', 'drive.google.com/file', 'github']
  const validSource = sources.some(source => (link.includes(source) && link.includes('https://')))
  const properLength = link.length < 340

  return validSource && properLength
}

export default function Modal({modalDisplay, typeRef, nombreMateria, setModalDisplay}) {
  const captchaResponse = useRef()
  const titleRef = useRef()
  const linkRef = useRef()

  async function uploadLink() {
    try {
      const token = captchaResponse.current.getValue()
      const [title, link] = [titleRef.current.value, linkRef.current.value]
      
      if (title !== '' && link !== '' && validateLink(link) && title.length < 140) {
        console.log('here')
        const resuelto = {
          materia: nombreMateria,
          tipoResuelto: typeRef.current.value,
          nombre: title,
          link: link,
          accepted: 0,
        }
        const res = await axiosResueltos.post(`/${token}`, resuelto)
        
        if (res.data.message === 'Posted') {
          console.log(`Uploaded ${title}`)
          setModalDisplay('no-display')
          captchaResponse.current.reset()
        }
        else console.log('Not human!')
      }
    }
    catch(err) {
      console.log(err)
    }
  }
  
  return (
    <div id='modal' className={modalDisplay}>
      <div>
        <div className='upload-content'>
          <label for='nombre'>
            Nombre: &nbsp;
            <input id='nombre' ref={titleRef}/>
          </label>

          <label for='link'>
            Link: &nbsp;
            <input id='link' ref={linkRef}/>
          </label>

          <label for="tipo-res">Tipo de resuelto: &nbsp;
            <select name="tipo" id="tipo-res" ref={typeRef}>
              <option value="primeros-parciales">Primeros Parciales</option>
              <option value="segundos-parciales">Segundos Parciales</option>
              <option value="finales">Finales</option>
              <option value="guias-resueltas">Guias Resueltas</option>
              <option value="apuntes-clases">Apuntes y Clases</option>
              <option value="complementos">Complementos</option>
            </select>
          </label>
        </div>

        Se pueden pasar pdfs e imagenes de drive, links de imgur y github. 
        <br/>(Deben contener https://). <br/> En el futuro se va a poder subir archivos
        directamente.<br/> Pasar en el nombre cuatrimestre y año del examen.<br/>

        <a className='instructions' href='/instrucciones' target='_blank'> 
        Ver como conseguir link de archivo en drive.</a> <br/>

        <div className='upload-area'>
          <div id='captcha'>
            <ReCAPTCHA sitekey='6LcCCnAhAAAAANi37e672XJb1jTMB_O_y5-6Xax-' ref={captchaResponse}/>
          </div>
          <button className='button-top' onClick={uploadLink}>Subir resuelto</button>
          <button onClick={() => {setModalDisplay('no-display')}}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}
