import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './link-with-icon-footer.css';

export default function LinkWithIconFooter({ text, path }) {

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

    return (
        <Link className='link-text-footer' to={path} onClick={topFunction}> 
            <span >
                {text}
            </span>
            <span className='rotate link-icon-footer'>
                <FontAwesomeIcon icon={['far', 'arrow-alt-circle-right']} />
            </span>
        </Link>
    );
}