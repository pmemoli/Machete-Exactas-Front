import React from 'react';
import '../../assets/styles/components.scss';
import '../../assets/styles/mate.scss';
import Sidebar from '../../components/layout/Sidebar';
import Materia from '../../components/Materia';
import PlanAplicada from '../../assets/images/plan-aplicada.png';
import PlanPura from '../../assets/images/plan-pura.png';
import { useParams } from 'react-router-dom';
import Welcome from '../../components/Welcome';
import dataPura from './data_pura';
import dataAplicada from './data_aplicada';
import { GraficoPlan } from '../../components/GraficoPlan';

export default function Mate({ resueltos, cargado }) {
    const { materia } = useParams();

    const materias = [
        'Análisis 1',
        'Álgebra 1',
        'Taller de Cálculo Avanzado',
        'Álgebra Lineal',
        'Análisis 2',
        'Cálculo Avanzado',
        'Cálculo Numérico',
        'Probabilidad y Estadística (M)',
        'Análisis Complejo',
        'Análisis Real',
        'Álgebra 2',
        'Topología',
        'Geometría Proyectiva',
        'Análisis Funcional',
        'Geometría Diferencial',
        'Ecuaciones Diferenciales',
        'Álgebra 3',
        'Intro. a la Computación',
        'Estadística',
        'Inv. Operativa',
        'Temas de Física',
        'Optimización',
        'Análisis Numérico',
    ];
    return (
        <div id="mate">
            {!materia ? (
                <Welcome>
                    <h1>Matemática</h1>
                    <p style={{textIndent: 0}}>
                        Material para ambas orientaciones de la carrera de
                        Ciencias Matemáticas. Acá está la{' '}
                        <a
                            href="https://cms.dm.uba.ar/academico/materias/"
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
                        . Muchas materias se dan en el{' '}
                        <a
                            href="https://ic.fcen.uba.ar/actividades-academicas/formacion/materias"
                            target="_blank"
                        >
                            instituto de calculo
                        </a>
                        .
                    </p>

                    <br />

                    <GraficoPlan
		        picture={PlanPura}
		        nodes={dataPura.nodes}
  			edges={dataPura.edges}
		    	subtitle='(pura)'
		    />

                    <br />

                    <GraficoPlan
		        picture={PlanAplicada}
		        nodes={dataAplicada.nodes}
  			edges={dataAplicada.edges}
		    	subtitle='(aplicada)'
		    />
                </Welcome>
            ) : (
                <Materia
                    nombre={materia}
                    resueltos={resueltos}
                    cargado={cargado}
                />
            )}
            <Sidebar materias={materias} carrera="mate" />
        </div>
    );
}
