import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/compositions/Footer';
import Mapa from '../../components/compositions/Mapa';
import Copyright from '../../components/Copyright';

import TarefaD from '../TarefaD';


import imgl1 from '../../image/livros/3marias.jpg';
import imgl2 from '../../image/livros/pdf/3mariasbolosmeninos.pdf';
import imgl3 from '../../image/livros/acantatadapata.jpg';
import imgl4 from '../../image/livros/livrosN/Cantata.pdf';
import imgl5 from '../../image/livros/afadafala.jpg';
import imgl6 from '../../image/livros/livrosN/A_fada_faladeira_M.pdf';
import imgl7 from '../../image/livros/amenina.jpg';
import imgl8 from '../../image/livros/pdf/amenina.pdf';
import imgl9 from '../../image/livros/artur.jpg';
import imgl10 from '../../image/livros/livrosN/Artur.pdf';
import imgl11 from '../../image/livros/aventuras.jpg';
import imgl12 from '../../image/livros/livrosN/As_Laranjas.pdf';
import imgl13 from '../../image/livros/azizi.jpg';
import imgl14 from '../../image/livros/pdf/aziziomeninoviajante.pdf';
import imgl15 from '../../image/livros/bia.jpg';
import imgl16 from '../../image/livros/livrosN/Bia_baixinha_M.pdf';
import imgl17 from '../../image/livros/briga.jpg';
import imgl18 from '../../image/livros/livrosN/A_briga.pdf';
import imgl19 from '../../image/livros/brinquedo.jpg';
import imgl20 from '../../image/livros/livrosN/Que_brinquedo.pdf';
import imgl21 from '../../image/livros/caixa.jpg';
import imgl22 from '../../image/livros/livrosN/A_caixa_magica_de_Luiz_M.pdf';
import imgl23 from '../../image/livros/carambola.jpg';
import imgl24 from '../../image/livros/livrosN/Carambola.pdf';
import imgl25 from '../../image/livros/conto.jpg';
import imgl26 from '../../image/livros/pdf/livro1.pdf';
import imgl27 from '../../image/livros/copa.jpg';
import imgl28 from '../../image/livros/livrosN/A_copa.pdf';
import imgl29 from '../../image/livros/duda.jpg';
import imgl30 from '../../image/livros/pdf/duda.pdf';
import imgl31 from '../../image/livros/estrelas.jpg';
import imgl32 from '../../image/livros/pdf/meninadasestrelas.pdf';
import imgl33 from '../../image/livros/fada.jpg';
import imgl34 from '../../image/livros/livrosN/A_fada_das_folhas_M.pdf';
import imgl35 from '../../image/livros/familia.jpg';
import imgl36 from '../../image/livros/pdf/Familia.pdf';
import imgl37 from '../../image/livros/foguete.jpg';
import imgl38 from '../../image/livros/pdf/omeninoeofoguete.pdf';
import imgl39 from '../../image/livros/joaninha.jpg';
import imgl40 from '../../image/livros/pdf/ajoaninha.pdf';
import imgl41 from '../../image/livros/macaco.jpg';
import imgl42 from '../../image/livros/livrosN/O_macaco_e_a_banana_M.pdf';
import imgl43 from '../../image/livros/menino.jpg';
import imgl44 from '../../image/livros/pdf/omenino.pdf';
import imgl45 from '../../image/livros/natal.jpg';
import imgl46 from '../../image/livros/livrosN/O_natal_de_Chico_em_Macacopolis_M.pdf';
import imgl47 from '../../image/livros/opato.jpg';
import imgl48 from '../../image/livros/livrosN/O_pato_viajante_M.pdf';
import imgl49 from '../../image/livros/passaros.jpg';
import imgl50 from '../../image/livros/pdf/cancaodospassaros.pdf';
import imgl51 from '../../image/livros/patativa.jpg';
import imgl52 from '../../image/livros/livrosN/A_patativa_e_a_margarida_M.pdf';
import imgl53 from '../../image/livros/sonho.jpg';
import imgl54 from '../../image/livros/pdf/umsonho.pdf';
import imgl55 from '../../image/livros/uriel.jpg';
import imgl56 from '../../image/livros/livrosN/Uriel.pdf';
import imgl57 from '../../image/livros/vo.jpg';
import imgl58 from '../../image/livros/pdf/bonecasdavomaria.pdf';
import imgl59 from '../../image/livros/livrosN/livro/avaca.jpg';
import imgl60 from '../../image/livros/livrosN/livro/A_vaca_amarela_e_a_panela_da_Clarabela_M.pdf';
import imgl61 from '../../image/livros/livrosN/livro/brincadeira.jpg';
import imgl62 from '../../image/livros/livrosN/livro/Brincadeira_de_criança_M.pdf';
import imgl63 from '../../image/livros/livrosN/livro/confusao.jpg';
import imgl64 from '../../image/livros/livrosN/livro/Floresta.pdf';
import imgl65 from '../../image/livros/livrosN/livro/dudu.jpeg';
import imgl66 from '../../image/livros/livrosN/livro/Dudu_e_o_carro_vermelho_M.pdf';
import imgl67 from '../../image/livros/livrosN/livro/grilinho.jpg';
import imgl68 from '../../image/livros/livrosN/livro/Grilinho_cri_cri_M.pdf';
import imgl69 from '../../image/livros/livrosN/livro/irmao.jpg';
import imgl70 from '../../image/livros/livrosN/livro/irmaoo.pdf';
import imgl71 from '../../image/livros/livrosN/livro/lobo.jpg';
import imgl72 from '../../image/livros/livrosN/livro/lobomau.pdf';
import imgl73 from '../../image/livros/livrosN/livro/nacasa.jpg';
import imgl74 from '../../image/livros/livrosN/livro/Fada.pdf';
import imgl75 from '../../image/livros/livrosN/livro/ocirco.jpg';
import imgl76 from '../../image/livros/livrosN/livro/circo.pdf';
import imgl77 from '../../image/livros/livrosN/livro/ogrito.jpg';
import imgl78 from '../../image/livros/livrosN/livro/grito.pdf';
import imgl79 from '../../image/livros/livrosN/livro/omar.jpg';
import imgl80 from '../../image/livros/livrosN/livro/Omarr.pdf';
import imgl81 from '../../image/livros/livrosN/livro/ostres.jpg';
import imgl82 from '../../image/livros/livrosN/livro/carneirinhos.pdf';
import imgl83 from '../../image/livros/livrosN/livro/ovento.jpg';
import imgl84 from '../../image/livros/livrosN/livro/vento.pdf';
import imgl85 from '../../image/livros/livrosN/livro/peixinho.jpg';
import imgl86 from '../../image/livros/livrosN/livro/Peixinhoo.pdf';
import imgl87 from '../../image/livros/livrosN/livro/sapo.jpg';
import imgl88 from '../../image/livros/livrosN/livro/As_aventuras_do_sapo_xue_M.pdf';
import imgl89 from '../../image/livros/livrosN/livro/vovo.jpg';
import imgl90 from '../../image/livros/livrosN/livro/casa.pdf';





import './leitura.css';




export default function Leitura() {

    return (
        <div className="leitura">
            <Navbar />

            <div className="container">
                <h3 className="titulo-leitura">Projeto Leitura </h3>
                <p className="texto-leitura">É preciso que a leitura seja um ato de amor.</p>
                <div className="row">
                    <div className="col-lg-4">
                        <TarefaD img={imgl1} imgbtn={imgl2} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl3} imgbtn={imgl4} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl5} imgbtn={imgl6} />
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <TarefaD img={imgl7} imgbtn={imgl8} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl9} imgbtn={imgl10} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl11} imgbtn={imgl12} />
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <TarefaD img={imgl13} imgbtn={imgl14} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl15} imgbtn={imgl16} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl17} imgbtn={imgl18} />
                    </div>

                </div>

                <h3 className="titulo-leitura">Projeto Leitura </h3>
                <p className="texto-leitura">A literatura infantil nos leva a viajar com as crianças no universo das histórias contadas e recontadas.</p>
                <div className="row">
                    <div className="col-lg-4">
                        <TarefaD img={imgl19} imgbtn={imgl20} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl21} imgbtn={imgl22} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl23} imgbtn={imgl24} />
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <TarefaD img={imgl25} imgbtn={imgl26} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl27} imgbtn={imgl28} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl29} imgbtn={imgl30} />
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <TarefaD img={imgl31} imgbtn={imgl32} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl33} imgbtn={imgl34} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl35} imgbtn={imgl36} />
                    </div>

                </div>


                <h3 className="titulo-leitura">Projeto Leitura </h3>
                <p className="texto-leitura">Ler um bom livro é como conversar com as melhores mentes do passado.</p>
                <div className="row">
                    <div className="col-lg-4">
                        <TarefaD img={imgl37} imgbtn={imgl38} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl39} imgbtn={imgl40} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl41} imgbtn={imgl42} />
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <TarefaD img={imgl43} imgbtn={imgl44} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl45} imgbtn={imgl45} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl47} imgbtn={imgl48} />
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <TarefaD img={imgl49} imgbtn={imgl50} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl51} imgbtn={imgl52} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl53} imgbtn={imgl54} />
                    </div>

                </div>

                <h3 className="titulo-leitura">Projeto Leitura </h3>
                <p className="texto-leitura">A alfabetização é mais, muito mais, do que ler e escrever.É a habilidade de ler o mundo.</p>
                <div className="row">
                    <div className="col-lg-4">
                        <TarefaD img={imgl55} imgbtn={imgl56} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl57} imgbtn={imgl58} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl59} imgbtn={imgl60} />
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <TarefaD img={imgl61} imgbtn={imgl62} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl63} imgbtn={imgl64} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl65} imgbtn={imgl66} />
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <TarefaD img={imgl67} imgbtn={imgl68} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl69} imgbtn={imgl70} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl71} imgbtn={imgl72} />
                    </div>

                </div>

                <h3 className="titulo-leitura">Projeto Leitura </h3>
                <p className="texto-leitura">É preciso que a leitura seja um ato de amor.</p>
                <div className="row">
                    <div className="col-lg-4">
                        <TarefaD img={imgl73} imgbtn={imgl74} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl75} imgbtn={imgl76} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl77} imgbtn={imgl78} />
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <TarefaD img={imgl79} imgbtn={imgl80} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl81} imgbtn={imgl82} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl83} imgbtn={imgl84} />
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <TarefaD img={imgl85} imgbtn={imgl86} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl87} imgbtn={imgl88} />
                    </div>
                    <div className="col-lg-4">
                        <TarefaD img={imgl89} imgbtn={imgl90} />
                    </div>

                </div>



            </div>



            <Mapa />
            <Footer />
            <Copyright />
        </div>
    )

};