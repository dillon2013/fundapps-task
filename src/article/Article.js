import React from 'react';

export default ({title, date, source}) => (
    <div>
        <p>{title}</p>
        <div>
            <span>{date}</span>
            <span>{source}</span>
        </div>
    </div>
)