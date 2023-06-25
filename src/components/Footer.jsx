import React from 'react';
import '../assets/styles/components.scss';

export default function Footer() {
    return (
        <footer id="footer">
            <hr />
            <div className="content">
                <div>
                    <div id="useful-links">
                        <div id="left-items">
                            <a
                                href="https://github.com/pmemoli/Machete-Exactas-Front"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className="github-icon"
                                    src={require('../assets/images/github-icon.png')}
                                ></img>
                            </a>

                            <a
                                id="contacto"
                                href="mailto:demnitth@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className="mail-icon"
                                    src={require('../assets/images/mail-icon.png')}
                                ></img>
                            </a>
                        </div>

                        <img
                            className="plebe-icon"
                            title="plebe gang"
                            src={require('../assets/images/plebe.png')}
                        ></img>
                    </div>
                </div>
            </div>
        </footer>
    );
}
