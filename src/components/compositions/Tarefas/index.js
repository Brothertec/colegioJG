import React from 'react';
import Copyright from '../../Copyright';
import Navbar from '../../Navbar';
import Footer from '../../compositions/Footer';
import Bercario from '../../Bercario';
import Infantil2 from '../../Infantil2';
import Infantil3 from '../../Infantil3';
import Infantil4 from '../../Infantil4';
import Infantil5 from '../../Infantil5';
import PrimeiroAno from '../../PrimeiroAno';
import SegundoAno from '../../SegundoAno';
import TerceiroAno from '../../TerceiroAno';
import QuartoAno from '../../QuartoAno';
import { TarefasContext } from '../../../context/TarefasContext';
import { useContext } from 'react';

export default function Tarefas() {
    const { tarefa, setTarefa } = useContext(TarefasContext);

    return (
        <div>
            <Navbar />
            {
                tarefa === 'Bercario' && <Bercario />
            }
            {
                tarefa === 'Infantil2' && <Infantil2/>
            }
            {
                tarefa === 'Infantil3' && <Infantil3/> 
            }
            {
                tarefa === 'Infantil4' && <Infantil4/>
            }
            {
                tarefa === 'Infantil5' && <Infantil5/>
            }
            {
                tarefa === 'PrimeiroAno' && <PrimeiroAno/>
            }
            {
                tarefa === 'SegundoAno' && <SegundoAno/>
            }
            {
                tarefa === 'TerceiroAno' && <TerceiroAno/>
            }
            {
                tarefa === 'QuartoAno' && <QuartoAno/>
            }
            <Footer />
            <Copyright />


        </div>

    )
};
