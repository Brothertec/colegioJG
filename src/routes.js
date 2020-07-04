import React from 'react';
import AreaAluno from './components/compositions/AreaAlunos';
import Mapa from './components/compositions/Mapa';
import AprendizadoAliado from './components/compositions/AprendizadoAliado';
import { BrowserRouter, Route } from 'react-router-dom';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route component = {AprendizadoAliado} path='/' exact/>
        </BrowserRouter>
    );
}