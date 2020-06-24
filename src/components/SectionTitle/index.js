import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './section-title.css';

export default function SectionTitle({ iconName, title }) {
    return (
        <h2 className="section-title">
            <span className="section-title-icon">
                <FontAwesomeIcon icon={iconName} />
            </span>
            <span className="section-title-texto">
                {title}
            </span>
        </h2>
    );
}