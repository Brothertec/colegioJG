import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/compositions/Footer';
import Copyright from '../../components/Copyright';
import SectionTitle from '../../components/SectionTitle';
import Mapa from '../../components/compositions/Mapa';
import IMGP from '../../image/formulario 1.png';
import './musicalizacao.css';


export default function Musicalizacao() {
    return (
        <div className="musicalizacao">
            <Navbar />

            <div className="container">
                <div className="l-position-doacao">
                    <div className="l-position-titulo-doacao">
                        <SectionTitle title='Pré Matricula' />
                    </div>
                    <div className="">
                        <div class="card mb-3">
                            <img src={IMGP} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title area-aluno-titulo-card">Pré Matricula</h5>
                                <p class="card-text area-aluno-texto">Preencha o formulário e parte da nossa instituição com a missão de educar com excelência.</p>
                                <div className='btnn'>
                                    <a type="button" class="btn btn-primary btn-modal-matricula" href="https://forms.gle/K2sVatjyyGf34xs8A">Saiba Mais</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Mapa />
            <Footer />
            <Copyright />
        </div>
    );
}