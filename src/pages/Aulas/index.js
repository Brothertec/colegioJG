import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/compositions/Footer';
import Copyright from '../../components/Copyright';
import LogonTarefas from '../../components/compositions/LogonTarefas';


export default function Aulas() {
    return (
        <div className="aulas">
            <Navbar />

            <LogonTarefas/>


            <Footer />
            <Copyright/>
        </div>
    );
}