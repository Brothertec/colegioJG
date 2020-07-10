import React from 'react';

import './card.css';

export default function Card({ backgroudImg, children }) {
    return (
        <div className="card-info-escola" style={{
            backgroundImage: `url(${backgroudImg})`,
        }}>
            <div className="card-info-escola-centered-text">
                {children}
            </div>
        </div>
    );
}