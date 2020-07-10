import React from 'react';

import SectionTitle from '../../SectionTitle';

import img1 from '../../../image/sectionAprendizado/Garota-p-min 1.png';
import img2 from '../../../image/sectionAprendizado/Sala-01-min 1.png';
import img3 from '../../../image/sectionAprendizado/Refeitorio-min 1.png';
import img4 from '../../../image/sectionAprendizado/Sala-de-jogos-min 1.png';
import img5 from '../../../image/sectionAprendizado/Parque-min 1.png';

import './aprendizado-aliado.css';

export default function AprendizadoAliado() {
    return (
        <section className="aprendizado-aliado">
            <div className="container">
                <SectionTitle title="Aprendizado Aliado à Diversão" />
                <div className='aprendizado-aliado-imgs-div'>
                    <img className='aprendizado-aliado-img img-fluid' src={img1} alt="" />
                    <img className='aprendizado-aliado-img img-fluid' src={img2} alt="" />
                    <img className='aprendizado-aliado-img img-fluid' src={img3} alt="" />
                    <img className='aprendizado-aliado-img img-fluid' src={img4} alt="" />
                    <img className='aprendizado-aliado-img img-fluid' src={img5} alt="" />
                </div>
            </div>
            <div className="leaf-image">   
            </div>
            <div className="green-separator">

            </div>
        </section>
    );
}