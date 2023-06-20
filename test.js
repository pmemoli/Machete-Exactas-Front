// Convierte un resuelto en [anio, cuatri]
function parseResuelto(resuelto) {
    const valores = []
    
    const fechaRegex = /(\d{1,2})[-\/](\d{1,2})[-\/](\d{2,4})/
    const resFechaRegex = fechaRegex.exec(resuelto)
    
    if (resFechaRegex !== null) {  // Encontro una fecha en el nombre
        let year = resFechaRegex[3]
        if (year.length === 2) year = '20' + year

        const mes = parseFloat(resFechaRegex[2])
        const cuatri = mes <= 8 ? 1 : 2

        valores.push(parseFloat(year), cuatri)
    }

    else {  // No encontro una fecha en el nombre
        const yearRegex = /20\d\d/
        const cuatriRegexes = [
            /1[C]/i, /1cuatri/i, /1er. cuatri/, /1º Cuatri/i, /1°C/i, /Primer Cuatrimestre/i,
            /2[C]/i, /2cuatri/i, /2do. cuatri/, /2º Cuatri/i, /2°C/i, /Segundo Cuatrimestre/i
        ]

        const resYearRegex = yearRegex.exec(resuelto)
        if (resYearRegex !== null) {
            valores.push(parseFloat(resYearRegex[0]))
        }
        else {  // No hay ningun match para ordenar
            return []
        }

        for (const cuatriRegex of cuatriRegexes) {
            const resCuatriRegex = cuatriRegex.exec(resuelto)
            if (resCuatriRegex !== null) {
                const esPrimero = resCuatriRegex[0].includes('1') || resCuatriRegex[0].includes('Primer')
                valores.push(esPrimero ? 1 : 2)

                break
            }
        }
    }

    return valores
}

// Sortea segun year y desempata segun el cuatrimestre
function sortResueltos(resueltos) {
    const resueltosParsed = resueltos.map(resuelto => ({
        res: resuelto, tiempo: parseResuelto(resuelto)
    }))

    resueltosParsed.sort(function(a, b) {
        if (a.tiempo[0] !== b.tiempo[0]) {
            return -a.tiempo[0] + b.tiempo[0]
        } else {
            return -a.tiempo[1] + b.tiempo[1]
        }
    });

    resueltos = resueltosParsed.map(resuelto => resuelto.res)
    console.log(resueltos)
}

sortResueltos([
    'Parcial 1cuatri2020 resuelto',
    '1P 1C 2020 resuelto',
    '1P 1C 2022 resuelto',
    '1P 2C 2020 corregido',
    '01/02/21',
    '1R Verano 2009',
])
