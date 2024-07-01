import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/styles/components.scss';
import '../../assets/styles/datos.scss';
import Sidebar from '../../components/layout/Sidebar';
import Materia from '../../components/Materia';
import Welcome from '../../components/Welcome';
import { nodes, edges } from './data';
import { GraficoPlan } from '../../components/GraficoPlan';
import PlanDatos from '../../assets/images/plan-datos.png'

export default function Datos({ resueltos, cargado }) {
    const { materia } = useParams();

    const materias = [
        'Análisis 1',
        'Álgebra 1',
        'Algoritmos 1',
        'Análisis 2',
        'Algoritmos 2',
        'Análisis Avanzado',
        'Álg. Lineal Computacional',
        'Laboratorio de Datos',
        'Probabilidad',
        'Algoritmos 3',
        'Intr. al Modelado Contínuo',
        'Intr. a la Est. y Cs. de Datos',
        'Intr. a la Inv. Oper. y Opt.',
    ];

    return (
        <div id="datos">
            {!materia ? (
                <Welcome>
                    <h1>Datos</h1>
                    <p>
                        Material para la carrera de Ciencia de Datos. Acá está
                        la{' '}
                        <a href="https://lcd.exactas.uba.ar/" target="_blank">
                            página de la carrera
                        </a>{' '}
                        y un{' '}
                        <a
                            href="https://visualizador-encuestas.exactas.uba.ar/index.html"
                            target="_blank"
                        >
                            visualizador de encuestas
                        </a>
                        . Muchas materias se dan tambien en el{' '}
                        <a
                            href="https://ic.fcen.uba.ar/actividades-academicas/formacion/materias"
                            target="_blank"
                        >
                            instituto de calculo
                        </a>
                        .
                    </p>
                    <br />

                    <GraficoPlan picture={PlanDatos} nodes={nodes} edges={edges} />
                </Welcome>
            ) : (
                <Materia
                    nombre={materia}
                    resueltos={resueltos}
                    cargado={cargado}
                />
            )}
            <Sidebar materias={materias} carrera="datos" />
        </div>
    );
}
