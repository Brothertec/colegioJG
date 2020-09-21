import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Musicalizacao from './pages/Musicalizacao';
import Aulas from './pages/Aulas';
import Doacao from './pages/Doacao';


export default function Routes(){
    return(
        <BrowserRouter>
            <Route component = {Home} path='/' exact/>
            <Route component ={Sobre} path='/sobre' exact/>
            <Route component ={Musicalizacao} path='/musicalizacao' exact/>
            <Route component ={Aulas} path='/aulas' exact/>
            <Route component ={Doacao} path='/doacao' exact/>


        </BrowserRouter>
    );
}