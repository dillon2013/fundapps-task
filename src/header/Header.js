import React from 'react';

export default (props) => (
    <div>
        <div data-testid="news-title">News</div>

        <label htmlFor="sources-list">Filter By Source</label>
        <select name="sources" id="sources-list">
            {props.sources.map(source => <option value={source} key={source}>{ source }</option>)}
        </select>
    </div>
)