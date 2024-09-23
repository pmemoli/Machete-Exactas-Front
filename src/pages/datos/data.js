import { MarkerType } from 'reactflow';
const position = { x: 0, y: 0 };
const style = {
    strokeWidth: 2,
    stroke: '#545350',
};

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
            label: 'Algoritmos y Estructuras de Datos III',
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
        style,
    },
    {
        id: 'cbc-analisis1',
        source: 'cbc',
        target: 'analisis1',
        style,
    },
    {
        id: 'cbc-electiva',
        source: 'cbc',
        target: 'electiva',
        style,
    },
    {
        id: 'analisis1-analisis2',
        source: 'analisis1',
        target: 'analisis2',
        style,
    },
    {
        id: 'algebra-alc',
        source: 'algebra',
        target: 'alc',
        style,
    },
    {
        id: 'algebra-algo1',
        source: 'algebra',
        target: 'algo1',
        style,
    },
    {
        id: 'algebra-avanzado',
        source: 'algebra',
        target: 'avanzado',
        style,
    },
    {
        id: 'algo1-algo2',
        source: 'algo1',
        target: 'algo2',
        style,
    },
    {
        id: 'algo1-labo',
        source: 'algo1',
        target: 'labo',
        style,
    },
    {
        id: 'algo2-algo3',
        source: 'algo2',
        target: 'algo3',
        style,
    },
    {
        id: 'algo2-estadistica',
        source: 'algo2',
        target: 'estadistica',
        style,
    },
    {
        id: 'algo3-IIOO',
        source: 'algo3',
        target: 'IIOO',
        style,
    },
    {
        id: 'analisis2-avanzado',
        source: 'analisis2',
        target: 'avanzado',
        style,
    },
    {
        id: 'analisis2-IIOO',
        source: 'analisis2',
        target: 'IIOO',
        style,
    },
    { id: 'alc-IIOO', source: 'alc', target: 'IIOO', style },
    {
        id: 'alc-modelado',
        source: 'alc',
        target: 'modelado',
        style,
    },
    {
        id: 'avanzado-proba',
        source: 'avanzado',
        target: 'proba',
        style,
    },
    {
        id: 'avanzado-modelado',
        source: 'avanzado',
        target: 'modelado',
        style,
    },
    {
        id: 'proba-estadistica',
        source: 'proba',
        target: 'estadistica',
        style,
    },
];
