import React from 'react';
import AreaAluno from './components/compositions/AreaAlunos';
import { BrowserRouter, Route } from 'react-router-dom';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route component = {AreaAluno} path='/' exact/>
        </BrowserRouter>
    );
}