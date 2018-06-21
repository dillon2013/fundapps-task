import React from 'react';

export default ({title, sources}) => (
    <div>
        <div data-testid="news-title">{title}</div>

        <label htmlFor="sources-list">Filter By Source</label>
        <select name="sources" id="sources-list">
            {sources.map(source => <option value={source} key={source}>{ source }</option>)}
        </select>
    </div>
)