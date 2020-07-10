import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './link-border.css';

export default function LinkBorder({ title, iconProps, children, lock }) {
    return (
        <div className='link-border'>
            <div className="link-border-titulo">
                <span className='link-border-titulo-text'>
                    {title}
                </span>
                <span className='link-border-icon-titulo'>
                    <FontAwesomeIcon icon={[iconProps[0], iconProps[1]]} />
                </span>
                <span className='link-border-icon-cadeado'>
                    <FontAwesomeIcon icon={['fas', 'lock']} />
                </span>
            </div>
            <div className="link-border-links">
                {children}
            </div>
        </div>
    );
}