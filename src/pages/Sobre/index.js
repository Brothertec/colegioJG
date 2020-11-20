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
                            <p className="texto-sobre">O colégio jardim getsêmani enfatiza o processo educativo de forma integral e incentiva
                            a interação entre a teoria e a prática, o pensar e o fazer, a razão e a emoção, o individual e o coletivo, a causa
                             e o efeito; entende que tanto os educadores como os educandos podem ensinar e aprender.</p>
                            <p className="texto-sobre">Com objetivos educacionais amplos, o currículo promove a excelência acadêmica e contempla
                            os conteúdos necessários para a prática da cidadania responsável, contribuindo para o desenvolvimento equilibrado da
                            vida espiritual, intelectual, física, social, emocional e vocacional dos alunos. Prepara-os para exercer a cidadania
                            de maneira competente e comprometida com a sociedade e com Deus.</p>
                            <p className="texto-sobre">A nossa proposta pedagógica da rede educacional visa atender às necessidades gerais de
                            aprendizagens formando alunos pensantes e criativos. Além disso, incentiva a transformação de conhecimentos em
                            atitudes, a partir de soluções de problemas relacionados ao cotidiano dos alunos.</p>
                            <p className="texto-sobre">Fundamentada nas premissas de uma educação cristã, essa proposta tem como compromisso
                            nortear as atividades didáticas, sistematizando a prática pedagógica e o cotidiano escolar.</p>
                            <p className="texto-sobre">Para atender a demanda imposta na atualidade a escola vem investindo em:</p>
                            <p className="subtitulo-sobre">Salas virtuais</p>
                            <p className="texto-sobre">De onde estiver o aluno pode acessar em horário pré definido em relatório de atividade semanal
                             suas aulas através do zoom e jitsi e as aulas ficam disponíveis no site.</p>
                            <p className="subtitulo-sobre">Vídeo aulas gravadas</p>
                            <p className="texto-sobre">Para os alunos nos quais não podem por algum motivo acompanhar as aulas online, disponibilizamos
                             vídeo aulas gravadas com os conteúdos ministrados pelos professores.</p>
                            <p className="subtitulo-sobre">Tarefas</p>
                            <p className="texto-sobre">Tarefas disponibilizadas para download diretamente do site atualizadas semanalmente.</p>
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