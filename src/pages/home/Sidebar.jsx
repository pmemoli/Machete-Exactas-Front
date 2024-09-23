import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/components.scss';

export default function Sidebar() {
    return (
        <div id="sidebar">
            <ul className="side-items">
                <li className="side-item">
                    <a
                        href="https://exactas.uba.ar/calendario-academico/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Calendario académico
                    </a>
                </li>

                <li className="side-item">
                    <a
                        href="https://exactas.uba.ar/agenda/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Agenda FCEN
                    </a>
                </li>

                <li className="side-item">
                    <a
                        href="https://calendar.google.com/calendar/u/0/embed?src=sn0ir2b77hr77k7f1it9q2u730@group.calendar.google.com&ctz=America/Argentina/Buenos_Aires&pli=1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Menú universitario
                    </a>
                </li>
                <li className="side-item">
                    <Link to="/mapas">Mapas del 0+inf</Link>
                </li>
                <li className="side-item">
                    <a
                        href="https://www.argendata.net/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Datos Argentina
                    </a>
                </li>
                <li className="side-item">
                    <a
                        href="https://github.com/pmemoli/Machete-Exactas-Front"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github de la página
                    </a>
                </li>
                <li className="side-item">
                    <Link to="/otras-fuentes">Otras fuentes</Link>
                </li>
            </ul>
        </div>
    );
}

