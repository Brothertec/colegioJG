import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aulas from './pages/Aulas';


export default function Routes(){
    return(
        <BrowserRouter>
            <Route component = {Home} path='/' exact/>
            <Route component ={Aulas} path='/aulas' exact/>
        </BrowserRouter>
    );
}