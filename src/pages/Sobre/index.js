import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/compositions/Footer';
import Mapa from '../../components/compositions/Mapa';
import Copyright from '../../components/Copyright';
import SectionTitle from '../../components/SectionTitle';

import './sobre.css';


export default function Sobre() {
    return (
        <div className="sobre">
            <Navbar />

            <div className="container">
                <div className="l-sobre">
                    <div className="l-titulo-sobre">
                        <SectionTitle title='Sobre Nós' />
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <p className="texto-sobre">O Colégio Jardim Getsêmani surge com o intuito de seus fundadores de levar
                                educação de qualidade através de uma educação que tem como pilar principal
                                a educação vinda de Deus retificada ao maior livro que o homem tem acesso a
                                Bíblia. Aliando o conhecimento da palavra de Deus com o construtivismo
                                (Piaget).</p>

                            <p className="subtitulo-sobre">Propósitos Gerais:</p>
                            <p className="texto-sobre">1. Proporcionar educação de qualidade para desenvolver habilidades e
                                conhecimentos.</p>
                            <p className="texto-sobre">2. Fomentar o crescimento integral (físico, emocional, cognitivo e social) dos
                                alunos.</p>
                            <p className="texto-sobre">3. Preparar cidadãos críticos, criativos e responsáveis para o futuro.</p>
                            <p className="texto-sobre">4. Promover valores como respeito, empatia e inclusão.</p>
                            <p className="texto-sobre">5. Desenvolver habilidades para o mercado de trabalho.</p>
                            <p className="subtitulo-sobre">Propósitos Sociais:</p>
                            <p className="texto-sobre">1. Reduzir desigualdades sociais através da educação.</p>
                            <p className="texto-sobre">2. Promover a igualdade de oportunidades.</p>
                            <p className="subtitulo-sobre">Missão:</p>
                            <p className="texto-sobre">Desenvolver uma comunidade de aprendizado vibrante, onde todos alcançam
                                seu potencial e o amor ao semelhante. Ser referência em educação, promovendo
                                valores, conhecimento e inovação.</p>
                            <p className="subtitulo-sobre">Visão:</p>
                            <p className="texto-sobre">Ser uma instituição de excelência educacional, formando líderes críticos e
                                criativos para o futuro. “Que ama a Deus e seu próximo e tem a bíblia como seu
                                livro guia.</p>
                            <p className="subtitulo-sobre">Nossa Filosofia:</p>
                            <p className="texto-sobre">1. Ensino baseado nas Escrituras.</p>
                            <p className="texto-sobre">2. Abordagem integral (física, emocional, cognitiva e espiritual).</p>
                            <p className="texto-sobre">3. Educação personalizada.</p>
                            <p className="texto-sobre">4. Fomento à criatividade e inovação.</p>
                            <p className="texto-sobre">5. Desenvolvimento de habilidades sociais e emocionais.</p>

                        </div>
                    </div>
                </div>
                <div className="frase-sobre">
                    <span className="frase-sobre-texto">Colégio jardim getsêmanani nunca mais seremos os mesmos seremos melhores.</span>
                </div>


            </div>

            <Mapa />
            <Footer />
            <Copyright />
        </div>
    );
}