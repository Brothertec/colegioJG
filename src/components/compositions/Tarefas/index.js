import React from 'react';
import Copyright from '../../Copyright';
import Navbar from '../../Navbar';
import Footer from '../../compositions/Footer';
import Bercario from '../../Bercario';
import Infantil2 from '../../Infantil2';
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
            <Footer />
            <Copyright />


        </div>

    )
};
