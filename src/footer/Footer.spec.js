import React from 'react';
import { render } from 'react-testing-library';
import "dom-testing-library/extend-expect";
import Header from './Footer';

test('Footer component has a show more button', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Show More')).toBeInTheDOM();
});