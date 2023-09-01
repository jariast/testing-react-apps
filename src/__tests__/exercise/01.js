// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react';
import {act} from 'react-dom/test-utils';
import {createRoot} from 'react-dom/client';
import Counter from '../../components/counter';

// NOTE: this is a new requirement in React 18
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true;

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div');
  document.body.append(div);
  act(() => createRoot(div).render(<Counter />));

  const mouseClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  });

  // 🐨 get a reference to the increment and decrement buttons:
  const [decrementButton, incrementButton] = div.querySelectorAll('button');
  // 🐨 get a reference to the message div:
  const messageDiv = div.firstChild.querySelector('div');

  //
  // 🐨 expect the message.textContent toBe 'Current count: 0'
  expect(messageDiv.textContent).toBe('Current count: 0');
  // 🐨 click the increment button (💰 act(() => increment.click()))
  // act(() => incrementButton.click());
  act(() => incrementButton.dispatchEvent(mouseClickEvent));
  expect(messageDiv.textContent).toBe('Current count: 1');

  // act(() => decrementButton.click());
  act(() => decrementButton.dispatchEvent(mouseClickEvent));
  expect(messageDiv.textContent).toBe('Current count: 0');

  div.remove();
});

/* eslint no-unused-vars:0 */
