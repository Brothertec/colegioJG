import React from 'react';
import InfoEscola from '../../components/compositions/InfoEscola';
import AprendizadoAliado from '../../components/compositions/AprendizadoAliado';
import AreaAluno from '../../components/compositions/AreaAlunos';
import Mapa from '../../components/compositions/Mapa';
import Navbar from '../../components/Navbar';
import Doacoes from '../../components/compositions/Doacoes';
import Carousel from '../../components/compositions/Carousel';
import Footer from '../../components/compositions/Footer';
import Copyright from '../../components/Copyright';
import ModalMatricula from '../../components/ModalMatricula';


export default function Home() {
    return(
        <div className="home">
            <ModalMatricula/>
            <Navbar/>
            <Carousel/>
            <InfoEscola/>
            <AprendizadoAliado/>
            <AreaAluno/>
            <Doacoes/>
            <Mapa/>
            <Footer/>
            <Copyright/>
        </div>
    );
}