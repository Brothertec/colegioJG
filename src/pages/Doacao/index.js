import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/compositions/Footer';
import Copyright from '../../components/Copyright';
import SectionTitle from '../../components/SectionTitle';
import CardDoacao from '../../components/CardDoacao';
import Mapa from '../../components/compositions/Mapa';
import ImgPicPay from '../../image/pickpay.png';
import IMGT from '../../image/formulario 2.png';


import './doacao.css';

export default function Doacao() {
    return (
        <div className="doacao">
            <Navbar />

            <div className="container">
                <div className="l-position-doacao">
                    <div className="l-position-titulo-doacao">
                        <SectionTitle title='Trabalhe conosco' />
                    </div>
                    <div className="">
                        <div class="card mb-3">
                            <img src={IMGT} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title area-aluno-titulo-card">Trabalhe Conosco</h5>
                                <p class="card-text area-aluno-texto">Cadastre seu currículo e faça parte da nossa missão de educar com excelência.</p>
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