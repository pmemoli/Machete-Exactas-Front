import { MarkerType } from 'reactflow';
const position = { x: 0, y: 0 };
const markerEnd = { type: MarkerType.Arrow };

// 'Intro. a la Computación',
// 'Estadística',
// 'Inv. Operativa',
// 'Temas de Física',
// 'Optimización',
// 'Análisis Numérico',

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
            background: '#c0de96',
            label: 'Análisis 1',
        },
        position,
    },
    {
        id: 'algebra1',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Álgebra 1',
        },
        position,
    },
    {
        id: 'taller',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Taller de Cálculo Avanzado',
        },
        position,
    },
    {
        id: 'lineal',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Álgebra Lineal',
        },
        position,
    },
    {
        id: 'analisis2',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Análisis 2',
        },
        position,
    },
    {
        id: 'avanzado',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Cálculo Avanzado',
        },
        position,
    },
    {
        id: 'numerico',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Cálculo Numérico',
        },
        position,
    },
    {
        id: 'proba',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Probabilidad y Estadística (M)',
        },
        position,
    },
    {
        id: 'complejo',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Análisis Complejo',
        },
        position,
    },
    {
        id: 'real',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Análisis Real',
        },
        position,
    },
    {
        id: 'algebra2',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Álgebra 2',
        },
        position,
    },
    {
        id: 'topo',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Topología',
        },
        position,
    },
    {
        id: 'proyectiva',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Geometría Proyectiva',
        },
        position,
    },
    {
        id: 'funcional',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#e9a59d',
            label: 'Análisis Funcional',
        },
        position,
    },
    {
        id: 'dif',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#e9a59d',
            label: 'Geometría Diferencial',
        },
        position,
    },
    {
        id: 'eq_dif',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Ecuaciones Diferenciales',
        },
        position,
    },
    {
        id: 'algebra3',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Álgebra 3',
        },
        position,
    },
];

export const edges = [
    {
        id: 'cbc-analisis1',
        source: 'cbc',
        target: 'analisis1',
        markerEnd,
    },
    {
        id: 'cbc-algebra1',
        source: 'cbc',
        target: 'algebra1',
        markerEnd,
    },
    {
        id: 'cbc-fisica1',
        source: 'cbc',
        target: 'fisica1',
        markerEnd,
    },
    {
        id: 'analisis1-analisis2',
        source: 'analisis1',
        target: 'analisis2',
        markerEnd,
    },
    {
        id: 'analisis1-taller',
        source: 'analisis1',
        target: 'taller',
        markerEnd,
    },
    {
        id: 'analisis1-numerico',
        source: 'analisis1',
        target: 'numerico',
        markerEnd,
    },
    {
        id: 'algebra1-lineal',
        source: 'algebra1',
        target: 'lineal',
        markerEnd,
    },
    {
        id: 'analisis2-avanzado',
        source: 'analisis2',
        target: 'avanzado',
        markerEnd,
    },
    {
        id: 'taller-avanzado',
        source: 'taller',
        target: 'avanzado',
        markerEnd,
    },
    {
        id: 'lineal-algebra2',
        source: 'lineal',
        target: 'algebra2',
        markerEnd,
    },
    {
        id: 'lineal-avanzado',
        source: 'lineal',
        target: 'avanzado',
        markerEnd,
    },
    {
        id: 'lineal-numerico',
        source: 'lineal',
        target: 'numerico',
        markerEnd,
    },
    {
        id: 'algebra2-algebra3',
        source: 'algebra2',
        target: 'algebra3',
        markerEnd,
    },
    {
        id: 'algebra2-topo',
        source: 'algebra2',
        target: 'topo',
        markerEnd,
    },
    {
        id: 'avanzado-topo',
        source: 'avanzado',
        target: 'topo',
        markerEnd,
    },
    {
        id: 'avanzado-proyectiva',
        source: 'avanzado',
        target: 'proyectiva',
        markerEnd,
    },
    {
        id: 'avanzado-complejo',
        source: 'avanzado',
        target: 'complejo',
        markerEnd,
    },
    {
        id: 'avanzado-proba',
        source: 'avanzado',
        target: 'proba',
        markerEnd,
    },
    {
        id: 'topo-dif',
        source: 'topo',
        target: 'dif',
        markerEnd,
    },
    {
        id: 'proyectiva-dif',
        source: 'proyectiva',
        target: 'dif',
        markerEnd,
    },
    {
        id: 'complejo-eq_dif',
        source: 'complejo',
        target: 'eq_dif',
        markerEnd,
    },
    {
        id: 'complejo-funcional',
        source: 'complejo',
        target: 'funcional',
        markerEnd,
    },
    {
        id: 'proba-real',
        source: 'proba',
        target: 'real',
        markerEnd,
    },
    {
        id: 'real-eq_dif',
        source: 'real',
        target: 'eq_dif',
        markerEnd,
    },
    {
        id: 'real-funcional',
        source: 'real',
        target: 'funcional',
        markerEnd,
    },
];
