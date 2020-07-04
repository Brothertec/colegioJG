import React from 'react';
import LogoBT from '../../image/logo-horizontal-fundo-claro--sem-slogan.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWatsappSquare, faFacebookSquare, faInstagramSquare} from '@fortawesome/free-solid-svg-icons';

import './footer.css';


export default function Footer() {
    return (
        <footer className="">
            <div className="superior">
                <div className="container">

<span>Sobre Nós</span>
<span>Musicalização</span>
<span>Tarefas</span>
<span>Doações</span>
<span>Quadra 01 Conjunto "N" Lotes 17/19 Itapuã 1</span>
<span>(61) 3488-1608</span>
<span>(61) 9 9155-7717</span>
<span>escolajardimgetsemani@hotmail.com</span>

<span><FontAwesomeIcon  icon={faWatsappSquare}/></span>
<span><FontAwesomeIcon  icon={faFacebookSquare}/></span>
<span><FontAwesomeIcon  icon={faInstagramSquare}/></span>


                </div>
            </div>
            <div className="rodape">
                <div className="container">
                    <span className="direitos">© 2020. Todos os direitos reservados.</span>
                    <span className="desenvolve">Desenvolvido por</span>
                    <a className="iconebt" href="">
                        <img src={LogoBT} alt="logo" />
                    </a>

                </div>
            </div>
        </footer>
    )

};