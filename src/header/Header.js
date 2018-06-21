import React from 'react';

export default ({title, sources, handleFilter}) => (
    <div>
        <div data-testid="news-title">{title}</div>

        <label htmlFor="sources-list">Filter By Source</label>
        <select name="sources" id="sources-list" onChange={handleFilter}>
            {sources.map(source => <option value={source} key={source}>{ source }</option>)}
        </select>
    </div>
)