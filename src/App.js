import React, {useState} from 'react';
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

function App() {
  const [original, setOriginal] = useState(true)

  return (
    <div style={{height: "max-content",}}>
      <Navbar setOriginal={setOriginal}/>
      <div id="content" style={{height: "max-content", position:"relative",}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/otras-fuentes" element={<Fuentes/>}/>
          <Route path="/instrucciones" element={<Instrucciones/>}/>
          <Route path="/mate" element={<Mate original={original} setOriginal={setOriginal}/>}/>
          <Route path="/compu" element={<Compu original={original} setOriginal={setOriginal}/>}/>
          <Route path="/datos" element={<Datos original={original} setOriginal={setOriginal}/>}/>
          <Route path="/fisica" element={<Fisica original={original} setOriginal={setOriginal}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
