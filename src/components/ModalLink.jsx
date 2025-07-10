import React, { useRef, useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const backSource = '';

const axiosResueltos = axios.create({
    baseURL: `${backSource}/api/resueltos`,
});

function validateLink(link) {
    const validDomains = [
        'campus12-24.exactas.uba.ar',
        'campus.exactas.uba.ar',
        'imgur.com',
        'drive.google.com',
        'github.com',
        'gitlab.com',
        'git.exactas.uba.ar',
        'dm.uba.ar',
        'df.uba.ar'
    ];
    
    const createDomainPattern = (domain) => 
        new RegExp(`^https:\\/\\/([a-zA-Z0-9-]+\\.)*${domain.replace(/\./g, '\\.')}`, 'i');
    
    const validDomainPatterns = validDomains.map(createDomainPattern);
    const validSource = validDomainPatterns.some(pattern => pattern.test(link));
    const properLength = link.length < 340;

    return validSource && properLength;
}

export default function ModalLink({
    modalDisplay,
    typeRef,
    nombreMateria,
    setModalDisplay,
}) {
    const [subiendo, setSubiendo] = useState();
    const captchaResponse = useRef();
    const titleRef = useRef();
    const linkRef = useRef();
    const tipoResueltoRef = useRef();

    const materiasConTercParciales = ['inv._operativa', 'intr._al_modelado_continuo']
    const nombreSeccionFinal = materiasConTercParciales.includes(nombreMateria) ? 'Terceros Parciales' : 'Finales'

    async function uploadLink() {
        try {
            setSubiendo(true);

            const token = captchaResponse.current.getValue();
            const [title, link] = [
                titleRef.current.value,
                linkRef.current.value,
            ];

            if (token === '') {
                alert('¡Hay que llenar el captcha!');
                return;
            }

            if (
                !(
                    title !== '' &&
                    link !== '' &&
                    validateLink(link) &&
                    title.length < 140
                )
            ) {
                alert(
                    'Link inválido. Tiene que empezar con https:// y ser de drive, github, gitlab, git de la facultad, imgur, páginas del dm, df o del campus.',
                );
                return;
            }

            const resuelto = {
                materia: nombreMateria,
                tipoResuelto: tipoResueltoRef.current.value,
                nombre: title,
                link: link,
                archivo: false,
            };

            const res = await axiosResueltos.post(`/${token}`, resuelto);

            if (res.data.message === 'Posted') {
                console.log(`Uploaded ${title}`);
                setModalDisplay('no-display');
                alert('¡Se subió y mandó a moderar correctamente!');
                captchaResponse.current.reset();
            } else if (
                res.data.message === 'Demasiados resueltos para moderar'
            ) {
                alert(
                    'Hay demasiados resueltos para moderar, probar en otro momento.',
                );
            } else if (res.data.message === 'Failed Captcha') {
                alert(
                    'Falló en validarse el captcha. Si tocaste "subir resuelto" muchas veces puede haberlo rechazado por spam. Probá cerrar la pestaña y reintentar.',
                );
            }

            setSubiendo(false);
        } catch (err) {
            console.log(err);
            setSubiendo(false);
        }
    }

    function renderSubiendo() {
        if (subiendo) return <div>Subiendo...</div>;
        else return <></>;
    }

    return (
        <div className={modalDisplay}>
            <div>
                <div className="upload-content">
                    <label for="nombre">
                        Nombre: &nbsp;
                        <input id="nombre" ref={titleRef} />
                    </label>

                    <label for="link">
                        Link: &nbsp;
                        <input id="link" ref={linkRef} />
                    </label>

                    <label for="tipo-res">
                        Tipo de resuelto: &nbsp;
                        <select
                            name="tipo"
                            id="tipo-res"
                            value={typeRef}
                            ref={tipoResueltoRef}
                        >
                            <option value="primeros-parciales">
                                Primeros Parciales
                            </option>
                            <option value="segundos-parciales">
                                Segundos Parciales
                            </option>
                            <option value="finales">{nombreSeccionFinal}</option>
                            <option value="guias-resueltas">
                                Guias Resueltas
                            </option>
                            <option value="apuntes-clases">
                                Apuntes y Clases
                            </option>
                            <option value="complementos">Complementos</option>
                        </select>
                    </label>
                </div>
                Los links pueden ser de drive, imgur, github, gitlab, o pags de la facultad.
                <br/>
                Pasar en el nombre cuatrimestre y año del examen.
                <br/>
                <a
                    className="instructions"
                    href="/instrucciones"
                    target="_blank"
                >
                    Ver como conseguir link de archivo en drive.
                </a>{' '}
                <br />
                <div className="upload-area">
                    <div id="captcha">
                        <ReCAPTCHA
                            sitekey="6LcCCnAhAAAAANi37e672XJb1jTMB_O_y5-6Xax-"
                            ref={captchaResponse}
                        />
                    </div>
                    <button className="button-top" onClick={uploadLink}>
                        Subir resuelto
                    </button>
                    <button
                        onClick={() => {
                            setModalDisplay('no-display');
                        }}
                    >
                        Cerrar
                    </button>
                </div>
                {renderSubiendo()}
            </div>
        </div>
    );
}
