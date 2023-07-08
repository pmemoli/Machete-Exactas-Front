import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components.scss';

export default function Navbar({ setOriginal }) {
    return (
        <nav id="nav">
            <Link to="/" className="title">
                Machete Exactas
            </Link>
            <ul className="pages-list">
                <li>
                    <Link
                        to="../mate"
                        className="page"
                        onClick={() => setOriginal(true)}
                    >
                        Matemática
                    </Link>
                </li>
                <li>
                    <Link
                        to="../compu"
                        className="page"
                        onClick={() => setOriginal(true)}
                    >
                        Computación
                    </Link>
                </li>
                <li>
                    <Link
                        to="../datos"
                        className="page"
                        onClick={() => setOriginal(true)}
                    >
                        Datos
                    </Link>
                </li>
                <li>
                    <Link
                        to="../fisica"
                        className="page"
                        onClick={() => setOriginal(true)}
                    >
                        Física
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
