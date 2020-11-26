import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkWithIconFooter from '../../LinkWithIconFooter';
import IconWhithText from '../../IconWhithText';


import './footer.css';




export default function Footer() {
    var scrollTop = function() {
        window.scrollTo(0, 0);
    }
    return (
        <footer className="footer">
            <div className="superior">
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-3">
                            <div className="marge1">
                                <ul className="lista1">
                                    <li>  <LinkWithIconFooter text="Sobre Nós" path="/Sobre" /></li>
                                    <li>  <LinkWithIconFooter text="Musicalização" path="/Musicalizacao" /></li>
                                    <li>  <LinkWithIconFooter text="Tarefas" path="/Aulas" /></li>
                                    <li>  <LinkWithIconFooter text="Doações" path="/Doacao" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-lg-5 ">
                            <ul className="lista2">
                                <li className="centro">
                                    <IconWhithText iconProps={['fas', 'map-marker-alt']} text={`Quadra 01 Conjunto "N" Lotes 17/19 Itapuã 1`} />
                                </li>
                                <li className="centro centro2">
                                    <IconWhithText iconProps={['fas', 'phone-alt']} text='(61) 3488-1608' />
                                </li>
                                <li className="centro centro2 centro3">
                                    <IconWhithText iconProps={['fab', 'whatsapp']} text='(61) 9 9155-7717' />
                                </li>
                                <li className="centro">
                                    <IconWhithText iconProps={['fas', 'envelope']} text='escolajardimgetsemani@hotmail.com' />
                                </li>
                            </ul>
                        </div>


                        <div className=" col-lg-4">
                            <div className="marge2">
                                <a className="icones" href="https://whats.link/colegioejg"><span><FontAwesomeIcon icon={['fab', 'whatsapp-square']} /></span></a>
                                <a className="iconec" href="https://www.facebook.com/Colégio-Jardim-Getsêmani-107998397345213"><span><FontAwesomeIcon icon={['fab', 'facebook-square']} /></span></a>
                                <a className="icones" href="https://www.instagram.com/colegiojardimgetsemani/?hl=pt-br"><span><FontAwesomeIcon icon={['fab', 'instagram-square']} /></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </footer >
    )

};