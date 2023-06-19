import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import './assets/styles/app.scss'
import Navbar from './components/Navbar'
import Home from './pages/home/Home.js'
import Mate from './pages/mate/Mate.js'
import Fisica from './pages/fisica/Fisica.js'
import Compu from './pages/compu/Compu.js'
import Datos from './pages/datos/Datos.js'
import Cbc from './pages/cbc/Cbc'
import Instrucciones from './pages/instrucciones/Instrucciones.js'
import Fuentes from './pages/fuentes/Fuentes.js'
import axios from 'axios'
import Footer from './components/Footer'

const backSource = ''

const axiosResueltos = axios.create({
  baseURL: `${backSource}/api/resueltos`
})

function App() {
  const [original, setOriginal] = useState(true)
  const [resueltos, setResueltos] = useState([])
  const [cargado, setCargado] = useState(false)

  useEffect(() => {
    initialCall()
  }, [])

  // Carga todos los resueltos de una
  async function initialCall() {  
    try {
      const res = await axiosResueltos.get('/')
      setResueltos(res.data)
      setCargado(true)
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

          <Route path="/mate" element={<Mate resueltos={resueltos} cargado={cargado}/>}/>
          <Route path="/mate/:materia" element={<Mate resueltos={resueltos} cargado={cargado}/>}/>

          <Route path="/compu" element={<Compu resueltos={resueltos} cargado={cargado}/>}/>
          <Route path="/compu/:materia" element={<Compu resueltos={resueltos} cargado={cargado}/>}/>

          <Route path="/datos" element={<Datos resueltos={resueltos} cargado={cargado}/>}/>
          <Route path="/datos/:materia" element={<Datos resueltos={resueltos} cargado={cargado}/>}/>

          <Route path="/fisica" element={<Fisica resueltos={resueltos} cargado={cargado}/>}/>
          <Route path="/fisica/:materia" element={<Fisica resueltos={resueltos} cargado={cargado}/>}/>

          <Route path="/cbc" element={<Cbc resueltos={resueltos} cargado={cargado}/>}/>
          <Route path="/cbc/:materia" element={<Cbc resueltos={resueltos} cargado={cargado}/>}/>
        </Routes>
      </div>

      <Footer/>
    </div>
  )
}

export default App;
