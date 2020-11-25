import React, { useEffect } from 'react';
import imgmatricula from '../../image/modalmatricula.jpg';

import './modalmatricula.css';

export default function ModalMatricula() {

    useEffect(() => {
        document.querySelector('#openModalMatricula').click();

    }, []);

    return (
        <div className='modalMatriculaContainer'>
            <button id='openModalMatricula' type="button" class="btn btn-primary d-none" data-toggle="modal" data-target="#modalMatricula">
                open modal
            </button>
            <div class="modal fade show fundo-modal-matricula" id="modalMatricula" tabindex="-1" aria-labelledby="modalMatriculaLabel" aria-hidden="true">
                
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content ">
                            <div class="modal-header">
                                <h5 class="modal-title texto-modal-matricula" id="modalMatriculaLabel" >Matrículas Abertas</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img className='img-fluid' src={imgmatricula} />
                            </div>
                            <div class="modal-footer posição-footer-modal-matricula">

                                <a type="button" class="btn btn-primary btn-modal-matricula" href="https://forms.gle/cxwK9LxmUSZWF2yy5">Pré Matrícula</a>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}