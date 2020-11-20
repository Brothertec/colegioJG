import React from 'react';
import SectionTitle from '../../SectionTitle';
import { useHistory } from 'react-router-dom';
import { TarefasContext } from '../../../context/TarefasContext';
import { useContext } from 'react';


import './logon-tarefas.css';

export default function LogonTarefas() {

    const {tarefa, setTarefa} = useContext(TarefasContext);


    const history = useHistory();

    var bercario = 'BEREJG';
    var infantil2 = 'INF2EJG';
    var infantil3 = 'ANTIL3EJG';
    var infantil4 = 'FANTIL4EJG';
    var infantil5 = 'TIL5EJG';
    var primeiroAno = 'PANOEJG';
    var segundoAno = 'GUNDONOEJG';
    var terceiroAno = 'IROANOEJG';
    var quartoAno = 'TOANOEJG';

    function setTarefaSelecionada() {
        var turma = document.querySelector('#turma').value;

        setTarefa(turma);
    }


    function validarTarefas(event) {
        event.preventDefault();
        var divErro = document.querySelector('#msgErro');
        divErro.classList.add('d-none');
        var senhaInformada = document.querySelector('#senha').value;
        var tarefa = document.querySelector('#turma').value;

        if ((tarefa === 'Bercario' && senhaInformada === bercario) || (tarefa === 'Infantil2' && senhaInformada === infantil2)
            || (tarefa === 'Infantil3' && senhaInformada === infantil3) || (tarefa === 'Infantil4' && senhaInformada === infantil4)
            || (tarefa === 'Infantil5' && senhaInformada === infantil5) || (tarefa === 'PrimeiroAno' && senhaInformada === primeiroAno)
            || (tarefa === 'SegundoAno' && senhaInformada === segundoAno) || (tarefa === 'TerceiroAno' && senhaInformada === terceiroAno)
            || (tarefa === 'QuartoAno' && senhaInformada === quartoAno)) {

            setTarefaSelecionada();
            console.log('Redirect');

            history.push('/tarefas');
        }
        else {
            setTarefa("");
            divErro.classList.remove("d-none");
        }

    }



    return (
        <section>
            <div className="container">
                <div className="logon-tarefas-position">

                    <form onSubmit={validarTarefas}>
                        <SectionTitle title="Selecione a turma e digite a senha" />
                        <div className="form-group">

                            <label className="logon-tarefas-label" htmlFor="turma">Turma</label>
                            <select onChange={setTarefaSelecionada} className="form-control logon-tarefas-text" id="turma" defaultValue="default">
                                <option value="default">Escolha a turma</option>
                                <option value="Bercario">Berçario I & II</option>
                                <option value="Infantil2">Infantil II (2 anos)</option>
                                <option value="Infantil3">Infantil III (3 anos)</option>
                                <option value="Infantil4">Infantil IV (4 anos)</option>
                                <option value="Infantil5">Infantil V (5 anos)</option>
                                <option value="PrimeiroAno">Ensino Fundamental 1º ano (6 anos)</option>
                                <option value="SegundoAno">Ensino Fundamental 2º ano (7 anos)</option>
                                <option value="TerceiroAno">Ensino Fundamental 3º ano (8 anos)</option>
                                <option value="QuartoAno">Ensino Fundamental 4º ano (9 anos)</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="logon-tarefas-label" htmlFor="senha">Senha de acesso</label>
                            <input type="password" className="form-control logon-tarefas-text" id="senha"
                                placeholder="Senha de acesso" required />


                        </div>

                        <div className="alert alert-danger fade d-none show" role="alert" id="msgErro">
                            Senha incorreta. Tente novamente
                        </div>

                        <button type="submit" className="btn btn-primary btn-color" >Entrar</button>
                    </form>
                </div>



            </div>
        </section>

    )
};