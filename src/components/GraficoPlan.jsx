import { useState, useEffect } from 'react'
import {GraphMap} from './CareerMap/GraphMap'
import '../assets/styles/graficoplan.scss';

export function GraficoPlan({ picture, nodes, edges, subtitle=''}) {
const startsMobile = window.innerWidth < 720
const [mostrarFoto, setMostrarFoto] = useState(startsMobile)
const [isMobile, setIsMobile] = useState(startsMobile)

const handleResize = () => {
  if (window.innerWidth < 720) setIsMobile(true)
  else setIsMobile(false)
}

useEffect(() => window.addEventListener("resize", handleResize), [])

return (
    <div>
	<div id='header-grafico'>
            <h2>Plan de estudios sugerido {subtitle}</h2>
	    <button onClick={() => setMostrarFoto(!mostrarFoto)} hidden={isMobile}>
		Ver plan como {mostrarFoto ? 'grafo interactivo' : 'foto'}
	    </button>
	</div>

	{(mostrarFoto || isMobile) ? 
	    <img src={picture}/> :
	    <GraphMap nodes={nodes} edges={edges} />
	}
    </div>
)
}

