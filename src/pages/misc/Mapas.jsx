import React from 'react';
import mapaCeroBajo from '../../assets/images/mapas/aulas_0_0.png';
import mapaCeroAlto from '../../assets/images/mapas/aulas_0_1.png';
import '../../assets/styles/components.scss';

export default function Mapas() {
    return (
        <div id="mapas">
            <h1>Mapas del 0+inf</h1>

            <h2>Planta Baja</h2>
            <img src={mapaCeroBajo} />

            <h2>Planta Alta</h2>
            <img src={mapaCeroAlto} />
        </div>
    );
}
