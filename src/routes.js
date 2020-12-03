import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Musicalizacao from './pages/Musicalizacao';
import Aulas from './pages/Aulas';
import Doacao from './pages/Doacao';
import Tarefas from './components/compositions/Tarefas';
import TarefasProvider from './context/TarefasContext';
import TarefasD from './components/TarefaD';
import Leitura from './components/Leitura';


export default function Routes() {
    return (
        <HashRouter>

            <TarefasProvider>
                <Route component={Home} path='/' exact />
                <Route component={Sobre} path='/sobre' exact />
                <Route component={Musicalizacao} path='/musicalizacao' exact />
                <Route component={Aulas} path='/aulas' exact />
                <Route component={Doacao} path='/doacao' exact />
                <Route component={Tarefas} path='/tarefas' exact />
                <Route component={TarefasD} path='/tarefasd' exact />
                <Route component={Leitura} path='/leitura' exact />



            </TarefasProvider>

        </HashRouter>
    );
}