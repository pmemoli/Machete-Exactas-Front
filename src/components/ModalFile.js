import React, {useState, useRef} from 'react'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'

const backSource = ''

const axiosResueltos = axios.create({
  baseURL: `${backSource}/api/resueltos`
})

export default function ModalFile({modalDisplay, typeRef, nombreMateria, setModalDisplay}) {
    const [file, setFile] = useState('None')
    const captchaResponse = useRef()
    const fileRef = useRef()
    const tipoResueltoRef = useRef()
    
    async function uploadFile() {
        if (file === 'None') {
          alert('No se subio ningun archivo')
          return
        }

        if (file.size > 10 * 1024 * 1024) {
          alert('Archivo mayor a 10mb')
          return
        }
        
        const token = captchaResponse.current.getValue()
        const bodyFormData = new FormData()
        bodyFormData.append('nombre', file.name)
        bodyFormData.append('materia', nombreMateria)
        bodyFormData.append('tipoResuelto', tipoResueltoRef.current.value)
        bodyFormData.append('archivo', true)
        bodyFormData.append('mimeType', file.type)
        bodyFormData.append('stream', file)

        const res = await axiosResueltos.post(`/${token}/uploadFile`, bodyFormData, {headers: {"Content-Type": "multipart/form-data"}})
        console.log(res)
        if (res.data.message === 'Posted') {
            console.log(`Uploaded ${file.title}`)
            alert('Se subio correctamente!')
            setModalDisplay('no-display')
            captchaResponse.current.reset()
        }

        else if (res.data.message === 'Demasiados resueltos para moderar') {
          alert('Hay demasiados resueltos para moderar, probar en otro momento.')
        }

        else if (res.data.message === 'Failed Captcha') {
          alert('Fallo en validarse el captcha. Si tocaste "subir resuelto" muchas veces puede haberlo rechazado por spam. Proba cerrar la pestaña y reintentar.')
        }
    }
    
    return (
      <div className={modalDisplay}>
        <div id='modal-file'>
          <div className='upload-content'>
            
          </div>
          <input className='file-input' type='file' accept=".jpg, .png, .pdf" select={fileRef} onChange={e => {setFile(e.target.files[0])}}/>

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

          Se pueden subir archivos pdf, jpg o png de hasta 10mb. <br/>
          Pasar en el nombre cuatrimestre y año del examen.
  
          <div className='upload-area'>
            <div id='captcha'>
              <ReCAPTCHA sitekey='6LcCCnAhAAAAANi37e672XJb1jTMB_O_y5-6Xax-' ref={captchaResponse}/>
            </div>

            <button className='button-top' onClick={uploadFile}>Subir resuelto</button>
            <button onClick={() => {setModalDisplay('no-display')}}>Cerrar</button>
          </div>
        </div>
      </div>
    )
}
