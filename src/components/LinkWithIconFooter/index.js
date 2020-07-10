import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './link-with-icon-footer.css';

export default function LinkWithIconFooter({ text, path }) {
    return (
        <Link className='link-text-footer' to={path}>
            <span >
                {text}
            </span>
            <span className='rotate link-icon-footer'>
                <FontAwesomeIcon icon={['far', 'arrow-alt-circle-right']} />
            </span>
        </Link>
    );
}