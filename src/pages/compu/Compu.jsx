import React, { useState } from 'react';
import '../../assets/styles/components.scss';
import '../../assets/styles/compu.scss';
import Sidebar from '../../components/layout/Sidebar';
import Materia from '../../components/Materia';
import { useParams } from 'react-router-dom';
import { materiasViejo, nodesViejo, edgesViejo } from './data_viejo';
import { materiasNuevo, nodesNuevo, edgesNuevo } from './data_nuevo';
import Welcome from '../../components/Welcome';
import { GraphMap } from '../../components/CareerMap/GraphMap';

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
                            href="https://computacion.dc.uba.ar/"
                            target="_blank"
                        >
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
                    <br />
                    <h2>Plan de estudios sugerido</h2>
                    <GraphMap
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
