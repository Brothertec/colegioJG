import React from 'react';




import './card-doacao.css';

export default function CardDoacao({ header, text }) {
    return (
        <div className="card h-100 card-doacao">

            <h2 className="card-title titulo-card-doacao">{header}</h2>
            <div className="card-body corpo-card">
                <p className="card-text texto-card-doacao"> {text} </p>
            </div>
        </div>

    )
};