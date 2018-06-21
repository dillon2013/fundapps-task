import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, wait, fireEvent } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import axios from 'axios';
import MockAxios from 'axios-mock-adapter';
import App from './App';


const mock = new MockAxios(axios, { delayResponse: Math.random() * 500 });
afterAll(() => mock.restore());
afterEach(cleanup);

test('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('App fetches a articles and renders them in list', async () => {

    mock.onGet().replyOnce(200, {
        articles: [
            {
                title: 'The Title 1',
                publishedAt: '21/06/2018',
                source: {id: 1, name: 'CNN'}
            },
            {
                title: 'The Title 2',
                publishedAt: '22/06/2018',
                source: {id: 2, name: 'SKY NEWS'}
            },
            {
                title: 'The Title 3',
                publishedAt: '23/06/2018',
                source: {id: 3, name: 'BBC NEWS'}
            }
        ]
    });

    const {getByText} = render(<App />);

    await wait(() => expect(getByText('The Title 1')).toBeInTheDOM());
    expect(getByText('22/06/2018')).toBeInTheDOM();
    expect(getByText('BBC NEWS')).toBeInTheDOM();

});

test('App adds more articles to the list when "Show More" is clicked', async () => {
    mock.onGet()
        .replyOnce(200, {
          articles: [
              {
                  title: 'The Title 1',
                  publishedAt: '21/06/2018',
                  source: {id: 1, name: 'CNN'}
              },
              {
                  title: 'The Title 2',
                  publishedAt: '22/06/2018',
                  source: {id: 2, name: 'SKY NEWS'}
              }
          ]
        })
        .onGet()
        .replyOnce(200, {
            articles: [
                {
                    title: 'The Title 3',
                    publishedAt: '23/06/2018',
                    source: {id: 1, name: 'BBC NEWS'}
                },
                {
                    title: 'The Title 4',
                    publishedAt: '24/06/2018',
                    source: {id: 2, name: 'ITV NEWS'}
                }
            ]
        })
    ;

    const {queryByText, getByText} = render(<App />);
    expect(queryByText('The Title 3')).not.toBeInTheDOM();

    fireEvent(getByText('Show More'), new MouseEvent('click', {bubbles: true}));
    await wait(() => expect(queryByText("The Title 3")).toBeInTheDOM());

});

