import React from 'react';


import './mapa.css';

export default function Mapa() {
   return( <section className="mapa">
        <iframe title='Mapa Escola Jardim Getsemani' className='mapa-iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9133.108878883497!2d-47.77530470471479!3d-15.751178502374149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x976df827ef0ad58c!2sJardim%20Gets%C3%AAmani!5e0!3m2!1spt-BR!2sbr!4v1593881201996!5m2!1spt-BR!2sbr"  frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
    </section>
   );
}