import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './icon-whith-text.css';

export default function IconWhithText({iconProps,text}) {
    return (
        <div>
            <span className="icon-whith-text-icone">
                <FontAwesomeIcon icon={iconProps} />
            </span>
            <span className="icon-whith-text-texto">{text}</span>
        </div>
    )
};

