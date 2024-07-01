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
        id: 'estadistica',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Estadística',
        },
        position,
    },
    {
        id: 'fisica',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#e9a59d',
            label: 'Temas de Física',
        },
        position,
    },
    {
        id: 'medida',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#c0de96',
            label: 'Medida y probabilidad',
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
        id: 'compu',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#e9a59d',
            label: 'Introducción a la computación',
        },
        position,
    },
    {
        id: 'invop',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Investigación Operativa',
        },
        position,
    },
    {
        id: 'a_numerico',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#7fc8f2',
            label: 'Análisis Numérico',
        },
        position,
    },
    {
        id: 'opt',
        type: 'course',
        data: {
            foreground: '#000',
            background: '#e9a59d',
            label: 'Optimización',
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
        id: 'numerico-compu',
        source: 'numerico',
        target: 'compu',
        style,
    },
    {
        id: 'compu-invop',
        source: 'compu',
        target: 'invop',
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
        id: 'analisis2-fisica',
        source: 'analisis2',
        target: 'fisica',
        style,
    },
    {
        id: 'analisis2-compu',
        source: 'analisis2',
        target: 'compu',
        style,
    },
    {
        id: 'taller-avanzado',
        source: 'taller',
        target: 'avanzado',
        style,
    },
    {
        id: 'lineal-fisica',
        source: 'lineal',
        target: 'fisica',
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
        id: 'proba-invop',
        source: 'proba',
        target: 'invop',
        style,
    },
    {
        id: 'proba-estadistica',
        source: 'proba',
        target: 'estadistica',
        style,
    },
    {
        id: 'proba-medida',
        source: 'proba',
        target: 'medida',
        style,
    },
    {
        id: 'medida-eq_dif',
        source: 'medida',
        target: 'eq_dif',
        style,
    },
    {
        id: 'invop-opt',
        source: 'invop',
        target: 'opt',
        style,
    },
    {
        id: 'complejo-opt',
        source: 'complejo',
        target: 'opt',
        style,
    },
    {
        id: 'medida-a_numerico',
        source: 'medida',
        target: 'a_numerico',
        style,
    },
    {
        id: 'complejo-a_numerico',
        source: 'complejo',
        target: 'a_numerico',
        style,
    },
    {
        id: 'numerico-a_numerico',
        source: 'numerico',
        target: 'a_numerico',
        style,
    },
];

export default { nodes, edges };
