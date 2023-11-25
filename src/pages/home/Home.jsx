import React from 'react';
import Sidebar from './Sidebar';
import homeImg from '../../assets/images/cero1.jpg';
import '../../assets/styles/home.scss';

export default function Home() {
    return (
        <div id="home">
            <div className="content">
                <h1>Bienvenid@s</h1>
                <p>
                    Esta es una página con resueltos, apuntes y complementos
                    para las materias que se dan en el pabellón 1 y el 0+inf de
                    la Facultad de Ciencias Exactas y Naturales en la UBA.
                    Cualquiera puede contribuir con material yendo a la página
                    de la materia. Muchos resueltos
                    provienen de Cubawiki, Les Noetheries y Estufis
                    (ver otras fuentes).
                </p>
                <img src={homeImg} />
            </div>
            <Sidebar />
        </div>
    );
}
