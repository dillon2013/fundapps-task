import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import Article from './Article';

test('Article should display information passed in from props', () => {
    const article = {
        title: 'The Title',
        date: '21/06/2018',
        source: 'CNN'
    };
    const { getByText } = render(<Article {...article} />);

    expect(getByText('The Title')).toBeInTheDOM();
    expect(getByText('21/06/2018')).toBeInTheDOM();
    expect(getByText('CNN')).toBeInTheDOM();
});