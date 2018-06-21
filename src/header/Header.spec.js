import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import "dom-testing-library/extend-expect";
import Header from './Header';



test('Header component receives props and then renders text as title', () => {
    const title = 'News';
    const sources = ['red', 'blue', 'green'];
    const { getByTestId } = render(<Header title={title} sources={sources}/>);

    expect(getByTestId('news-title')).toHaveTextContent(title);
});

test('Header component receives props and then allows you to select from list of sources', () => {
    const title = 'News';
    const sources = ['red', 'blue', 'green'];
    const { getByLabelText } = render(<Header title={title} sources={sources} />);

    expect(getByLabelText('Filter By Source')).toHaveTextContent('red');
    expect(getByLabelText('Filter By Source')).toHaveTextContent('blue');
    expect(getByLabelText('Filter By Source')).toHaveTextContent('green');
});
