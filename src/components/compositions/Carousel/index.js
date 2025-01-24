import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import IMG1 from '../../../image/img-fundo1.png'
import IMG2 from '../../../image/img-fundo22.png'
import IMG3 from '../../../image/img-fundo33.png'
import IMG4 from '../../../image/img-fundo4.png'
import IMG5 from '../../../image/img-fundo5.png'
import IMG6 from '../../../image/img-fundo6.png'




import './carousel.css';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Carousel() {
    return (
        <div id="carousel-escola" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="img1 carousel-img-bcg">
                        
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="img2 carousel-img-bcg">
                    <div className="center">
                            <p className="carousel-titulo">Há 20 anos mudando vidas</p>
                            <p className="carousel-subtitulo">Ensino completo para seu filho</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="img3 carousel-img-bcg">                    
                        <div className="center">
                            <p className="carousel-titulo">Educação cristã por excelência</p>
                            <p className="carousel-subtitulo">Valores que ficam para sempre!</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="img4 carousel-img-bcg">
                    <div className="center">
                    <p className="carousel-titulo">Siga nossas redes sociais</p>
                     <a className="icones" href="https://wa.me/qr/DSNKCLID5RSGH1"><span><FontAwesomeIcon icon={['fab', 'whatsapp-square']} /></span></a>
                                                    <a className="iconec" href="https://www.facebook.com/colegiojardimgetsemani"><span><FontAwesomeIcon icon={['fab', 'facebook-square']} /></span></a>
                                                    <a className="icones" href="https://www.instagram.com/colegiojardimgetsemani/?hl=pt-br"><span><FontAwesomeIcon icon={['fab', 'instagram-square']} /></span></a>
                        </div>
                    </div>

                </div>
                <div className="carousel-item">
                    <div className="img5 carousel-img-bcg">
                    <div className="center">
                    <p className="carousel-titulo">Judô</p>
                    <p className="carousel-titulo">Informática</p>
                    <p className="carousel-titulo">Inglês</p>
                        </div>
                    </div>

                </div>
                <div className="carousel-item">
                    <div className="img6 carousel-img-bcg">
                    <div className="center">
                    <p className="carousel-titulo">Ballet</p>
                    <p className="carousel-titulo">Musicalizacao</p>
                    <p className="carousel-titulo">Projeto Novo Tempo</p>
                        </div>
                    </div>

                </div>
            </div>

            <a class="carousel-control-prev" href="#carousel-escola" role="button" data-slide="prev">
                <span className="icone-carousel"><FontAwesomeIcon icon={faChevronLeft} /></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel-escola" role="button" data-slide="next">
                <span className="icone-carousel"><FontAwesomeIcon icon={faChevronRight} /></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
};
