import React, {useRef} from 'react'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'

const backSource = ''

const axiosResueltos = axios.create({
  baseURL: `${backSource}/api/resueltos`
})

function validateLink(link) {
  const sources = ['imgur', 'drive.google.com/file', 'github', 'drive.google.com/drive/folders']
  const validSource = sources.some(source => (link.includes(source) && link.includes('https://')))
  const properLength = link.length < 340

  return validSource && properLength
}

export default function ModalLink({modalDisplay, typeRef, nombreMateria, setModalDisplay}) {
    const captchaResponse = useRef()
    const titleRef = useRef()
    const linkRef = useRef()
    const tipoResueltoRef = useRef()

    async function uploadLink() {
      try {
        const token = captchaResponse.current.getValue()
        const [title, link] = [titleRef.current.value, linkRef.current.value]

        if (token === '') {
          alert('Hay que llenar el captcha!')
          return
        }

        if (!(title !== '' && link !== '' && validateLink(link) && title.length < 140)) {
            alert('Link invalido. Tiene que empezar con https:// y ser de drive, github o imgur')
            return
        }

        console.log('here')
        const resuelto = {
            materia: nombreMateria,
            tipoResuelto: tipoResueltoRef.current.value,
            nombre: title,
            link: link,
            archivo: false,
        }

        const res = await axiosResueltos.post(`/${token}`, resuelto)
        
        if (res.data.message === 'Posted') {
            console.log(`Uploaded ${title}`)
            setModalDisplay('no-display')
            alert('Se subio correctamente!')
            captchaResponse.current.reset()
        }

        else if (res.data.message === 'Demasiados resueltos para moderar') {
          alert('Hay demasiados resueltos para moderar, probar en otro momento.')
        }

        else if (res.data.message === 'Failed Captcha') {
          alert('Fallo en validarse el captcha. Si tocaste "subir resuelto" muchas veces puede haberlo rechazado por spam. Proba cerrar la pestaña y reintentar.')
        }
          
      }
  
      catch(err) {
        console.log(err)
      }
    }
    
    return (
      <div className={modalDisplay}>
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
              <select name="tipo" id="tipo-res" value={typeRef} ref={tipoResueltoRef}>
                <option value="primeros-parciales">Primeros Parciales</option>
                <option value="segundos-parciales">Segundos Parciales</option>
                <option value="finales">Finales</option>
                <option value="guias-resueltas">Guias Resueltas</option>
                <option value="apuntes-clases">Apuntes y Clases</option>
                <option value="complementos">Complementos</option>
              </select>
            </label>
          </div>
  
          Se pueden subir links de drive, imgur o github. (Empezando con https)<br/>
          Pasar en el nombre cuatrimestre y año del examen.<br/>
  
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
