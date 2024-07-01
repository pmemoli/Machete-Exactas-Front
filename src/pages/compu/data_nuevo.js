import { MarkerType } from 'reactflow';
const position = { x: 0, y: 0 };
const style = {
    strokeWidth: 2,
    stroke: '#545350',
};

export const materiasNuevo = [
    'Intro. a la Programación',
    'Álgebra 1',
    'Algoritmos y Estructuras de Datos',
    'Análisis 1',
    'Paradigmas de Prog. (N)',
    'Técnicas de Diseño de Algoritmos',
    'Sistemas Digitales',
    'Lenguajes Formales',
    'Arquitectura y Organización',
    'Álgebra Lineal Comp. (C)',
    'Complejidad Computacional',
    'Sistemas Operativos (N)',
    'Estadística Computacional',
    'Almacenamiento y recuperación de información',
    'Programación Concurrente y Paralela',
    'Redes de Comunicaciones',
];

export const nodesNuevo = [
    {
        id: 'cbc',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#D9B600',
            label: 'CBC',
        },
        position,
    },
    {
        id: 'analisis',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Análisis I (10hs)',
        },
        position,
    },
    {
        id: 'algebra',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Álgebra I (10hs)',
        },
        position,
    },
    {
        id: 'intro',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Introducción a la Programación (10hs)',
        },
        position,
    },
    {
        id: 'algo',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Algorítmos y Estructuras de Datos (15hs)',
        },
        position,
    },
    {
        id: 'disenio',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Técnicas de Diseño de Algoritmos (10hs)',
        },
        position,
    },
    {
        id: 'digitales',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Sistemas Digitales (5hs)',
        },
        position,
    },
    {
        id: 'arq',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Arquitectura y Organización de Computadores (10hs)',
        },
        position,
    },
    {
        id: 'complejidad',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Complejidad Computacional (5hs)',
        },
        position,
    },
    {
        id: 'sistemas',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Sistemas Operativos (10hs)',
        },
        position,
    },
    {
        id: 'lenguajes',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Lenguajes Formales, Autómatas y Computabilidad (10hs)',
        },
        position,
    },
    {
        id: 'alc',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Álgebra Lineal Computacional (10hs)',
        },
        position,
    },
    {
        id: 'estadistica',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Estadística Computacional (10hs)',
        },
        position,
    },
    {
        id: 'inge',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Ingeniería de Software',
        },
        position,
    },
    {
        id: 'redes',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Redes de Comunicaciones y Cómputo Distribuído (10hs)',
        },
        position,
    },
    {
        id: 'plp',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Paradigmas de Programación',
        },
        position,
    },
    {
        id: 'almacenamiento',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Almacenamiento y Recuperación de la Información (10hs)',
        },
        position,
    },
    {
        id: 'concurrente',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Programación Concurrente y Paralela (10hs)',
        },
        position,
    },
];

export const edgesNuevo = [
    {
        id: 'cbc-intro',
        source: 'cbc',
        target: 'intro',
        style,
    },
    {
        id: 'cbc-algebra',
        source: 'cbc',
        target: 'algebra',
        style,
    },
    {
        id: 'cbc-analisis',
        source: 'cbc',
        target: 'analisis',
        style,
    },
    {
        id: 'intro-algo',
        source: 'intro',
        target: 'algo',
        style,
    },
    {
        id: 'algebra-algo',
        source: 'algebra',
        target: 'algo',
        style,
    },
    {
        id: 'algebra-alc',
        source: 'algebra',
        target: 'alc',
        style,
    },
    {
        id: 'intro-digitales',
        source: 'intro',
        target: 'digitales',
        style,
    },
    {
        id: 'intro-alc',
        source: 'intro',
        target: 'alc',
        style,
    },
    {
        id: 'algo-disenio',
        source: 'algo',
        target: 'disenio',
        style,
    },
    {
        id: 'algo-plp',
        source: 'algo',
        target: 'plp',
        style,
    },
    {
        id: 'algo-lenguajes',
        source: 'algo',
        target: 'lenguajes',
        style,
    },
    {
        id: 'analisis-estadistica',
        source: 'analisis',
        target: 'estadistica',
        style,
    },
    {
        id: 'alc-estadistica',
        source: 'alc',
        target: 'estadistica',
        style,
    },
    {
        id: 'digitales-arq',
        source: 'digitales',
        target: 'arq',
        style,
    },
    {
        id: 'arq-sistemas',
        source: 'arq',
        target: 'sistemas',
        style,
    },
    {
        id: 'sistemas-concurrente',
        source: 'sistemas',
        target: 'concurrente',
        style,
    },
    {
        id: 'sistemas-redes',
        source: 'sistemas',
        target: 'redes',
        style,
    },
    {
        id: 'estadiatica-redes',
        source: 'estadistica',
        target: 'redes',
        style,
    },
    {
        id: 'plp-concurrente',
        source: 'plp',
        target: 'concurrente',
        style,
    },
    {
        id: 'lenguajes-complejidad',
        source: 'lenguajes',
        target: 'complejidad',
        style,
    },
    {
        id: 'disenio-complejidad',
        source: 'disenio',
        target: 'complejidad',
        style,
    },
    {
        id: 'disenio-redes',
        source: 'disenio',
        target: 'redes',
        style,
    },
    {
        id: 'plp-inge',
        source: 'plp',
        target: 'inge',
        style,
    },
    {
        id: 'inge-almacenamiento',
        source: 'inge',
        target: 'almacenamiento',
        style,
    },
];
