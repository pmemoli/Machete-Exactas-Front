import React, { useState } from 'react';
import '../../assets/styles/components.scss';
import '../../assets/styles/fisica.scss';
import Sidebar from '../../components/layout/Sidebar';
import Materia from '../../components/Materia';
import { useParams } from 'react-router-dom';
import { nodes, edges } from './data';
import Welcome from '../../components/Welcome';
import { GraficoPlan } from '../../components/GraficoPlan';
import PlanFisica from '../../assets/images/plan-fisica.png'

export default function Fisica({ resueltos, cargado }) {
    const { materia } = useParams();

    const materias = [
        'Física 1',
        'Matemática 1',
        'Laboratorio 1',
        'Física 2',
        'Matemática 2',
        'Matemática 3',
        'Laboratorio 2',
        'Calculo Numérico',
        'Física 3',
        'Matemática 4',
        'Laboratorio 3',
        'Física 4',
        'Mecánica Clásica',
        'Física Teórica 1',
        'Laboratorio 4',
        'Física Teórica 2',
        'Física Teórica 3',
        'Laboratorio 5',
        'Estructura 1',
        'Estructura 2',
        'Laboratorio 6',
        'Laboratorio 7',
        'Estructura 3',
        'Estructura 4',
    ];

    return (
        <div id="fisica">
            {!materia ? (
                <Welcome>
                    <h1>Física</h1>
                    <p>
                        Material para la carrera de Ciencias Físicas. Acá está
                        la{' '}
                        <a
                            href="https://www.df.uba.ar/es/docentes/paginas-de-materias"
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
                    <GraficoPlan picture={PlanFisica} nodes={nodes} edges={edges} />
                </Welcome>
            ) : (
                <Materia
                    nombre={materia}
                    resueltos={resueltos}
                    cargado={cargado}
                />
            )}
            <Sidebar materias={materias} carrera="fisica" />
        </div>
    );
}
