import React from 'react';
import LogoBT from '../../../image/logo-horizontal-fundo-claro--sem-slogan.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkWithIconFooter from '../../LinkWithIconFooter';

import './footer.css';




export default function Footer() {
    return (
        <footer className="">
            <div className="superior">
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-3">
                            <div className="marge1">
                                <ul className="lista1">
                                    <li>  <LinkWithIconFooter text="Sobre Nós" path="#" /></li>
                                    <li>  <LinkWithIconFooter text="Musicalização" path="#" /></li>
                                    <li>  <LinkWithIconFooter text="Tarefas" path="#" /></li>
                                    <li>  <LinkWithIconFooter text="Doações" path="#" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-lg-5 ">
                            <ul className="lista2">
                                <li className="centro"><span className="icone-lista2"><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /></span> <span>Quadra 01 Conjunto "N" Lotes 17/19 Itapuã 1</span></li>
                                <li className="centro centro2"><span className="icone-lista2"><FontAwesomeIcon icon={['fas', 'phone-alt']} /></span>  <span>(61) 3488-1608</span></li>
                                <li className="centro centro2 centro3"><span className="icone-lista2"><FontAwesomeIcon icon={['fab', 'whatsapp']} /> </span>  <span>(61) 9 9155-7717</span></li>
                                <li className="centro"><span className="icone-lista2"><FontAwesomeIcon icon={['fas', 'envelope']} /></span>  <span>escolajardimgetsemani@hotmail.com</span></li>
                            </ul>
                        </div>


                        <div className=" col-lg-4">
                            <div className="marge2">
                                <a className="icones" href=""><span><FontAwesomeIcon icon={['fab', 'whatsapp-square']} /></span></a>
                                <a className="iconec" href=""><span><FontAwesomeIcon icon={['fab', 'facebook-square']} /></span></a>
                                <a className="icones" href=""><span><FontAwesomeIcon icon={['fab', 'instagram-square']} /></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rodape">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="direitos">
                                <span >© 2020. Todos os direitos reservados.</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="logo">
                                <div className="desenvolve">
                                    <span>Desenvolvido por</span>
                                </div>
                                <div className="iconebt">
                                    <a href="">
                                        <img src={LogoBT} alt="logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )

};