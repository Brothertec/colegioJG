import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import IMG1 from '../../../image/img-fundo.png'
import IMG2 from '../../../image/img-fundo2.png'
import IMG3 from '../../../image/img-fundo3.png'


import './carousel.css';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Carousel() {
    return (
        <div id="carousel-escola" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="img1 carousel-img-bcg">
                        <div className="center">
                            <p className="carousel-titulo">Há 15 anos mudando vidas</p>
                            <p className="carousel-subtitulo">Ensino completo para seu filho</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="img2 carousel-img-bcg">
                        <div className="center">
                            <p className="carousel-titulo">Educaçãp cristã por excelência</p>
                            <p className="carousel-subtitulo">Valores que ficam para sempre!</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="img3 carousel-img-bcg">
                        <div className="center">
                            <p className="carousel-texto">Em virtude da pandemia do Covid-19, as aulas e atividades estão sendo ministradas remotamente em nosso site.</p> 
                            <p className="carousel-texto">Para mais informações, entre em contato:</p>
                            <p className="carousel-texto2">(61) 3488-1608<br/> (61) 99155-7717 (whatsapp)<br/> escolajardimgetsemani@hotmail.com</p>
                            <p className="Carousel-mat">Matrículas abertas</p>
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

{/* <a className="nav-link item-nav--marcador nav-link--marcador selected" href="#"><span className="icone"><FontAwesomeIcon  icon={faHome}/></span>Início <span className="sr-only">(current)</span></a> */ }