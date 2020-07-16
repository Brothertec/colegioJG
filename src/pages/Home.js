import React from 'react';
import InfoEscola from '../components/compositions/InfoEscola';
import AprendizadoAliado from '../components/compositions/AprendizadoAliado';
import AreaAluno from '../components/compositions/AreaAlunos';
import Mapa from '../components/compositions/Mapa';
import Navbar from '../components/Navbar';
import Doacao from '../components/compositions/Doacoes'
import Carousel from '../components/compositions/Carousel';


export default function Home() {
    return(
        <div className="home">
            <Carousel/>
            <InfoEscola/>
            <AprendizadoAliado/>
            <AreaAluno/>
            <Doacoes/>
            <Mapa/>
            <Footer/>
        </div>
    );
}