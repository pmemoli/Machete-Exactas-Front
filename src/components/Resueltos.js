import React from 'react'
// Convierte un resuelto en [anio, cuatri]
function parseResuelto(resuelto) {
    const valores = []
    
    const fechaRegex = /(\d{1,2})[-\/_](\d{1,2})[-\/_](\d{2,4})/
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
            /1[C]/i, /1cuatri/i, /1er. cuatri/, /1º Cuatri/i, /1°C/i, /Primer Cuatrimestre/i, /1er Cuatrimestre/i,
            /2[C]/i, /2cuatri/i, /2do. cuatri/, /2º Cuatri/i, /2°C/i, /Segundo Cuatrimestre/i, /2do Cuatrimestre/i,
        ]

        const resYearRegex = yearRegex.exec(resuelto)
        if (resYearRegex !== null) {
            valores.push(parseFloat(resYearRegex[0]))
        }
        else {  // No hay ningun match para ordenar
            console.log(resuelto)
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
        res: resuelto, tiempo: parseResuelto(resuelto.nombre)
    }))

    resueltosParsed.sort(function(a, b) {
        if (a.tiempo.length === 0 && b.tiempo.length === 0) {
            return 0; 
        } else if (a.tiempo.length === 0) {
            return 1;
        } else if (b.tiempo.length === 0) {
            return -1;
        }

        if (a.tiempo[0] !== b.tiempo[0]) {
            return -a.tiempo[0] + b.tiempo[0]
        } else {
            if (a.tiempo.length === 1 || b.tiempo.length === 1) return 0
            return -a.tiempo[1] + b.tiempo[1]
        }
    })

    return resueltosParsed.map(resuelto => resuelto.res)
}

export default function Resueltos({nombre, tipoResuelto, handleModal, resueltos}) {
    const resueltosDelTipo = resueltos.filter(resuelto => resuelto.tipoResuelto === tipoResuelto)
    const resueltosSorted = sortResueltos(resueltosDelTipo)
  
    return (
        <div className='section'>
            <div className='tipo-resuelto'>
                <h2>{nombre}</h2>
                <button className='upload-button' onClick={() => {handleModal(tipoResuelto)}}>Subir</button>
            </div>

            <ul className='items-resueltos'>
                {resueltosSorted.map(
                    resuelto => (
                    <li>
                        <a className='item-resuelto' href={resuelto.link} target='_blank' rel='noreferrer'>{resuelto.nombre}</a>
                    </li>
                    )
                )}
            </ul>
        </div>
    )
}
