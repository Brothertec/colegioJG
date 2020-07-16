import React from 'react';
import SectionTitle from '../../SectionTitle';
import LinkWithIcon from '../../LinkWithIcon';
import Foto1 from '../../../image/Rectangle 10.png'
import Foto2 from '../../../image/iconfinder_social-media_donate_5022552 1.png'


import './doacoes.css';

export default function Doacoes() {
    return (
        <div className="total">
            <div className="container">
                <SectionTitle iconProps={['fas', 'hand-holding-heart']} title="Doações" />
                <div className="doacoes-espacamento-titulo">
                    <div className="row doacoes-alinhamento-foto">
                        <div className="col-lg-6">
                            <div className="">
                                <div className="foto">


                                    <img className="foto2" src={Foto2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 total1">
                            <div className="titulo">
                                <h2>A sua ajuda pode fazer toda a diferença!</h2>
                            </div>
                            <div className="texto">
                                <h3 >Nós prestamos um trabalho social para a comunidade do Itapuã, arrecadando fundos para escolarizar crianças carentes.</h3>
                                <h3 > <br />Para que isso seja possível, contamos com a colaboração da sociedade.</h3>
                                <h3 ><br />Com a sua ajuda, poderemos manter um aluno parcial ou integralmente.</h3>
                            </div>

                            <div className="link-doacao">

                                <LinkWithIcon text='Saiba mais' path='#' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};