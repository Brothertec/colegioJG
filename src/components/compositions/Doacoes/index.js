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
                        <div className="col-lg-4 offset-lg-1">
                            <div className="">
                                <div className="foto">
                                    <img className="foto2" src={Foto2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="total1">
                                <h3 className="titulo">A sua ajuda pode fazer toda a diferença!</h3>
                                <div className="texto">
                                    <p>Nós prestamos um trabalho social para a comunidade do Itapuã, arrecadando fundos para escolarizar crianças carentes.</p>
                                    <p> <br />Para que isso seja possível, contamos com a colaboração da sociedade.</p>
                                    <p><br />Com a sua ajuda, poderemos manter um aluno parcial ou integralmente.</p>
                                </div>
                                <div className="link-doacao">
                                    <LinkWithIcon text='Saiba mais' path='/Doacao' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};