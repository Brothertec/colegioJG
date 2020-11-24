import React from 'react';



import './tarefad.css';

export default function TarefaD({img, imgbtn}) {
    return (
        <div className="tamanho-tarefa">
            <div className="img-tarefa" style={{
                backgroundImage: `url(${img})`
            }}>

            </div>

            <div className="btn-tarefa-position" >
            <a href={imgbtn} download>
            <button type="button" class="btn btn-primary estilo-btn" >Baixar Tarefa </button>
            </a>
            </div>
                
    </div>
    )
};