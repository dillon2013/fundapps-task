import React from 'react';

export default ({title, publishedAt, source}) => (
    <div>
        <p>{title}</p>
        <div>
            <span>{publishedAt}</span>
            <span>{source.name}</span>
        </div>
    </div>
)