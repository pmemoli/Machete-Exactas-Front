import React, { useState } from 'react';
import '../../assets/styles/components.scss';
import '../../assets/styles/compu.scss';
import Sidebar from '../../components/Sidebar';
import Materia from '../../components/Materia';
import { useParams } from 'react-router-dom';
import { materiasViejo } from './data_viejo';
import { materiasNuevo } from './data_nuevo';
import { nodes, edges } from './data_viejo';
import CareerMap from '../../components/CareerMap/CareerMap';
import { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';

function Welcome({ planEstudios, setPlanEstudios }) {
    const opuesto = planEstudios === 'nuevo' ? 'viejo' : 'nuevo';

    return (
        <div className="content">
            <div id="header-compu">
                <h1>Computación</h1>
                <button onClick={() => setPlanEstudios(opuesto)}>
                    Cambiar al plan {opuesto}
                </button>
            </div>
            <p>
                Material para la carrera de Ciencias de la Computación. Acá está
                la{' '}
                <a href="https://computacion.dc.uba.ar/" target="_blank">
                    página de la carrera
                </a>{' '}
                y un{' '}
                <a
                    href="https://visualizador-encuestas.exactas.uba.ar/index.html"
                    target="_blank"
                >
                    visualizador de encuestas
                </a>
                . En{' '}
                <a
                    href="https://docs.google.com/document/d/e/2PACX-1vSlD-djaJcnw45-41ugO5yGqNl5hA_dKOAikyRDAh5QzsrToBi2XWPzU1i0ldDAbNct0rx2AfhuBf19/pub"
                    targe="_blank"
                >
                    esta página
                </a>{' '}
                hay mucha información del nuevo plan.
            </p>
            <ReactFlowProvider>
                <CareerMap initialNodes={nodes} initialEdges={edges} />
            </ReactFlowProvider>
        </div>
    );
}

export default function Compu({ resueltos, cargado }) {
    const [planEstudios, setPlanEstudios] = useState('viejo');
    const { materia } = useParams();

    return (
        <div id="compu" style={{ height: 'max-content' }}>
            {!materia ? (
                <Welcome
                    planEstudios={planEstudios}
                    setPlanEstudios={setPlanEstudios}
                />
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
