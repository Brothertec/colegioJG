import React from 'react';
import InfoEscola from '../components/compositions/InfoEscola';
import AprendizadoAliado from '../components/compositions/AprendizadoAliado';
import AreaAluno from '../components/compositions/AreaAlunos';
import Mapa from '../components/compositions/Mapa';
import Navbar from '../components/Navbar';


export default function Home() {
    return(
        <div className="home">
            <Navbar/>
            <InfoEscola/>
            <AprendizadoAliado/>
            <AreaAluno/>
            <Mapa/>
        </div>
    );
}