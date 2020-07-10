import React from 'react';
import AreaAluno from './components/compositions/AreaAlunos';
import Mapa from './components/compositions/Mapa';
import Footer from './components/compositions/Footer';
import Doacoes from './components/compositions/Doacoes';
import Nav from './components/Navbar/index'

import { BrowserRouter, Route } from 'react-router-dom';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route component = {Nav} path='/' exact/>
        </BrowserRouter>
    );
}