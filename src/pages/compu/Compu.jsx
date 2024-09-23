import React, { useState } from 'react';
import '../../assets/styles/components.scss';
import '../../assets/styles/compu.scss';
import Sidebar from '../../components/layout/Sidebar';
import Materia from '../../components/Materia';
import { useParams } from 'react-router-dom';
import { materiasViejo, nodesViejo, edgesViejo } from './data_viejo';
import { materiasNuevo, nodesNuevo, edgesNuevo } from './data_nuevo';
import Welcome from '../../components/Welcome';
import { GraficoPlan } from '../../components/GraficoPlan';
import PlanViejo from '../../assets/images/plan-compu-viejo.png'
import PlanNuevo from '../../assets/images/plan-compu-nuevo.png'

export default function Compu({ resueltos, cargado }) {
    const [planEstudios, setPlanEstudios] = useState('nuevo');
    const { materia } = useParams();
    const opuesto = planEstudios === 'nuevo' ? 'viejo' : 'nuevo';

    return (
        <div id="compu" style={{ height: 'max-content' }}>
            {!materia ? (
                <Welcome>
                    <div id="header-compu">
                        <h1>Computación</h1>
                        <button onClick={() => setPlanEstudios(opuesto)}>
                            Cambiar al plan {opuesto}
                        </button>
                    </div>
                    <p>
                        Material para la carrera de Ciencias de la Computación.
                        Acá está la{' '}
                        <a
                            href="https://www.dc.uba.ar/cursada-de-grado/"
                            target="_blank"
                        >
                            página oficial de materias
                        </a>{' '}
                        y un{' '}
                        <a
                            href="https://visualizador-encuestas.exactas.uba.ar/index.html"
                            target="_blank"
                        >
                            visualizador de encuestas
                        </a>
                        .  
                    </p>
                    <br />
                    <GraficoPlan 
		        picture={
                            planEstudios === 'nuevo' ? PlanNuevo : PlanViejo 
			} 
                        nodes={
                            planEstudios === 'nuevo' ? nodesNuevo : nodesViejo
                        }
                        edges={
                            planEstudios === 'nuevo' ? edgesNuevo : edgesViejo
                        }
                    />
                </Welcome>
            ) : (
                <Materia
                    nombre={materia}
                    resueltos={resueltos}
                    cargado={cargado}
                />
            )}
            <Sidebar
                materias={
                    planEstudios === 'viejo' ? materiasViejo : materiasNuevo
                }
                carrera="compu"
            />
        </div>
    );
}
