import React from 'react';
import logoJG from '../../image/logo-colegio-jardim-getsemani.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap, faMusic,faPencilRuler, faHandHoldingHeart, faLock} from '@fortawesome/free-solid-svg-icons';




import './nav.css';



export default function Navbar() {
    return (
        <div className="fundo">
            <nav className="navbar navbar-expand-lg fundo-navbar">
                <div className="container">
                    <a className="navbarlogo" href="#">
                        <img className="logo" src={logoJG} alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon botao"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link navitem--marcador" href="#"><span className="icone"><FontAwesomeIcon  icon={faHome}/></span>Início <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navitem--marcador" href="#"><span className="icone"><FontAwesomeIcon icon={faGraduationCap}/></span>Sobre Nós</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navitem--marcador" href="#"><span className="icone"><FontAwesomeIcon icon={faMusic}/></span>Musicalização<span className="icone2"><FontAwesomeIcon   icon={faLock}/></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navitem--marcador" href="#"><span className="icone"><FontAwesomeIcon icon={faPencilRuler}/></span>Aulas<span className="icone2"><FontAwesomeIcon  icon={faLock}/></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navitem--marcador" href="#"><span className="icone"><FontAwesomeIcon icon={faHandHoldingHeart}/></span>Doações</a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

};