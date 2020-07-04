import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './section-title.css';

export default function SectionTitle({ iconProps, title }) {
    return (
        <h2 className="section-title">
            {iconProps &&
                <span className="section-title-icon">
                    <FontAwesomeIcon icon={iconProps[0], iconProps[1]} />
                </span>
            }
            <span className="section-title-texto">
                {title}
            </span>
        </h2>
    );
}