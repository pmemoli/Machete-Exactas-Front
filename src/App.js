import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import './assets/styles/app.scss'
import Navbar from './components/Navbar'
import Home from './pages/home/Home.js'
import Mate from './pages/mate/Mate.js'
import Fisica from './pages/fisica/Fisica.js'
import Compu from './pages/compu/Compu.js'
import Datos from './pages/datos/Datos.js'
import Instrucciones from './pages/instrucciones/Instrucciones.js'
import Fuentes from './pages/fuentes/Fuentes.js'
import axios from 'axios'

const backSource = ''

const axiosResueltos = axios.create({
  baseURL: `${backSource}/api/resueltos`
})

function App() {
  const [original, setOriginal] = useState(true)
  useEffect(() => {
    initialCall()
  }, [])

  // Sends an initial call to the api to reduce vercels cold start
  async function initialCall() {  
    try {
      const res = axiosResueltos.get('/por_materia/analisis_1')
    }

    catch(e) {console.log(e)}
  }

  return (
    <div style={{height: "max-content",}}>
      <Navbar setOriginal={setOriginal}/>
      <div id="content" style={{height: "max-content", position:"relative",}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/otras-fuentes" element={<Fuentes/>}/>
          <Route path="/instrucciones" element={<Instrucciones/>}/>

          <Route path="/mate" element={<Mate original={original} setOriginal={setOriginal}/>}/>
          <Route path="/mate/:materia" element={<Mate original={original} setOriginal={setOriginal}/>}/>

          <Route path="/compu" element={<Compu original={original} setOriginal={setOriginal}/>}/>
          <Route path="/compu/:materia" element={<Compu original={original} setOriginal={setOriginal}/>}/>

          <Route path="/datos" element={<Datos original={original} setOriginal={setOriginal}/>}/>
          <Route path="/datos/:materia" element={<Datos original={original} setOriginal={setOriginal}/>}/>

          <Route path="/fisica" element={<Fisica original={original} setOriginal={setOriginal}/>}/>
          <Route path="/fisica/:materia" element={<Fisica original={original} setOriginal={setOriginal} key='1'/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
