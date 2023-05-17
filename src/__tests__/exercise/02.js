// simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react';
import Counter from '../../components/counter';
// eslint-disable-next-line no-unused-vars
import { fireEvent, render, screen } from '@testing-library/react';

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 swap createRoot and root.render with React Testing Library's render
  // Note that React Testing Library's render doesn't need you to pass a `div`
  // so you only need to pass one argument. render returns an object with a
  // bunch of utilities on it. For now, let's just grab `container` which is
  // the div that React Testing Library creates for us.
  const { container } = render(<Counter />);

  // screen.debug();

  // 🐨 instead of `div` here you'll want to use the `container` you get back
  // from React Testing Library
  const [decrement, increment] = container.querySelectorAll('button');
  const message = container.firstChild.querySelector('div');

  // expect(message.textContent).toBe('Current count: 0');
  // We can use jest-dom assertions so we can have better error messages.
  expect(message).toHaveTextContent('Current count: 0');

  // 🐨 replace the next two statements with `fireEvent.click(button)`
  // 💰 note that you can remove `act` completely!
  fireEvent.click(increment);
  // screen.debug();
  expect(message.textContent).toBe('Current count: 1');

  fireEvent.click(decrement);
  expect(message.textContent).toBe('Current count: 0');
});
