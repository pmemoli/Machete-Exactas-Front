import { MarkerType } from 'reactflow';
const position = { x: 0, y: 0 };
const markerEnd = { type: MarkerType.Arrow };

export const nodes = [
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
        id: 'analisis1',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Análisis I',
        },
        position,
    },
    {
        id: 'algebra',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Álgebra I',
        },
        position,
    },
    {
        id: 'algo1',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Algoritmos y Estructuras de Datos I',
        },
        position,
    },
    {
        id: 'algo2',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Algoritmos y Estructuras de Datos II',
        },
        position,
    },
    {
        id: 'algo3',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Algoritmos y Estructuras de Datos II',
        },
        position,
    },
    {
        id: 'labo',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Laboratorio de Datos',
        },
        position,
    },
    {
        id: 'analisis2',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Análisis II',
        },
        position,
    },
    {
        id: 'electiva',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Electiva de Introducción a las Ciencias Naturales',
        },
        position,
    },
    {
        id: 'alc',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Álgebra Lineal Computacional',
        },
        position,
    },
    {
        id: 'avanzado',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Análisis Avanzado',
        },
        position,
    },
    {
        id: 'proba',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Probabilidad',
        },
        position,
    },
    {
        id: 'estadistica',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Introducción a la Estadística y Ciencia de Datos',
        },
        position,
    },
    {
        id: 'IIOO',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Introducción a la Investigación Operativa y Optimización',
        },
        position,
    },
    {
        id: 'modelado',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Introducción al Modelado Continuo',
        },
        position,
    },
];

export const edges = [
    {
        id: 'cbc-algebra',
        source: 'cbc',
        target: 'algebra',
        markerEnd,
    },
    {
        id: 'cbc-analisis1',
        source: 'cbc',
        target: 'analisis1',
        markerEnd,
    },
    {
        id: 'cbc-electiva',
        source: 'cbc',
        target: 'electiva',
        markerEnd,
    },
    {
        id: 'analisis1-analisis2',
        source: 'analisis1',
        target: 'analisis2',
        markerEnd,
    },
    {
        id: 'algebra-alc',
        source: 'algebra',
        target: 'alc',
        markerEnd,
    },
    {
        id: 'algebra-algo1',
        source: 'algebra',
        target: 'algo1',
        markerEnd,
    },
    {
        id: 'algebra-avanzado',
        source: 'algebra',
        target: 'avanzado',
        markerEnd,
    },
    {
        id: 'algo1-algo2',
        source: 'algo1',
        target: 'algo2',
        markerEnd,
    },
    {
        id: 'algo1-labo',
        source: 'algo1',
        target: 'labo',
        markerEnd,
    },
    {
        id: 'algo2-algo3',
        source: 'algo2',
        target: 'algo3',
        markerEnd,
    },
    {
        id: 'algo2-estadistica',
        source: 'algo2',
        target: 'estadistica',
        markerEnd,
    },
    {
        id: 'algo3-IIOO',
        source: 'algo3',
        target: 'IIOO',
        markerEnd,
    },
    {
        id: 'analisis2-avanzado',
        source: 'analisis2',
        target: 'avanzado',
        markerEnd,
    },
    {
        id: 'analisis2-IIOO',
        source: 'analisis2',
        target: 'IIOO',
        markerEnd,
    },
    { id: 'alc-IIOO', source: 'alc', target: 'IIOO', markerEnd },
    {
        id: 'alc-modelado',
        source: 'alc',
        target: 'modelado',
        markerEnd,
    },
    {
        id: 'avanzado-proba',
        source: 'avanzado',
        target: 'proba',
        markerEnd,
    },
    {
        id: 'avanzado-modelado',
        source: 'avanzado',
        target: 'modelado',
        markerEnd,
    },
    {
        id: 'proba-estadistica',
        source: 'proba',
        target: 'estadistica',
        markerEnd,
    },
];
