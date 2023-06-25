import React, { useState } from 'react';
import '../../assets/styles/components.scss';
import '../../assets/styles/datos.scss';
import plan from '../../assets/images/plan-datos.png';
import Sidebar from '../../components/Sidebar.jsx';
import Materia from '../../components/Materia.jsx';
import { useParams } from 'react-router-dom';

function Welcome() {
    return (
        <div className="content">
            <h1>Datos</h1>
            <p>
                Material para la carrera de Ciencia de Datos. Aca esta la{' '}
                <a href="https://lcd.exactas.uba.ar/" target="_blank">
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
            <img src={plan} />
        </div>
    );
}

export default function Datos({ resueltos, cargado }) {
    const { materia } = useParams();

    const materias = [
        'Analisis 1',
        'Algebra 1',
        'Algoritmos 1',
        'Analisis 2',
        'Algoritmos 2',
        'Analisis Avanzado',
        'Alg. Lineal Computacional',
        'Laboratorio de Datos',
        'Probabilidad',
        'Algoritmos 3',
        'Intr. al Modelado Continuo',
        'Intr. a la Est. y Cs. de Datos',
        'Intr. a la Inv. Oper. y Opt.',
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
        <div id="datos">
            {renderContent()}
            <Sidebar materias={materias} carrera="datos" />
        </div>
    );
}
