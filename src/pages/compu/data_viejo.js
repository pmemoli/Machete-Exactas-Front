import { MarkerType } from 'reactflow';
const position = { x: 0, y: 0 };
const style = {
    strokeWidth: 2,
    stroke: '#545350',
};

export const materiasViejo = [
    'Análisis 2 (C)',
    'Álgebra 1',
    'Probabilidad y Estadística (C)',
    'Algoritmos 1',
    'Métodos Numericos',
    'Organización del Comp. 1',
    'Algoritmos 2',
    'Organización del Comp. 2',
    'Algoritmos 3',
    'Lógica y Computabilidad',
    'Sistemas Operativos',
    'Ingeniería 1',
    'Paradigmas de Prog.',
    'Teoría de Lenguajes',
    'Teoría de las Com.',
    'Base de Datos',
    'Ingeniería 2',
];

export const nodesViejo = [
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
            label: 'Análisis II (C)',
        },
        position,
    },
    {
        id: 'algebra',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Álgebra I',
        },
        position,
    },
    {
        id: 'proba',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Probabilidad y Estadística (C)',
        },
        position,
    },
    {
        id: 'algo1',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Algorítmos y Estructuras de Datos I',
        },
        position,
    },
    {
        id: 'algo2',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Algorítmos y Estructuras de Datos II',
        },
        position,
    },
    {
        id: 'algo3',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Algorítmos y Estructuras de Datos III',
        },
        position,
    },
    {
        id: 'metodos',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Métodos Numéricos',
        },
        position,
    },
    {
        id: 'orga1',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#e9a59d',
            label: 'Organización del Computador I',
        },
        position,
    },
    {
        id: 'orga2',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#e9a59d',
            label: 'Organización del Computador II',
        },
        position,
    },
    {
        id: 'sistemas',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#e9a59d',
            label: 'Sistemas Operativos',
        },
        position,
    },
    {
        id: 'bd',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#e9a59d',
            label: 'Base de Datos',
        },
        position,
    },
    {
        id: 'redes',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#e9a59d',
            label: 'Teoría de las Comunicaciones',
        },
        position,
    },
    {
        id: 'logica',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#d2a5e3',
            label: 'Lógica y Computabilidad',
        },
        position,
    },
    {
        id: 'inge1',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#d2a5e3',
            label: 'Ingeniería de Software I',
        },
        position,
    },
    {
        id: 'inge2',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#d2a5e3',
            label: 'Ingeniería de Software II',
        },
        position,
    },
    {
        id: 'plp',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#d2a5e3',
            label: 'Paradigmas de Lenguajes de Programación',
        },
        position,
    },
    {
        id: 'tleng',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#d2a5e3',
            label: 'Teoría de Lenguajes',
        },
        position,
    },
];

export const edgesViejo = [
    {
        id: 'cbc-analisis',
        source: 'cbc',
        target: 'analisis',
        style,
    },
    {
        id: 'cbc-algebra',
        source: 'cbc',
        target: 'algebra',
        style,
    },
    {
        id: 'analisis-proba',
        source: 'analisis',
        target: 'proba',
        style,
    },
    {
        id: 'algebra-algo1',
        source: 'algebra',
        target: 'algo1',
        style,
    },
    {
        id: 'algo1-metodos',
        source: 'algo1',
        target: 'metodos',
        style,
    },
    {
        id: 'proba-metodos',
        source: 'proba',
        target: 'metodos',
        style,
    },
    {
        id: 'algo1-algo2',
        source: 'algo1',
        target: 'algo2',
        style,
    },
    {
        id: 'algo2-algo3',
        source: 'algo2',
        target: 'algo3',
        style,
    },
    {
        id: 'algo1-orga1',
        source: 'algo1',
        target: 'orga1',
        style,
    },
    {
        id: 'orga1-orga2',
        source: 'orga1',
        target: 'orga2',
        style,
    },
    {
        id: 'orga2-sistemas',
        source: 'orga2',
        target: 'sistemas',
        style,
    },
    {
        id: 'sistemas-redes',
        source: 'sistemas',
        target: 'redes',
        style,
    },
    {
        id: 'sistemas-bd',
        source: 'sistemas',
        target: 'bd',
        style,
    },
    {
        id: 'proba-redes',
        source: 'proba',
        target: 'redes',
        style,
    },
    {
        id: 'algo2-logica',
        source: 'algo2',
        target: 'logica',
        style,
    },
    {
        id: 'algo3-inge1',
        source: 'algo3',
        target: 'inge1',
        style,
    },
    {
        id: 'inge1-bd',
        source: 'inge1',
        target: 'bd',
        style,
    },
    {
        id: 'inge1-inge2',
        source: 'inge1',
        target: 'inge2',
        style,
    },
    {
        id: 'sistemas-inge2',
        source: 'sistemas',
        target: 'inge2',
        style,
    },
    {
        id: 'plp-inge2',
        source: 'plp',
        target: 'inge2',
        style,
    },
    {
        id: 'logica-plp',
        source: 'logica',
        target: 'plp',
        style,
    },
    {
        id: 'logica-tleng',
        source: 'logica',
        target: 'tleng',
        style,
    },
];
