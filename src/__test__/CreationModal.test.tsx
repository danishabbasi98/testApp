import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Container } from 'reactstrap';
import Counter from '../Dashboard';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render and update a counter', () => {
  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(<Counter />, container);
  });
  const button = container.querySelector('button');
  const { getByTestId, getByText, getByLabelText, getAllByTitle} = container
//   const label = container.querySelector('p');
//   expect(etByLabelText).toBe('You clicked 0 times');
  expect(container.textContent).toContain('School Manager Application');

});