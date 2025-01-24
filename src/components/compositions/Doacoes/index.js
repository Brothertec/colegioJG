import React from 'react';
import SectionTitle from '../../SectionTitle';

import Foto2 from '../../../image/iconfinder_social-media_donate_5022552 1.png'


import './doacoes.css';

export default function Doacoes() {
    return (
        <div className="total">
            <div className="container">
                <SectionTitle iconProps={['fas', 'hand-holding-heart']} title="Trabalhe Conosco" />
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
                                <h3 className="titulo">Nos ajude a fazer toda a diferença!</h3>
                                <div className="texto">
                                    <p>No Colégio Jardim Getsêmani, acreditamos que a educação transforma vidas e que o sucesso dos nossos alunos começa com uma equipe apaixonada e comprometida.</p>
                                    <p> <br />Se você é dinâmico, inovador e deseja contribuir para um futuro brilhante, junte-se a nós!</p>
                                    <p><br />Cadastre seu currículo e faça parte da nossa missão de educar com excelência.</p>
                                </div>
                                <div className="link-doacao">
                                <a type="button" class="btn btn-primary btn-modal-matricula" href="https://forms.gle/T1su23xnSQMNDWzU7">Saiba Mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};