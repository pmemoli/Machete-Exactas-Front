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
                    de la materia. Pueden tardar un tiempo en aparecer después
                    de subirse por razones de moderación. Abajo de todo esta la
                    página de github con el código fuente y el mail de contacto
                    para tirar recomendaciones y mejoras. Los resueltos
                    iniciales provienen de Cubawiki, Les Noetheries y Estufis
                    (ver otras fuentes).
                </p>
                <img src={homeImg} />
            </div>
            <Sidebar />
        </div>
    );
}
