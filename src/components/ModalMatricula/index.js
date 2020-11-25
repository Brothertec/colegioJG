import React, {useEffect} from 'react';


export default function ModalMatricula() {

    useEffect(()=> {
            document.querySelector('#openModalMatricula').click();

    }, []);

    return (
        <div className='modalMatriculaContainer'>
            <button id='openModalMatricula' type="button" class="btn btn-primary d-none" data-toggle="modal" data-target="#modalMatricula">
                open modal
            </button>
            <div class="modal fade" id="modalMatricula" tabindex="-1" aria-labelledby="modalMatriculaLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalMatriculaLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            teste
                    </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}