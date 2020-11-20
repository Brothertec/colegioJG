import React from 'react';
import LogoBT from '../../image/logo-horizontal-fundo-claro--sem-slogan.png';



import './rodape.css';

export default function Copyright() {
    return (
        <div className="copyright">
            <div className="container">
                <div className="copyright-position">
                    
                        <div className="direitos">
                            <span >© 2020. Todos os direitos reservados.</span>
                        </div>
                    
                    
                        <div className="footer-logo">
                            <div className="desenvolve">
                                <span>Desenvolvido por</span>
                            </div>
                            <div className="iconebt">
                                <a href="http://www.brothertec.com.br">
                                    <img src={LogoBT} alt="logo" />
                                </a>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    )
};