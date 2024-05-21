import { MarkerType } from 'reactflow';
const position = { x: 0, y: 0 };
const style = {
    strokeWidth: 2,
    stroke: '#545350',
};

const nodes = [
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

const edges = [
    {
        id: 'cbc-analisis1',
        source: 'cbc',
        target: 'analisis1',
        style,
    },
    {
        id: 'cbc-algebra1',
        source: 'cbc',
        target: 'algebra1',
        style,
    },
    {
        id: 'cbc-fisica1',
        source: 'cbc',
        target: 'fisica1',
        style,
    },
    {
        id: 'analisis1-analisis2',
        source: 'analisis1',
        target: 'analisis2',
        style,
    },
    {
        id: 'analisis1-taller',
        source: 'analisis1',
        target: 'taller',
        style,
    },
    {
        id: 'analisis1-numerico',
        source: 'analisis1',
        target: 'numerico',
        style,
    },
    {
        id: 'algebra1-lineal',
        source: 'algebra1',
        target: 'lineal',
        style,
    },
    {
        id: 'analisis2-avanzado',
        source: 'analisis2',
        target: 'avanzado',
        style,
    },
    {
        id: 'taller-avanzado',
        source: 'taller',
        target: 'avanzado',
        style,
    },
    {
        id: 'lineal-algebra2',
        source: 'lineal',
        target: 'algebra2',
        style,
    },
    {
        id: 'lineal-avanzado',
        source: 'lineal',
        target: 'avanzado',
        style,
    },
    {
        id: 'lineal-numerico',
        source: 'lineal',
        target: 'numerico',
        style,
    },
    {
        id: 'algebra2-algebra3',
        source: 'algebra2',
        target: 'algebra3',
        style,
    },
    {
        id: 'algebra2-topo',
        source: 'algebra2',
        target: 'topo',
        style,
    },
    {
        id: 'avanzado-topo',
        source: 'avanzado',
        target: 'topo',
        style,
    },
    {
        id: 'avanzado-proyectiva',
        source: 'avanzado',
        target: 'proyectiva',
        style,
    },
    {
        id: 'avanzado-complejo',
        source: 'avanzado',
        target: 'complejo',
        style,
    },
    {
        id: 'avanzado-proba',
        source: 'avanzado',
        target: 'proba',
        style,
    },
    {
        id: 'topo-dif',
        source: 'topo',
        target: 'dif',
        style,
    },
    {
        id: 'proyectiva-dif',
        source: 'proyectiva',
        target: 'dif',
        style,
    },
    {
        id: 'complejo-eq_dif',
        source: 'complejo',
        target: 'eq_dif',
        style,
    },
    {
        id: 'complejo-funcional',
        source: 'complejo',
        target: 'funcional',
        style,
    },
    {
        id: 'proba-real',
        source: 'proba',
        target: 'real',
        style,
    },
    {
        id: 'real-eq_dif',
        source: 'real',
        target: 'eq_dif',
        style,
    },
    {
        id: 'real-funcional',
        source: 'real',
        target: 'funcional',
        style,
    },
];

export default { nodes, edges };
