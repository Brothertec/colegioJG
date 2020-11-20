import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/compositions/Footer';
import Copyright from '../../components/Copyright';
import SectionTitle from '../../components/SectionTitle';
import CardDoacao from '../../components/CardDoacao';
import Mapa from '../../components/compositions/Mapa';
import ImgPicPay from '../../image/pickpay.png';


import './doacao.css';

export default function Doacao() {
    return (
        <div className="doacao">
            <Navbar />

            <div className="container">
                <div className="l-position-doacao">
                    <div className="l-position-titulo-doacao">
                        <SectionTitle title='Doações' />
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <p className="subtitulo-doacao">Histórico</p>
                            <p className="texto-doacao">Em 2004 buscando atender a comunidade do Itapoã surge o projeto novo tempo
                            trabalhando em parceria com o colégio jardim getsêmani. Aprovado pela portaria (163 de 13 Março 2019)
                            o projeto visa atividades educacional , desportiva, cultural e recreativa com visão inclusiva a todas
                            crianças de 0 a 10 anos de idade. Nossa proposta já auxiliou mais de 2000 crianças com atividades
                            extras no contra turno de suas atividades escolares.</p>
                            <p className="subtitulo-doacao">Objetivo</p>
                            <p className="texto-doacao">A inclusão de toda criança na sociedade com atividades educacional ,recreativas,
                            desportivas, cultural, social e apoio a família, com orientações que visa o bem estar da criança e de seus
                            familiares juntamente com o cumprimento do estatuto do menor e adolescente (ECA) e toda normativa que ajude
                            em seu desenvolvimento: físico, mental, social, comportamental e espiritual seguindo as diretrizes da educação
                            básica.</p>
                            <p className="subtitulo-doacao">Atividades oferecidas:</p>
                            <p className="texto-doacao">reforço escolar;
                            ballet;
                            judo;
                            Karatê;
                            Inglês;
                            Espanhol;
                            Teatro;
                            alimentação balanceada;
                            Informática;
                            xadrez;
                            Psicomotricidade;
                            Futebol;
                            Voleibol;
                         Basquetebol;<br /> Cursos para as mães como:<br />Biscuit, crochê , alimentação saudável, palestras
                          espirituais e motivacionais,dentre outras várias em que haja parcerias.</p>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col-lg-4 col mb-4">

                            <CardDoacao header='Visão' text='Oferecer a inclusão e educação de qualidade com atividades espirituais, 
            sociais, culturais e esportivas transformando pessoas melhores para a família e para uma sociedade melhor.'/>
                        </div>
                        <div className="col-lg-4 col mb-4">
                            <CardDoacao header='Missão' text='Salvar as crianças da atuação negativas e guiá-las a ser um instrumento útil na família,
             igreja e sociedade.'/>
                        </div>
                        <div className="col-lg-4 col mb-4">
                            <CardDoacao header='Meios' text='O seu apoio financeiro ajudará nosso projeto nesse momento difícil de pandemia (covid-19) com
             compras de equipamentos e insumos que chegará ate as crianças menos favorecidas.'/>
                        </div>
                    </div>
                </div>
                <div className="doacao-dados">
                    <span className="dados-bancarios">Dados bancários</span>
                    <p className="texto-dados-bancarios">Banco BRB<br />
                    Agência: 057<br />
                    CONTA: 042709-6<br />
                    ERF Recreação ME</p>


                    <button type="button" className="btn btn-primary btn-color-doacao" data-toggle="modal" data-target="#ModalDoacao">
                        Doar com PicPay
                    </button>
                </div>
                <div className="modal fade fundo-m-c" id="ModalDoacao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Doar com PicPay</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img className='img-modal-doacao' src={ImgPicPay} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="frase-doacao">
                    <span className='texto-frase-doacao'>Participe nos nunca mais seremos iguais, todos nos seremos melhores.</span>
                </div>
            </div>
            <Mapa />
            <Footer />
            <Copyright />
        </div>
    );
}