import React, { useState } from 'react';
import '../../assets/styles/components.scss';
import '../../assets/styles/fisica.scss';
import plan from '../../assets/images/plan-fisica.png';
import Sidebar from '../../components/Sidebar';
import Materia from '../../components/Materia';
import { useParams } from 'react-router-dom';

function Welcome() {
    return (
        <div className="content">
            <h1>Fisica</h1>
            <p>
                Material para la carrera de Ciencias Fisicas. Aca esta la{' '}
                <a
                    href="https://www.df.uba.ar/es/docentes/paginas-de-materias"
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
            <img src={plan} />
        </div>
    );
}

export default function Fisica({ resueltos, cargado }) {
    const { materia } = useParams();

    const materias = [
        'Fisica 1',
        'Matematica 1',
        'Laboratorio 1',
        'Fisica 2',
        'Matematica 2',
        'Matematica 3',
        'Laboratorio 2',
        'Calculo Numerico',
        'Fisica 3',
        'Matematica 4',
        'Laboratorio 3',
        'Fisica 4',
        'Mecanica Clasica',
        'Fisica Teorica 1',
        'Laboratorio 4',
        'Fisica Teorica 2',
        'Fisica Teorica 3',
        'Laboratorio 5',
        'Estructura 1',
        'Estructura 2',
        'Laboratorio 6',
        'Laboratorio 7',
        'Estructura 3',
        'Estructura 4',
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
        <div id="fisica">
            {renderContent()}
            <Sidebar materias={materias} carrera="fisica" />
        </div>
    );
}
