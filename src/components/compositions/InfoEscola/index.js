import React from 'react';
import Card from '../../Card';
import SectionTitle from '../../SectionTitle';

import img1 from '../../../image/sectionInfoEscola/rectangle1.png';
import img2 from '../../../image/sectionInfoEscola/rectangle2.png';
import img3 from '../../../image/sectionInfoEscola/rectangle3.png';
import img4 from '../../../image/sectionInfoEscola/rectangle4.png';

import './info-escola.css';

export default function InfoEscola() {
    return (
        <section className="info-escola">
            <div className="container">
                <SectionTitle title='Educação Infantil e Fundamental de Qualidade' />
                <div className="info-escola-card-group">
                    <div className="row">
                        <div className="col-lg-3">
                            <Card backgroudImg={img1}>
                                <span className="info-escola-texto-card-2 info-escola-texto-card-2-principal text-color-white">Ballet</span>
                                <span className="info-escola-texto-card-2 info-escola-texto-card-2-principal text-color-white">Judô</span>
                                <span className="info-escola-texto-card-2 info-escola-texto-card-2-principal text-color-white">Informática</span>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card backgroudImg={img2}>
                                <span className="info-escola-texto-card-2 info-escola-texto-card-2-principal text-color-white">Escola Bilíngue</span>
                                <span className="info-escola-texto-card-2 info-escola-texto-card-2-secundario text-color-white">Inglês e Espanhol</span>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card backgroudImg={img4}>
                                <span className="info-escola-texto-card-2 info-escola-texto-card-2-principal text-color-white">Recreação e Biblioteca</span>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card backgroudImg={img3}>
                                <span className="info-escola-texto-card-2 info-escola-texto-card-2-principal text-color-black">Projeto Novo Tempo</span>
                                <span className="info-escola-texto-card-2 info-escola-texto-card-2-principal text-color-black">Inglês</span>
                                <span className="info-escola-texto-card-2 info-escola-texto-card-2-principal text-color-black">Musicalização</span>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}