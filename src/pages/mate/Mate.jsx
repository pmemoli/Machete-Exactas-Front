import React, { useState } from 'react';
import '../../assets/styles/components.scss';
import '../../assets/styles/mate.scss';
import Sidebar from '../../components/Sidebar';
import Materia from '../../components/Materia';
import planA from '../../assets/images/plan-aplicada-transp-3.png';
import planP from '../../assets/images/plan-pura-transp.png';
import { useParams } from 'react-router-dom';

function Welcome() {
    return (
        <div className="content">
            <h1>Matematica</h1>
            <p>
                Material para ambas orientaciones de la carrera de Ciencias
                Matematicas. Aca esta la{' '}
                <a
                    href="https://cms.dm.uba.ar/academico/materias/"
                    target="_blank"
                >
                    pagina de la carrera
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

            <div className="planes">
                <img src={planP} />
                <img src={planA} />
            </div>
        </div>
    );
}

export default function Mate({ resueltos, cargado }) {
    const { materia } = useParams();

    const materias = [
        'Analisis 1',
        'Algebra 1',
        'Taller de Calculo Avanzado',
        'Algebra Lineal',
        'Analisis 2',
        'Calculo Avanzado',
        'Calculo numerico',
        'Probabilidad y Estadistica (M)',
        'Analisis Complejo',
        'Analisis Real',
        'Algebra 2',
        'Topologia',
        'Geometria Proyectiva',
        'Analisis Funcional',
        'Geometria Diferencial',
        'Ecuaciones Diferenciales',
        'Algebra 3',
        'Intro. a la Computacion',
        'Estadistica',
        'Inv. Operativa',
        'Temas de Fisica',
        'Optimizacion',
        'Analisis Numerico',
    ];

    function renderContent() {
        if (materia === undefined) return <Welcome />;
        else
            return (
                <Materia
                    nombre={materia}
                    resueltos={resueltos}
                    cargado={cargado}
                />
            );
    }

    return (
        <div id="mate">
            {renderContent()}
            <Sidebar materias={materias} carrera="mate" />
        </div>
    );
}
