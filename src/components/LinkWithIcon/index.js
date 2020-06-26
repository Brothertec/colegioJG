import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './link-with-icon.css';

export default function LinkWithIcon({ text, path }) {
    return (
        <Link className='link-text' to={path}>
            <span >
                {text}
            </span>
            <span className='rotate link-icon'>
                <FontAwesomeIcon icon={['far', 'arrow-alt-circle-right']} />
            </span>
        </Link>
    );
}