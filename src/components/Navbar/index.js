import React from 'react';
import logoJG from '../../image/logo-colegio-jardim-getsemani.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faMusic,faChalkboardTeacher, faHandHoldingHeart, faLock, faBars} from '@fortawesome/free-solid-svg-icons';




import './nav.css';
import { Link } from 'react-router-dom';



export default function Navbar() {
    return (
        <div className="fundo">
            <nav className="navbar navbar-expand-lg fundo-navbar nav-no-padding">
                <div className="container">
                    <a className="navbarlogo" href="#">
                        <img className="logo" src={logoJG} alt="logo" />
                    </a>
                    <button className="navbar-toggler botao" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="botao-interior"><FontAwesomeIcon icon={faBars}/></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item item-nav">
                                <Link className="nav-link item-nav--marcador nav-link--marcador selected" href="#"><span className="icone"><FontAwesomeIcon  icon={faHome}/></span>Início <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item item-nav">
                                <Link className="nav-link nav-link--marcador" href="#"><span className="icone"><FontAwesomeIcon icon={faUsers}/></span>Sobre Nós</Link>
                            </li>
                            <li className="nav-item item-nav">
                                <Link className="nav-link nav-link--marcador" href="#"><span className="icone"><FontAwesomeIcon icon={faMusic}/></span>Musicalização<span className="icone2"><FontAwesomeIcon   icon={faLock}/></span></Link>
                            </li>
                            <li className="nav-item item-nav">
                                <Link className="nav-link nav-link--marcador" href="#"><span className="icone"><FontAwesomeIcon icon={faChalkboardTeacher}/></span>Aulas<span className="icone2 icone3"><FontAwesomeIcon  icon={faLock}/></span></Link>
                            </li>
                            <li className="nav-item item-nav">
                                <Link className="nav-link nav-link--marcador" href="#"><span className="icone"><FontAwesomeIcon icon={faHandHoldingHeart}/></span>Doações</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

};